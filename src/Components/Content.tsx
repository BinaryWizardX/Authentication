import { useState } from "react"


function Content() {

  const[subject, setSubject] = useState<string >(" ");
  const[message, setMessage] = useState<string>("");
  return (
    <main className='max-w-4xl mx-auto'>

        <section id='hero' className='flex flex-col-reverse justify-center items-center sm:flex-row p-6 gap-8 mb-12 scroll-mt-40 
        widescreen:section-min-height tallscreen:section-min-height'>

          <article className='sm:w-1/2 '>
            <h2 className='max-w-md text-4xl text-center font-bold sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
              We Boldly Go <span className='text-indigo-700 dark:text-indigo-300'>Where No Rocket</span>  Has Gone Before...

            </h2>
            <p className='text-2xl text-slate-700 mt-4 text-center sm:text-left dark:text-slate-400'>

              We're building rockets for the next centrury today. From the moon to Mars, Jupiter and beyond ....

            </p>
            <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
              Think Acmee Rockets
            </p>
          </article>

          <img className='w-1/2' src='../src/assets/rocketdab.png'/>

        </section>

        <hr className='border-black w-1/2 mx-auto dark:border-white' />

        <section id='rockets' className='p-6 my my-2 scroll-mt-32
        widescreen:section-min-height tallscreen:section-min-height'>
        <h2 className='text-center text-4xl sm:text-5xl dark:text-white text-slate-900 font-bold mb-6'>Our Rockets</h2>

          <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row gap-8'>
            <li className='mx-auto w-2/3 sm:w-5/6 flex flex-col items-center  border-solid border-2 border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl '>

                <img src='../src/assets/rocketman.png' className='w-1/2 mb-6'/>
                <h3 className='text-3xl dark:text-white text-slate-900 font-bold'>Explorer</h3>
                <p className='sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-500'>Affordable Exploration</p>
                <p className='hidden sm:block mt-2 text-3xl text-center dark:text-slate-500 text-slate-900'>$</p>

            </li>

            <li className='mx-auto w-2/3 sm:w-5/6 flex flex-col items-center  border-solid border-2 border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl '>

                <img src='../src/assets/rocketride.png' className='w-1/2 mb-6'/>
                <h3 className='text-3xl dark:text-white text-slate-900 font-bold '>Adventure</h3>
                <p className='sm:hidden mt-2 text-2xl text-center dark:text-slate-500'>Best Selling Rocet</p>
                <p className='hidden sm:block mt-2 text-3xl text-center dark:text-slate-500'>$$</p>

            </li>


            <li className='mx-auto w-2/3 sm:w-5/6 flex flex-col items-center  border-solid border-2 border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl '>

                <img src='../src/assets/rocketlaunch.png' className='w-1/2 mb-6'/>
                <h3 className='text-3xl dark:text-white text-slate-900 font-bold'>Infinity</h3>
                <p className='sm:hidden mt-2 text-2xl text-center dark:text-slate-500'>Luxary Starship</p>
                <p className='hidden sm:block mt-2 text-3xl text-center text-slate-500'>$$$</p>

            </li>

          </ul>

          

        </section>

        <hr className='border-black w-1/2 mx-auto dark:border-white' />

        <section id='testimonials' className='p-6 my my-2 scroll-mt-32
        widescreen:section-min-height tallscreen:section-min-height'>

          <h2 className='text-center text-4xl sm:text-5xl dark:text-white text-slate-900 font-bold mb-6'>Testomonials</h2>

          <figure className='my-12'>

            <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-6 py-12 rounded-3xl relative'>

                <p className="text-2xl sm:text-3xl text-left mt-2 text-black dark:text-slate-400
                before:content-['\201C'] before:absolute before:top-5 before:left-0 before:text-white before:text-9xl before:opacity-25 before:font-serif
                after:content-['\201D'] after:absolute   after:right-2 after:text-white after:text-9xl after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:font-serif">
                    Acme
                    has always been there
                    for me. Their Explorer rocket arrived in a wooden crate as expected.
                    Life-long customer! A++ shopping experience.
                </p>



            </blockquote>
            <figcaption className='text-right text-xl sm:text-2xl dark:text-slate-400 text-slate-500 italic font-bold'>
                &#8212;Marvin The Martian &amp; K-9
            </figcaption>

          </figure>

          <figure className='my-12'>

            <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-6 py-12 rounded-3xl relative'>

                <p className="text-2xl sm:text-3xl text-left mt-2 text-black dark:text-slate-400
                before:content-['\201C'] before:absolute before:top-5 before:left-0 before:text-white before:text-9xl before:opacity-25 before:font-serif
                after:content-['\201D'] after:absolute   after:right-2 after:text-white after:text-9xl after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:font-serif">
                    I knew I not only wanted &#8212; <span className="italic">I needed</span> &#8212; Acme's Infinity
                        Rocket for my mission in space. Acme delivered in one day! Nothing says <q className="italic">Take
                            me
                            to your leader</q> like Acme's Infinity Rocket! 💯
                </p>



            </blockquote>
            <figcaption className='text-right text-xl sm:text-2xl dark:text-slate-400 text-slate-500 italic font-bold'>
                 &#8212;Buzz Lightyear
            </figcaption>

          </figure>


          <figure className='my-12'>

            <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-6 py-12 rounded-3xl relative'>

                <p className="text-2xl sm:text-3xl text-left mt-2 text-black dark:text-slate-400
                before:content-['\201C'] before:absolute before:top-5 before:left-0 before:text-white before:text-9xl before:opacity-25 before:font-serif
                after:content-['\201D'] after:absolute   after:right-2 after:text-white after:text-9xl after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:font-serif">
                  
                  The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
                        occassions. <span className="italic">This makes me very, very angry!</span> Nevertheless, K-9
                        and I have awarded Acme the
                        Martian contract for space exploration rockets based on Acme's quality and sturdy designs.
                  
                </p>



            </blockquote>
            <figcaption className='text-right text-xl sm:text-2xl dark:text-slate-400 text-slate-500 italic font-bold'>
                 &#8212;Wile E. Coyote, Genius
            </figcaption>

          </figure>

        </section>

        <hr className='border-black w-1/2 mx-auto dark:border-white' />


        <section id='contact' className='p-6 my my-2 scroll-mt-32'>

          <h2 className='text-center text-4xl sm:text-5xl dark:text-white text-slate-900 font-bold mb-6'>Contact Us</h2>

          <form action="" className="flex flex-col items-start max-w-3xl ">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" placeholder="Your Subject" value={subject} onChange={(e)=>{
              setSubject(e.target.value)
            }} className="text-black w-full h-8 p-2 rounded-md border-2 border-slate-400 dark:border-none"/>
            
            <label className="mt-3">Message: </label>
            <textarea value={message} onChange={(e)=>{
              
              setMessage(e.target.value)
            }}
            className="text-black w-full p-2 text-xl rounded-md h-80 border-2 border-slate-400 dark:border-none"
            placeholder="Your Message"
            ></textarea>

            <button type="submit" className="mt-3 bg-teal-700 px-4 py-1 rounded-md hover:bg-teal-600
            border border-solid border-slate-900 dark:border-none text-white">Submit</button>

          </form>

          

          

        </section>

    </main>
  )
}

export default Content