import React from 'react';
import AppHeder from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css'

const App = () => {
  return (
    <div className="app">
      <AppHeder />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusfilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
    )
}

export default App;