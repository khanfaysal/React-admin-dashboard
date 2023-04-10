import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const isNoneMobile = useMediaQuery('(min-width: 600px)');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    return <Box display={isNoneMobile ? 'flex' : 'block'} width='100%' height='100%'>
        <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
        <Sidebar
            isNoneMobile={isNoneMobile}
            drawerWidth='250px'
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
        />
    </Box>
}

export default Layout