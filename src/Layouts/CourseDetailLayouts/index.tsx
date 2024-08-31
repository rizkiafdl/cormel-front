import React from "react";
import { SidebarDark } from "@Components/Sidebar";
// Adjust the import path as needed

interface CourseDetailLayoutsProps {
    children: React.ReactNode;
}
const CourseDetailLayouts = ({ children }: CourseDetailLayoutsProps) => {
    return (
        <section className="grid grid-cols-8 h-screen">
            {/* Sidebar */}
            <div className="col-span-2  h-full z-50">
                <SidebarDark />
            </div>

            {/* Main Content */}
            <div className="col-span-6 flex flex-col justify-center space-y-4 m-4  ">
                {children}
            </div>
        </section>
    );
}

export default CourseDetailLayouts