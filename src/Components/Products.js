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

                <div class="card-group d-flex justify-content-between align-items-center py-3 my-5 flex-wrap">
                    <Card sx={{ maxWidth: 345 , marginTop:'1rem'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={job}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345 , marginTop:'1rem'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={internship}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345 , marginTop:'1rem'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={affiliate}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </div>



                <div class="card-group d-flex justify-content-evenly align-items-center py-3 my-5 flex-wrap">
                    <Card sx={{ maxWidth: 345 , marginTop:'1rem'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={hall}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345 , marginTop:'1rem'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={blog}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>

                </div>


            </section>
        </div>
    )
}

export default Products