import React from 'react'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'
import './App.css'

function MyCard(props) {
  const { imagen, nombre, descripcion, bg, text } = props

  return (
    <Card style={{ width: '18rem' }} className="cardCss">
      <Card.Img className="imgs" variant="top" src={imagen} />
      <Card.Body className="cardInfo">
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags className="badge" bg={bg} text={text} />
      </Card.Body>
    </Card>
  )
}

export default MyCard
