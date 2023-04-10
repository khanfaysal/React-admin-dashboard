import React from 'react';
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux'
import FlexBetween from './FlexBetween';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme()
    return <AppBar
        sx={{
            position: 'static',
            background: 'none',
            boxShadow: 'none'
        }}
    >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <FlexBetween>
                <IconButton onClick={() => console.log('open sidebar')}>
                    <MenuIcon />
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius='9px'
                    gap='3rem'
                    p='0.1rem 1.5rem'
                >
                    <InputBase placeholder='serach..' />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>

    </AppBar>
}

export default Navbar