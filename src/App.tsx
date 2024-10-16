import React from 'react';
import logo from './logo.svg';
import '@mantine/core/styles.css';
import Demo from './Demo';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MantineProvider defaultColorScheme="dark">
          <Demo/>
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
