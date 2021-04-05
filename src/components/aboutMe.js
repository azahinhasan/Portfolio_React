import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';

class AboutMe extends Component {
  render() {

    return (
    <div className={classes.AboutMe} id='AboutMe'>
        <Line/>
        <h1>About Me</h1>
        <p>
            Hi,My nickname is <span className={classes.highlightPra}>Zahin</span>.Currently,I am doing my Bsc in
            CSE. It's my 11 Semister. I live in <span className={classes.highlightPra}>Dhaka,Bangladesh</span>.
            Also, I have some experience about <span className={classes.highlightPra}>Full-Stack WebDevelopment</span> and
            <span className={classes.highlightPra}> Windows Application</span>. I shared some 
            of my work at Project part of the site.
        </p>
    </div>


)}
}

export default AboutMe;
