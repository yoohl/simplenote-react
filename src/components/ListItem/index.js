import React, { Component } from 'react';
import './index.css';

class LIstItem extends Component {
  render() {
    const { id, active, title, contents, onClick } = this.props;
    return (
      <div 
        className={active ? "list-item active" : "list-item"}
        onClick={onClick}
      >
        <div className="title">{title ? title : "제목"}</div>
        <div className="list-item-contents">{contents ? contents : "내용"}</div>
      </div>
    );
  }
}

export default LIstItem;