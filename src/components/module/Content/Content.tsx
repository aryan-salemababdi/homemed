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
                                    image="/images/johny-georgiadis-3ewkNkfJj2k-unsplash.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        خدمات پزشک شخصی سازی شده
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        طرح پزشک شخصی سازی شده بر اساس مزاج خود شخص می باشد، ما در زمینه حفظ و ارتقا سلامت شخص تلاش می کنیم و بسته به نیاز و شرایط شخص دارو های گیاهی که شامل کمون، روغن و ... را فراهم می کنیم
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
                                    image="/images/sander-sammy-38Un6Oi5beE-unsplash.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        حال خوب شما آرزوی ماست
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        طب فردا به کمک تیم مجرب خود در تمامی ساعات شبانه روز در تهران آماده ارائه خدمات درمانی و مراقبتی به شما و عزیزانتان می باشد
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
                                    image="/images/patty-brito-Y-3Dt0us7e0-unsplash.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        طرح پایش سلامت سالمند
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        چکابهای روتین و دوره ای توسط پزشک متخصص طب سالمندی همان چیری است که سالمند شما برای زندگی بهتر به آن نیاز دارد مفتخریم که بهترین پزشکان طب سالمندی را در کنار خود داریم
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