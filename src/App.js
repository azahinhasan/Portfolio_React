import React,{Component} from 'react';
import logo from './logo.svg';
import SideBar from './components/sideBar';
import FastPage from './components/fastPage';
import Skills from './components/skills';
import Projects from './components/projects';
import CvPart from './components/CVpart';
import AboutMe from './components/aboutMe';
import classes from './App.css';
import ToggleSideBar from './components/toggleSideBar';
import DrawerToggle from './components/drawerToggle';

import ContactMe from './components/contactMe';
class App extends Component {

  state = {
    showToggleSideBar:false,
    start:true,
  }

  showToggleSideBarHandler =()=>{
      this.setState({showToggleSideBar : !this.state.showToggleSideBar});
  }
  startHandler =()=>{
    this.setState({start : true});
}

  render() {
    let bodyData='';

    bodyData= <FastPage startClick={this.startHandler}/>

    
    if(this.state.start){
      bodyData=(
        <div>
           <div className={classes.AllInfo}>
            <FastPage start={this.state.start}/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>

        <SideBar/>
        <ToggleSideBar 
        toggleBar={this.showToggleSideBarHandler}
        showToggleSideBar = {this.state.showToggleSideBar}
        />
         {/* <ContactMe/> */}
        </div>
      )
    }

  return (
    <div className="App">
      {bodyData}
     
    </div>


  )}
}

export default App;
