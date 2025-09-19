import './App.css';
import { useState } from 'react';
import icon_sun from '../src/assets/icon-sun.svg';
import icon_moon from '../src/assets/icon-moon.svg';
import bg_desktop_light from '../src/assets/bg-desktop-light.jpg';
import bg_desktop_dark from '../src/assets/bg-desktop-dark.jpg';
import bg_mobile_light from '../src/assets/bg-mobile-light.jpg';
import bg_mobile_dark from '../src/assets/bg-mobile-dark.jpg';
import {TodoProvider} from './components/TodoContext'; //import todo provider from TodoContext
import Input from './components/InputBar'; //import input component
import Todo from './components/Todo'; // import todo section
import Footer from './components/footer'; 


function App() {
  const [theme, setTheme] = useState(false); // intialize theme state using useState hook

  return (
      <section className={`w-screen min-h-screen relative overflow-hidden ${theme ? 'bg-[hsl(235,21%,11%)]' : 'bg-white'}`}>
       {/* bg image */}
       <img src={theme ? bg_mobile_dark : bg_mobile_light} alt="bg-mobile-dark" className='absolute top-0 left-0 w-full h-52 object-cover md:hidden' />
       <img src={theme ? bg_desktop_dark : bg_desktop_light} alt="bg-desktop-dark" className='absolute top-0 left-0 w-full h-72 object-cover hidden md:block' />
       
        {/* main Section */}
        <section className='relative top-[5%] bottom-[5%] left-[10%] md:left-[25%] lg:left-[30%] w-[80%] md:w-[50%] lg:w-[40%] min-h-[550px] z-10 flex flex-col items-center gap-2 my-4'>
      
         {/* Header Section */}
         <header className='flex flex-row items-center justify-between w-full py-6'>
           <h1 className='text-3xl font-semibold text-shadow-xs text-white'>TODO</h1>
           <img src={theme ? icon_sun : icon_moon} 
             alt="theme-icon" 
             className='icon-sun' 
             onClick={() => setTheme(!theme)}/>
         </header>

          {/* wrap Todo component with TodoProvider to provide context */}
           <TodoProvider>
            <section className={`flex flex-row my-5 w-full shadow-2xl rounded-md ${theme ? 'bg-[hsl(235,24%,19%)]' : 'bg-white'}`}>
              <Input />
            </section>
            <section className={`w-full min-h-[400px] shadow-2xl ${theme ? 'bg-[hsl(235,24%,19%)]' : 'bg-white'}`}>
              <Todo />
            </section>
           </TodoProvider>
          {/* Todo Section */}
        </section>
        {/* footer section */}
        <Footer />
      </section>
  );
};

export default App;
