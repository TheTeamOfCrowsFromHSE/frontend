import React from 'react';
import { Hits } from 'react-instantsearch-dom';
import { Product } from './Product';

export const Products = () => (
    <Hits hitComponent={Product} className="flex flex-row flex-wrap" />
)
