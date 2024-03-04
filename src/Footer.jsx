import React from 'react'

function Footer(props) {
  const { footerText } = props
  return (
    <div>
      <footer>{footerText}</footer>
    </div>
  )
}

export default Footer
