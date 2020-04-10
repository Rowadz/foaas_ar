import React, { useState } from 'react'
import './Mgs.css'
import { Row, Col } from 'antd'
import anime from 'animejs/lib/anime.es.js'
const queryString = require('query-string')

export default function Mgs() {
  const [state] = useState({
    query: queryString.parse(window.location.search)
  })
  setTimeout(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      })
      .add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }, 0)
  const getName = () => {
    return state.query?.name
  }
  return (
    <Row>
      <Col span={24} style={{ padding: '50px 50px', textAlign: 'center' }}>
        <h1 className="ml15">
          <span className="word">تلحس او تلحسي </span>
          <span className="word">طيزي</span>
          <span className="word">يا</span>
          <span className="word">{getName()}</span>
        </h1>
      </Col>
    </Row>
  )
}
