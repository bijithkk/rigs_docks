import React from 'react'
import {
    Box,
    Typography,
    Select,
    MenuItem,
    Button,
    TextField,
    IconButton,
    FormControl,
    InputAdornment,
    Paper,
    Breadcrumbs,
    Link,
    Grid,
    Card,
    CardContent,
    Divider,
    Stack,
    Avatar,
    Chip
  } from '@mui/material';
import { 
    Search as SearchIcon, 
    CalendarToday as CalendarIcon,
    FilterList as FilterListIcon,
    NavigateBefore as PrevIcon,
    NavigateNext as NextIcon,
    KeyboardArrowDown as ArrowDownIcon,
    AccountCircle as UserIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Place as PlaceIcon,
    ShoppingCart as CartIcon,
    AccountBalanceWallet as WalletIcon,
    ShoppingBasket as BasketIcon,
    EmojiEvents as RewardIcon,
    Code as CodeIcon,
    PanTool as HandIcon,
    Chat as ChatIcon
  } from '@mui/icons-material';
import IosShareIcon from '@mui/icons-material/IosShare';

const SellerDetails = () => {
    const sellerData = {
        name: "Linda Blair",
        username: "@linda_blair321",
        isPremium: true,
        userId: "ID-011221",
        email: "lindablair@mail.com",
        phone: "050 414 8778",
        address: "1833 Bel Meadow Drive, Fontana, California 92335, USA",
        lastTransaction: "12 December 2022",
        profileImage: "https://i.imgur.com/1WoShea.jpg",
        stats: {
          totalBalance: "$723.00",
          balanceChange: "-25%",
          totalOrders: "1,296",
          ordersChange: "+10%",
          rewardsPoint: "1400",
          rewardsChange: "+10%"
        }
      };
  return (
    <Box sx={{ paddingX:5,paddingY:2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        {/* Page Title & Breadcrumbs */}
        <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>Seller Details</Typography>
            <Breadcrumbs separator="›">
            <Link href="#" underline="hover" color="#5C59E8">Dashboard</Link>
            <Link href="#" underline="hover" color="#5C59E8">Seller List</Link>
            <Typography color="#667085">Seller Details</Typography>
            </Breadcrumbs>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<IosShareIcon style={{ width: '16px', height: '16px',paddingBottom:1 }} />}
            sx={{ 
              textTransform: 'none',
              backgroundColor: '#DCEAFC',
              borderRadius: 2.06,
              color:'#0A5FBF',
              fontWeight:600,
              fontSize:14
            }}
          >
            Export
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Seller Profile Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <Box 
                  sx={{ 
                    width: 200, 
                    height: 200, 
                    borderRadius: '50%', 
                    overflow: 'hidden',
                    mb: 2,
                    bgcolor: '#e0eaff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img 
                    src={sellerData.profileImage} 
                    alt={sellerData.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                
                <Typography variant="h6">{sellerData.name}</Typography>
                {sellerData.isPremium && (
                  <Chip 
                    label="Premium" 
                    size="small" 
                    sx={{ 
                      bgcolor: '#4a6ff3', 
                      color: 'white',
                      fontSize: '0.7rem',
                      height: 20,
                      mt: 0.5
                    }} 
                  />
                )}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {sellerData.username}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />
              
              {/* User Information List */}
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#eef2ff', mr: 2 }}>
                    <UserIcon sx={{ color: '#4a6ff3' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">User ID</Typography>
                    <Typography variant="body1">{sellerData.userId}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#eef2ff', mr: 2 }}>
                    <EmailIcon sx={{ color: '#4a6ff3' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Billing Email</Typography>
                    <Typography variant="body1">{sellerData.email}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#eef2ff', mr: 2 }}>
                    <PhoneIcon sx={{ color: '#4a6ff3' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Phone Number</Typography>
                    <Typography variant="body1">{sellerData.phone}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#eef2ff', mr: 2 }}>
                    <PlaceIcon sx={{ color: '#4a6ff3' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Shop Address</Typography>
                    <Typography variant="body1">{sellerData.address}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#eef2ff', mr: 2 }}>
                    <CartIcon sx={{ color: '#4a6ff3' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Last Transaction</Typography>
                    <Typography variant="body1">{sellerData.lastTransaction}</Typography>
                  </Box>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SellerDetails
