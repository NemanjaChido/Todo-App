import tick from '../assets/tick.png'     //import click image
import not_tick from '../assets/not_tick.png';        //import not-click image
import delete_icon from '..//assets/delete_icon.png'; //import delete image
import { useState } from 'react';
import { useTodos } from './TodoContext'; //import useTodos custom hook

const Todolist = ({text, index, completed, id, clearTodo, toggle}) => {
  const [hover, setHover] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const {handleDragOver, handleDragStart, reorderTodos} = useTodos();

  const dragStart = ()=>{
    handleDragStart(index);
    setIsDragging(true);
  };

  const handleDragEnd = ()=>{
    setIsDragging(false);
  };

  const dragOver = (e)=>{
    setIsOver(true);
    handleDragOver(e);
  };
  const handleDragLeave = ()=>{
    setIsOver(false);
  };
  const handleDrop = ()=>{
    setIsOver(false);
    reorderTodos(index);
  };


  return (
   <div 
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
          draggable
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          className={`
                  relative 
                  flex flex-row 
                  justify-between 
                  bg-inherit 
                  w-full 
                  p-4
                  text-[clamp(1rem, 4vw, 2rem)]
                  after:content-[""] 
                  after:absolute 
                  after:w-full 
                  after:left-0 
                  after:bottom-0 
                  after:h-[1px] 
                  after:bg-[hsl(233,14%,35%)] 
                  last:after:hidden 
                  first:rounded-t-md
                  ${isDragging ? 'opacity-50 scale-95 transition-transform duration-200' : 'opacity-100 scale-100'}
                  ${isOver ? 'border-2 border-blue-500 bg-blue-50 transition-all duration-200' : 'border-2 border-transparent'}
                  cursor-move`}>

                    <div className='flex flex-row items-center gap-3'>
                      {/* toggle between icons, completed or not */}
                      <img onClick={()=> {toggle(id)}}
                            src={completed ? tick : not_tick} alt="check-icon" className='w-7 cursor-pointer'/>
                      <p className={`font-semibold text-shadow-xs ${completed ? 'line-through text-[hsl(236,9%,61%)]' : 'text-[hsl(235,16%,43%)]'}`}>{text}</p>
                    </div>

                    {/* delete icon with clearTodo onClick prop*/}
                    <img onClick={()=> {clearTodo(id)}} 
                        src={delete_icon} 
                        alt="delete-icon" 
                        className={`cursor-pointer w-5 shadow-xs 
                                  ${hover ? 'block' : 'hidden'}`}
                    />
        </div>
  );
}

export default Todolist; //export Todolist component
