import React from "react";
import { showFormattedDate } from "../utils/index";

const NoteCardContent = ({ title, createdAt, body }) => {
  return (
    <div className="card-content">
      <h3>{title}</h3>
      <p className="note-date">{showFormattedDate(createdAt)}</p>
      <article>{body}</article>
    </div>
  );
};

export default NoteCardContent;
