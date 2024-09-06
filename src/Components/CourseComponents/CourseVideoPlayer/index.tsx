// CourseVideoPlayer.tsx

import {
    Card,
    Typography,
    List,
    ListItem,
    Avatar,
    Button,
    Input,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    IconButton
} from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FlagIcon } from "@heroicons/react/24/solid";
import ReactPlayer from "react-player";
export function CourseVideoPlayer() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { selectedCourse } = state || {}; // Get the selected course from the passed state

    const [selectedVideo, setSelectedVideo] = useState("");

    useEffect(() => {
        // Set the first video as the selected video when the component mounts
        if (selectedCourse?.courseOutline?.length > 0) {
            setSelectedVideo(selectedCourse.courseOutline[0].videoLink);
        }
    }, [selectedCourse]);

    const [code, setCode] = useState("");
    const [feedback, setFeedback] = useState("");

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
                <ReactPlayer
                    url={selectedVideo}
                    width={"100%"} height={"700px"}
                    playing={true}
                    controls={false}
                    style={{ opacity: "70%" }}
                />
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
                                {selectedCourse?.courseOutline?.map((outline, index) => (
                                    <ListItem
                                        key={index}
                                        className={`flex items-center justify-between ${selectedVideo === outline.videoLink ? "bg-blue-100" : ""}`}
                                        onClick={() => setSelectedVideo(outline.videoLink)}
                                    >
                                        <div className="flex items-center">
                                            <Avatar variant="rounded" src={`thumbnail${index + 1}.jpg`} alt={`Video Thumbnail ${index + 1}`} className="mr-4" />
                                            <Typography>{outline.topic}</Typography>
                                        </div>
                                        {selectedVideo === outline.videoLink && (
                                            <IconButton variant="text" color="blue">
                                                <FlagIcon className="w-5 h-5" />
                                            </IconButton>
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                        </TabPanel>

                        {/* Try Your Code Tab */}
                        <TabPanel value="code">
                            <Typography variant="h5" className="mb-4">Try Your Code</Typography>
                            <Input
                                crossOrigin
                                label="Write your code here"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
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

export default CourseVideoPlayer;
