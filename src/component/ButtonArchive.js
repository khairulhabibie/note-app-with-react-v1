import React from "react";

const ButtonArchive = ({ id, onArchive, onUnArchive }) => {
  return (
    <>
      {onArchive ? (
        <button className="archive" onClick={() => onArchive(id)}>
          Arsip
        </button>
      ) : (
        <button className="archive" onClick={() => onUnArchive(id)}>
          Aktif
        </button>
      )}
    </>
  );
};

export default ButtonArchive;
