import React from 'react';

import SupportEngine from '../SupportEngine';
import Editor from './CodeEditor';

import './index.css';
import 'reactjs-windows/dist/index.css'

const Home = () => {
  return (
    <div>
        <Editor/>
         <SupportEngine></SupportEngine>
    </div>
  );
}

export default Home;

