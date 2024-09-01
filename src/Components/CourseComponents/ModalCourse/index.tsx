import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    Button,
    Typography,
    IconButton
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

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedCourse?.name}</DialogHeader>
            <DialogBody className="grid grid-cols-2 gap-4 items-start" divider>
                {/* Left section: Profile information */}
                <div className="flex flex-col translate-y-[45%] items-center ">
                    <Avatar
                        src={selectedCourse?.profileImg}
                        alt={selectedCourse?.name}
                        variant="circular"
                        size="xxl"
                        className="mx-auto mb-6 object-top"
                    />
                    <Typography variant="h5" color="blue-gray" className="text-center">
                        {selectedCourse?.name}
                    </Typography>
                </div>

                {/* Right section: Custom roadmap visualization */}
                <div>
                    <Typography variant="h6" color="blue-gray" className="mb-4 text-xl">
                        Course Roadmap
                    </Typography>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <p>Icon3</p>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Introduction
                                </Typography>
                                <Typography color="gray">
                                    Overview of the course content and structure.
                                </Typography>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <p>Icon1</p>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Core Modules
                                </Typography>
                                <Typography color="gray">
                                    In-depth modules covering key topics.
                                </Typography>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <p>Icon2</p>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Final Project
                                </Typography>
                                <Typography color="gray">
                                    A comprehensive project that applies all the knowledge gained.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="black" onClick={() => navigate("/course/:detail")} className="mr-1">
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
