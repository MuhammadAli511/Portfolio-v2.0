import React from 'react';
import { azure, cpp, java, logo, pytorch, selenium } from "../assets";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 justify-items-center mx-4 pt-20">
      <div className='green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-between max-w-full'>
        <div className='bg-tertiary rounded-[20px] py-5 px-1 md:px-12 flex justify-between items-center flex-col max-w-full'>
          <img src="https://img.icons8.com/color/96/null/web.png" alt="logo" className="w-20 h-20 md:w-32 md:h-32" />
          <h1 className='text-white text-base md:text-[1.7rem] font-bold mt-5'>Web Development</h1>
          <p className='text-white text-sm md:text-[1.1rem] text-center mt-5'>I have experience in creating fast, secure, and engaging websites that are upto the mark, responsive and user-friendly</p>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/javascript.svg" alt="javascript" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Javascript</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/typescript.svg" alt="Typescript" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Typescript</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/react-native.svg" alt="react" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>React</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/nextjs.svg" alt="Next.js" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Next.js</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/vue-js.svg" alt="Vue.js" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Vue.js</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/nodejs.svg" alt="nodejs" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Node</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/express-js.svg" alt="express" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Express</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/flask.svg" alt="flask" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Flask</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/bootstrap.svg" alt="bootstrap" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Bootstrap</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/tailwindcss.svg" alt="tailiwnd" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Tailiwnd</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/material-ui.svg" alt="material ui" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Material UI</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/sass.svg" alt="sass" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Sass</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/css3.svg" alt="css3" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>CSS3</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/html-5.svg" alt="html5" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>HTML5</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-5 mt-5'>
          </div>
          <div className='flex justify-center items-center gap-5 mt-5'>
          </div>
        </div>
      </div>

      <div className='green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-between max-w-full'>
        <div className='bg-tertiary rounded-[20px] py-5 px-1 md:px-12 flex items-center flex-col max-w-full'>
          <img src="https://img.icons8.com/external-prettycons-flat-prettycons/94/null/external-mobile-development-ui-mobile-prettycons-flat-prettycons.png" alt="logo" className="w-20 h-20 md:w-32 md:h-32" />
          <h1 className='text-white text-base md:text-[1.7rem] font-bold mt-5'>App Development</h1>
          <p className='text-white text-sm md:text-[1.1rem] text-center mt-5'>Crafting app experiences that prioritize user satisfaction and performance, my expertise lies in developing intuitive, feature-rich apps</p>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/android-os.svg" alt="android" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Android</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/kotlin.svg" alt="Kotlin" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Kotlin</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/flutter.svg" alt="Flutter" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Flutter</p>
            </div>
          </div>
        </div>
      </div>

      <div className='green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-between max-w-full'>
        <div className='bg-tertiary rounded-[20px] py-5 px-1 md:px-12 flex items-center flex-col max-w-full'>
          <img src="https://img.icons8.com/external-filled-line-andi-nur-abdillah/96/null/external-Neural-Network-artificial-intelligence-(filled-line)-filled-line-andi-nur-abdillah.png" alt="logo" className="w-20 h-20 md:w-32 md:h-32" />
          <h1 className='text-white text-base md:text-[1.7rem] font-bold mt-5'>ML / AI</h1>
          <p className='text-white text-sm md:text-[1.1rem] text-center mt-5'>Expertise in Machine Learning and Artificial Intelligence techniques, creating intelligent systems that leverage data to automate tasks and improve decision-making</p>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/opencv.svg" alt="opencv" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>OpenCV</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/pandas.svg" alt="Pandas" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Pandas</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/tensorflow.svg" alt="Tensorflow" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Tensorflow</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src={pytorch} alt="PyTorch" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>PyTorch</p>
            </div>
          </div>
        </div>
      </div>


      <div className='green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-between max-w-full'>
        <div className='bg-tertiary rounded-[20px] py-5 px-1 md:px-12 flex justify-between items-center flex-col max-w-full'>
          <img src="https://img.icons8.com/fluency/96/null/source-code.png" alt="logo" className="w-20 h-20 md:w-32 md:h-32" />
          <h1 className='text-white text-base md:text-[1.7rem] font-bold mt-5'>Software Development</h1>
          <p className='text-white text-sm md:text-[1.1rem] text-center mt-5'>I am skilled in building reliable and scalable software solutions that meet the needs of businesses and individuals, utilizing the latest technologies and best practices</p>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src={cpp} alt="c++" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>C++</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/c-programming.svg" alt="C" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>C</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/python.svg" alt="Python" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Python</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src={java} alt="Next.js" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Java</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/golang.svg" alt="redux" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>GoLang</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/mysql.svg" alt="mysql" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>MySql</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/mongodb.svg" alt="MongoDB" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>MongoDB</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/firebase/000000/firebase.svg" alt="firebase" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Firebase</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src={selenium} alt="selenium" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Selenium</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/git.svg" alt="Git" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Git</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3 sm:gap-5 mt-5'>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/amazon-web-services.svg" alt="material ui" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>AWS</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src={azure} alt="Azure" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Azure</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/docker.svg" alt="css3" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Docker</p>
            </div>
            <div className='flex justify-center items-center flex-col transform transition duration-500 hover:scale-125'>
              <img src="https://img.icons8.com/color/96/000000/kubernetes.svg" alt="html5" className='w-14 h-14 sm:w-30 sm:h-30' />
              <p className='text-xs sm:text-base'>Kubernetes</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-5 mt-5'>
          </div>
          <div className='flex justify-center items-center gap-5 mt-5'>
          </div>
        </div>
      </div>



    </div>
  )
}

export default SectionWrapper(About, "about");