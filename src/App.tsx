import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';
import SearchComponent from './components/controls/search';
import FilterComponent from './components/controls/filter';
import MyProvider from './components/context/provider';

import { NewsStore } from './context/news/provider';

const App: React.FC = () => (
  <NewsStore>
    <MyProvider>
    <Header />
    <div className='container'>
      <div className='controls'>
        <SearchComponent />
        <FilterComponent />
      </div>
      <NewsList />
    </div>
    </MyProvider>
  </NewsStore>
  
);

export default App;
