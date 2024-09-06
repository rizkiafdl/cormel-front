// Web3Card.tsx
import { Button, Avatar, Card, CardBody, Typography, Chip } from '@material-tailwind/react';
import { useSetAtom } from 'jotai';
import { CourseData, openAtom, selectedCourseAtom } from "@/Jotai/atoms";

function CourseCard({ name, desc, imgs, cardNum, profileImg, courseOutline, slug }: CourseData) {
    const setOpen = useSetAtom(openAtom);
    const setSelectedCourse = useSetAtom(selectedCourseAtom);

    const handleOpen = () => {
        setSelectedCourse({ name, desc, imgs, cardNum, profileImg, courseOutline, slug });
        setOpen(true);
    };

    return (
        <Card className="border border-gray-300 overflow-hidden shadow-sm">
            <CardBody className="p-4">
                <Typography color="blue-gray" className="!text-base !font-semibold mb-1">
                    {cardNum}
                </Typography>
                <div className="my-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar src={profileImg} alt={name} />
                        <div>
                            <Typography color="blue-gray" variant="h6">
                                {name}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-medium">
                                {desc}
                            </Typography>
                        </div>
                    </div>
                    <Button size="sm" variant="outlined" className="border-gray-300" onClick={handleOpen}>
                        Course Detail
                    </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Chip value={"Beginner"} variant="outlined" size={"sm"} className='text-center' />
                    <Chip value={"NPM"} variant="outlined" size={"sm"} className='text-center' />
                    <Chip value={"React.js"} variant="outlined" size={"sm"} className='text-center' />
                </div>
            </CardBody >
        </Card>
    );
}

export default CourseCard;
