// MentorCard.tsx
import { Avatar, Button, Card, CardBody, IconButton, Typography } from "@material-tailwind/react";
import { MemberType, openAtom, selectedMemberAtom } from "@/Jotai/atoms";
import { useSetAtom } from 'jotai';

function MentorCard({ img, name, title }: MemberType) {
    const setOpen = useSetAtom(openAtom);
    const setSelectedMember = useSetAtom(selectedMemberAtom);

    const handleOpen = () => {
        setSelectedMember({ img, name, title });
        setOpen(true);
    };

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
                <Button size="sm" color="blue" onClick={handleOpen}>
                    See Details
                </Button>
            </CardBody>
        </Card>
    );
}

export default MentorCard;
