import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const Further = () => {
    return (
        <>
            <Container>
                <Box m="50px 0px" p="10px 0px">
                    <Typography
                        textAlign="center"
                        color="#3AA76D"
                        fontWeight="bold"
                        variant="h6"
                    >
                        آشنایی بیشتر
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="#000"
                        fontWeight="bold"
                        variant="h4"
                        m={2}
                    >
                        <span style={{ color: "#3AA76D", fontSize: "70px" }}>02</span> بیشتر با < span style={{ color: "#3AA76D" }}> طب</span > فردا آشنا شوید
                    </Typography>
                </Box>
                <Grid display="flex" flexWrap="wrap" justifyContent="center" sx={{ marginTop: "-50px" }}>
                    <Grid item>
                        <Card sx={{ maxWidth: 350, margin: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/images/electroencephalogram_eeg.jpg"
                                    alt="eeg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        نوار مغز (EEG)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        نوار مغز (EEG) نوعی آزمایش پزشکی است که فعالیت الکتریکی مغز را ثبت می کند. این آزمایش برای تشخیص طیف گسترده ای از بیماری های عصبی از جمله صرع، تومورهای مغزی، آسیب مغزی و اختلالات خواب استفاده می شود.
                                        در این آزمایش، الکترودهایی روی پوست سر قرار می گیرند تا امواج الکتریکی مغز را ثبت کنند. این امواج توسط یک دستگاه ضبط می شوند و توسط یک متخصص مغز و اعصاب تفسیر می شوند.
                                        نتایج نوار مغز می تواند به پزشک کمک کند تا بیماری های عصبی را تشخیص دهد و درمان مناسب را تعیین کند.
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
                                    image="/images/EMG-Test-1.webp"
                                    alt="health"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        نوار عصب عضله (EMG)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        نوار عضله یا EMG یک آزمایش پزشکی است که برای ثبت فعالیت الکتریکی عضلات استفاده می شود. این آزمایش برای تشخیص طیف گسترده ای از بیماری های عضلانی و عصبی از جمله سندرم تونل کارپال، دیستروفی عضلانی دوشن و میاستنی گراویس استفاده می شود.
                                        در این آزمایش، الکترودهایی به پوست نزدیک عضله مورد نظر قرار می گیرند تا فعالیت الکتریکی آن را ثبت کنند. این امواج توسط یک دستگاه ضبط می شوند و توسط یک متخصص طب فیزیکی یا عصب شناس تفسیر می شوند.
                                        نتایج نوار عضله می تواند به پزشک کمک کند تا بیماری های عضلانی و عصبی را تشخیص دهد و درمان مناسب را تعیین کند.
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
                                    image="/images/botox.jpg"
                                    alt="health"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       بوتاکس
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        بوتاکس یک نوع سم بوتولینوم است که برای درمان طیف گسترده ای از مشکلات پزشکی و زیبایی استفاده می شود. در موارد زیبایی، بوتاکس برای کاهش چین و چروک های صورت، رفع خطوط اخم و پیشانی، و از بین بردن خطوط پنجه کلاغی اطراف چشم استفاده می شود. در موارد درمانی، بوتاکس برای درمان میگرن، اسپاسم عضلات، تعریق بیش از حد، و سایر مشکلات استفاده می شود.
                                        بوتاکس با فلج کردن عضلات کار می کند. این کار باعث می شود که چین و چروک ها کمتر قابل مشاهده شوند و اسپاسم عضلات کاهش یابد. بوتاکس یک روش ایمن و موثر است که نتایج آن می تواند تا شش ماه دوام داشته باشد.
                                        قبل از انجام تزریق بوتاکس، مهم است که با پزشک خود در مورد مزایا و خطرات این روش صحبت کنید.
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
                                    image="/images/Pulsenmoreultrasound.jpg"
                                    alt="health"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       سونوگرافی در منزل
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        سونوگرافی در منزل شامل بررسی عروق و اعصاب محیطی، داپلر شریانی و وریدی و درمان با تزریق داخل مفصل و عصب تحت هدایت سونوگرافی می باشد
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Further;