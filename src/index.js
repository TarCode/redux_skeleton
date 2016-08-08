import React from 'react'
import { render } from 'react-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello human
        <button className='btn'>Hey</button>
      </h1>
    )
  }
}

render(<Home/>,
document.getElementById('main'))
