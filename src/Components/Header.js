import React from 'react'
import logo from '../images/ineuron-logo.png'

// MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';



const drawerWidth = '100%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



const Header = () => {


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };





    return (
        <>
            <header>

                {/* ==================  Upper navber ======================== */}
                <div className="upper_nav d-flex justify-content-between align-items-center">
                    <img src={logo} alt="Logo" className='img-fluid' />

                    <div className="search_input d-flex align-items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" className='mx-3 ' placeholder='Waht do you want to learn ?' />
                    </div>

                    <div className="auth_buttons">
                        <button className="btn-bg mx-4"> Sign Up </button>
                        <button className="btn-nbg"> Sign In </button>
                    </div>

                    <i class="fa-solid fa-bars hamberger" onClick={handleDrawerOpen}></i>


                </div>


                {/* ============== Crouces Section =========== */}


                <div className="crouse_list mx-4 my-4">

                    <ul className='d-flex justify-content-between align-items-center a_style px-0' >
                        <ul>
                            <a className="nav-link dropdown-toggle a_style" href="https://ineuron.ai/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </ul>

                        <li >
                            <a href="https://ineuron.ai/one-neuron" className='a_style'>One Neuron</a>
                        </li>
                        <li >
                            <a href="https://jobs.ineuron.ai/" className='a_style'>Job Portal</a>
                        </li>
                        <li >
                            <a href="https://jobs.ineuron.ai/" className='a_style'>Job Portal</a>
                        </li>
                        <li >
                            <a href="https://internship.ineuron.ai/" className='a_style'>Internship Portal</a>
                        </li>
                        <li >
                            <a href="https://affiliate.ineuron.ai/" className='a_style'>Became an affiliate</a>
                        </li>
                        <li >
                            <a href="https://halloffame.ineuron.ai/" className='a_style'>Hall of frame</a>
                        </li>
                        <li >
                            <a href="https://blog.ineuron.ai/" className='a_style'>Blog</a>
                        </li>

                        <li>
                        <a href="#" className='a_style'>Company</a>
                        </li>
                    </ul>
                </div>
            </header>



            {/* ======================================= For Mobile ================================================ */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />



                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <img src={logo} alt="Logo" className='img-fluid w-50' />
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>



                    </DrawerHeader>
                    <Divider />
                    <List>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <div className="search_input_mobile d-flex align-items-center" style={{ display: 'block' }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" className='mx-3 ' placeholder='Waht do you want to learn ?'
                                    style={{ all: 'unset', width: '100%' }}
                                />
                            </div>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://ineuron.ai/courses" className='a_style'>Courses</a>
                        </ListItem>


                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://ineuron.ai/one-neuron" className='a_style'>One Neuron</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://jobs.ineuron.ai/" className='a_style'>Job Portal</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://internship.ineuron.ai/" className='a_style'>Internship Portal</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://affiliate.ineuron.ai/" className='a_style'>Became an affiliate</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://halloffame.ineuron.ai/" className='a_style'>Hall of frame</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="https://blog.ineuron.ai/" className='a_style'>Blog</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <a href="#" className='a_style'>Company</a>
                        </ListItem>

                        <ListItem disablePadding className='my-3 mx-4'>
                            <button className="btn-nbg"> Sign In </button>
                            <button className="btn-bg mx-4"> Sign Up </button>
                        </ListItem>

                    </List>
                    <Divider />
                </Drawer>

            </Box>


        </>
    )
}

export default Header



