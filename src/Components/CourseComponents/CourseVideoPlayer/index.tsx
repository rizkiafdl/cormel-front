import { Card, Typography, List, ListItem, Avatar, Button, Input, Tabs, TabsHeader, TabsBody, Tab, TabPanel, IconButton } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FlagIcon } from "@heroicons/react/24/solid";

export function CourseVideoPlayer() {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state?.course; // Access the course data from state
    const [selectedVideo, setSelectedVideo] = useState(course?.linkVideo?.Video?.video1 || ""); // Initialize with the first video

    const handleRunCode = () => {
        // Handle code execution
    };

    return (
        <div className="space-y-4 p-4 md:p-8 lg:p-12">
            <Button onClick={() => navigate("/course")} className="grow-0">Back</Button>

            <Card className="w-full h-64 sm:h-80 md:h-96 lg:h-[30rem]">
                <video className="w-full h-full" controls src={selectedVideo || "default-video.mp4"}>
                    Your browser does not support the video tag.
                </video>
            </Card>

            <Card className="w-full p-4">
                <Tabs value="content">
                    <TabsHeader className="bg-blue-gray-50 rounded-t-md">
                        <Tab value="content">Course Contents</Tab>
                        <Tab value="code">Try Your Code</Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="content" className="h-64 overflow-y-auto">
                            <Typography variant="h5" className="mb-4">Course Contents</Typography>
                            <List>
                                {course?.outline?.map((outlineItem, index) => (
                                    <ListItem
                                        key={index}
                                        className={`flex items-center justify-between ${selectedVideo === course?.linkVideo?.Video[`video${index + 1}`] ? "bg-blue-100" : ""}`}
                                        onClick={() => setSelectedVideo(course?.linkVideo?.Video[`video${index + 1}`])}
                                    >
                                        <div className="flex items-center">
                                            <Avatar variant="rounded" src={course?.thumbnail?.url || "/path-to-placeholder-image.jpg"} alt={`Video Thumbnail ${index + 1}`} className="mr-4" />
                                            <Typography>{outlineItem}</Typography>
                                        </div>
                                        {selectedVideo === course?.linkVideo?.Video[`video${index + 1}`] && (
                                            <IconButton variant="text" color="blue">
                                                <FlagIcon className="w-5 h-5" />
                                            </IconButton>
                                        )}
                                    </ListItem>
                                ))} 
                            </List>
                        </TabPanel>

                        <TabPanel value="code">
                            <Typography variant="h5" className="mb-4">Try Your Code</Typography>
                            <Input
                                label="Write your code here"
                                value={selectedVideo}
                                onChange={(e) => setSelectedVideo(e.target.value)}
                            />
                            <Button onClick={handleRunCode} className="mt-4">Get Feedback</Button>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </Card>
        </div>
    );
}
