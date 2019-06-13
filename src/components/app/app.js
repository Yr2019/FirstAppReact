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


const shortid = require('shortid');

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
    { label : 'Going to learn React', important: true, id: 1},
    { label : 'Thats is so good', important: false, id: 2},
    { label : 'I need a break...', important: false, id: 3}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
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
      importnt: false,
      id: shortid.generate()
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
    })
}
  render() {
    return (
    <AppBlock>
      <AppHeder />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusfilter/>
      </div>
      <PostList 
        posts={this.state.data}
        onDelete={this.deleteItem}/>
      <PostAddForm
        onAdd={this.addItem}
      />
    </AppBlock>
    )
  }
}