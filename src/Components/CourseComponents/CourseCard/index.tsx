// Web3Card.tsx
import { Button, Avatar, Card, CardBody, Typography } from '@material-tailwind/react';
import { useSetAtom } from 'jotai';
import { CourseData, openAtom, selectedCourseAtom } from "@/Jotai/atoms";

function CourseCard({ name, desc, imgs, cardNum, profileImg }: CourseData) {
    const setOpen = useSetAtom(openAtom);
    const setSelectedCourse = useSetAtom(selectedCourseAtom);

    const handleOpen = () => {
        setSelectedCourse({ name, desc, imgs, cardNum, profileImg });
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
                        See collection
                    </Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {imgs.map((img, key) => (
                        <img key={key} src={img} className="h-full w-full object-cover rounded-xl" alt={name} />
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}

export default CourseCard;
