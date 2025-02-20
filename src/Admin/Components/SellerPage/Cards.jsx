import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Avatar,
    IconButton,
    styled
  } from '@mui/material';
import { FaStar } from "react-icons/fa6";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Cards = () => {
    const StyledCard = styled(Card)({
        height: '100%',
        borderRadius:10,
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        '& .MuiCardContent-root': {
          padding: 24
        }
      });
    const sellers = [
        {
            id: '00221',
            name: 'Kelvin Rodri',
            rating: 4.5,
            earnings: '₦450,000',
            orders: 150,
            email: 'kelvin@gmail.com',
            phone: '(+234) 399 9579 999'
        },
        {
            id: '00222',
            name: 'Sarah Connor',
            rating: 2.7,
            earnings: '₦450,000',
            orders: 115,
            email: 'sarah@gmail.com',
            phone: '(+234) 399 9579 999'
        },
        {
            id: '00223',
            name: 'Favour Ada',
            rating: 2.8,
            earnings: '₦950,000',
            orders: 198,
            email: 'favour@gmail.com',
            phone: '(+234) 399 9579 999'
        },
        {
            id: '00224',
            name: 'Favour Ada',
            rating: 2.8,
            earnings: '₦950,000',
            orders: 198,
            email: 'favour@gmail.com',
            phone: '(+234) 399 9579 999'
        },
        {
            id: '00225',
            name: 'Favour Ada',
            rating: 2.8,
            earnings: '₦950,000',
            orders: 198,
            email: 'favour@gmail.com',
            phone: '(+234) 399 9579 999'
        },
    ]
  return (
    <div>
        <Grid container spacing={3}>
            {sellers.map((seller) => (
            <Grid item xs={12} md={6} lg={4} key={seller.id}>
                <StyledCard>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Avatar sx={{ width: 48, height: 48,borderRadius:'12px' }} src="https://i.postimg.cc/QtNRQRhy/p-img14.png">{seller.name[0]}</Avatar>
                        <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight:600 }}>{seller.name}</Typography>
                        <Typography variant="body2" sx={{ color:'#0A5FBF',fontWeight:600,fontSize:12 }} color="text.secondary">
                            #{seller.id}
                        </Typography>
                        </Box>
                    </Box>
                    <IconButton color="primary">
                        <FaStar />
                    </IconButton>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4} >
                        <Typography variant="caption" color="#9FA3A8" fontWeight={600} sx={{ letterSpacing: '1px',display: 'block', mb: 0.8 }}>
                        RATING
                        </Typography>
                        <Typography variant="body1" fontWeight={900} fontSize={12}>{seller.rating}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="caption" color="#9FA3A8" fontWeight={600} sx={{ letterSpacing: '1px',display: 'block', mb: 0.8 }}>
                        EARNINGS
                        </Typography>
                        <Typography variant="body1" fontWeight={900} fontSize={12}>{seller.earnings}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="caption" color="#9FA3A8" fontWeight={600} sx={{ letterSpacing: '1px',display: 'block', mb: 0.8 }}>
                        ORDERS
                        </Typography>
                        <Typography variant="body1" fontWeight={900} fontSize={12}>{seller.orders}</Typography>
                    </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%',gap:3 }}>
                    <Box sx={{ display: 'flex',width:155,height:35, alignItems: 'center',justifyContent: "center", gap: 1, color: '#0A5FBF',backgroundColor:'#4E95F233',p:1,borderRadius:2 }}>
                        <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2" fontSize={11}>{seller.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex',width:155,height:35, alignItems: 'center',justifyContent: "center",gap: 1, color: '#9FA3A8',backgroundColor:'#F4F4F4',p:1,borderRadius:2 }}>
                        <LocalPhoneOutlinedIcon sx={{ fontSize: 17 }} />
                        <Typography variant="body2" fontSize={11}>{seller.phone}</Typography>
                    </Box>
                    </Box>
                </CardContent>
                </StyledCard>
            </Grid>
            ))}
      </Grid>
    </div>
  )
}

export default Cards;
