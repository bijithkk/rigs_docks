import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  InputBase,
  Paper,
  Select,
  MenuItem,
  Avatar
} from '@mui/material';
import {
  Search,
  Print,
  Notifications,
  KeyboardArrowDown,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Group,
  PendingActions
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const SearchBar = styled(Paper)({
  padding: '2px 4px',
  display: 'flex',
  border: 'none',
  alignItems: 'center',
  width: 400,
  borderRadius: 8,
  boxShadow: 'none'
});

const StatsCard = styled(Card)({
  borderRadius: 12,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  height:171.2312774658203,
  width:272.41339111328125,
  padding:'2px 2px'
});

const OverView = () => {
  const stats = [
    {
      title: 'Total Sales today',
      value: '₦100,243,055',
      change: '+32.40',
      trend: 'up',
      icon: <ShoppingCart sx={{ color: '#2196f3' }} />
    },
    {
      title: 'Total Products Ordered',
      value: '3,456',
      change: '-2.40',
      trend: 'down',
      icon: <ShoppingCart sx={{ color: '#f44336' }} />
    },
    {
      title: 'Total Customers',
      value: '1,200',
      change: '+2.40',
      trend: 'up',
      icon: <Group sx={{ color: '#e91e63' }} />
    },
    {
      title: 'Total Pending Orders',
      value: '567',
      change: '+3.5',
      trend: 'up',
      icon: <PendingActions sx={{ color: '#9c27b0' }} />
    }
  ];

  return (
    <Box sx={{ p: 1, width: '100%' }}>
      {/* Overview Section */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 3, gap:5 }}>
          <Typography variant="h5" fontWeight="bold">Overview</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography color="#92929D">Show:</Typography>
            <Select
              value="today"
              size="small"
              sx={{ minWidth: 80, '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            >
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="week">This Week</MenuItem>
              <MenuItem value="month">This Month</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Stats Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: 3 
        }}>
          {stats.map((stat, index) => (
            <StatsCard key={index}>
              <CardContent sx={{ padding: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  {stat.icon}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: stat.trend === 'up' ? 'success.main' : 'error.main' 
                  }}>
                    {stat.trend === 'up' ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {stat.change}%
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600,fontSize:32 }}>
                  {stat.value}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {stat.title}
                </Typography>
              </CardContent>
            </StatsCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OverView;