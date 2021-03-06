import React,{Component} from 'react';
import classes from './components.css';
import FB from '../icons/fb.png';
import ScrollTo from './scrollTo';




class SideBar extends Component {

  scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {

    return (
    <div className={classes.sideBar}>
        {/* <div className={classes.options}> <ScrollTo  name='Home' to='home'/></div> */}
        <div className={classes.options}><div style={{padding:'8px'}} onClick={()=>this.scrollToTop()}>Home</div></div>
        <div className={classes.options}><ScrollTo  name='About Me' to='AboutMe'/></div>
        <div className={classes.options}><ScrollTo name='Skills' to='skills'/></div>
        <div className={classes.options}><ScrollTo name='Works' to='projects'/></div>
        <div className={classes.options}><ScrollTo name='CV' to='CV'/></div>
    </div>


)}
}

export default SideBar;
