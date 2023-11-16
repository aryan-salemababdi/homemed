import Link from "next/link";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import "./Information.css";

const Information = () => {
    const mystyle = {
        backgroundImage: `url(images/information.jpg)`,
        margin: "55px 0px",
        height: "50vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        opacity: 1,
    };

    return (
        <Box>
            <Typography
                textAlign="center"
                color="#3AA76D"
                fontWeight="bold"
                variant="h6"
            >
                راه های ارتباطی
            </Typography>
            <Typography
                textAlign="center"
                color="#000"
                fontWeight="bold"
                variant="h4"
            >
                <span style={{ color: "#3AA76D", fontSize: "70px" }}>02</span> برای بهبود سلامتی خود با ما در ارتباط باشید
            </Typography>
            <Box
                sx={mystyle}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Link
                    href="https://www.instagram.com/tebfarda/?hl=en"
                    className="contact-link"
                >
                    <div className="contact-tooltip-instagram">Tebfarda@</div>
                    <InstagramIcon sx={{ fontSize: "50px" }} />
                </Link>
                <Box className="contact-link">
                    <div className="contact-tooltip">
                        09960612306
                    </div>
                    <StayPrimaryPortraitIcon sx={{ fontSize: "50px" }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Information;
