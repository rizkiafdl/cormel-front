import LoginCard from "@/Components/LoginComponents/LoginCard"
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div className=" flex-col justify-center p-12">
            <Button
                onClick={() => navigate("/")}
                className="flex-grow-0"

            >Back</Button>
            <LoginCard />
        </div>
    )
}

export default LoginPage