import { Box, Grid, Typography, Container } from '@mui/material';
import React from 'react'
import Cards from './Cards';

const Services = () => {

    let serviceData = [{
        id: 0,
        title: "طب سوزنی",
        icon: "acupuncture.png",
        describe: "خدمات طب سوزنی شامل لاغری، چاقی، زیبایی، انواع درد ها که شامل کمردرد، سیاتیک و سردرد می باشد، همچنین شامل اختلالات خواب و روانپزشکی می باشد"
    },
    {
        id: 1,
        title: "پزشک عمومی",
        icon: "doctor.png",
        describe: "پزشک عمومی شامل ویزیت عمومی و بخیه و پانسمان می باشد"
    },
    {
        id: 2,
        title: "پزشک متخصص",
        icon: "expert.png",
        describe: "خدمات پزشک متخصص شامل یک بخش روانپزشک و مغز و اعصاب می باشد که بخش روانپزشک شامل وسواسی، اضطراب، افسردگی و دو قطبی می باشد و بخش مغز و اعصاب  شامل نوار مغزی، نوار عصب و عضله، سونوگرافی گردن، تزریق درون مفصل و بوتاکس می باشد"
    },
    {
        id: 3,
        title: "روانشناس",
        icon: "therapy.png",
        describe: "خدمات روانشناسی شامل روانشناسی به صورت آنلاین می باشد"
    },
    {
        id: 4,
        title: "ویزیت در منزل",
        icon: "house.png",
        describe: "از خدمات طب فردا شامل ویزیت در منزل می باشد"
    },
    {
        id: 5,
        title: "نوبت دهی کلینیک",
        icon: "doctor-appointment.png",
        describe: "از خدمات طب فردا نوبت دهی کلینیک برای مراجعه حضوری می باشد"
    },
    {
        id: 6,
        title: "مشاوره و ویزیت آنلاین",
        icon: "consultation.png",
        describe: "از خدمات طب فردا مشاوره و ویزیت آنلاین می باشد"
    },
    {
        id: 7,
        title: "پرستاری",
        icon: "nurse.png",
        describe: "خدمات پرستاری شامل وصل سرم، سونداژ و تعبیه لوله معده (NGT) و موارد از این قبیل می باشد"
    }
    ]


    return (
        <Container>
            <Box m="100px 0px">
                <Typography
                    textAlign="center"
                    color="#3AA76D"
                    fontWeight="bold"
                    variant="h6"
                >
                    خدمات
                </Typography>
                <Typography
                    sx={{ margin: "20px 0px" }}
                    textAlign="center"
                    color="black"
                    fontWeight="bold"
                    variant="h3"
                >
                    خدمات <span style={{ color: "#3AA76D" }}>طب</span> فردا
                </Typography>
                <Grid
                    container
                    display="grid"
                    gridAutoColumns="auto"
                    gridTemplateColumns={{
                        md: "repeat(3,1fr)",
                        xs: "repeat(1,1fr)",
                    }}
                    p={2}
                >
                    {
                        serviceData.map((item) => (
                            <Cards
                                item={item}
                                key={item.id}
                            />
                        ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Services;