import './clients-page-style.css'

import React from 'react'

export default function ClientsPage() {
  return (
    <div>
      <div className="clients">
        <h3>Our Main Clients</h3>
        <div className="flex-Clients">
          <a href="#"><div style={{background: 'url(https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/js-logo.png)'}}></div></a>
          <a href="#"><div style={{background: 'url(https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/html5-logo.png)'}}></div></a>
          <a href="#"><div style={{background: 'url(https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/css-logo.png)'}}></div></a>
          <a href="#"><div style={{background: 'url(https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/sass-logo.png)'}}></div></a>
        </div>
      </div>
    </div>
  )
}
