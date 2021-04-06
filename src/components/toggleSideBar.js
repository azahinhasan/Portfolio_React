import React,{Component} from 'react';
import classes from './components.css';
import FB from '../icons/fb.png';
import ScrollTo from './scrollTo';
import DrawerToggle from './drawerToggle';



class ToggleSideBar extends Component {
  render() {

    return (
    <div>
       
        {this.props.showToggleSideBar ? 
            <div  className={classes.toggleSideBar}>
                <div className={classes.toggleOptions} onClick={this.props.toggleBar}><ScrollTo toggleBar={this.props.toggleBar} name='About Me' to='AboutMe'/></div>
                <div className={classes.toggleOptions} onClick={this.props.toggleBar}><ScrollTo toggleBar={this.props.toggleBar} name='Skills' to='skills'/></div>
                <div className={classes.toggleOptions} onClick={this.props.toggleBar}><ScrollTo toggleBar={this.props.toggleBar} name='Projects' to='projects'/></div>
                <div className={classes.toggleOptions} onClick={this.props.toggleBar}><ScrollTo toggleBar={this.props.toggleBar} name='CV' to='CV'/></div>
            </div>
        :null}
        <DrawerToggle clicked={this.props.toggleBar}/>
    </div>


)}
}

export default ToggleSideBar;
