import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';

class ProjectsMac extends Component {


  render() {
    return (

    <div className={classes.ProjectsMac}>
        {/* <table>
        <tr>
            {this.props.leng.map(p =>{
                return(
                    <td>{p}</td> 
                )
            })
            }
            </tr>
        </table> */}
        {this.props.leng.map(p =>{
                return(
                    <span>{p}</span> 
                )
            })
        }

    </div>


)}
}

export default ProjectsMac;
