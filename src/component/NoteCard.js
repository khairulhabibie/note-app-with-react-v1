import React, { Fragment } from 'react';
import ButtonArchive from './ButtonArchive';
import ButtonDelete from './ButtonDelete';
import NoteCardContent from './NoteCardContent';

const NoteCard = ({ id, title, body, createdAt, onDelete, onArchive, onUnArchive }) => {
  return (
    <Fragment>
      <div className="card">
        <NoteCardContent title={title} createdAt={createdAt} body={body} />
        <div className="card-btn">
          <ButtonDelete id={id} onDelete={onDelete} />
          <ButtonArchive id={id} onArchive={onArchive} onUnArchive={onUnArchive} />
        </div>
      </div>
    </Fragment>
  );
};

export default NoteCard;
