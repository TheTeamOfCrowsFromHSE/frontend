import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { SearchPanel } from './components/SearchPanel';
import { Products } from './components/Products';
import { INDEX_NAME, SEARCH_ENDPOINT } from './env.dev';

const searchClient = instantMeiliSearch(SEARCH_ENDPOINT);

const App = () => (
  <InstantSearch indexName={INDEX_NAME} searchClient={searchClient}>

    <SearchPanel/>
    <Products/>

  </InstantSearch>
);

export default App
