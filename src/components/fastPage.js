import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';

class FastPage extends Component {
  render() {

    return (
    <div className={classes.fastPage}>
         <span className={classes.midTextFastPage}>Hi there,</span><br/>
        <p>I Am<br/>Ashak Zahin Hasan</p>
        <p><span className={classes.midTextFastPage}>FullStack Web and Mobile App Developer</span></p>
        
        <button className={classesBtn.startButton}>
            <ScrollTo name='Start' to='skills'/>
        </button>
        
    </div>


)}
}

export default FastPage;
