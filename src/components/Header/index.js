import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    const { onAddNote, onDelNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>yoohl's 심플노트</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>추가</button>
          <button onClick={(e) => onDelNote(e)}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;