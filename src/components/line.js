import React,{Component} from 'react';
import classes from './line.css';




class Line extends Component {
  render() {

    return (
    <div className={classes.line} style={{backgroundColor:this.props.color, width:this.props.width, height:'3px'}}>

    </div>


)}
}

export default Line;
