import React, { useState } from 'react'
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Chip
  } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Paginations from '../Components/SellerPage/Paginations';


const OrdersPage = () => {
    const [orders] = useState([
        { id: '#48696134', customer: 'Benson', date: '12/5/2021', items: 2, price: '₦4,000', status: 'On the way' },
        { id: '#48696133', customer: 'Kammy', date: '12/5/2021', items: 6, price: '₦44,000', status: 'On the way' },
        { id: '#48696132', customer: 'Adeolu', date: '11/5/2021', items: 5, price: '₦34,000', status: 'On the way' },
        { id: '#48696131', customer: 'Domain', date: '10/5/2021', items: 2, price: '₦7,000', status: 'Delivered' },
        { id: '#48696130', customer: 'Kent', date: '10/5/2021', items: 6, price: '₦49,000', status: 'Cancelled' },
        { id: '#48696129', customer: 'Shadrach', date: '10/5/2021', items: 5, price: '₦30,000', status: 'Delivered' },
        { id: '#48696128', customer: 'Berry', date: '10/5/2021', items: 2, price: '₦8,000', status: 'Delivered' },
        { id: '#48696127', customer: 'Nancy', date: '10/5/2021', items: 8, price: '₦100,000', status: 'Cancelled' },
        { id: '#48696126', customer: 'Daniel', date: '9/5/2021', items: 9, price: '₦62,000', status: 'Delivered' },
        { id: '#48696125', customer: 'Ola', date: '9/5/2021', items: 4, price: '₦14,000', status: 'Delivered' },
      ]);

    const [selectedRows, setSelectedRows] = useState([]);
    // Handle row selection
    const handleRowClick = (customer) => {
        setSelectedRows((prev) =>
          prev.includes(customer)
            ? prev.filter((item) => item !== customer)
            : [...prev, customer]
        );
      };
    console.log(selectedRows);

    // Handle select all
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedRows(orders.map(order => order.customer));
        } else {
            setSelectedRows([]);
        }
    };

      const getStatusChipColor = (status) => {
        switch (status) {
          case 'Delivered':
            return {
                backgroundColor: '#DFEFDC',
                color: '#219653'
            };
          case 'On the way':
            return {
                backgroundColor: '#e3f2fd',
                color: '#4E95F2'
            };
          case 'Cancelled':
            return {
                backgroundColor: '#EB57571A',
                color: '#EB5757'
            };
          default:
            return 'default';
        }
      };

  return (
    <Box sx={{ paddingX:5,paddingY:2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 3, gap:5 }}>
        <Typography variant="h5" component="h1" sx={{ pl:2 }} fontWeight="bold">
          Orders
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
            <MenuItem value="name">Action</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* {Table} */}
      <TableContainer component={Paper} sx={{ px:1,py:1,boxShadow: 'none','& .MuiTableCell-root': { border: 'none' },'& .MuiTableHead-root': { '& .MuiTableRow-root': { borderRadius: '10px', overflow: 'hidden', '& .MuiTableCell-root:first-of-type': { borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', }, '& .MuiTableCell-root:last-child': { borderTopRightRadius: '10px', borderBottomRightRadius: '10px', } } } }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F4F4F4' }}>
              <TableCell padding="checkbox">
                <Checkbox checked={selectedRows.length === orders.length} indeterminate={selectedRows.length > 0 && selectedRows.length < orders.length} onChange={handleSelectAll} />
              </TableCell>
              <TableCell sx={{ color:'#212B36',fontWeight:'bold' }}>ORDER NUMBER</TableCell>
              <TableCell sx={{textAlign:"center",color:'#212B36',fontWeight:'bold'}}>CUSTOMER</TableCell>
              <TableCell sx={{textAlign:"center",color:'#212B36',fontWeight:'bold'}}>DATE</TableCell>
              <TableCell sx={{textAlign:"center",color:'#212B36',fontWeight:'bold'}}>ITEMS</TableCell>
              <TableCell sx={{textAlign:"center",color:'#212B36',fontWeight:'bold'}}>PRICE</TableCell>
              <TableCell sx={{textAlign:"center",color:'#212B36',fontWeight:'bold'}}>STATUS</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { outline: '1px solid #0A5FBF',borderRadius:3, transition: 'outline 0.2s ease-in-out' } }}
              >
                <TableCell padding="checkbox" onClick={(e) => e.stopPropagation()}>
                  <Checkbox 
                    checked={selectedRows.includes(order.customer)}
                    onChange={() => handleRowClick(order.customer)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell sx={{textAlign:"center"}}>{order.customer}</TableCell>
                <TableCell sx={{textAlign:"center"}}>{order.date}</TableCell>
                <TableCell sx={{textAlign:"center"}}>{order.items}</TableCell>
                <TableCell sx={{ color: '#0A5FBF',textAlign:"center" }}>{order.price}</TableCell>
                <TableCell sx={{textAlign:"center"}}>
                  <Chip
                    label={order.status}
                    size="medium"
                    sx={{ ...getStatusChipColor(order.status),borderRadius:1,width:98,height:35 }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paginations/>

    </Box>
  )
}

export default OrdersPage
