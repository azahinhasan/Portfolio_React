import React,{Component} from 'react';
import logo from './logo.svg';
import SideBar from './components/sideBar';
import FastPage from './components/fastPage';
import Skills from './components/skills';
import Projects from './components/projects';
import classes from './App.css';
class App extends Component {
  render() {

  return (
    <div className="App">
        <SideBar/>
        <div className={classes.AllInfo}>
            <FastPage/>
            
            <Skills/>
            <Projects/>
        </div>
    </div>


  )}
}

export default App;
