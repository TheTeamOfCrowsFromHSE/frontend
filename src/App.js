import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { SearchPanel } from './components/SearchPanel';
import { Products } from './components/Products';

const searchClient = instantMeiliSearch(
    "http://0.0.0.0:7700"
);

const App = () => (
  <InstantSearch indexName="movies" searchClient={searchClient}>

    <SearchPanel/>
    <Products/>

  </InstantSearch>
);

export default App
