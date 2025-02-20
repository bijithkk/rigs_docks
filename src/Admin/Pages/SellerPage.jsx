import React from 'react';
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
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


import Cards from '../Components/SellerPage/Cards';
import Paginations from '../Components/SellerPage/Paginations';


const SellerPage = () => {

  return (
    <Box sx={{ paddingX:5,paddingY:2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 3, gap:5 }}>
        <Typography variant="h5" component="h1" sx={{ pl:2 }} fontWeight="bold">
          Sellers
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography color="#92929D">Show:</Typography>
            <Select value="today" size="small" sx={{ minWidth: 80, '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' } }} >
                <MenuItem value="today">All</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
                <MenuItem value="month">This Month</MenuItem>
            </Select>
        </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography color="#92929D">Sort by:</Typography>
            <Select value="today" size="small" sx={{ minWidth: 80, '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' } }} >
                <MenuItem value="today">Default</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
                <MenuItem value="month">This Month</MenuItem>
            </Select>
          <IconButton>
            <FilterAltOutlinedIcon sx={{ color:'#9FA3A8' }} />
          </IconButton>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ 
              textTransform: 'none',
              backgroundColor: '#0A5FBF',
              borderRadius: 2.06
            }}
          >
            New Seller
          </Button>
        </Box>
      </Box>

      {/* Search Bar */}
      <Paper elevation={0}  sx={{ mb: 4, display: 'flex', alignItems: 'center', p: 1,gap:2 }}>
        <TextField
          fullWidth
          placeholder="Search by Name, age, phone number"
          variant="outlined"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3.06, height: 45, '& fieldset': { borderColor: '#DFDFDF' }, '&:hover fieldset': { borderColor: '#9e9999' }, '&.Mui-focused fieldset': { borderColor: '#9e9999' } } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <Select sx={{  borderRadius: 3.06,height:45,"&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e9999", }, "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DFDFDF", }, }} defaultValue="name" variant="outlined">
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* Sellers Grid */}
      <Cards/>

      {/* Pagination */}
      <Paginations/>

    </Box>
  );
};

export default SellerPage;