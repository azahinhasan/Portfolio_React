import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';
import ProjectsMac from './projectsMachins';
import Line from './line';
import CvPart from './CVpart';
class Projects extends Component {

  state={
      data:[
        {pName:'Weather App',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/weatherApp_React',liveView:'https://azahinhasan.github.io/weatherApp_React/'},
        {pName:'Covid19 Tracker',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/covid19_tracker_React.js',liveView:' https://azahinhasan.github.io/covid19_tracker_React.js/#/home'},
        {pName:'To-do List with Auth',type:'WebApp',leng:['ReactJS','Firebase','CSS'],sourceCode:' https://github.com/azahinhasan/todoListV2_React_withAuth',liveView:': https://azahinhasan.github.io/todoListV2_React_withAuth/#/SignIn'},
        {pName:'WiFi Info QRcode Generator',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:'https://github.com/azahinhasan/WiFi_Info_QRcode_Generator',liveView:'https://azahinhasan.github.io/WiFi_Info_QRcode_Generator/'},
        {pName:'GuessTheNumber_V2',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/GuessTheNumber_V2',liveView:'https://azahinhasan.github.io/GuessTheNumber_V2/'},
        {pName:'Word Counter',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/wordCounter',liveView:'https://azahinhasan.github.io/wordCounter/wordCountter'},
        {pName:'Download Time Calculator',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/downloadTimeCalculator',liveView:' https://azahinhasan.github.io/downloadTimeCalculator/'},
        {pName:'Blood Donation Project[Admin]',type:'WebSite',leng:['ASP.Net','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'Coffee Shop Management',type:'WindowsApp',leng:['C#','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'Tutor Finding',type:'WebSite',leng:['PHP','VanillaJS','HTML','CSS','SQL'],sourceCode:'https://github.com/azahinhasan/tutorFinding_Final',liveView:''},
        {pName:'Prison Management System',type:'WindowsApp',leng:['JAVA','XAMPP SQL'],sourceCode:'https://github.com/azahinhasan/Prison_Management_System',liveView:''},
        {pName:'Set turnoff/restart/lock/sleep timer for Pc',type:'WindowsProgram',leng:['Python'],sourceCode:'https://github.com/azahinhasan/turnOFF_restart_lock_sleep_pc',liveView:''},

        // {pName:'',leng:['VanillaJS','HTML'],sourceCode:'',liveView:''},
      ]
  }
  render() {
    return (

    <div className={classes.Projects} id="projects">
      <Line/>
      <br/>
      <h1>Projects</h1>
      <div className={classes.Datas} >
        {this.state.data.map(data=>{
          return(
            <div className={classes.Data}>
              <div className={classes.pName}>{data.pName}</div>
              <div className={classes.pType}>[ {data.type} ]</div>
              <br/>
              <div>
                <ProjectsMac leng = {data.leng}/>
              </div>
              <br/>
              <a href={data.sourceCode} target='_blank'>SourceCode </a>
              {data.liveView != ''? <span>||<a href={data.liveView} target='_blank'> LiveView</a></span>:null}
              <br/><br/>
            </div>
          )
          })}
          <br/>
          <CvPart/> 
        </div>

      <br/>
        {/* <CvPart/> */}
    </div>


)}
}

export default Projects;
