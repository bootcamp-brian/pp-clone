import { Button, Container, LinearProgress, Typography } from "@mui/material";
import { getAvailablePuppies } from "../utils/API";
import { useNavigate } from "react-router-dom";
import landingImage from "./images/landing-image.png"
import { useEffect, useState } from "react";

const Landing = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        navigate("/home");
    }

    useEffect(() => {
        const retrievePuppies = async () => {
            await getAvailablePuppies();
            setLoading(false);
        }
        retrievePuppies();
    }, []);

    return (
        <>
            <div className="landing">
                <img className="landingImage" src={landingImage} alt="" />
                {
                    loading ?
                        <Container sx={{ }}>
                            <Typography variant="h4" component="h2" align="center" sx={{ color: "#eff0eb" }}>
                                Retrieving Puppies...
                            </Typography>
                            <LinearProgress color="inherit" sx={{ width: "50%", ml: "25%", mt: 1 }}/>
                        </Container>
                    :
                    <Button
                        variant="contained"
                        size="large"
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
                }
            </div>
        </>
    )
}

export default Landing;