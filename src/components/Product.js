import React from 'react';

export const Product = ({ hit }) => (
    <div className="product w-80 mt-100 h-200 px-4 py-2 mb-10 shadow-xl hover:shadow-2xl hover:border-2 rounded-xl" key={hit.id}>
        <div className="product-title">
            <h1 className="text-3xl font-bold"> {hit.title} </h1>
        </div>
        <img src={hit.poster} alt={hit.title} className="border-2 border-gray-300" />
        <div className="product-overview">
            <p> {hit.overview} </p>
        </div>
    </div>
);
