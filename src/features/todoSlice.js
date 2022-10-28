import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    saveTask: (state, action) => {
      state.todoList.push(action.payload);
    },

    removeTask: (state, action) => {
      state.todoList = state.todoList.filter((task) => {
        return task.task !== action.payload;
      });
    },
  },
});

export const { saveTask, removeTask } = todoSlice.actions;

export const selectTodoList = (state) => state.tasks.todoList;

export default todoSlice.reducer;
