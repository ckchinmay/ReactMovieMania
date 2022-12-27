import { Link } from 'react-router-dom';
import React from 'react';
import { BiMoviePlay } from "react-icons/bi";

function Navbar(props) {
  return (
    <> <div className='container-fluid' style={{ backgroundColor: "#1e272e" }}>
      <header className="p-3 mb-3 border-bottom text-light">
        <div className="d-flex flex-wrap align-items-start justify-content-between">
          <div className="d-flex link-light">
            <Link
              to=""
              className="nav-link px-2 justify-content-start link-light"
            >
              {' '}
              <BiMoviePlay />
              {' '}
              MovieBase
            </Link>
            <Link
              to="wishlist"
              className="nav-link px-2 justify-content-start link-light"
            >
              {' '}
              <BiMoviePlay />
              {' '}
              Wishlist
            </Link>

          </div>

        </div>
      </header>
    </div>
    </>
  );
}

export default Navbar;
