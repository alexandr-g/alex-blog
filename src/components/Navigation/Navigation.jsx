import React from 'react'
import './Navigation.css'

const Navigation = ({ config, onClose }) => {
  return (
    <div>
      <div className="nav">
        <h3 className="nav-title">Menu</h3>
        <a href="#close" className="nav-close" onClick={onClose}>
          <span className="hidden">Close</span>
        </a>
        <ul>
          {config.menuLinks.map((item) => (
            <a href={item.link} key={item.name}>
              {item.name}
            </a>
          ))}
        </ul>
      </div>
      <span className="nav-cover" />
    </div>
  )
}

export default Navigation
