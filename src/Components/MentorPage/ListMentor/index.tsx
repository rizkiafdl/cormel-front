import { useState } from "react";
import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

interface TeamCardPropsType {
    img: string;
    name: string;
    title: string;
    onClick: () => void;
}

function TeamCard({ img, name, title, onClick }: TeamCardPropsType) {
    return (
        <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
            <CardBody className="text-center">
                <Avatar
                    src={img}
                    alt={name}
                    variant="circular"
                    size="xxl"
                    className="mx-auto mb-6 object-top"
                />
                <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
                    {name}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-2 !text-base !font-semibold text-gray-600"
                >
                    {title}
                </Typography>
                <div className="flex items-center justify-center gap-1.5 mb-4">
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-twitter text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-linkedin text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-dribbble text-lg" />
                    </IconButton>
                </div>
                <Button size="sm" color="blue" onClick={onClick}>
                    See Details
                </Button>
            </CardBody>
        </Card>
    );
}

interface MemberType {
    img: string;
    name: string;
    title: string;
}

const members: MemberType[] = [
    {
        img: `https://www.material-tailwind.com/img/avatar1.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar2.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar5.jpg`,
        name: "Nora Hazel",
        title: "UI/UX Designer",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar4.jpg`,
        name: "Otto Gonzalez",
        title: "Marketing Specialist",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar6.jpg`,
        name: "Emma Roberts",
        title: "UI Designer",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar3.jpg`,
        name: "William Pearce",
        title: "Web Developer",
    },
    {
        img: "https://www.material-tailwind.com/image/avatar7.svg",
        name: "Bruce Mars",
        title: "UI/UX Designer",
    },
    {
        img: "https://www.material-tailwind.com/image/avatar8.svg",
        name: "Annie Sprrat",
        title: "Marketing Specialist",
    },
];

export function ListMentor() {
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<MemberType | null>(null);

    const handleOpen = (member: MemberType) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    return (
        <section className="min-h-screen py-8 px-8 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-16 text-center lg:mb-28">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-lg"
                    >
                        Meet the Team
                    </Typography>
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="my-2 !text-2xl lg:!text-4xl"
                    >
                        Behind the Success: Our Dedicated Team
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full !text-gray-500 max-w-4xl"
                    >
                        From visionary leadership to creative talent, and technical wizards,
                        each team member plays a pivotal role in delivering the exceptional
                        service and innovative solutions.
                    </Typography>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {members.map((member, key) => (
                        <TeamCard
                            key={key}
                            img={member.img}
                            name={member.name}
                            title={member.title}
                            onClick={() => handleOpen(member)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
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
        </section>
    );
}

export default ListMentor;
