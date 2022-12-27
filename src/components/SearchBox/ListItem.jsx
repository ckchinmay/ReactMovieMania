import React from 'react';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { CiRead } from "react-icons/ci";

const ListItem = ({ id, title, caption, imageUrl }) => {
  return (

    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2">
          <img src={imageUrl} className="img-circle avatar" alt="movie image" />
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {caption}
        </div>
        <div className="me-5 ms-auto align-self-center">
          <Link to={`/detail/${id} `} style={{ color: '#323232', textDecoration: 'none' }}> <CiRead /></Link>
        </div>
      </ListGroup.Item>

    </ListGroup>
  );
};

export default ListItem;
