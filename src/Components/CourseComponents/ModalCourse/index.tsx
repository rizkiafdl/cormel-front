// CourseModal.tsx

import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    Typography,
} from '@material-tailwind/react';
import { useAtom } from 'jotai';
import { openAtom, selectedCourseAtom } from '@/Jotai/atoms';
import { useNavigate } from 'react-router-dom';

function CourseModal() {
    const [open, setOpen] = useAtom(openAtom);
    const [selectedCourse] = useAtom(selectedCourseAtom);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleGoToCourse = () => {
        if (selectedCourse?.slug) {
            navigate(`/course/${selectedCourse.slug}`, { state: { selectedCourse } });
        }
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedCourse?.name}</DialogHeader>
            <DialogBody className="flex justify-start" divider>
                <div className='m-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-4 text-xl">
                        Course Roadmap
                    </Typography>
                    <div className="space-y-4">
                        {selectedCourse?.courseOutline?.map((course, key) => (
                            <div key={key} className='flex gap-2'>
                                <p>{key + 1}.</p>
                                <Typography variant="h6" color="gray">
                                    {course.topic}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="black" onClick={handleGoToCourse} className="mr-1">
                    Go To Course
                </Button>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">
                    Close
                </Button>
            </DialogFooter>

        </Dialog>
    );
}

export default CourseModal;
