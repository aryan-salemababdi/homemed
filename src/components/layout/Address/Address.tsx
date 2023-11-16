import { Grid, Typography } from '@mui/material';
import React from 'react'

const Address = () => {
    return (
        <div style={{ width: "100%", background: "#E9EDF0", color: "#72858a", padding: "20px" }}>
            <Grid display="flex" justifyContent="space-around">
                <Grid item>
                    <Typography>
                        مرکز ارائه خدمات مراقبتی و بالینی طب فردا
                    </Typography>
                </Grid>
                <Grid item>

                    شماره تماس :

                    09960612306
                </Grid>
            </Grid>
        </div>
    )
}

export default Address;