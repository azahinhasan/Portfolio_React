import React,{Component} from 'react';
import classes from './components.css';

import ScrollTo from './scrollTo';




class SideBar extends Component {
  render() {

    return (
    <div className={classes.sideBar}>

        <div className={classes.options}><ScrollTo  name='Education' to=''/></div>
        <div className={classes.options}><ScrollTo name='Skills' to='skills'/></div>
        <div className={classes.options}><ScrollTo name='Projects' to=''/></div>
        <div className={classes.options}><ScrollTo name='CV' to=''/></div>

        <div>
            F I G E
        </div>
    </div>


)}
}

export default SideBar;
