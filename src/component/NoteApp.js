import React, { Component, Fragment } from 'react';
import { getData } from '../utils/data';
import NoteFilter from './NoteFilter';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      keyword: '',
      keywordFilter: [],
    };
  }

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
          ...prevState.notes,
        ],
      };
    });
  };

  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const keywordFilter = this.state.keywordFilter.filter((note) => note.id !== id);
    alert('Data berhasil di delete !');
    this.setState({ notes, keywordFilter });
  };

  onArchiveHandler = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: true,
            };
          } else {
            return note;
          }
        }),
        keywordFilter: prevState.keywordFilter.map((filter) => {
          if (filter.id === id) {
            return {
              ...filter,
              archived: true,
            };
          } else {
            return filter;
          }
        }),
      };
    });
  };

  onUnArchiveHandler = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: false,
            };
          } else {
            return note;
          }
        }),
        keywordFilter: prevState.keywordFilter.map((filter) => {
          if (filter.id === id) {
            return {
              ...filter,
              archived: false,
            };
          } else {
            return filter;
          }
        }),
      };
    });
  };

  onChangeKeywordHandler = (event) => {
    this.setState((prevState) => {
      return {
        keyword: event.target.value,
        keywordFilter: prevState.notes.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase())),
      };
    });
    // console.log(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <h1 className="note-app">NOTE APP</h1>
        <NoteInput onAddNote={this.onAddNoteHandler} />
        <NoteFilter keyword={this.state.keyword} onChangeKeyword={this.onChangeKeywordHandler} />

        {this.state.keyword.length ? (
          this.state.keywordFilter.length ? (
            <NoteList notes={this.state.keywordFilter} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnArchive={this.onUnArchiveHandler} />
          ) : (
            <p className="note-alert">Catatan Tidak Tersedia</p>
          )
        ) : (
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnArchive={this.onUnArchiveHandler} />
        )}
      </Fragment>
    );
  }
}
