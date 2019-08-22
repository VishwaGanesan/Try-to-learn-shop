import React,{Component, useEffect} from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import home from './eyecon.png';
import InboxIcon from '@material-ui/icons/MoveToInbox';


import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import Image from './assets/images/Images';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';



import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';


import CardActions from '@material-ui/core/CardActions';
import { grey } from '@material-ui/core/colors';
import { DialogContent, Divider } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff4400',
        mainGradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      },
      
     }});

const styles = 
{
    root:
    {
        flexGrow:'1',
        background:'#f9fafa'
    },
    appBar:
    {
        background: theme.palette.primary.mainGradient,
        height:'8vmax',
        fontSize:'3vmax',
        fontWeight:'bold',
        width:'100%',
    },
    appTitle:
    {
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize:'5vmin',
        textAlign: 'center',
        marginTop:'-9vmin',
        width:'100%',
        float:'right'
    },
    card:
    {
        maxWidth:450,
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop:'5vmin',
        marginLeft:'2vmin',
        fontSize:'1vmax',
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
      },
      closeButton :
      {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
      },
      navBar:
      {
        height:5,
    },
      menuIcon:
      {
          marginTop:'5vmin',
          float:'right',
      },
      drawermenu:
      {
          width:'25vh',
      },
      ListItemIcon:
      {
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

      },
      drawercss:
      {
          fontSize:'10vw'
      },
      storeIcon:
      {
        fill:"white",
        top:"0.30em", 
        position:"relative"
    }
};
const items = [
    {
        title:"Allen solley",
        subheader:"Men's wear",
        code:"m_90",
        price:"100"
    },
    {
        title:"Philips",
        subheader:"Men's wear",
        code:"w_90",
        price:"700"

    },
    {
        title:"Allen solley",
        subheader:"Men's wear",
        code:"m_90",
        price:"500"

    },
    {
        title:"Allen solley",
        subheader:"Men's wear",
        code:"w_90",
        price:"600"
},
    {
        title:"Allen solley",
        subheader:"Men's wear",
        code:"m_90",
        price:"600"
    },
]


