import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

function Tags(props) {
  const { bg, text } = props
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge bg={bg}>{text}</Badge>
      </Stack>
    </>
  )
}

export default Tags
