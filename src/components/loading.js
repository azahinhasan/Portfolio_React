import React,{Component} from 'react';

import classes from  './loading.css';



class loading extends Component {
    render() {
  
    return (
        <div>
        <div className={classes.loader}>Loading...</div>
        </div>
  )}
  }
  
export default loading;