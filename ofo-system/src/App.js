import React from 'react'
import { Button } from 'antd'
import './App.css'

function App () {
  const marginLeft = { marginLeft: '20px', marginTop: '20px' }
  return (
    <div className="App">
      <div>
        <Button style={ marginLeft } type={'primary'}>按 钮</Button>
        <Button style={ marginLeft } type={'danger'}>按 钮</Button>
        <Button style={ marginLeft }>按 钮</Button>
      </div>
    </div>
  )
}

export default App
