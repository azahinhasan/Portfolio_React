import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';
import TypeWritter from 'typewriter-effect';
// npm install typewriter-effect
class FastPage extends Component {
  render() {
    
    return (
    <div className={classes.fastPage}>
        <span className={classes.midTextFastPage}>Hi there,</span><br/>
      <TypeWritter
        onInit={(type)=>{
          type
          .changeDelay(200)
          .typeString('I Am<br/>')
          .pauseFor(800)
          .typeString('Ashak Zahin Hasan')
          .start();
        }}
      
      />

        <div><span className={classes.midTextFastPage}>FullStack Web and Mobile App Developer</span></div>
        <Icons/>
        <button className={classesBtn.startButton}>
            <ScrollTo name='Start' to='AboutMe'/>
        </button>
        
    </div>


)}
}

export default FastPage;
