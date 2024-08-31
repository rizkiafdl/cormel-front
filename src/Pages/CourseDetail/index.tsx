import { CourseVideoPlayer } from "@/Components/CourseComponents/CourseVideoPlayer"
import CourseDetailLayouts from "@/Layouts/CourseDetailLayouts"

const CourseDetail = () => {
    return (
        <div>
            <CourseDetailLayouts>
                <CourseVideoPlayer />
            </CourseDetailLayouts>
        </div>
    )
}

export default CourseDetail