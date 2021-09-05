import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import ScrollTo from './scrollTo';
import Icons from './icons';
import TypeWritter from 'typewriter-effect';
// npm install typewriter-effect
class FastPage extends Component {
  render() {
    
    return (
    <div className={classes.fastPage} id='home'>

      <span className={classes.fastPageAnimation}>
        <span className={classes.midTextFastPage}>Hi there,</span><br/>
      </span>

      <TypeWritter
        className={classes.TypeWritter} 
        onInit={(type)=>{
          type
          .changeDelay(100)
          .typeString('<span className={classes.TypeWritter}>I Am</span><br/>')
          .pauseFor(800)
          .typeString('Ashak Zahin')
          .start();
        }}
      
      />
      <span className={classes.fastPageAnimation}>
          <span className={classes.midTextFastPage}>FullStack Web and Mobile App Developer</span>
      </span>
      <br/>
      <span className={classes.fastPageAnimation}>
          <Icons/>
      </span>  
          <button onClick={this.props.startClick} className={classesBtn.startButton}>
              <div className={classesBtn.btnTextHomePage}>
                <ScrollTo className={classesBtn.btnTextHomePage} name='More Info' to='AboutMe'/>
              </div>
          </button>
    </div>


)}
}

export default FastPage;
