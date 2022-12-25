import React from 'react';

const NoteCardContent = ({ title, createdAt, body }) => {
  return (
    <div className="card-content">
      <h3>{title}</h3>
      <p className="note-date">{createdAt}</p>
      <article>{body}</article>
    </div>
  );
};

export default NoteCardContent;
