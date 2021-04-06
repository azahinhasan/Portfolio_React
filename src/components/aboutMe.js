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
        <p className={classes.AboutMePragraph}>
            Hi, My nickname is <span className={classes.highlightPra}>Zahin</span> 🖐🏽. Currently,I am doing Bsc in
            Computer Science & Engineering 😬. It's my 11 Semester runing  🏃🏽‍♂️. I live in 
            <span className={classes.highlightPra}> Dhaka, Bangladesh </span> 🏡.
            Also, I have experience with <span className={classes.highlightPra}>Full-Stack WebDevelopment</span> and
            <span className={classes.highlightPra}> Windows Application</span> 🤓. I shared some 
            of my works at 'Works' part of the site 😄.
        </p>
    </div>


)}
}

export default AboutMe;
