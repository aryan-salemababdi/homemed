import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const Content = () => {
    return (
        <div style={{ margin: "20px 0px", background: "#E9EDF0" }}>
            <Container>
                <Grid display="flex" flexWrap="wrap" justifyContent="center" sx={{ marginTop: "-50px" }}>
                    <Grid item>
                        <Card sx={{ maxWidth: 350, margin: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/images/johny-georgiadis-3ewkNkfJj2k-unsplash.webp"
                                    alt="personalized"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        خدمات پزشک شخصی سازی شده
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        طرح پزشک شخصی سازی شده بر اساس مزاج خود شخص می باشد، ما در زمینه حفظ و ارتقا سلامت شخص تلاش می کنیم و بسته به نیاز و شرایط شخص دارو های گیاهی که شامل کپسول، دمنوش تی بگ و... برای انواع بیماری ها و متناسب با مزاج بیماران داریم
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 350, margin: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/images/sander-sammy-38Un6Oi5beE-unsplash.webp"
                                    alt="health"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        طب سنتی و سوزنی
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                         خدمات طب سوزنی شامل لاغری، چاقی، زیبایی، انواع درد ها که شامل کمردرد، سیاتیک و سردرد می باشد، همچنین شامل اختلالات خواب و روانپزشکی می باشد، اقدامات طب سنتی و سوزنی توسط پزشک انجام می شود
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Content;