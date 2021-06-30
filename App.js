import React from 'react';
import TaskList from './src/views/TaskList'
import { StatusBar } from 'expo-status-bar';
// import Navigator from './src/Navigator';

export default function App() {
  return (
    <>
    <TaskList/>
    <StatusBar style='light'/>
    {/* <Navigator/> */}
    </>
  );
}