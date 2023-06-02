
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, putTodoById, removeToDo, toggleTodo } from "../store/todoSlice";

const TodoList = () => {
   let dispatch = useDispatch();
  // let { todoReducer } = useSelector((state) => state);

  const { todos, loading } = useSelector(state => state.todoReducer);

  let changeStyle = (index) => {
    // const updatedTodos = todos.map((todo, i) => (
    //   i === index ? { ...todo, active: !todo.active } : todo)
    // );
    // console.log(updatedTodos)

   let newTodoData = todos.find(item=> item._id == index)
   newTodoData = { ...newTodoData, active: !newTodoData.active };
   dispatch(
      putTodoById({ todoId: newTodoData._id, todoData: newTodoData })
    );
  };

  // const removeToDos = (id) => {
  //   dispatch(removeToDo(id));
  // };

  // let dispatch = useDispatch()

  // useEffect(() => {

  //   dispatch(getTodos())
  //   console.log(dispatch(getTodos()))

  // }, [])
  return (
    // <ul className="todo-list">
    //   {
    //     todoReducer.filtertodos &&
    //     todoReducer.filtertodos.map((item, index) => (
    //       <li className={!item.active ? "completed" : ""} key={index}>
    //         <div className="view">
    //           <input
    //             className={item.active ? "toggle" : "toggle-checked"}
    //             type="checkbox"
    //             onClick={() => changeStyle(index)}
    //           />
    //           <label>{item.item}</label>
    //           <button
    //             className="destroy"
    //             onClick={() => removeToDos(item.id)}
    //           ></button>
    //         </div>
    //       </li>
    //     ))

    //   }

    // </ul>
    <ul className="todo-list">
      {
        todos &&
        todos.map((item, index) => (
          <li className={!item.active ? "completed" : ""} key={item._id}>
            <div className="view">
              <input
                className={item.active ? "toggle" : "toggle-checked"}
                type="checkbox"
                onClick={() => changeStyle(item._id)}

              />
              <label>{item.description}</label>
              <button
                className="destroy"
              ></button>
            </div>
          </li>
        ))

      }

    </ul>
  );
};

export default TodoList;
