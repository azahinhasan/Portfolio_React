import React,{Component} from 'react';
import classes from './components.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import FB from '../icons/fb.png';
import GitHub from '../icons/gitHub.svg';
import GitHub1 from '../icons/gitHub.png';
import LinkedIn from '../icons/linkedI.png';
import Insta from '../icons/insta.png';
import Mail from '../icons/mail.png';
class Icons extends Component {
  render() {

    return (
    <div className={classes.icons}>
        <a href="mailto:azahinhasan@gmail.com?subject=Wanna Contact with You" target='_blank'><img src={Mail}/></a>
        <a href='https://www.facebook.com/a.h.zahin/' target='_blank'><img src={FB}/></a>
        <a href='https://github.com/azahinhasan' target='_blank'><img src={GitHub}/></a>
        <a href='https://www.instagram.com/potato.coderr/' target='_blank'><img src={Insta}/></a>
        <a name="hhh" href='https://www.linkedin.com/in/ashhak-hasan-099455133/' target='_blank'><img src={LinkedIn}/></a>
        
    </div>


)}
}

export default Icons;
