import CourseList from "../../Components/CourseComponents/CourseList"
import MainDashboard from "../../Layouts/MainDashboard"

const CoursePage = () => {
    return (
        <div>
            <MainDashboard>
                <CourseList />
                <CourseList />
                <CourseList />
            </MainDashboard>
        </div>
    )
}

export default CoursePage