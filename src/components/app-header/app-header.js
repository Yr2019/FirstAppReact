import React from 'react';
import { Badge } from 'reactstrap';
import './app-header.css';

const AppHeader = () => {
    return ( 
      <div className="app-header d-flex">
        <h1><Badge color="info">Oliinyk Yurii</Badge></h1>
        <h2><Badge color="secondary">5 записей, из них понравилось 0</Badge></h2>
      </div>
    )
    }

    export default AppHeader;