class HomePage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            open:false,
            itemCode:"",
            drawer:false
        }
    }
   
     openPopup = (newItemCode) =>
    {
        this.setState({
            open:!this.state.open,
            itemCode:newItemCode
        });
        console.log(this.state.url);
    }
    closePopup = () =>
    {
        this.setState({
            open:false
        })
    }
    toggleDrawer = () => {
        this.setState({drawer:!this.state.drawer})
    }
    render()
    {
        const cards =  items.map((item,i) => (
            <Grid item xs={6} sm={3}>
                    <Card className={this.props.classes.card}>
                        <CardContent>
                            {item.title}
                        </CardContent>
                        <CardActionArea onClick = {e => this.openPopup(item.code)}>
                            <CardMedia >
                                <Image isCropped = {this.state.close} code={item.code} />
                            </CardMedia>
                        </CardActionArea>
                        <CardContent>
                                Price:{item.price}
                        </CardContent>
                    </Card>
            </Grid>
        ))
        const menuList =  (
            <div className={this.props.classes.drawermenu}>
            <List>
                {['Home','Mens','Womens','Electronics','Shoes'].map((menu,i) => (
                <ListItem button>
                    <ListItemIcon>
                        <img src={home} />
                    </ListItemIcon>
                    <ListItemText>
                            {menu}
                    </ListItemText>        
                </ListItem>
                ))}
            </List>   
            </div> 
        )
        return (
            
          <div className={this.props.classes.root}>
           <AppBar position='static' className={this.props.classes.appBar}>
                <div className={this.props.classes.menuIcon}>
                    <Button onClick={this.toggleDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4vmin" height="4vmin" float="right" viewBox="0 0 48 48"><path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" fill="white"/></svg>
                    </Button>
                </div>    
                <div className={this.props.classes.appTitle}>
                    <span className={this.props.classes.storeIcon}>
                        <svg viewBox="0 -36 512 512" height="8vmin" width="8vmin"  xmlns="http://www.w3.org/2000/svg"><path d="m266 40c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m226 40h-76c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h76c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/><path d="m382 40h-76c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h76c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/><path d="m10 420c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h492c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-10c0-8.558594 0-293.9375 0-310 0-16.542969-13.457031-30-30-30h-10v-50c0-16.542969-13.457031-30-30-30h-312c-16.542969 0-30 13.457031-30 30v50h-10c-16.542969 0-30 13.457031-30 30v37.640625l-38.945312 77.886719c-.660157 1.320312-1.054688 2.886718-1.054688 4.472656v20c0 15.777344 7.539062 30.597656 20 39.980469v130.019531zm25.007812-144.007812c-9.257812-5.355469-15.007812-15.3125-15.007812-25.992188v-10h60v10c0 16.542969-13.457031 30-30 30-5.269531 0-10.453125-1.386719-14.992188-4.007812zm116.164063-115.992188 7.5 60h-57.34375l7.5-60zm320.828125 100h-133.015625c.667969-3.28125 1.015625-6.628906 1.015625-10v-20c0-1.546875-.371094-3.105469-1.054688-4.472656l-32.765624-65.527344h165.820312zm-188.179688-100 30 60h-56.011718l-15-60zm-183.820312 80h60v10c0 16.542969-13.457031 30-30 30-15.625 0-28.765625-12.1875-29.914062-27.71875-.058594-.796875-.085938-1.5625-.085938-2.28125zm80 0h60v10c0 16.542969-13.457031 30-30 30s-30-13.457031-30-30zm42.191406-80 15 60h-58.363281l-7.5-60zm-122.191406 129.910156c8.402344 6.332032 18.816406 10.089844 30 10.089844 16.339844 0 30.871094-7.878906 40-20.035156 9.128906 12.15625 23.660156 20.035156 40 20.035156 11.246094 0 21.636719-3.734375 30-10.027344v70.027344h-140zm160-49.910156h60v10c0 5.269531-1.386719 10.453125-4.007812 14.992188-2.636719 4.5625-6.4375 8.363281-10.992188 10.996093-4.546875 2.625-9.730469 4.011719-15 4.011719-16.542969 0-30-13.457031-30-30zm156 180h-40v-80h40zm20 0v-90c0-5.523438-4.476562-10-10-10h-60c-5.523438 0-10 4.476562-10 10v90h-36v-130.015625c3.78125-2.839844 7.144531-6.203125 9.984375-9.984375h142.015625v140zm-336-390c0-5.515625 4.484375-10 10-10h312c5.515625 0 10 4.484375 10 10v50h-332zm-40 80c0-5.515625 4.484375-10 10-10h392c5.515625 0 10 4.484375 10 10v30h-412zm-3.820312 50h32.492187l-7.5 60h-54.992187zm-16.179688 138.984375c3.28125.667969 6.628906 1.015625 10 1.015625 11.246094 0 21.636719-3.734375 30-10.027344v80.027344c0 5.523438 4.476562 10 10 10h160c5.523438 0 10-4.476562 10-10v-80.027344c8.363281 6.292969 18.753906 10.027344 30 10.027344 3.371094 0 6.71875-.347656 10-1.015625v121.015625h-260zm0 0"/></svg>
                    </span>
                    &nbsp; Try to learn shop
                </div>
                
            </AppBar>
            <Grid container spacing={1}>
                {cards}
             </Grid>
             <Dialog open={this.state.open}>
                <DialogTitle>
                    <IconButton aria-label="close" className={this.props.classes.closeButton} onClick={this.closePopup}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Image isCropped = {this.state.open} code={this.state.itemCode} />
                </DialogContent>
            </Dialog>
            <Drawer
                docked={false} 
                open={this.state.drawer} 
                onClose={this.toggleDrawer}
            >
                {menuList}
            </Drawer>

          </div>   
         );
    }
}
 export default withStyles(styles)(HomePage);