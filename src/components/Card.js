import React, { Component } from 'react';
import 'antd/dist/antd.css'

class Card extends Component {
  render() {
    return (
      <div className="cards">
        <div className="card">
          <div className="card-name">
            Customer 1
          </div>
          <div className="card-container">
            <div className="card-avatar">
              <img src="https://randomuser.me/api/portraits/med/men/0.jpg" alt=""/>
            </div>
            <div className="card-content">
              <div className="card-author">
                Ottilie Cronin
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.
              </p>
            </div>
          </div>
          <div className="card-performers">
            <div className="add-performers">
              <a href="#"><img src="/src/assets/images/gal.png" alt=""/></a>
              <div className="performer"><img src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="Performer"/></div>
              <div className="performer"><img src="https://randomuser.me/api/portraits/thumb/men/2.jpg" alt="Performer"/></div>
              <div className="performer"><img src="https://randomuser.me/api/portraits/thumb/men/3.jpg" alt="Performer"/></div>
            </div>
            <div className="delete-performers">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;