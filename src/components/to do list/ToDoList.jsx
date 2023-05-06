import React, { useState } from "react";
import "./ToDoList.css";
import { List } from "./List";

export const ToDoList = () => {
  return (
    <div className="todo">
      <div className="todo__card">
        <h1>To DO List</h1>
        <div className="todo__head">
          <input type="text" placeholder="Add new task" />
          <button>Add</button>
        </div>

        <div className="todo__list">
          <List />
        </div>
      </div>
    </div>
  );
};
