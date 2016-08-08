import React from 'react'
import { render } from 'react-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='center'>
        <h1>Hello human
          <small>This is the beginning of the Redux Skeleton. Currently demonstrating a rendered React component</small>
        </h1>
      </div>
    )
  }
}

render(<Home/>,
document.getElementById('main'))
