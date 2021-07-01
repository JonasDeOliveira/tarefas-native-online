import React from 'react';
import TaskList from './src/views/TaskList'
import Auth from './src/views/Auth'
import { StatusBar } from 'expo-status-bar';
// import Navigator from './src/Navigator';

export default function App() {
  return (
    <>
    <Auth/>
    <StatusBar style='light'/>
    {/* <Navigator/> */}
    </>
  );
}