import  { useEffect, } from 'react'

function Header() {

    useEffect(()=>{


        const initApp = ()=>{
            
            const mobileMenu = document.getElementById('mobile-menu')!
            const hamburgerButton = document.getElementById('hamburger-button')!
            const navButtons = document.querySelectorAll('.nav-items')!

            

            const toggleMenu = ()=>{
               
                mobileMenu.classList.toggle('block')
                mobileMenu.classList.toggle('hidden')
                hamburgerButton.classList.toggle('toggle-btn')
                
            }

            hamburgerButton.addEventListener('click',()=>{
                
                toggleMenu()
            })
            
            navButtons.forEach((button)=>{
                button.addEventListener('click',()=>{
                    toggleMenu()
                })
            })
        }
        initApp()
    },[])


  return (

    <header className='bg-teal-700 text-white sticky top-0 z-10'>

        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>

            <h1 className='text-3xl '>
                <a href='#'>🚀 Acmee rockets</a>
            </h1>

            <button id='hamburger-button' className='text-3xl md:hidden focus:outline-none cursor-pointer'>

                <div id='hamburger-top' className=" w-8 h-1 bg-white rounded-md
                 " ></div>

            </button>

            <nav className='hidden md:block space-x-8 text-2xl'>
                
                <a href="#rockets" className='hover:opacity-90'>Rockets</a>
                <a href="#testimonials" className='hover:opacity-90'>Testimonials</a>
                <a href="#contact" className='hover:opacity-90'>Contact</a>


            </nav>

           

        </section>

        
        <section id='mobile-menu'  className='w-full absolute top-["68px"] md:hidden hidden animate-mobile_menu_animation '>

            
            <nav className=' bg-black h-screen flex flex-col justify-start items-center text-7xl'>
                <a href='#' className='nav-items opacity-90 p-6 hover:text-teal-700'>Home</a>
                <a href="#rockets" className='nav-items hover:opacity-90 p-6 hover:text-teal-700'>Rockets</a>
                <a href="#testimonials" className='nav-items hover:opacity-90 p-6 hover:text-teal-700'>Testimonials</a>
                <a href="#contact" className='nav-items hover:opacity-90 p-6 hover:text-teal-700'>Contact</a>
                <a href='#footer' className='nav-items opacity-90 p-6 hover:text-teal-700'>Legal</a>
                
            </nav>

        </section>
        

    </header>
    
  )
}

export default Header