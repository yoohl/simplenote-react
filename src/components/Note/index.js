import React, { Component } from 'react';
import './index.css';

class Note extends Component {
  render() {
    const { note, onEditNote } = this.props;
    const { title, contents } = note;
    return (
      <div className="note">
        <input 
          placeholder="제목을 입력해주세요"
          className="title"
          value={title} 
          onChange={(e) => onEditNote('title', e)}
        />
        <textarea 
          placeholder="내용을 입력해주세요"
          className="note-contents" 
          value={contents}
          onChange={(e) => onEditNote('contents', e)}
        />
      </div>
    );
  }
}

export default Note;
