import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';
import File from "../files/Zahin's_CV.pdf";

class FastPage extends Component {
  render() {

    return (
    <div className={classes.CvPart} id='CV'>
        <h1 className={classes.CVH1}>Download My CV From here</h1>

        <a href={File} download>
            <button className={classesBtn.CVButton}>
                Download CV
            </button>
        </a>

    </div>


)}
}

export default FastPage;
