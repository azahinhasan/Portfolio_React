import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';
import File from "../files/Zahin's_CV.pdf";
import ContactMe from './contactMe';
class FastPage extends Component {

    alert  =()=>{
        alert ("Temporary Disabled! You Can Mail me by clicking 'Let's Talk' :) ");
    }
  render() {

    return (
    <div className={classes.CvPart} id='CV'>
        
        <h1 className={classes.CVH1}>My CV</h1>
        <br/>
        <a onClick={this.alert }>
        {/* <a href={File} download onClick={this.alert }> */}
            <button className={classesBtn.CVButton}>
                Download CV
            </button>
        </a>
        

        {/* <a href="mailto:azahinhasan@gmail.com?subject=Wanna Contact with You" target='_blank'>
            <button className={classesBtn.CVButton}>
                Let's Talk
            </button>
        </a> */}

        <ContactMe/>
    </div>


)}
}

export default FastPage;
