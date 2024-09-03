import { Button, Avatar, Card, CardBody, Typography } from '@material-tailwind/react';
import { useSetAtom } from 'jotai';
import { CourseData, openAtom, selectedCourseAtom } from "@/Jotai/atoms";

function CourseCard({ id, courseTitle, lecturer, tag, outline, thumbnail, linkVideo }: CourseData) {
    const setOpen = useSetAtom(openAtom);
    const setSelectedCourse = useSetAtom(selectedCourseAtom);

    const handleOpen = () => {
        setSelectedCourse({ id, courseTitle, lecturer, tag, outline, thumbnail, linkVideo });
        setOpen(true);
    };

    return (
        <Card className="border border-gray-300 overflow-hidden shadow-sm">
            <CardBody className="p-4">
                <div className='flex-row gap-4 p-2 items-centers justify-center'>
                    <Typography color="blue-gray" className="!text-base !font-semibold mb-1">
                        {id}
                    </Typography>
                    <div className="my-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar
                                src={thumbnail || "/path-to-placeholder-image.jpg"}
                                alt={courseTitle}
                                size="lg"
                                className="rounded-lg"
                            />
                            <div>
                                <Typography className="inline-block" color="blue-gray" variant="h6">
                                    {courseTitle}
                                </Typography>
                                <span className="font-sm justify-center">
                                    {lecturer}
                                </span>
                            </div>
                        </div>
                        <Button size="sm" variant="outlined" className="border-gray-300" onClick={handleOpen}>
                            See Course
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    {tag.map((tagItem, index) => (
                        <div key={index} className='bg-black rounded-md p-2 text-center'>
                            <Typography variant="small" color="white">
                                {tagItem}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}

export default CourseCard;
