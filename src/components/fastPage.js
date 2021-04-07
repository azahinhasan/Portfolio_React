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
    <div className={classes.fastPage} id='home'>
        <span className={classes.midTextFastPage}>Hi there,</span><br/>
      <TypeWritter
        onInit={(type)=>{
          type
          .changeDelay(100)
          .typeString('I Am<br/>')
          .pauseFor(800)
          .typeString('Ashak Zahin')
          .start();
        }}
      
      />

        <div><span className={classes.midTextFastPage}>FullStack Web and Windows App Developer</span></div>
        <Icons/>
        <button onClick={this.props.startClick} className={classesBtn.startButton}>
            <ScrollTo name='Start' to='AboutMe'/>
        </button>
        
    </div>


)}
}

export default FastPage;
