
function App() {
  return (
    <main className="bg-pink-800 text-white ">



{/* Navbar */}
<nav className="border-b flex justify-between items-center p-5 md:px-10 bg-pink-900">
        <div className="text-xl md:text-2xl font-bold">  Khushi Pandey</div>
        <ul className="flex justify-between items-center gap-20" >
          <a href="" className="text-sm md:text-xl">Home</a>
          <a href="" className="text-sm md:text-xl">About</a>
          <a href="" className="text-sm md:text-xl">Projects</a>
        </ul>

   </nav>
   {/* Navbar */}
    
    {/* Header */}
    <header className="grid grid-cols-1 md:grid-cols-2">
      <img src="src\assets\kp.jpeg" className="p-20 md:p-32" style={{ width: '500px' }}/>
      <div className="text flex flex-col items-center text-center items-start gap-5 justify-center p-20 md:p-32 md:pl-10">
        <div className="text-6xl font-bold">Hii There,
          I'm Khushi Pandey!
        </div>
        <div className="text-xl text-green-300"> 
         I am a pasionate full-stack developer with a focus on building morden and responsive web applications.
         </div>
         <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
            Projects
         </button>
   
      </div>
    </header>
    <div className="flex justify-center item-center">
    <svg xmlns="http://www.w3.org/5000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
    </svg>
    </div>
    {/* Header */}
  
    {/* About */}
    <section className="p-10 md: p-32">
      <div className="text-5xl text-center font-bold">About Me</div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">Get to know me!</div>
          <div className="text-lg text-green-300">
            Hi, my name is Khushi Pandey and I'm Pursuing My second year BE in Information Technology.
            I have a passion for web development and Love to create responsive and modern websites.
            I have experience in building web applications using React and Node Js and also familier with database like Sql and MongoDb.
            I'm always eager to learn new Technology and improve my skills.

            </div>
            <div className="text-lg text-green-300">
            I believe that you should never stop growing and that's what I strive to do, 
            I have a passion for technology and a desire to always push the limits of what
             is possible. I am excited to see where my career takes me and am always open to 
             new opportunity.🙂
             
          </div>
        </div>
        <div className="2">
        <div className="text-xl font-bold">My Skills</div>
        <div className="flex flex-wrap py-3 space-x-3 gap-3">
  <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
    HTML
  </button>
  <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
    React JS
  </button>
  <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
    JAVA
  </button>
  <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
    Python
  </button>
  <button className="bg-green-300 hover:bg-green-500 p-3 rounded-md text-green-900 px-5">
    GIT
  </button>
        </div>
        <img src="src\assets\l.jpeg" className="p-20" />
        </div>
      </div>
    </section>
    {/* About */}


    {/*Project */}
    <section className="px-32">
    <div className="text-5xl text-center font-bold">Project</div> 
    <div className="grid grid-cols-2 py-10 space-x-5 ">
      <img src="src\assets\EventM.jpeg" className="p-20 rounded-2xl" />
      <div className="text flex flex-col justify-center items-start gap-3">
        <div className="text-3xl font-bold">Student Event Management System</div>
        <div className="text-xl text-gray-300">
          Student Event Management System is a web application that helps students to manage their eventes and also helps to keep track of their events.
          This application is built using React Js and Node Js and also uses MongoDB as a database.
        </div>
        <div className="flex">
          <img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10
          w-10 rounded-full" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>


        </div>
      </div>
    </div>
    </section>

    {/*footer*/}
    <div className="px-32">
    <div className="border "></div>
    </div>
    <div className="flex justify-between items-center p-10 px-32">
      <div className=""> Contact Me on Mail : <a href="MailTo">pandeykhushi0410@gmail.com</a>
      </div>
    
  
    </div>
   

    </main>

  )
}

export default App
