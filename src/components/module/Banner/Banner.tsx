"use client";
import { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import Typewriter from "typewriter-effect";

const Banner = () => {

    const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);

    const arrayImage = [1, 2];

    function updateBackgroundImage() {
        backgroundImageIndex > 0
            ? setBackgroundImageIndex(0)
            : setBackgroundImageIndex(backgroundImageIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(updateBackgroundImage, 4000);
        return () => clearInterval(interval);
    });

    const scroller = (value: number) => {
        window.scrollTo({
            top: value,
            behavior: "smooth",
        });
    };

    const mystyle = {
        backgroundImage: `url(/images/image${arrayImage[backgroundImageIndex]}.webp)`,
        margin: "0px",
        height: "80vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "all 0.2s linear",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center" as const,
        alignItems: "start" as const,
        color: "#fff",
    };

    return (
        <>
            <div style={mystyle}>
                <Typography
                    fontWeight="bold"
                    variant="h5"
                    textAlign="center"
                    color="white"
                    mt={5}
                    mx={1}
                >
                    گروه تخصصی طب فردا
                </Typography>
                <Typography
                    fontWeight="bold"
                    variant="h4"
                    textAlign="center"
                    color="white"
                    mt={1}
                    mx={1}
                >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("مرجع تخصصی تشخیص و درمان بیماری های مغز و اعصاب در منزل")
                                .pauseFor(2000)
                                .start()
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ margin: "40px 10px", background: "#3AA76D" }}
                        onClick={() => {
                            scroller(800);
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            variant="h6"
                            textAlign="center"
                            color="white"
                        >
                            درباره ما
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ margin: "40px 10px", background: "#3AA76D" }}
                        onClick={() => {
                            scroller(5500);
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            variant="h6"
                            textAlign="center"
                            color="white"
                        >
                            تماس با ما
                        </Typography>
                    </Button>
                </Box>
            </div>
        </>
    );
};

export default Banner;
