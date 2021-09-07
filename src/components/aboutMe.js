import React,{Component} from 'react';
import classes from './components.css';
import Line from './line';

import Education from './educationPart';
class AboutMe extends Component {
  render() {

    return (
    <div className={classes.AboutMe} id='AboutMe'>
        <Line/>
        <h1>About Me</h1>
        <p className={classes.AboutMePragraph}>
            Hi, My nickname is <span className={classes.highlightPra}>Zahin</span> 🖐🏽. Currently, I am doing My BSc in
            Computer Science & Engineering at AIUB 💻 📚. It's my Final Semester running 😬 🏃🏽‍♂️. 
            I live in <span className={classes.highlightPra}> Dhaka, Bangladesh </span> 🏠. My Hometown is <span className={classes.highlightPra}>Kushtia, Bangladesh</span> 🏡.
            I like to travel ✈️🚂🚙, meeting with new People 🤝🏽, watching Movies/TV Series 📺, and Playing Games 🎮.
            I have some knowledge in <span className={classes.highlightPra}>Full-Stack Web </span> and
            <span className={classes.highlightPra}> Mobile Application </span>Development 🤓. 
        </p>

        <br/>
        {/* <Education/> */}
    </div>


)}
}

export default AboutMe;
