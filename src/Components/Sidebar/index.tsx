import { useState } from "react";
import {
    List,
    Card,
    Avatar,
    ListItem,
    Accordion,
    Typography,
    AccordionBody,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    Square2StackIcon,
    RectangleGroupIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


export function SidebarDark() {
    const [open, setOpen] = useState(0);
    const navigate = useNavigate()
    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const LIST_ITEM_STYLES =
        "text-gray-500 hover:text-white focus:text-white active:text-white hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-20 md:text-sm ";

    return (
        <Card
            color="gray"
            className="h-full w-full rounded-sm p-6 shadow-md"
        >
            <div className="mb-2 flex flex-col md:flex-row items-center gap-4 p-4">
                <img
                    src="https://www.material-tailwind.com/logos/mt-logo.png"
                    alt="brand"
                    className="h-9 w-9"
                />
                <Typography className="text-sm md:text-lg font-bold text-gray-300">
                    Welcome To Cormel!
                </Typography>
            </div>
            <hr className="my-2 border-gray-800" />
            <List>
                <Accordion open={open === 1}>
                    <ListItem
                        selected={open === 1}
                        data-selected={open === 1}
                        onClick={() => handleOpen(1)}
                        className="p-3 hover:bg-opacity-20 text-gray-500 select-none focus:bg-opacity-20 active:bg-opacity-20 data-[selected=true]:bg-gray-50/20 hover:text-white focus:text-white active:text-white data-[selected=true]:text-white"
                    >
                        <ListItemPrefix>
                            <Avatar
                                size="sm"
                                src="https://www.material-tailwind.com/img/avatar1.jpg"
                            />
                        </ListItemPrefix>
                        <Typography className="mr-auto font-normal text-inherit">
                            Brooklyn Alice
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={3}
                            className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                My Profile
                            </ListItem>
                            <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                Settings
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-gray-800" />
                <Accordion open={open === 2}>
                    <ListItem
                        selected={open === 2}
                        data-selected={open === 2}
                        onClick={() => handleOpen(2)}
                        className="px-3 py-[9px] hover:bg-opacity-20 text-gray-500 select-none focus:bg-opacity-20 active:bg-opacity-20 data-[selected=true]:bg-gray-50/20 hover:text-white focus:text-white active:text-white data-[selected=true]:text-white"
                    >
                        <ListItemPrefix>
                            <RectangleGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography
                            onClick={() => navigate("/dashboard/:user")}
                            className={`mr-auto  font-normal text-inherit`}>
                            Dashboard
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={3}
                            className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                Analytics
                            </ListItem>
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                Sales
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem
                    onClick={() => navigate("/mentor")}
                    className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <Square2StackIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Mentoring
                </ListItem>
                <ListItem
                    onClick={() => navigate("/course")}
                    className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <Square2StackIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Courses
                </ListItem>
                <ListItem
                    onClick={() => navigate("/relation")}
                    className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <Square2StackIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Relation
                </ListItem>
            </List>
            <hr className="my-2 border-gray-800" />
            <List>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Help & Support
                </ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                    Sign Out
                </ListItem>
            </List>
        </Card>
    );
}

export default SidebarDark;

