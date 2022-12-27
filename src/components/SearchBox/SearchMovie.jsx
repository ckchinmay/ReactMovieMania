import React from 'react';
import { useEffect } from 'react';


const SearchMovie = ({ value, onChangeText, onFormSubmit }) => {
  useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, []);

  return (
    <div className="d-flex justify-content-center mb-5">
      <form onSubmit={onFormSubmit}>
        <input className="form-control" type="text"
          value={value}
          onChange={onChangeText}
          placeholder="Search movie"></input>

      </form>
    </div>

  );
};

export default SearchMovie;


