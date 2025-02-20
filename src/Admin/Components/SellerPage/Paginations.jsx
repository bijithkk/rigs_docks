import React, { useState } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Pagination,
  } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Paginations = () => {
  const [page, setPage] = useState(1);

  const handleIncrement = () => {
    setPage(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  return (
    <div>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mt: 4 
      }}>
        <Typography variant="body2" color="text.secondary">
          1-10 of 195 items
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Pagination 
            count={19} 
            page={page} 
            onChange={(e, value) => setPage(value)}
            sx={{
                '& .MuiPaginationItem-root': {
                    fontWeight: 700,
                    fontSize: '12.68px',
                    color:'#9FA3A8'
                },
                '& .MuiPaginationItem-root:hover': {
                    fontWeight: 700,
                    fontSize: '12.68px',
                    color:'#0A5FBF'
                },
                '& .Mui-selected': {
                  backgroundColor: 'transparent',
                  color: '#0A5FBF'
                },
                '& .MuiPaginationItem-previousNext': {
                    border: '1px solid rgba(133, 242, 113, 0.4)',
                    borderRadius: '7px',
                }
              }}
          />

            <Box sx={{ display: 'flex', alignItems: 'center', width: '55px', height: '32px', border: '1px solid rgba(133, 242, 113, 0.4)', borderRadius: '7px', backgroundColor: 'white', }}>
                <Typography sx={{ color:'#0A5FBF',fontWeight: 700,fontSize: '12.68px',pl:1.3,flex:1 }}>{page}</Typography>
                <Box sx={{ borderLeft: '1px solid rgba(133, 242, 113, 0.6)', height: '70%', mx: 0.5 }}></Box>
                <Box sx={{ display:'flex',flexDirection:'column',pr: 0.5 }}>
                    <IconButton onClick={() => handleIncrement() } size="small" sx={{ p: 0, '& .MuiSvgIcon-root': { fontSize: '14px', color: '#0066CC', }, }}> 
                        <ArrowDropUpIcon /> 
                    </IconButton>

                    <IconButton onClick={() => handleDecrement()} size="small" sx={{ p: 0, '& .MuiSvgIcon-root': { fontSize: '14px', color: '#0066CC', }, }} > 
                        <ArrowDropDownIcon/> 
                    </IconButton>
                </Box>
            </Box>

        </Box>
      </Box>
    </div>
  )
}

export default Paginations
