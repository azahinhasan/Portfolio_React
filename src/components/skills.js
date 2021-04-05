import React,{Component} from 'react';
import classes from './components.css';
import Line from './line';



class Skills extends Component {
  render() {

    return (
    <div className={classes.Skills} id="skills">
        <Line/>
        <br/>
        <h1>Skills</h1>
        <br/>
        <ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Builds</li>
            <li>Mobile Web Apps</li>
            <li>Angular.js</li>
            <li>Ajax</li>
            <li>WordPress</li>
            <li>Sass</li>
            <li>Semantic Markup</li>
            <li>Grunt/Gulp</li>
            <li>Magento eCommerce</li>
        </ul>

    </div>
)}
}

export default Skills;
