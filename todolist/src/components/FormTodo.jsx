import React from "react";
import { useState } from 'react';

const FormTodo = () => {
  const [description, setDescription] = useState("")
	return (
    <form>
      <div className="todo-list">
        <div className="file-input">
          <input 
            type="text"
            className="text"
            value={description}
            onChange={e=>setDescription(e.target.value)}
            />
            <button
                className="button pink"
                disabled={description ? "" : "disabled"}
              > 
              Add
              </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;