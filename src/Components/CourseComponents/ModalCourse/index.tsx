import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
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
        navigate(`/course/${selectedCourse?.id}`, { state: { course: selectedCourse } });
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedCourse?.courseTitle}</DialogHeader>
            <DialogBody className="grid grid-cols-2 gap-4 items-start" divider>
                {/* Left section: Profile information */}
                <div className="flex flex-col items-center">
                    <Avatar
                        src={selectedCourse?.thumbnail}
                        alt={selectedCourse?.courseTitle}
                        variant="circular"
                        size="xxl"
                        className="mx-auto mb-6 object-top"
                    />
                    <Typography variant="h5" color="blue-gray" className="text-center">
                        <span>by </span>
                        {selectedCourse?.lecturer}
                    </Typography>
                </div>

                {/* Right section: Custom roadmap visualization */}
                <div>
                    <Typography variant="h6" color="blue-gray" className="mb-4 text-xl">
                        Course Roadmap
                    </Typography>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            {selectedCourse?.outline?.map((item, index) => (
                                <div key={index} className='flex text-left gap-4 justify-center'>
                                    <Typography variant='h5' color='gray'>
                                        {index + 1}.
                                    </Typography>
                                    <Typography variant="h6" color="gray">
                                        {item}
                                    </Typography>
                                </div>
                            ))}
                        </div>
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
