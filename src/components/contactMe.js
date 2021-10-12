import React,{Component} from 'react';
import classes from './contactMe.css';
import classesBtn from './button.css';
import emailjs from 'emailjs-com';
import Loading from './loading';
// npm install emailjs-com --save
//more on https://www.emailjs.com/

import Line from './line';

import Reveal   from 'react-reveal/Reveal';
//npm install react-reveal --save
//https://www.react-reveal.com/tutorials/

import Email from '../icons/white/mail2.png';
import Phn from '../icons/white/phn.png';
import Address from '../icons/white/location 02-01.png';
class ContactMe extends Component {

    state = {
        sucessMsg: 'none',
        loading:false,
        alartMsg:false,
        name:'',
        email:'',
        message:''
    }

    sendEmail =(e)=> {
            this.setState({loading:true});
            e.preventDefault();
            emailjs.sendForm('service_7i9ekae', 'template_rt6st9r', e.target, 'user_Zee47QM7ACUCuhA4B1PF2')
            .then((result) => {
            this.setState({loading:false});
            console.log(result.text);

            this.sucessMsgHandlerS();
            }, (error) => {

            this.setState({loading:false});
            console.log(error.text);
            this.sucessMsgHandlerF();
            });
       

        }

    formValidation=(e)=>{
        if(this.state.name !='' && this.state.email !='' &&  this.state.message !=''){
            this.sendEmail(e);
        }
        else{
            this.setState({alartMsg:true});
            e.preventDefault();
        }
    }

    emptyAllDatas=()=>{
        this.setState({name : '',email:'',massage:''});
    }
    sucessMsgHandlerS=()=>{
            this.setState({sucessMsg : 'success',alartMsg:false});
            this.emptyAllDatas();
        }
    sucessMsgHandlerF=()=>{
            this.setState({sucessMsg : 'failed',alartMsg:false});
            this.emptyAllDatas();
        }
    sucessMsgHandlerNone=()=>{
            this.setState({sucessMsg : 'none'});
            this.emptyAllDatas();
        }

    nameChangeHandler =(event)=>{
        this.setState({name: event.target.value})
    }
    emailChangeHandler =(event)=>{
        this.setState({email: event.target.value})
    }
    messageChangeHandler =(event)=>{
        this.setState({message: event.target.value})
    }



render() {
    let data = '';

    if(this.state.sucessMsg == 'none'){
    data = (
        <div>
                    <form onSubmit={this.formValidation}>
                    <input type='text' placeholder='Name*' onChange={this.nameChangeHandler} name='name'/>
                    <input type='email'  placeholder='Email*' onChange={this.emailChangeHandler} name='email'/>
                    <textarea style={{fontFamily: 'Arial'}} placeholder='Message*' onChange={this.messageChangeHandler} name='message'/>
                    <br/>
                    { this.state.alartMsg?
                    <div className={classes.alartMsg}>
                        Please Fillup all TextBoxs
                    </div> :null}
                    <br/>
                    <button onClick={this.sucessMsgHandler} 
                    className={classesBtn.ContactMeSubmit} 
                    type='submit'>
                        Sent
                    </button>
                </form>

        </div>

    )
    }
    
    if(this.state.loading){
        data =(
            <form>
                <Loading/>
            </form>
        )
    }
    ///////////////////////////sucess or faileddddd
    
    else if(this.state.sucessMsg == 'success'){
        data =(
            <form>
                <p className={classes.ContactMeTrySuc}>Your Massage Send Successfully! 😄</p> 
                <button 
                onClick={this.sucessMsgHandlerNone} 
                className={classesBtn.ContactMeTryAgain}>
                    Sent Again?
                </button>
            </form>
        )
    }
    
    
    else if(this.state.sucessMsg === 'failed'){
        data =(
            <form>
                <p className={classes.ContactMeTrySuc}>Your Massage Send Failed! 😞</p> 
                <button 
                onClick={this.sucessMsgHandlerNone} 
                className={classesBtn.ContactMeTryAgain}>
                    Try Again?
                </button>
        </form>
        )
    }


    return (
    <div className={classes.ContactMe} id='contactMe'>
        <Line color={'#C7D3D4FF'} width={"99%"}/>   
        <br/>
        <Reveal effect={classes.H1animation}>
            <h1>Let's Talk</h1>
        </Reveal>
        {data}
        {/* <hr/>
        <div>
        Address: Mirpur-10,Dhaka-1216,Bangladesh
                    <br/>
                    Phone: +8801515667288
                    <br/>
                    Email: azahinhasan@gamil.com
        </div> */}

            <br/> <br/>
            <div className={classes.bottomText}>
            <Line color={'#C7D3D4FF'} width={"99%"}/>   
                <table>
                    <tr>
                        {/* <td><img src={Address}/> Mirpur-10,Dhaka-1216,Bangladesh</td> */}
                        <td style={{borderRight:'solid #C7D3D4FF 2px'}}><img src={Phn}/> +8801515667288</td>
                        <td><img src={Email}/> azahinhasan@gmail.com</td>
                    </tr>
                </table>
                {/* <hr/>
                    <div>
                    <img src={Address}/> Mirpur-10,Dhaka-1216,Bangladesh
                    </div> */}

            
            <Line color={'#C7D3D4FF'} width={"99%"}/>   

            </div>
    </div>




)}
}

export default ContactMe;
