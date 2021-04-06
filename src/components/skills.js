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
            <li>WebSites/WebApps</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Google FireBase</li>
            <li>Usages of APIs/sqlDB</li>
            <li>Ajax</li>
            <li>PHP</li>
            <li>JAVA</li>
            <li>ASP.Net</li>
            <li>C#</li>
            <li>Python</li>
            <li>Windows Apps</li>
            <li>Assembly language</li>
            <li>MatLAB</li>
            <li>Photoshop</li>
        </ul>

    </div>
)}
}

export default Skills;
