import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Category.css';

function Category({ name, numberOfPolls }) {
  return (
    <div className="category">
      <h2><Link to={`/category/${name}`}>{name}</Link></h2>
        <p>{numberOfPolls} polls</p>
    </div>
  );
}

export default Category;
