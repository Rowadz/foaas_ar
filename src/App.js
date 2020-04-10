import React, { useState } from 'react'
import './App.css'
import { PageHeader } from 'antd'
import { Row, Col } from 'antd'
import { Card } from 'antd'
import { Input } from 'antd'
import { AlertTwoTone } from '@ant-design/icons'
const queryString = require('query-string')

function App() {
  const [state, setState] = useState({
    query: queryString.parse(window.location.search),
    name: null
  })

  const weHaveQuery = Object.keys(state.query).length > 0
  console.log(weHaveQuery)
  const nameChange = (e) => {
    setState({ ...state, name: e.target.value })
  }

  const navigate = () => {
    const { pathname } = window.location
    const { name } = state
    window.location.href = `${pathname}?` + queryString.stringify({ name })
  }

  return (
    <main>
      <PageHeader
        ghost="true"
        style={{ background: '#0F0F0F' }}
        backIcon="false"
        title="تحلسـ \ يـ طيزي كخدمة"
        // subTitle="This is a subtitle"
      />
      <Row>
        <Col span={24} style={{ padding: '50px 50px' }}>
          <Card
            title="اكتبـ \ يـ الاسم"
            actions={[<AlertTwoTone key="setting" onClick={navigate} />]}
          >
            <Input
              size="large"
              value={state.name}
              placeholder="اسم"
              onChange={nameChange}
            />
          </Card>
        </Col>
      </Row>
    </main>
  )
}

export default App
