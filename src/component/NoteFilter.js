import React from 'react';

const NoteFilter = ({ keyword, onChangeKeyword }) => {
  return (
    <div className="input-filter">
      <p>Cari Catatan !</p>
      <input type="text" value={keyword} onChange={onChangeKeyword} placeholder="Judul Catatan" />
    </div>
  );
};

export default NoteFilter;
