import React from 'react';
import NoteCard from './NoteCard';

const NoteItem = ({ note, onDelete, onArchive, onUnArchive }) => {
  return (
    <div className="card-container">
      <NoteCard {...note} onDelete={onDelete} onArchive={onArchive} onUnArchive={onUnArchive} />
    </div>
  );
};

export default NoteItem;
