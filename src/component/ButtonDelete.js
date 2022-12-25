import React from 'react';

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button className="delete" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
};

export default ButtonDelete;
