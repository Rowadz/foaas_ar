import React, { useState } from 'react'
import { PageHeader } from 'antd'
import Editor from './components/Editor'
import Mgs from './components/Mgs'
const queryString = require('query-string')

function App() {
  const [state] = useState({
    query: queryString.parse(window.location.search)
  })
  const weHaveQuery = Object.keys(state.query).length > 0

  let page
  if (weHaveQuery) {
    page = <Mgs />
  } else {
    page = <Editor />
  }
  return (
    <section>
      <PageHeader
        ghost="true"
        style={{ background: '#0F0F0F' }}
        backIcon="false"
        title="💓تحلسـ طيزي كخدمة💓"
        // subTitle="This is a subtitle"
      />
      {page}
    </section>
  )
}

export default App
