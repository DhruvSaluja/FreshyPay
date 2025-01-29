import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu on button click
  };
  
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <div className='container flex items-center bg-emerald-600 w-full h-11'>
      <div className='flex w-full justify-center'>
        <h1 className='text-2xl text-center text-white font-extrabold mx-auto ml-3 w-full'>For Better Experience Switch to your Mobile Phone</h1>
        
        
        {/* <IconButton
          edge="end"
          color="inherit"
          onClick={handleClick}
          style={{ marginLeft: 'auto' }} // Align it to the right
        >
          <MenuIcon className='mr-3' />
        </IconButton>

      
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
      </div>
    </div>
  );
};

export default Header;
