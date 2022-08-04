import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import crouseImage from '../images/landing-page/crouse_image.jpg'
import python from '../images/landing-page/dsa_python.jpg'
import withc from '../images/landing-page/das_c.jpg'

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>


            <div className="motivation_text">
                <h1 className=' text-center my-5'> Affordable and Highest quality </h1>
            </div>

            <p className='text-center  program_para'> Find your favourite courses in pocket-friendly ways. </p>


            <Box sx={{ width: '100%', typography: 'body1' }} className='program_section'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Live Programs" value="1" className='tab_style' />
                            <Tab label="affordable Programs" value="2" />
                            <Tab label="Community Programs" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div class="card-group">
                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={crouseImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>
                                        <h2 style={{ lineHeight: 'inherit', fontWeight:'700', color:'#222', fontSize:'1.5rem' }}> ₹499.00  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={crouseImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={crouseImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={crouseImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>
                        </div>
                    </TabPanel>


                    <TabPanel value="2">
                        <div class="card-group">
                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={python}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={python}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={python}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={python}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>
                        </div>
                    </TabPanel>


                    <TabPanel value="3">
                        <div class="card-group">
                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={withc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={withc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={withc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 345, marginRight: '1rem', marginBottom: '1rem' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={withc}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: '700' }}>
                                        Mastering DSA with Java
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ lineHeight: 'inherit' }}>
                                        <h2 style={{ lineHeight: 'inherit' }}> Hitesh Choudhary  </h2>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='program_btn'> Check Now</button>
                                </CardActions>
                            </Card>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
