import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Data from './Des.json';
import { Box} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
console.log(Data)
const useStyles = makeStyles((theme)=>({
  flex:{
    display:"flex",
    width:"900",
  },
  root:{
    height:"300px",
    width:"400px" ,
    marginRight:30,
    boxShadow:"4px  0px 0px 4px purple"
    
  },
  media:{
    height:200
  }
  
})
)

 function GridImg() {
  const classes = useStyles();

  return <div className={classes.flex} >
    {Data.map((data)=>{
      return(
      <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          component="img"
          alt="Folk"
          image={data.Image}
          title="Contemplative Celebirity"
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.Name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      )

    })}
  </div>
}
export default GridImg