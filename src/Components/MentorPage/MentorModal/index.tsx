import { Dialog, DialogHeader, DialogBody, DialogFooter, Avatar, Button, Typography, IconButton, Chip } from "@material-tailwind/react";
import { useAtom } from 'jotai';
import { openAtom, selectedMemberAtom } from "@/Jotai/atoms";
// Assuming you have a WhatsApp icon from heroicons or any other source

function MentorModal() {
    const [open, setOpen] = useAtom(openAtom);
    const [selectedMember] = useAtom(selectedMemberAtom);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogHeader>{selectedMember?.name}</DialogHeader>
            <DialogBody divider className="grid grid-cols-2 gap-4 items-start">
                {/* Left section with profile image and title */}
                <div className="flex flex-col items-center">
                    <Avatar
                        src={selectedMember?.img}
                        alt={selectedMember?.name}
                        variant="circular"
                        size="xxl"
                        className="mb-4"
                    />
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="text-center"
                    >
                        {selectedMember?.title}
                    </Typography>
                    <div className="flex gap-4">
                        <Chip variant="filled" color="green" value="Front End" className="mt-4" />
                        <Chip variant="filled" color="green" value="SoftSkill" className="mt-4" />
                        <Chip variant="filled" color="green" value="BackEnd" className="mt-4" />
                    </div>

                </div>

                {/* Right section with detailed info and WhatsApp icon */}
                <div className="flex flex-col">
                    <Typography
                        color="gray"
                        className="text-left"
                    >
                        More detailed information about {selectedMember?.name} can go here. You can add any specific details, background, or description.
                    </Typography>

                    <div className="flex items-center mt-4">
                        <IconButton color="green" className="mr-2">
                            <p>WA</p>
                        </IconButton>
                        <Typography variant="small" color="blue-gray">
                            Chat on WhatsApp
                        </Typography>
                    </div>
                </div>
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
