import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface projectformdata {
    firstName: string;
    lastName: string;
    email: string;
    project: string;
    cv: File | null;
}
function ProjectForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state; // Access the project data passed from ListProject
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cv,] = useState(null);

    const handleSubmit = (e: projectformdata) => {

        // Handle form submission logic here (e.g., send data to server)
        console.log({
            e
        });
        navigate("/"); // Redirect after submission, if necessary
    };

    return (
        <section className="p-4">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader color="blue" className="text-center">
                    <Typography variant="h5" color="white">
                        Submit Your Information
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); handleSubmit({ firstName, lastName, email, project: project.digitalAsset, cv }); }} className="space-y-4">
                        <Input
                            label="First Name"
                            size="lg"
                            value={firstName}
                            crossOrigin
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <Input
                            label="Last Name"
                            size="lg"
                            value={lastName}
                            crossOrigin
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <Input
                            label="Email"
                            size="lg"
                            type="email"
                            value={email}
                            crossOrigin
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Project"
                            size="lg"
                            value={project.detail}
                            disabled
                            crossOrigin
                        />
                        <Input
                            label="Upload CV"
                            size="lg"
                            type="file"
                            crossOrigin
                            // onChange={(e) => setCv(e.target.files[0])}
                            required
                        />
                        <Button type="submit" variant="gradient" color="blue" fullWidth>
                            Submit
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </section>
    );
}

export default ProjectForm;
