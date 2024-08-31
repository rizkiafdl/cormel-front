import { Card, Typography, List, ListItem, Avatar } from "@material-tailwind/react";

export function CourseVideoPlayer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Video Section */}
            <div className="col-span-2">
                <Card className="w-full h-96">
                    <video
                        className="w-full h-full"
                        controls
                        src="your-video-source.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </Card>
            </div>

            {/* Thumbnails Section */}
            <div className="col-span-1">
                <Card className="w-full p-4">
                    <Typography variant="h5" className="mb-4">
                        Course Content
                    </Typography>
                    <List>
                        <ListItem>
                            <Avatar
                                variant="rounded"
                                src="thumbnail1.jpg"
                                alt="Video Thumbnail 1"
                                className="mr-4"
                            />
                            <Typography >Video Title 1</Typography>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                variant="rounded"
                                src="thumbnail2.jpg"
                                alt="Video Thumbnail 2"
                                className="mr-4"
                            />
                            <Typography >Video Title 2</Typography>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                variant="rounded"
                                src="thumbnail3.jpg"
                                alt="Video Thumbnail 3"
                                className="mr-4"
                            />
                            <Typography >Video Title 3</Typography>
                        </ListItem>
                        {/* Add more ListItem components for more videos */}
                    </List>
                </Card>
            </div>
        </div>
    );
}
