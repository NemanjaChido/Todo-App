import { useTodos } from './TodoContext'; //import useTodos custom hook
import Todolist from './Todolist'; //import Todolist component



const Todo = () => {
  const { todos, clearTodo, 
          toggle, filter, setFilter, todoLeft, 
          clearCompleted, handleDragOver, reorderTodos,
        handleDragStart} = useTodos(); //destructure values from useTodos hook

  return (
    <>
      {/* todolist section */}
      <section className='relative flex flex-col w-full rounded-t-md min-h-[400px] mb-[60px]'>
        {todos.map((item, index) => {
              return <Todolist key={item.id} 
                              index={index}
                              text={item.text}
                              id={item.id} 
                              completed={item.completed}
                              clearTodo={clearTodo}
                              toggle={toggle}
                              onDragStart={()=>handleDragStart(index)}
                              onDragOver={handleDragOver}
                              onDrop={()=>reorderTodos(index)}
                      />
        })}
        <section className='absolute 
                            top-[100%]
                            text-[hsl(235,16%,43%)]  
                            font-semibold
                            rounded-b-md 
                            w-full
                            text-[clamp(0.5rem, 1vw, 1rem)]
                            before:content-[""]
                            before:absolute 
                            before:w-full 
                            before:left-0 
                            before:top-0 
                            before:h-[1px] 
                            before:bg-[hsl(233,14%,35%)]'
        >
          <nav className='relative bg-inherit w-full flex flex-row items-center justify-between p-4'>
            {/*number of uncompleted todos */}
            <span>{todoLeft} items left</span>

            {/* Navigate All, Active and Completed */}
            <div className='bg-inherit fixed w-[80%] left-[10%] bottom-[20px] h-[40px] p-4 md:p-0 md:w-[50%] md:relative md:left-0 md:bottom-0 flex flex-row items-center justify-center gap-3'>
              <button 
                    className={`cursor-pointer hover:text-[hsl(234,39%,85%)]` + (filter === "all" ? ' text-blue-500 font-bold' : '')}
                    onClick={() => setFilter("all")}
                    >
                   All
              </button>
              <button
                    className={`cursor-pointer hover:text-[hsl(234,39%,85%)]` + (filter === "active" ? ' text-blue-500 font-bold' : '')}
                    onClick={() => setFilter("active")}
                    >
                    Active
              </button>
              <button
                        className={`cursor-pointer hover:text-[hsl(234,39%,85%)]` + (filter === "completed" ? ' text-blue-500 font-bold' : '')}
                        onClick={() => setFilter("completed")}
                        >
                Completed
              </button>
            </div>


            {/*clear completed todos button */}
            <button onClick={clearCompleted} className='hover:text-[hsl(234,39%,85%)] cursor-pointer'>Clear Completed</button>
          </nav>
        </section>
      </section>
    </>
  )
}

export default Todo; //export Todo component
