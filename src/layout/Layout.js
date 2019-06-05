import React, {Component, Fragment} from 'react';
import styles from './Layout.module.scss';

class Layout extends Component {
  state = {}
  render(){
    return (
      <Fragment>
        <h1>Hi</h1>
        <div className={styles.Layout}>
          {this.props.children}
        </div>
        
      </Fragment>
    )
  }
}

export default Layout;