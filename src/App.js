import React,{Component} from 'react';
import logo from './logo.svg';
import SideBar from './components/sideBar';
import FastPage from './components/fastPage';
import Skills from './components/skills';
import Projects from './components/projects';
import CvPart from './components/CVpart';
import AboutMe from './components/aboutMe';
import classes from './App.css';
class App extends Component {
  render() {

    let bodyData='';

  return (
    <div className="App">
       
        <div className={classes.AllInfo}>
            <FastPage/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            {/* <CvPart/> */}
        </div>
        <SideBar/>
    </div>


  )}
}

export default App;
