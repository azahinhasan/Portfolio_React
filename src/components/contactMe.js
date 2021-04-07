import React,{Component} from 'react';
import classes from './contactMe.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';
import File from "../files/Zahin's_CV.pdf";
import emailjs from 'emailjs-com';

class ContactMe extends Component {

    sendEmail =(e)=> {
        e.preventDefault();
        emailjs.sendForm('service_7i9ekae', 'template_rt6st9r', e.target, 'user_Zee47QM7ACUCuhA4B1PF2')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        }

render() {

    return (
    <div className={classes.ContactMe} id='CV'>
        <hr/>
        <br/>
        <form onSubmit={this.sendEmail}>
            <h1>Let's Talk</h1>
            <input type='text' placeholder='Name*' name='name'/>
            <input type='email'  placeholder='Email*' name='email'/>

            <textarea placeholder='Message*' name='message'>

            </textarea>
            <br></br>
            <button type='submit'>Sent</button>

        </form>

    </div>


)}
}

export default ContactMe;
