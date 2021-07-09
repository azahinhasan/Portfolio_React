import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';
import ProjectsMac from './projectsMachins';
import ProjectDescription from './projectDescription';
import Line from './line';
import CvPart from './CVpart';
class Projects extends Component {

  state={
      filterName:'All',
      data:[
        {pName:'Weather App',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/weatherApp_React',liveView:'https://azahinhasan.github.io/weatherApp_React/'},
        {pName:'Covid19 Tracker',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/covid19_tracker_React.js',liveView:' https://azahinhasan.github.io/covid19_tracker_React.js/#/home'},
        {pName:'To-do List with Auth',type:'WebApp',leng:['ReactJS','Firebase','CSS'],sourceCode:' https://github.com/azahinhasan/todoListV2_React_withAuth',liveView:'https://azahinhasan.github.io/todoListV2_React_withAuth/#/SignIn'},
        {pName:'WiFi Info QRcode Generator',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:'https://github.com/azahinhasan/WiFi_Info_QRcode_Generator',liveView:'https://azahinhasan.github.io/WiFi_Info_QRcode_Generator/'},
        {pName:'Guess The Number',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/GuessTheNumber',liveView:'https://azahinhasan.github.io/GuessTheNumber/gamePage.html'},
        {pName:'Guess The Number V2',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/GuessTheNumber_V2',liveView:'https://azahinhasan.github.io/GuessTheNumber_V2/'},
        {pName:'Word Counter',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/wordCounter',liveView:'https://azahinhasan.github.io/wordCounter/wordCountter'},
        {pName:'Download Time Calculator',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/downloadTimeCalculator',liveView:' https://azahinhasan.github.io/downloadTimeCalculator/'},
        {pName:'Rock Paper Scissors',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/rock-paper-scissors',liveView:'https://azahinhasan.github.io/rock-paper-scissors/'},
        {pName:'Blood Donation Project[Admin]',type:'WebSite',leng:['ASP.Net','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'Coffee Shop Management',type:'WindowsApp',leng:['C#','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'Tutor Finding',type:'WebSite',leng:['PHP','VanillaJS','HTML','CSS','SQL'],sourceCode:'https://github.com/azahinhasan/tutorFinding_Final',liveView:''},
        {pName:'Prison Management System',type:'WindowsApp',leng:['JAVA','XAMPP SQL'],sourceCode:'https://github.com/azahinhasan/Prison_Management_System',liveView:''},
        {pName:'Set turnoff/restart/lock/sleep timer for Pc',type:'WindowsProgram',leng:['Python'],sourceCode:'https://github.com/azahinhasan/turnOFF_restart_lock_sleep_pc',liveView:''},
      
        // {pName:'',type:'',leng:['VanillaJS','HTML'],sourceCode:'',liveView:''},
      ],Descriptions:[
        {pName:'Weather App',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Covid19 Tracker',description:''},
        {pName:'To-do List with Auth',description:''},
        {pName:'WiFi Info QRcode Generator',description:''},
        {pName:'Guess The Number',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Guess The Number V2',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Word Counter',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Download Time Calculator',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Rock Paper Scissors',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Blood Donation Project[Admin]',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Coffee Shop Management',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Tutor Finding',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Prison Management System',description:''},
        {pName:'Set turnoff/restart/lock/sleep timer for Pc',description:''},

      ],
      DescriptionOf:''
  }

  filterNameChangeHandler=(event)=>{
    this.setState({filterName:event.target.value});
  }

  DescriptionHandler=(data)=>{

    if(data!=this.state.DescriptionOf){
      this.setState({DescriptionOf:data});
    }else if(data==this.state.DescriptionOf){
      this.setState({DescriptionOf:''});
    }
    

   // console.log(data);
  }

  render() {

    let data='';

    if(this.state.filterName === 'All'){
      data=(
        this.state.data.map(data=>{
          return(
            <div className={classes.Data}>
              <div className={classes.pName}>{data.pName}</div>
              <div className={classes.pType}>[ {data.type} ]</div>
              <br/>
              <div>
                <ProjectsMac leng = {data.leng}/>
              </div>


              <br/>
                <span onClick={()=>this.DescriptionHandler(data.pName)}>Description</span>
                {this.state.DescriptionOf == data.pName? 
                    <div className={classes.Description}>
                        <br/>
                        <ProjectDescription AllDescription={this.state.Descriptions} DescriptionsOf={data.pName}/>
                    </div>
                :null}


              <br/>
              <br/>
              <a href={data.sourceCode} target='_blank'>SourceCode </a>
              {data.liveView != ''? <span>||<a href={data.liveView} target='_blank'> LiveView</a></span>:null}
              <br/><br/>
            </div>
          )})
      )
    }
    else{
      console.log('type: ',this.state.filterName);
      data=(
        
        this.state.data.map(data=>{
          if(data.type === this.state.filterName){
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
          }
        })
      )
    }
    return (

    <div className={classes.Projects} id="projects">
      <Line/>
      <br/>
      <h1>Works</h1>

      {/* <div className={classes.FiltersButtonPart}>
          <button className={classesBtn.FiltersButton}>All</button>
          <button className={classesBtn.FiltersButton}>WebSites/WebApp</button>
          <button className={classesBtn.FiltersButton}>Windows Apps</button>
          <button className={classesBtn.FiltersButton}>Others</button>
      </div> */}

      <div className={classes.ProjectFilter}>
        <span className={classes.ProjectFilterText}>FilterByType : </span> 
        <select className={classes.ProjectFilterOptions} onChange={this.filterNameChangeHandler}>
          <option value='All'>All</option>
          <option value='WebApp'>Web Apps</option>
          <option value='WebSite'>WebSites</option>
          <option value='WindowsApp'>Windows Apps</option>
          <option value='WindowsProgram'>Programs</option>
        </select>
      </div>

      <div className={classes.Datas} >

{/* 
      <div className={classes.DatasBoxes} > */}
          {data}
          
        {/* </div> */}

          <CvPart/> 
        </div>

    </div>


)}
}

export default Projects;
