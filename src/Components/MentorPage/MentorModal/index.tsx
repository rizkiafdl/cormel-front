// MentorModal.tsx
import { Dialog, DialogHeader, DialogBody, DialogFooter, Avatar, Button, Typography } from "@material-tailwind/react";
import { useAtom } from 'jotai';
import { openAtom, selectedMemberAtom } from "@/Jotai/atoms";

function MentorModal() {
    const [open, setOpen] = useAtom(openAtom);
    const [selectedMember] = useAtom(selectedMemberAtom);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedMember?.name}</DialogHeader>
            <DialogBody divider>
                <Avatar
                    src={selectedMember?.img}
                    alt={selectedMember?.name}
                    variant="circular"
                    size="xxl"
                    className="mx-auto mb-6 object-top"
                />
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-center"
                >
                    {selectedMember?.title}
                </Typography>
                <Typography
                    color="gray"
                    className="mt-2 text-center"
                >
                    More detailed information about {selectedMember?.name} can go here.
                </Typography>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleClose}
                    className="mr-1"
                >
                    Close
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default MentorModal;
