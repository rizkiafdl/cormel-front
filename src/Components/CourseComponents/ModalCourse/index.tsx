// CourseModal.tsx
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

function CourseModal() {
    const [open, setOpen] = useAtom(openAtom);
    const [selectedCourse] = useAtom(selectedCourseAtom);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedCourse?.name}</DialogHeader>
            <DialogBody divider>
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
                <Typography color="gray" className="mt-2 text-center">
                    More detailed information about {selectedCourse?.name} can go here.
                </Typography>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">
                    Close
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default CourseModal;
