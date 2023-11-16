"use client";
import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {

  const scroller = (value: number) => {
    window.scrollTo({
      top: value,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={{ md: 2, sm: 1, xs: 1 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              flexDirection: "column",
              textAlign: { md: "right", sm: "right", xs: "right" },
              direction: "rtl"
            }}
          >
            <Typography color="#3AA76D" fontWeight="bold" variant="h6">
              درباره ما
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              <span style={{ color: "#3AA76D", fontSize: "70px" }}>01</span> وضعیت سلامتی خود را به ما بسپارید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              طب فردا شامل گروهی از پزشکان متخصص در حوزه مغزواعصاب،روانپزشکی،طب فیزیکی،طب سنتی و همکاران پرستار،فیزیوتراپی،کاردرمانی و گفتاردرمانی است که درزمینه تشخیص و درمان بیماری های مغزواعصاب درمنزل فعالیت می کنند
            </Typography>
            <Button
              variant="contained"
              sx={{ margin: "10px 0px", background: "#3AA76D" }}
              onClick={() => { scroller(10000) }}
            >
              <Typography
                fontWeight="bold"
                variant="h6"
                textAlign="right"
                color="white"
              >
                تماس با ما
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/images/aboutus.webp"
              alt="aboutus"
              layout="responsive"
              width={300}
              height={400}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
