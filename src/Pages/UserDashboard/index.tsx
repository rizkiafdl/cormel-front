import MyCourse from "@Components/UserDashboardComponents/MyCourse"
import MainDashboard from "@Layouts/MainDashboard"



const UserDashboard = () => {
    return (
        <MainDashboard>
            <MyCourse />
            <MyCourse />
            <MyCourse />
        </MainDashboard>
    )
}

export default UserDashboard