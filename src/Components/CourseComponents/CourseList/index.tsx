import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import CourseCard from '@Components/CourseComponents/CourseCard';
import CourseModal from '@Components/CourseComponents/ModalCourse';
import { CourseData } from '@/Jotai/atoms';

const data: CourseData[] = [
    {
        cardNum: "#1",
        profileImg: "https://www.material-tailwind.com/img/avatar1.jpg",
        name: "FRONT END",
        desc: "Beginer",
        imgs: [
            "/image/web3-card-1.svg",
            "/image/web3-card-2.svg",
            "/image/web3-card-3.svg",
        ],
    },
    {
        cardNum: "#2",
        profileImg: "https://www.material-tailwind.com/image/avatar2.jpg",
        name: "Linde Michael",
        desc: "Creator",
        imgs: [
            "/image/web3-card-5-mini.svg",
            "/image/web3-card-6-mini.svg",
            "/image/web3-card-7-mini.svg",
        ],
    },
    {
        cardNum: "#3",
        profileImg: "https://www.material-tailwind.com/image/avatar7.svg",
        name: "Misha Stam",
        desc: "Creator",
        imgs: [
            "/image/web3-card-4.svg",
            "/image/web3-card-4.svg",
            "/image/web3-card-4.svg",
        ],
    },
];

interface CourseListProps {
    title?: string; // Added prop for dynamic title
}

function CourseList({ title }: CourseListProps) {
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
                            {title} {/* Dynamic title */}
                        </Typography>
                        <Typography color="blue-gray" className="!text-lg font-normal text-gray-600">
                            The most sought-after collections across the entire ecosystem.
                        </Typography>
                    </div>
                    <div className="flex shrink-0 gap-2">
                        <Button size="sm" variant="outlined" className="border-gray-300">
                            Last 24h
                        </Button>
                        <Button size="sm" variant="outlined" className="border-gray-300">
                            Last week
                        </Button>
                        <Button size="sm" variant="outlined">
                            Last month
                        </Button>
                    </div>
                </CardHeader>
                <CardBody className="overflow-x-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {data.map((props, key) => (
                            <CourseCard key={key} {...props} />
                        ))}
                    </div>
                </CardBody>
                <CourseModal />
            </Card>
        </section>
    );
}

export default CourseList;
