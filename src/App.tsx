import { useEffect, useState } from 'react';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import React from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>

    </div>
  )
}