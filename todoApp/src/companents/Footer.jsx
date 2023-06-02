import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { empty, filterToDo, removeToDo } from '../store/todoSlice';
import TodoList from './TodoList';

const Footer = () => {
    // let { todoReducer } = useSelector(state => state);
    // let dispatch = useDispatch();
    // const removeToDos = () => {
    //     dispatch(empty())

    // }

    // const [chooseActive, setChooseActive] = useState()
    // const [chooseCompleted, setChooseCompleted] = useState()

    // let handleChange = (item) => {
    //     dispatch(filterToDo(item))
    //     item ==false?setChooseActive(true):setChooseActive(false)
    //     item ==true?setChooseCompleted(true):setChooseCompleted(false)

    // }

    const { todos, loading } = useSelector(state => state.todoReducer);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.filter((item) => item.active == false).length} </strong>
        items left
    </span>
{/* 
            <ul className="filters">
                <li>
                    <a href="#" className={(chooseActive==false &&  chooseCompleted==false) || chooseActive==undefined  || chooseCompleted==undefined ? "selected" : ""}  onClick={() => handleChange()}>All</a>
                </li>
                <li>
                    <a href="#" className={chooseActive ? "selected" : ""} onClick={() => handleChange(false)}>Active</a>
                </li>
                <li>
                    <a href="#" className={chooseCompleted ? "selected" : ""} onClick={() => handleChange(true)}> Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={removeToDos}>
                Clear completed
    </button> */}

        </footer>
    )
}

export default Footer

