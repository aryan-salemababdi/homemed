"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import { Grid, Modal, Typography, Button, Box, Card } from '@mui/material';


interface ICardsProps {
    item: {
        id: number;
        title: string;
        icon: string;
        describe: string;
    };
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "5px",
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
};


const Cards: NextPage<ICardsProps> = ({ item }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ margin: "10px" }}>
                <Button onClick={handleOpen} sx={{ width: "100%" }}>
                    <Box textAlign="center" alignItems="center" sx={{ height: "150px" }}>
                        <Image
                            src={`/icons/${item.icon}`}
                            alt="acupuncture"
                            width={40}
                            height={40}
                        />
                        <Typography fontWeight="bold" variant="h4" color="#3AA76D">
                            {item.title}
                        </Typography>
                    </Box>
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography fontWeight="bold" variant="h6" component="h2">
                            {item.title}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {item.describe}
                        </Typography>
                    </Box>
                </Modal>
            </Card>
        </>
    )
}

export default Cards;