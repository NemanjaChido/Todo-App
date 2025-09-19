import React, { createContext, useContext, useState, useEffect, useRef} from "react";

// Create a Context for the Todo state
const TodoContext = createContext();

// Custom hook to use the TodoContext
export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
    return context;
};


// Provider component to wrap around parts of the app that need access to Todo state
export const TodoProvider = ({ children }) => {
    const inputRef = useRef();
    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const [filter, setFilter] = useState("all");
    const [dragIndex, setDragIndex] = useState(null);


    // Sync todos with localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Function to add a new todo
    const addTodo = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "" || inputText.length < 3) {
            alert("Please enter a valid todo (at least 3 characters).");
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            completed: false
        };
        setTodos((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };

    //Handle key down
    const keyDown = (e) => {
        if (e.key === 'Enter'){
            addTodo();
        }
    }; 

    // Function to clear a todo by ID
    const clearTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    // Function to toggle the completed status of a todo by ID
    const toggle = (id) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };
    // Function to clear all completed todos
    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    // Get the filtered list of todos based on the current filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });
    // Display the count of uncompleted todos
    const todoLeft = todos.filter((todo) => !todo.completed).length;

    //Add reordering functionality
    const handleDragStart = (index) => {
        if(index >= 0 && index < todos.length){
            setDragIndex(index);
        }
    };

    const handleDragOver = (e)=> {
        e.preventDefault();
    };
    //function to reoder an item
    const reorderTodos = (index) => {
        // Early exit for invalid cases
        if (dragIndex === null || dragIndex === index || dragIndex >= todos.length || index >= todos.length) {
            return;
        }

        const result = [...todos];
        const [movedTodo] = result.splice(dragIndex, 1);
        result.splice(index, 0, movedTodo);
        setTodos(result);
        setDragIndex(null);
    }


    // Context value to be provided to consuming components
    const contextValue = {
        todos: filteredTodos,
        addTodo,
        clearTodo,
        toggle,
        clearCompleted,
        todoLeft,
        filter,
        inputRef,
        keyDown,
        setFilter,
        handleDragOver,
        handleDragStart,
        reorderTodos,
    };

    return <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>;
};
