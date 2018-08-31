import React, { Component } from 'react';
import './index.css';
import Header from '../Header'
import List from '../List'
import Note from '../Note'
import { generateId } from '../../utils'

class App extends Component {
  state = {
    notes: [
      {
        id: '1',
        title: '제목이랍니다',
        contents: '내용이에욧!👻'
      },
      {
        id: '2',
        title: '두번째 글',
        contents: 'ㅋㅋㅋㅋㅋ'
      },
      {
        id: '3',
        title: '리액트',
        contents: '이번엔 리액트'
      },
    ],
    activeId: '1',
  }

  // 이벤트 핸들러 메소드
  handlerListItemClick = (id) => {
    this.setState({ activeId: id });
  }

  // 편집 이벤트 핸들러
  handleEditNote = (type, e) => {
    const notes = [ ...this.state.notes];
    const note = notes.find((item) => item.id === this.state.activeId)
    note[type] = e.target.value;
    this.setState({
      notes,
    })
  }

  // 노트 추가 이벤트 
  handleAddNote = () => {
    const id = generateId(); // 랜덤 아이디 생성
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '',
          contents: '',
        },
      ],
      activeId: id
    })
  }

  // 노트 삭제 이벤트 
  handleDelNote = (e) => {
    // 현재 선택한 노트를 제외한 새로운 array를 생성
    const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);
    // 새 array를 notes에 할당
    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id
    })
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0]; // 현재 활성화 된 객체를 찾아서 activeNote 변수에 할당

    return (
      <div className="app">
        <Header 
          onAddNote={this.handleAddNote}
          onDelNote={this.handleDelNote}
        />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId} 
            onListItemClick={this.handlerListItemClick} // 메소드 전달
          />
          { notes.length !== 0 && 
            <Note 
              note={activeNote}
              onEditNote={this.handleEditNote}  
            /> 
          }
        </div>
      </div>
    );
  }
}

export default App;
