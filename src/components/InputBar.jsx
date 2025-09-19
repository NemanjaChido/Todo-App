import { useTodos } from './TodoContext'; //import useTodos custom hook

const InputBar = ()=>{
  const {inputRef, addTodo, keyDown} = useTodos();

  return (
    <>
      <input ref={inputRef} className='border-0 outline-0 flex-1 placeholder:text-[hsl(234,39%,85%)] text-[hsl(234,39%,85%)] text-shadow-xs h-full p-4' 
                            type='text' 
                            placeholder='Create a new todo...'
                            onKeyDown={keyDown}/>
      {/* button returns addTodo function when clicked*/}
      <button onClick={addTodo} className='border-none rounded-tl-full rounded-bl-full cursor-pointer font-medium text-white w-20 h-full bg-amber-950 p-4'>add</button>
    </>
  ) 
};

export default InputBar;