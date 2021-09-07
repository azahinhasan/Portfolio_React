import React,{Component} from 'react';
import classes from './components.css';
import FB from '../icons/fb.png';
import ScrollTo from './scrollTo';




class SideBar extends Component {
  render() {

    return (
    <div className={classes.sideBar}>
        <div className={classes.options}> <i class="far fa-address-card"></i> <ScrollTo  name='Home' to='home'/></div>
        <div className={classes.options}><ScrollTo  name='About Me' to='AboutMe'/></div>
        <div className={classes.options}><ScrollTo name='Skills' to='skills'/></div>
        <div className={classes.options}><ScrollTo name='Works' to='projects'/></div>
        <div className={classes.options}><ScrollTo name='CV' to='CV'/></div>
    </div>


)}
}

export default SideBar;
