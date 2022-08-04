import React from 'react'
import job from '../images/landing-page/products/jobPortal-icon.svg'
import internship from '../images/landing-page/products/Internship-icon.svg'
import affiliate from '../images/landing-page/products/affilitatePortal-icon.svg'
import hall from '../images/landing-page/products/halloffame-icon.svg'
import blog from '../images/landing-page/products/blog-icon.svg'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Products = () => {
    return (
        <div>
            <section className="motivation text-center my-5 product_section">

            <h1 className='achivers_text text-center my-5 motivation_underline mb-4'> Our Products </h1>

                <div class="card-group d-flex justify-content-between align-items-center py-3 my-5 flex-wrap">
                    <Card sx={{ maxWidth: 345, marginTop: '1rem', boxShadow:'none' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={job}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'700', fontSize:'2rem'}}>
                                Job Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontWeight:'500', fontSize:'1.2rem'}}>
                                Use exceptional templates for a stand-out resume minus the sign up process.                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345, marginTop: '1rem', boxShadow:'none'  }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={internship}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'700', fontSize:'2rem'}}>
                                Job Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontWeight:'500', fontSize:'1.2rem'}}>
                                Use exceptional templates for a stand-out resume minus the sign up process.                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345, marginTop: '1rem', boxShadow:'none'  }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={affiliate}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'700', fontSize:'2rem'}}>
                                Job Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontWeight:'500', fontSize:'1.2rem'}}>
                                Use exceptional templates for a stand-out resume minus the sign up process.                            </Typography>
                        </CardContent>
                    </Card>
                </div>



                <div class="card-group d-flex justify-content-evenly align-items-center py-3 my-5 flex-wrap">
                    <Card sx={{ maxWidth: 345, marginTop: '1rem', boxShadow:'none'  }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={hall}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'700', fontSize:'2rem'}}>
                                Job Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontWeight:'500', fontSize:'1.2rem'}}>
                                Use exceptional templates for a stand-out resume minus the sign up process.                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345, marginTop: '1rem', boxShadow:'none'  }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={blog}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'700', fontSize:'2rem'}}>
                                Job Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontWeight:'500', fontSize:'1.2rem'}}>
                                Use exceptional templates for a stand-out resume minus the sign up process.                            </Typography>
                        </CardContent>
                    </Card>

                </div>


            </section>
        </div>
    )
}

export default Products