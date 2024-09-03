import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import CourseCard from '@Components/CourseComponents/CourseCard';
import CourseModal from '@Components/CourseComponents/ModalCourse';
import { coursesAtom } from '@/Jotai/atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { fetchCourses } from '@/Utils/fetchCourses';

interface CourseListProps {
    title?: string;
}

function CourseList({ title }: CourseListProps) {
    const [courses, setCourses] = useAtom(coursesAtom);

    useEffect(() => {
        fetchCourses()
            .then(setCourses)
            .catch((error) => console.error("Error fetching courses:", error));
    }, [setCourses]);

    return (
        <section className="py-4">
            <Card shadow={false} className="border border-gray-300">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="flex flex-wrap justify-between items-start gap-y-4 rounded-none p-4"
                >
                    <div>
                        <Typography color="blue-gray" variant="h1" className="!text-2xl mb-1">
                            {title}
                        </Typography>
                        <Typography color="blue-gray" className="!text-lg font-normal text-gray-600">
                            The most sought-after collections across the entire ecosystem.
                        </Typography>
                    </div>
                    <div className="flex shrink-0 gap-2">
                        <Button size="sm" variant="outlined" className="border-gray-300">Last 24h</Button>
                        <Button size="sm" variant="outlined" className="border-gray-300">Last week</Button>
                        <Button size="sm" variant="outlined">Last month</Button>
                    </div>
                </CardHeader>
                <CardBody className="overflow-x-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </CardBody>
                <CourseModal />
            </Card>
        </section>
    );
}

export default CourseList;
