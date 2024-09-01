import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const courses = [
    {
        id: 1,
        title: "React Fundamentals",
        description: "Learn the basics of React.",
        progress: "75%",
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        description: "Deep dive into JavaScript.",
        progress: "60%",
    },
    {
        id: 3,
        title: "CSS for Developers",
        description: "Master CSS for modern web development.",
        progress: "90%",
    },
    {
        id: 4,
        title: "Node.js Basics",
        description: "Learn how to build server-side applications with Node.js.",
        progress: "40%",
    },
    // Add more courses as needed...
];

export function MyCourse() {
    const [courseIndex, setCourseIndex] = useState(0);

    const nextCourse = () => {
        if (courseIndex < courses.length - 1) {
            setCourseIndex(courseIndex + 1);
        }
    };

    const prevCourse = () => {
        if (courseIndex > 0) {
            setCourseIndex(courseIndex - 1);
        }
    };

    return (
        <div className="p-4 space-y-6">
            {/* Container 1: List of Courses */}
            <Card className="w-full border border-gray-300">
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-4">
                        Your Courses
                    </Typography>
                    <div className="relative flex items-center">
                        <IconButton
                            variant="text"
                            color="blue"
                            onClick={prevCourse}
                            disabled={courseIndex === 0}
                            className="absolute left-0"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </IconButton>
                        <div className="flex overflow-x-auto space-x-4 mx-8">
                            {courses.slice(courseIndex, courseIndex + 3).map((course) => (
                                <Card
                                    key={course.id}
                                    className="min-w-[200px] border border-gray-300"
                                >
                                    <CardBody>
                                        <Typography variant="h6" color="blue-gray">
                                            {course.title}
                                        </Typography>
                                        <Typography variant="small" className="text-gray-600">
                                            {course.description}
                                        </Typography>
                                        <Typography variant="small" className="mt-2">
                                            Progress: {course.progress}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                        <IconButton
                            variant="text"
                            color="blue"
                            onClick={nextCourse}
                            disabled={courseIndex === courses.length - 3}
                            className="absolute right-0"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </IconButton>
                    </div>
                </CardBody>
            </Card>

            {/* Container 2: User Statistics */}
            <Card className="w-full border border-gray-300">
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-4">
                        Your Statistics
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="p-4 text-center border border-gray-300">
                            <Typography variant="h4" color="blue">
                                12
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                Courses Enrolled
                            </Typography>
                        </Card>
                        <Card className="p-4 text-center border border-gray-300">
                            <Typography variant="h4" color="blue">
                                8
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                Courses Completed
                            </Typography>
                        </Card>
                        <Card className="p-4 text-center border border-gray-300">
                            <Typography variant="h4" color="blue">
                                20h
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                Total Hours Spent
                            </Typography>
                        </Card>
                    </div>
                </CardBody>
            </Card>

            {/* Container 3: Recent Activities */}
            <Card className="w-full border border-gray-300">
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-4">
                        Recent Activities
                    </Typography>
                    <div className="space-y-4 max-h-48 overflow-y-auto">
                        <Card className="p-4 border border-gray-300">
                            <Typography variant="small" color="blue-gray">
                                Completed "React Fundamentals"
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                2 days ago
                            </Typography>
                        </Card>
                        <Card className="p-4 border border-gray-300">
                            <Typography variant="small" color="blue-gray">
                                Started "Node.js Basics"
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                5 days ago
                            </Typography>
                        </Card>
                        <Card className="p-4 border border-gray-300">
                            <Typography variant="small" color="blue-gray">
                                Reviewed "Advanced JavaScript"
                            </Typography>
                            <Typography variant="small" className="text-gray-600">
                                1 week ago
                            </Typography>
                        </Card>
                        {/* Add more activities as needed... */}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default MyCourse;
