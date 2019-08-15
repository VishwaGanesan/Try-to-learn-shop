import ReactDOM from 'react-dom';
import React from 'react';
import './HomePage.css';
import Typing from 'react-typing-animation';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Cursor from './Cursor';



const useStyles = makeStyles({
    body: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height:'100vh'
    },
     button:
     {
        fontFamily:'Segoe UI',
        left: 0,
        position:'absolute',
        textAlign:'center',
        bottom: '30%',
        width: '100%',
        color:'white',
      }
  });

  export default function HomePage() {
    const classes = useStyles();
    return (
       <div>
            <div className={classes.body}>
                <div className="HomePage-Title">
                    <Typing startDelay={1000} speed={500}>
                        Try to Learn Shop. <Cursor> </Cursor>
                    </Typing>
                    <div className="HomePage-Content">
                        It's an initiative to give quality handmade clothes and handcrafts at your doorsteps
                    </div>
                </div>
            </div>
            <div className={classes.button}> 
                <Button variant="outlined" color="inherit" >
                    <Link  style={{ textDecoration: 'none' ,fontWeight:'bold',fontSize:'1vw'}} href={'https://www.google.com'}color="inherit">
                         Explore
                    </Link>
                </Button>
            </div>
         </div>   
    );
  }

