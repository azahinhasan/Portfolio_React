import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';

class ProjectsMac extends Component {


  render() {
    return (

    <div className={classes.p}>
        <table>
        <tr>
            {this.props.leng.map(p =>{
                return(
                    <td>{p}</td> 
                )
            })
            }
            </tr>
        </table>
    </div>


)}
}

export default ProjectsMac;
