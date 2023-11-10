import { Grid, Typography } from '@mui/material';
import React from 'react'

const Address = () => {
    return (
        <div style={{ width: "100%", background: "#E9EDF0", color: "#72858a", padding: "10px 0px" }}>
            <Grid display="flex" justifyContent="space-around">
                <Grid item>
                    <Typography>
                        مرکز ارائه خدمات مراقبتی و بالینی
                    </Typography>
                </Grid>
                <Grid item>

                    آدرس:

                    تهران،نارمک،جانبازان شرقی،ورودی میدان 20،پلاک 105،واحد یک
                </Grid>
            </Grid>
        </div>
    )
}

export default Address;