import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const {list, setList} = props;
  
    const onChangeStatus = e =>{
    const {name, checked} = e.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));

    setList(updateList)
  }

  const chk = list.map(item => (
      <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

  const onClickRemoveItem = (e) =>{
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  return (
    <div className='todo-list'>
      {list.length ? chk : "no tasks"}
      {list.length ? (

        <p>
        <button className="button blue" onClick={onClickRemoveItem}>
          Delete all done
        </button>
        </p>

      ) : null}
      TaskList!
      <Checkbox />
    </div>
  );
};

export default TaskList;