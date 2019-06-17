import React from 'react';
import { Badge } from 'reactstrap';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return ( 
      <div className="app-header d-flex">
        <h1><Badge color="info">Oliinyk Yurii</Badge></h1>
        <h2><Badge color="secondary">{allPosts} записей, из них понравилось {liked}</Badge></h2>
      </div>
    )
    }

    export default AppHeader;