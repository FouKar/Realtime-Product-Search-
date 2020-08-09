import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
import "./App.css";

// ===== OPTION 1: if you want to create your own algolia account and fill it with data =====
// demo data: https://www.algolia.com/doc/guides/building-search-ui/resources/demos/react/#media
// sample datasets on github: https://github.com/algolia/datasets

// ===== OPTION 2: if you want to get started quickly =====
// app id: TYM21GGQUA
// api key: eabfb4f87cda2bdf866495267e2af012
// index name: products

const searchClient = algoliasearch(
  "TYM21GGQUA",
  "eabfb4f87cda2bdf866495267e2af012"
);

export default function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <div className="app">
        <div className="search-container">
          <Stats />
          <SearchBox />
          <Hits hitComponent={Product} />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
}

function Product({ hit }) {
  return (
    <a
      className="product"
      href={hit.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={hit.image} alt={hit.name} />
      <div>
        <h3>{hit.brand}</h3>
        <h3>{hit.name}</h3>
        <h3>${hit.price}</h3>
      </div>
    </a>
  );
}
