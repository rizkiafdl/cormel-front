import CourseList from "@Components/CourseComponents/CourseList"
import MainDashboard from "@/Layouts/MainDashboardLayouts"

const CoursePage = () => {
    return (
        <div>
            <MainDashboard>
                <CourseList title="Top Courses" />
                <CourseList title="Recomended For You" />
                <CourseList title="Dive Deep Into Other Area" />
            </MainDashboard>
        </div>
    )
}

export default CoursePage