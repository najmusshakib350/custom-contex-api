import React from 'react';
import ThemeContent from "./lib/themContext";
import Section from './components/Section';

export default class App extends React.Component{
  state={
    theme:'dark'
  }

  render(){
    const {theme} =this.state;
    return (
      <div>
          <ThemeContent.Provider value={{theme:theme}} >
               <Section />
          </ThemeContent.Provider>
          <h1>Hello i am app component</h1>
      </div>
    )
  }
}