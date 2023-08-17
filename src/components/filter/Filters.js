import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contactsSlice'; // Popraw ścieżkę do contactsSlice

export const Filters = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = status => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        // border: '1px solid black',
        padding: '10px',
      }}
    >
      <button onClick={() => handleChangeFilter('all')}>Wszystkie</button>
      <button onClick={() => handleChangeFilter('favorite')}>Ulubione</button>
    </div>
  );
};
