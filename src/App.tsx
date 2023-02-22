import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getPostsAsync, selectPosts } from './slices/app.slice';

function App() {
// Dispatch jako mechanizm do wywoływania akcji
  const dispatch = useAppDispatch()
  useEffect(() => {
    // Za pomocą dispatch wywułujemy akcje
    dispatch(getPostsAsync())
  }, [])
// Za pomocą hooka useAppSelector pobiramy posty przy użyciu selektora selectPosts
  const posts = useAppSelector(selectPosts)
  return (
    <div className="App">

    </div>
  );
}

export default App;
