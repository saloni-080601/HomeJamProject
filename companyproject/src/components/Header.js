import React, { useState } from 'react';
import { Box, colors, Container, FormHelperText, Grid, makeStyles, Paper } from '@material-ui/core';
import {AppBar,Toolbar,Typography, Button} from '@material-ui/core';
import Image from '../Image/Img.jpg'
import GridImg from './GridImg'

import Navbar from './Navbar';
import { margin, padding } from '@mui/system';
const useStyles= makeStyles((theme)=>({
    appBar:{
        backgroundColor:'Black',
        maxWidth:'320px',
    },
    hero:{
        backgroundImage: `url(${Image})`,
        height:'500px',
        maxWidth:'100%',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        alignItems:'center'
    },
    
    blogTitle:{
        fontWeight:800,
        color:'#FFFFFF',
        paddingTop:theme.spacing(6)    
    },
    background:{
        backgroundColor:'black'
    },
    btn:{
        backgroundColor:'#ffffff00',
        borderRadius:90,
        borderRight:'3px solid 	#FF00FF',
        borderBottom:'3px solid 	#FF00FF',
        padding:50,
        marginRight:theme.spacing(20)



    },
    Button:{
        display:"block"
    },
    label:{
        display:"block",
    },
    boxContainer:{
        display:'flex'
    }
}))

function Header() {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    const [daily,setDaily]=useState(0)
    const [update,setUpdate]=useState(0)
    const classes=useStyles()
    return (
        <div className={classes.background}>
            
            <Box className={classes.hero} container maxWidth='lg'>
            <Navbar/>
            <Container>
            <Typography variant='h2' className={classes.blogTitle} color='white'>
                  Cari Cari  
                </Typography>
                <Typography variant='h5' className={classes.blogTitle} color='white'>
                  Live from your sofa to yours.Get closer to your favorite
                  <br/>Artist and lever miss out.
                </Typography>
                <Box className={classes.boxContainer} >
                    <Button variant="contained" className={classes.btn} color='secondary' onClick={()=>setCount(count+1)}>
                    <Box>
                    <Typography variant='div' className={classes.label} color='white'>
                    {count} 
                    </Typography>
                    <Typography variant='div' className={classes.label} color='white'>
                        label
                    </Typography>
                    </Box>
                
                    </Button>
                    <Button variant="contained" className={classes.btn} color='secondary' onClick={()=>setLike(like+1)}>
                        
                    <Box>
                    <Typography variant='div' className={classes.label} color='white'>
                    {like} 
                    </Typography>
                    <Typography variant='div' className={classes.label} color='white'>
                        label
                    </Typography>
                    </Box>
                    </Button>
                    <Button variant="contained" className={classes.btn} color='secondary' onClick={()=>setDaily(daily+1)}>
                        
                        <Box>
                    <Typography variant='div' className={classes.label} color='white'>
                    {daily}
                    </Typography>
                    <Typography variant='div' className={classes.label} color='white'>
                        label
                    </Typography>
                    </Box>
                    </Button>
                    <Button variant="contained" className={classes.btn} color='secondary' onClick={()=>setUpdate(update+1)}>
    
                    <Box>
                    <Typography variant='div' className={classes.label} color='white'>
                        {update} 
                    </Typography>
                    <Typography variant='div' className={classes.label} color='white'>
                        label
                    </Typography>
                </Box>
                </Button>
                </Box>
                </Container>
            </Box>
            
            <Container maxWidth='lg' className={classes.blogcontainer}>
                <Typography variant='h4' className={classes.blogTitle} >
                    Upcoming Show
                </Typography>
                <Grid container>
                    <Grid  items xs={12} sm={14} md={15}>
                        <GridImg/>
                    </Grid>
                    
                </Grid>

            </Container>
        </div>
        
    )
}

export default Header;
