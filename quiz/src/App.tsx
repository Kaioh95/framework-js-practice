import React, { createContext, useContext, useState } from 'react';
import './App.css';
//import { Quiz } from './components/Quiz';
import { Tab, TabProps } from './components/tab';
import { TabForm } from './components/TabForm';
import { useTab } from './hooks/tab-hook';

let emptyTab: TabProps = {
  tabButtons: ['Tab'],
  tabText: ['Sem conteúdo']
}

const TabContext = createContext<TabProps>({tabButtons: ['Tab'], tabText: ['Sem conteúdo']})

function TabUp(){
  const tbUpdated = useContext(TabContext)
  return <Tab {... tbUpdated}/>
}

function App() {
  const { tbUp, createTab } = useTab()

  function updateTab(tb: TabProps){
    createTab(tb)
  }

  return (
    <TabContext.Provider value={tbUp}>
      <TabForm onSubmit={updateTab}/>
      <TabUp/>
    </TabContext.Provider>
  )
}

export default App;
