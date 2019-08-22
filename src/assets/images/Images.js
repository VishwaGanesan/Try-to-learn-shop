import React,{Component} from 'react';
import { withStyles } from '@material-ui/styles';

const styles =
{
    container:
    {   
        height:'40vmin',
        width:'40vmin'
    }
}
const imageMap = 
{
     m_90 : require('./image.png'),
     w_90: require('./logo512.png')
}
class Images extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        if(this.props.isCropped)
        {
            return <img src={imageMap[this.props.code]}/>; 
        }
        else
        {
            return <img className={this.props.classes.container} src={imageMap[this.props.code]}/>; 
        }
    };
}
export default withStyles(styles)(Images);