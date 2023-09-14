import React, { Component } from "react";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => {
      return {
        title:
          event.target.value.length <= 15
            ? event.target.value
            : event.target.value.slice(0, 15),
      };
    });
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.title.length) {
      if (this.state.body.length) {
        this.props.onAddNote(this.state);
        alert("Data berhasil ditambahkan !!");
        this.setState(() => {
          return {
            title: "",
            body: "",
          };
        });
      } else {
        alert("Konten Catatan Harus diisi !");
      }
    } else {
      alert("Judul Catatan Harus diisi !");
    }
  };

  render() {
    const titleChar = this.state.title.length
      ? `Sisa Karakter: ${15 - this.state.title.length}`
      : "";
    return (
      <section>
        <h1 className="title">Buat Catatan</h1>
        <form onSubmit={this.onSubmitHandler}>
          <p>{titleChar}</p>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            placeholder="Judul Catatan"
          />
          <br />
          <textarea
            id="body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            placeholder="Konten Catatan"
            rows={7}
          ></textarea>
          <br />
          <button type="submit" className="btn-form">
            Simpan Note
          </button>
        </form>
      </section>
    );
  }
}
