import React from "react";
import { SidebarDark } from "@Components/Sidebar";
// Adjust the import path as needed

interface MainDashboardProps {
    children: React.ReactNode;
}

export function MainDashboard({ children }: MainDashboardProps) {
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

export default MainDashboard;
