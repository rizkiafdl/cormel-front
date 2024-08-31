// TeamList.tsx
import { Typography } from "@material-tailwind/react";
import MentorCard from '@Components/MentorPage/MentorCard';
import MentorModal from '@Components/MentorPage/MentorModal';
import { MemberType } from '@/Jotai/atoms';

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

function TeamList() {
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
                        <MentorCard
                            key={key}
                            img={member.img}
                            name={member.name}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>

            <MentorModal />
        </section>
    );
}

export default TeamList;
