import React from 'react'
import style from './ToDoItem.module.css'
import { MdDelete } from "react-icons/md";

interface IComponentProps {
  tast:string,
  isChecked: boolean,
  isChackedInput: any, /// надо переписать
  index: number,
  deleteTask: any, /// надо переписать
  id: number
}

const ToDoItem: React.FC<IComponentProps> = ({tast, isChecked, isChackedInput, index, deleteTask, id}) => {
  return (
    <div className={style.main}>
    <div className={style.boxItem} >
      <input type='checkbox' checked={isChecked}  onClick={() => isChackedInput(index)}/>
      <span className={isChecked? style.name: style.namefalse}>{tast}</span>
      <button className={style.buttonDelete} onClick={()=> deleteTask(id)}><MdDelete className={style.delete} /></button>
    </div>
    </div>

  )
}

export default ToDoItem
