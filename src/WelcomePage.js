import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import './WelcomePage.css';
import Typing from 'react-typing-animation';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ImageSearch from './ImageSearch';
import Cursor from './Cursor';
import ItemPage from './ItemPage';
import HomePage from './HomePage';

const styles = {
    body: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height:'100vh'
     },
     button:
     {
        fontFamily:'Segoe UI',
        size:'large',
        left: 0,
        position:'fixed',
        textAlign:'center',
        top: '80%',
        width: '100%',
        color:'white',
        fontWeight:'bolder'
      }
};

class WelcomePage extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            render:true
        }
    }
    stopRender = () =>
    {
        this.setState({
            render:false
        })
    }  
   render() {
    if(this.state.render)
    {  
        return (
        <div>
                <div className={this.props.classes.body}>
                    <div className="WelcomePage-Title">
                        <Typing startDelay={100} speed={500}>
                            Try to Learn Shop. <Cursor> </Cursor>
                        </Typing>
                        <div className="WelcomePage-Content">
                            It's an initiative to give quality handmade clothes and handcrafts at your doorsteps
                        </div>
                    </div>
                </div>
                <div className={this.props.classes.button}>
                    <Button onClick={this.stopRender} variant="outlined" color="inherit" >
                        Explore
                    </Button>
                </div> 
            </div>   
        );
    }
    else
    {
        return(
            <HomePage />
        );
    }   
  }
}

export default withStyles(styles)(WelcomePage);
