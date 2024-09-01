import { Card, Typography, List, ListItem, Avatar, Button, Input, Tabs, TabsHeader, TabsBody, Tab, TabPanel, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FlagIcon } from "@heroicons/react/24/solid"; // Example using Heroicons

export function CourseVideoPlayer() {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [feedback, setFeedback] = useState("");
    const [selectedVideo, setSelectedVideo] = useState("Video Title 1"); // Track the selected video

    const handleRunCode = () => {
        // Simulate code feedback
        setFeedback("Your code looks great! No errors found.");
    };

    return (
        <div className="space-y-4 p-4 md:p-8 lg:p-12">
            {/* Back Button */}
            <Button onClick={() => navigate("/course")} className="grow-0">Back</Button>

            {/* Video Section */}
            <Card className="w-full h-64 sm:h-80 md:h-96 lg:h-[30rem]">
                <video
                    className="w-full h-full"
                    controls
                    src="your-video-source.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </Card>

            {/* Tabs Section: Course Contents & Try Your Code */}
            <Card className="w-full p-4">
                <Tabs value="content">
                    <TabsHeader className="bg-blue-gray-50 rounded-t-md">
                        <Tab value="content">Course Contents</Tab>
                        <Tab value="code">Try Your Code</Tab>
                    </TabsHeader>
                    <TabsBody>
                        {/* Course Contents Tab */}
                        <TabPanel value="content" className="h-64 overflow-y-auto">
                            <Typography variant="h5" className="mb-4">Course Contents</Typography>
                            <List>
                                {["Video Title 1", "Video Title 2", "Video Title 3"].map((title, index) => (
                                    <ListItem
                                        key={index}
                                        className={`flex items-center justify-between ${selectedVideo === title ? "bg-blue-100" : ""}`}
                                        onClick={() => setSelectedVideo(title)}
                                    >
                                        <div className="flex items-center">
                                            <Avatar variant="rounded" src={`thumbnail${index + 1}.jpg`} alt={`Video Thumbnail ${index + 1}`} className="mr-4" />
                                            <Typography>{title}</Typography>
                                        </div>
                                        {selectedVideo === title && (
                                            <IconButton variant="text" color="blue">
                                                <FlagIcon className="w-5 h-5" />
                                            </IconButton>
                                        )}
                                    </ListItem>
                                ))}
                                {/* Add more ListItem components for more videos */}
                            </List>
                        </TabPanel>

                        {/* Try Your Code Tab */}
                        <TabPanel value="code">
                            <Typography variant="h5" className="mb-4">Try Your Code</Typography>
                            <Input
                                label="Write your code here"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                crossOrigin
                            />
                            <Button onClick={handleRunCode} className="mt-4">Get Feedback</Button>
                            {feedback && (
                                <Card className="p-4 mt-4 bg-blue-gray-50">
                                    <Typography variant="h6">Feedback</Typography>
                                    <Typography>{feedback}</Typography>
                                </Card>
                            )}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </Card>
        </div>
    );
}
