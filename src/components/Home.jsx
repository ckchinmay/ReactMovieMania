import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import Listing from './Listing/Listing';

function Home(props) {
  return (<>
    <SearchBox />
    <div className="b-example-divider my-5"></div>
    <Listing />
  </>)
}

export default Home;
