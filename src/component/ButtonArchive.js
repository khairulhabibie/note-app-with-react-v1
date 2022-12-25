import React from 'react';

const ButtonArchive = ({ id, onArchive, onUnArchive }) => {
  return (
    <>
      {onArchive ? (
        <button className="archive" onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      ) : (
        <button className="archive" onClick={() => onUnArchive(id)}>
          Pindahkan
        </button>
      )}
    </>
  );
};

export default ButtonArchive;
