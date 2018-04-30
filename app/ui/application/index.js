import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import styles from './styles'

class Application extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.some}>Hello, Webpack!</h1>
      </div>
    )
  }
}

export default hot(module)(Application)
