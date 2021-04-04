import React from "react";

import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const Container = () => {
  return (
    <div>
      <p>Container</p>
      <FormTodo />
      <TaskList />
    </div>
  );
};

export default Container;