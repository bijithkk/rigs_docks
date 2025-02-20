import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Box,
} from '@mui/material';
import {
  Dashboard,
  Group,
  ShoppingCart,
  Inventory,
  AccountBalance,
  Person,
  Settings,
  Assessment,
  Notifications,
  Logout
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    background: '#0066CC',
    color: 'white',
    paddingTop: theme.spacing(2),
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    scrollbarWidth: 'none',  // Firefox
    msOverflowStyle: 'none' 
  }
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.2, 2),
  borderRadius: 12,
  transition: "all 0.3s ease",
  // fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "black",
    "& .MuiListItemIcon-root": {
      color: "black",
    },
  },
  "& .MuiListItemIcon-root": {
    color: "white",
    minWidth: "40px",
  },
  "& .MuiListItemText-primary": {
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    lineHeight: "20px",
  },
}));

const Logo = styled("div")({
  padding: "16px 20px",
  marginBottom: "20px",
  // fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  "& img": {
    height: "30px",
  },
});

const BadgeWrapper = styled(Box)({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
});

const Sidebar = ({ onSelect }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
    const handleSelect = (section) => {
      setActiveSection(section);
      onSelect(section);
    };  
  const mainMenuItems = [
    { text: 'Dashboard', key: 'dashboard', icon: <Dashboard /> },
    { text: 'Sellers',key: 'sellers', icon: <Group /> },
    { text: 'Orders',key: 'orders', icon: <ShoppingCart /> },
    { text: 'Products',key: 'products', icon: <Inventory /> },
    { text: 'Account Analysis',key: 'accountanalysis', icon: <AccountBalance /> },
    { text: 'Profile',key: 'profile', icon: <Person /> },
    { text: 'Settings',key: 'settings', icon: <Settings /> },
  ];

  const insightMenuItems = [
    { text: 'Reports', icon: <Assessment />, badge: 18 },
    { text: 'Notifications', icon: <Notifications />, badge: 9 },
    { text: 'Log out', icon: <Logout /> },
  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Logo>
        <Box sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
          RIGSDOCK
        </Box>
      </Logo>
      
      <Box sx={{ px: 2, mb: 2 }}>
        <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
          Admin tools
        </Box>
        <List>
          {mainMenuItems.map((item) => (
            <StyledListItem onClick={() => handleSelect(item.key)} button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ width: 171.875,color:'#DFDFDF',borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      <Box sx={{ px: 2, mt: 2 }}>
        <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
          Insights
        </Box>
        <List>
          {insightMenuItems.map((item) => (
            <StyledListItem button key={item.text}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.badge && (
                <BadgeWrapper>
                  <Badge 
                    badgeContent={item.badge} 
                    // color="error"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#4E95F2',
                        color: 'white',
                        fontWeight: 'bold',
                      }
                    }}
                  />
                </BadgeWrapper>
              )}
            </StyledListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;