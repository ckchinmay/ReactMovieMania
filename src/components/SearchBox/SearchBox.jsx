import React from 'react';
import ListItem from './ListItem';
import SearchMovie from './SearchMovie';
import debounce from 'lodash.debounce';
import { fetchSearchResults, img_url } from '../../api';


const fetchData = async (query, cb) => {
  console.warn('fetching ' + query);
  if (query && query.length > 0) {
    fetchSearchResults(query).then((response) => {
      const data = response.data;
      cb(data);
    });
  } else {
    cb([]);
  }

};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

export default function SearchBox() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]);


  return (
    <div>
      <SearchMovie
        value={query}
        onChangeText={e => {
          setQuery(e.target.value);
        }}
      />
      {
        results?.results?.map((result, index) => (
          <div key={index}>
            <ListItem
              title={result.title}
              imageUrl={`${img_url}${result.poster_path}`}
              caption={result.release_date}
              id={result.id}
            />

          </div>
        ))
      }
      {results?.results?.length == 0 ? (
        <>
          <div className="col text-info">
            <h6>No matching record found!</h6>
          </div>

        </>
      ) : (
        <></>
      )}
    </div>
  );
}