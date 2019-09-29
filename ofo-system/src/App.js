import React from 'react'
import { Button, message } from 'antd'
import './App.css'

function App () {
  const marginLeft = { marginLeft: '20px', marginTop: '20px' }
  return (
    <div className="App">
      <div>
        <Button onClick={() => infoMsg('主按钮')} style={ marginLeft } type={'primary'}>按 钮</Button>
        <Button onClick={() => infoMsg('危险按钮')} style={ marginLeft } type={'danger'}>按 钮</Button>
        <Button onClick={() => infoMsg('默认按钮')} style={ marginLeft }>按 钮</Button>
      </div>
    </div>
  )
}

function infoMsg (str) {
  message.info(str)
}

export default App
