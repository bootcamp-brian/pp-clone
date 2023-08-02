import { Button } from "@mui/material";
import { getAvailablePuppies } from "../utils/API";
import { useNavigate } from "react-router-dom";
import landingImage from "./images/landing-image.png"

const Landing = () => {
    const navigate = useNavigate();
    // const spinUp = async () => {
    //     getAvailablePuppies();
    // }
    const handleClick = () => {
        navigate("/home");
    }
    getAvailablePuppies();

    return (
        <>
            <div className="landing">
                <img className="landingImage" src={landingImage} alt="" />
                <Button
                    variant="contained"
                    size="medium"
                    onClick={handleClick}
                    sx={{
                        mr: 1,
                        background: 'green',
                        ":hover": {
                            bgcolor: "#106B21",
                            color: "white" },
                        "&.Mui-disabled": {
                            background: "gray",
                            color: "white",
                            opacity: 0.8
                        }
                    }}
                >
                    Browse Puppies
                </Button>
            </div>
        </>
    )
}

export default Landing;