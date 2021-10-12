import React,{Component} from 'react';
import classes from './components.css';
import Line from './line';



class Skills extends Component {
  render() {

    return (
    <div className={classes.Skills} id="skills">
        <Line color={'#006466'} width={"100%"}/>
        <br/>
        <h1>Skills</h1>
        <br/>
        <ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>ASP.Net</li>
            <li>React.js</li>
            <li>Laravel</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Google FireBase</li>
            <li>RESTful API</li>
            <li>Mysql</li>
            <li>Ajax</li>
            <li>PHP</li>
            <li>C/C++</li>
            <li>JAVA</li>
            <li>JAVA Swing</li>
            <li>Bootstrap</li>
            <li>Python</li>
            <li>Assembly language</li>
            <li>MatLAB</li>
            <li>Photoshop</li>
        </ul>

    </div>
)}
}

export default Skills;
