import React from 'react';
import { Hits } from 'react-instantsearch-dom';
import { Product } from './Product';

export const Products = () => (
    <div className='right-panel'> 
        <Hits hitComponent={Product} />
    </div>
)
