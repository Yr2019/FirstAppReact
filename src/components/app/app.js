import React from 'react';
import AppHeder from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {

  const data = [ 
    { label : 'Going to learn React', important: true, id: 'qwqw'},
    { label : 'Thats is so good', important: false, id: 'werr'},
    { label : 'I need a break...', important: false, id: 'fds'},
    '534534'
  ];
  
  return (
    <div className="app">
      <AppHeder />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusfilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
    )
}

export default App;