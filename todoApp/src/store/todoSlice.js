import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    todos: [],
    loading: true,
    error: {}
}


//middleware
export const getTodos = createAsyncThunk(
    "api/gettodos",
    async (thunkAPI, { rejectWithValue }) => {
        try {
            let res = await axios.get('http://localhost:3000/api/todos');
            //    console.log(res.data)
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postTodo = createAsyncThunk(
    "api/posttodos",
    async (todoData, { rejectWithValue }) => {
        try {
            let res = await axios.post("http://localhost:3000/api/todos", todoData);
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteTodoById = createAsyncThunk(
    "api/deletetodos",
    async (todoId, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:3000/api/todos/${todoId}`);
            return todoId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const putTodoById = createAsyncThunk(
    "api/putTodoById",
    async ({ todoId, todoData }, { rejectWithValue }) => {
        try {
            let res = await axios.put(
                `http://localhost:3000/api/todos/${todoId}`,
                todoData
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: initialState,
    extraReducers: {
        [getTodos.pending]: (state) => {
            state.loading = true
            state.todos = []
            state.error = null
        },
        [getTodos.rejected]: (state, { payload }) => {
            state.loading = false
            state.todos = []
            state.error = payload;
        },
        [getTodos.fulfilled]: (state, { payload }) => {
            state.todos = payload;
            state.loading = false
            state.error = null
        },
        [postTodo.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [postTodo.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [postTodo.fulfilled]: (state, { payload }) => {
            state.todos.push(payload);
            state.loading = false;
            state.error = null;
        },
        [deleteTodoById.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteTodoById.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [deleteTodoById.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo._id !== payload);
            state.loading = false;
            state.error = null;
        },
        [putTodoById.pending]: (state) => {
            state.loading = true;
            state.error = null;
          },
          [putTodoById.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          },
          [putTodoById.fulfilled]: (state, { payload }) => {
            const updatedTodoIndex = state.todos.findIndex(
              (todo) => todo._id === payload._id
            );
            if (updatedTodoIndex !== -1) {
              state.todos[updatedTodoIndex] = payload;
            }
            state.loading = false;
            state.error = null;
          },
    }
})


export default todoSlice.reducer