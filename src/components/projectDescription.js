import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';

class ProjectsDiscription extends Component {


render() {
   return (

   <div className={classes.ProjectsMac}>

   {this.props.AllDescription.map(p =>{
            if (p.pName == this.props.DescriptionsOf){
               return(
                  p.description!=''? 
                  <span>{p.description}</span> :
                  <span>Description is not Available! 😞</span>
               )
            }
         })
      }

   </div>


)}
}

export default ProjectsDiscription;
