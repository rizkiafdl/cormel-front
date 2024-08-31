import { useState } from "react";
import {
    List,
    Avatar,
    ListItem,
    Accordion,
    Typography,
    AccordionBody,
    ListItemPrefix,
    IconButton,
} from "@material-tailwind/react";
import {
    Square2StackIcon,
    RectangleGroupIcon,
    ChatBubbleLeftEllipsisIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export function SidebarDark() {
    const [open, setOpen] = useState(0);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const LIST_ITEM_STYLES =
        "text-gray-500 hover:text-white focus:text-white active:text-white hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-20 text-sm md:text-base";

    return (
        <div className="relative h-full flex">
            {/* Sidebar */}
            <div
                className={`fixed sm:relative top-0 left-0 h-full ${isSidebarOpen ? "w-64" : "w-16"
                    } bg-gray-900 shadow-md z-30 transform transition-all duration-300 flex flex-col`}
            >
                <div className="flex items-center justify-between p-4">
                    <img
                        src="https://www.material-tailwind.com/logos/mt-logo.png"
                        alt="brand"
                        className={`h-8 w-8 md:h-9 md:w-9 transition-all duration-300 ${isSidebarOpen ? "inline" : "hidden"
                            }`}
                    />
                    <Typography
                        className={`text-sm md:text-lg font-bold text-gray-300 text-center md:text-left transition-all duration-300 ${isSidebarOpen ? "inline" : "hidden"
                            }`}
                    >
                        Welcome!
                    </Typography>
                    <IconButton
                        variant="text"
                        onClick={toggleSidebar}
                        className={`p-1 text-gray-400 ${isSidebarOpen ? "ml-4" : "m-0"
                            }`}
                    >
                        {isSidebarOpen ? (
                            <ChevronLeftIcon className="h-5 w-5" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5" />
                        )}
                    </IconButton>
                </div>
                <hr className="my-2 border-gray-800" />
                <List>
                    <Accordion open={open === 1}>
                        <ListItem
                            selected={open === 1}
                            onClick={() => handleOpen(1)}
                            className={`p-3 hover:bg-opacity-20 text-gray-500 select-none focus:bg-opacity-20 active:bg-opacity-20 data-[selected=true]:bg-gray-50/20 hover:text-white focus:text-white active:text-white data-[selected=true]:text-white`}
                        >
                            <ListItemPrefix>
                                <Avatar
                                    size="sm"
                                    src="https://www.material-tailwind.com/img/avatar1.jpg"
                                />
                            </ListItemPrefix>
                            {isSidebarOpen && (
                                <Typography className="mr-auto font-normal text-inherit truncate">
                                    Brooklyn Alice
                                </Typography>
                            )}
                            <ChevronDownIcon
                                strokeWidth={3}
                                className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                    } ${!isSidebarOpen && "hidden"}`}
                            />
                        </ListItem>
                        {isSidebarOpen && (
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem
                                        className={`px-16 ${LIST_ITEM_STYLES} truncate`}
                                    >
                                        My Profile
                                    </ListItem>
                                    <ListItem
                                        className={`px-16 ${LIST_ITEM_STYLES} truncate`}
                                    >
                                        Settings
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        )}
                    </Accordion>

                    <Accordion open={open === 2}>
                        <ListItem
                            selected={open === 2}
                            onClick={() => handleOpen(2)}
                            className="px-3 py-[9px] hover:bg-opacity-20 text-gray-500 select-none focus:bg-opacity-20 active:bg-opacity-20 data-[selected=true]:bg-gray-50/20 hover:text-white focus:text-white active:text-white data-[selected=true]:text-white"
                        >

                            <ListItemPrefix>
                                <RectangleGroupIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {isSidebarOpen && (
                                <Typography
                                    onClick={() => navigate("/dashboard/:user")}
                                    className="mr-auto font-normal text-inherit truncate"
                                >
                                    Dashboard
                                </Typography>
                            )}
                            <ChevronDownIcon
                                strokeWidth={3}
                                className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                    } ${!isSidebarOpen && "hidden"}`}
                            />
                        </ListItem>
                        {isSidebarOpen && (
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem
                                        className={`px-12 ${LIST_ITEM_STYLES} truncate`}
                                    >
                                        Analytics
                                    </ListItem>
                                    <ListItem
                                        className={`px-12 ${LIST_ITEM_STYLES} truncate`}
                                    >
                                        Sales
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        )}
                    </Accordion>
                    <ListItem
                        onClick={() => navigate("/mentor")}
                        className={LIST_ITEM_STYLES}
                    >
                        <ListItemPrefix>
                            <Square2StackIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {isSidebarOpen && "Mentoring"}
                    </ListItem>
                    <ListItem
                        onClick={() => navigate("/course")}
                        className={LIST_ITEM_STYLES}
                    >
                        <ListItemPrefix>
                            <Square2StackIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {isSidebarOpen && "Courses"}
                    </ListItem>
                    <ListItem
                        onClick={() => navigate("/relation")}
                        className={LIST_ITEM_STYLES}
                    >
                        <ListItemPrefix>
                            <Square2StackIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {isSidebarOpen && "Relation"}
                    </ListItem>
                </List>
                <hr className="my-2 border-gray-800" />
                <List>
                    <ListItem className={LIST_ITEM_STYLES}>
                        <ListItemPrefix>
                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {isSidebarOpen && "Help & Support"}
                    </ListItem>
                    <ListItem className={LIST_ITEM_STYLES}>
                        {isSidebarOpen && "Sign Out"}
                    </ListItem>
                </List>
            </div>

            {/* Overlay for Sidebar on Mobile */}
            {isSidebarOpen && (
                <div
                    className="
                    fixed inset-0 bg-black opacity-50 z-20 sm:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}

export default SidebarDark;
