import React from 'react';

export const Product = ({ hit }) => (
    <div className="product" key={hit.id}>
        <div className="product-title">
            <h1> {hit.title} </h1>
        </div>
        <div className="product-overview">
            <p> {hit.overview} </p>
        </div>
        <img src={hit.poster} alt={hit.title} />
    </div>
);
