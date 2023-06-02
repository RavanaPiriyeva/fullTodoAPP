import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import Header from './companents/Header';
import Main from './companents/Main';
import Footer from './companents/Footer';
import { useDispatch } from 'react-redux';
import { getTodos } from './store/todoSlice';

function App() {
  let dispatch = useDispatch()

  useEffect(() => {

    dispatch(getTodos())
   // console.log(dispatch(getTodos()))

  }, [])
  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
