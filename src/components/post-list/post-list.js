import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {
  const postFilter = posts.filter(item => typeof item === "object");
  const elements = postFilter.map((item) => {
      const {id, ...itemProps} = item;
      return (
      // <li className="list-group-item">
      //   <PostListItem 
      //     label={item.label}
      //     important={item.important}
      //   />
      // </li>
      // Новый стандарт Es8/
      // <li key={item.id} className="list-group-item">
      //   <PostListItem  {...item} />   
      // </li>
      // Более правильной способ
      
      <li key={id} className="list-group-item">
        <PostListItem  
          {...itemProps} 
            onDelete={() => onDelete(id)}
          />   
      </li>
    )  
  });
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;