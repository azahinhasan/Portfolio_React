import React,{Component} from 'react';
import classes from './contactMe.css';
import classesBtn from './button.css';
import Line from './line';
import { Link } from 'react-scroll'
import ScrollTo from './scrollTo';
import Icons from './icons';
import File from "../files/Zahin's_CV.pdf";
import emailjs from 'emailjs-com';
// npm install emaom --save
//more on https://www.emailjs.com/
class ContactMe extends Component {

    state = {
        sucessMsg: 'none',
        loading:false,
        alartMsg:false
    }

    sendEmail =(e)=> {
        e.preventDefault();
        emailjs.sendForm('service_7i9ekae', 'template_rt6st9r', e.target, 'user_Zee47QM7ACUCuhA4B1PF2')
        .then((result) => {
        console.log(result.text);

        this.sucessMsgHandlerS();

        }, (error) => {
        console.log(error.text);
        this.sucessMsgHandlerF();
        });
        }

    sucessMsgHandlerS=()=>{
            this.setState({sucessMsg : 'success'});
        }
    sucessMsgHandlerF=()=>{
            this.setState({sucessMsg : 'failed'});
        }
    sucessMsgHandlerNone=(data)=>{
            this.setState({sucessMsg : 'none'})
        }


render() {
    let data = '';

    if(this.state.sucessMsg == 'none'){
    data = (
        <form onSubmit={this.sendEmail}>
        <h1>Let's Talk</h1>
        <input type='text' placeholder='Name*' name='name'/>
        <input type='email'  placeholder='Email*' name='email'/>

        <textarea placeholder='Message*' name='message'>

        </textarea>
        <br/>
        <button onClick={this.sucessMsgHandler} 
        className={classesBtn.ContactMeSubmit} 
        type='submit'>
            Sent
        </button>
    </form>
    )
    }else if(this.state.sucessMsg == 'success'){
        data =(
            <form>
                <h1>Let's Talk</h1>
                <p className={classes.ContactMeTrySuc}>Your Massage Send Successfully!</p> 
                <button 
                onClick={this.sucessMsgHandlerNone} 
                className={classesBtn.ContactMeTryAgain}>
                    Sent Again?
                </button>
            </form>
        )
    }else if(this.state.sucessMsg === 'failed'){
        data =(
            <form>
                <h1>Let's Talk</h1>
                <p className={classes.ContactMeTrySuc}>Your Massage Send Successfully!</p> 
                <button 
                onClick={this.sucessMsgHandlerNone} 
                className={classesBtn.ContactMeTryAgain}>
                    Try Again?
                </button>
        </form>
        )
    }

    return (
    <div className={classes.ContactMe} id='CV'>
        <hr/>
        <br/>

        {data}

    </div>


)}
}

export default ContactMe;
