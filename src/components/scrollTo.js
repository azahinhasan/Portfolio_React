import React,{Component} from 'react';
import classes from './components.css';

import { Link } from 'react-scroll'



class scrollTo extends Component {

  render() {

    return (
    <div className={classes.scrollTo}>
        <Link 
        // className={classes.options}
        to={this.props.to}
        smooth={true} 
        duration={800}>
            {this.props.name}
        </Link>
        
    </div>


)}
}

export default scrollTo;
