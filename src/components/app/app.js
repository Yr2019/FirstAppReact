import React , { Component } from 'react';
import AppHeder from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

//import myImage from '../../../public/bg-image.jpg';   //  Не знаю как правильно импортировать с public папкы =)  В реакта вроде такой возможности =)

//import './app.css';
//import style from './App.module.css';
import styled from 'styled-components';


//const shortid = require('shortid');

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
  
`
//background-image: url(${myImage});


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [ 
    { label : 'Going to learn React', important: true, like: false, id: 1},
    { label : 'Thats is so good', important: false, like: false, id: 2},
    { label : 'I need a break...', important: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.idGenerator = this.idGenerator.bind(this);
    this.onToggleChange = this.onToggleChange.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  idGenerator() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let string_length = 8;
    let randomstring = '';
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring
  }

  deleteItem(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      // data.splice(index, 1);
      // return {
      //   data: data
      // } Насильной метод изменения state .. так делать нельзя =)
      //const before = data.slice(0, index);
      //const after = data.slice(index +1);
      //const newArr = [...before, ...after];
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  addItem(body){
    const newItem = {
      label: body,
      important: false,
      id: this.idGenerator()
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
    })
  }

  onToggleChange = (id, key) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      console.log(key);
      const newItem = data[index];
      newItem[key] = !newItem[key];
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }
  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  filterPost(items, filter){
    if(filter === 'like'){
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch(term){
    this.setState({term});
  }

  onFilterSelect(filter){
    this.setState({filter});
  }
  render() {
    const {data,term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    
    const visiblePost = this.filterPost(this.searchPost(data, term), filter);

    return (
    <AppBlock>
      <AppHeder 
      liked={liked}
      allPosts={allPosts}
      />
      <div className="search-panel d-flex">
        <SearchPanel 
          onUpdateSearch={this.onUpdateSearch}/>
        <PostStatusfilter
        filter={filter}
        onFilterSelect={this.onFilterSelect}
        />
      </div>
      <PostList 
        posts={visiblePost}
        onDelete={this.deleteItem}
        onToggleChange={this.onToggleChange}/>
      <PostAddForm
        onAdd={this.addItem}
      />
    </AppBlock>
    )
  }
}