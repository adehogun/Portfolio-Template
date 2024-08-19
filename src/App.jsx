import { BrowserRouter } from 'react-router-dom';
// import ColBox from './components/ColBox';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
//  ColBox
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 max-w-full overflow-x-hidden">
        <div>
          {/* <Map/> */}
          <Navbar />
          <Hero />
        </div>

        <div className="bg-white bg-cover bg-center bg-no-repeat">
          <About />
          {/* <ColBox/> */}
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10 h-[700px] mt-5">
          <Tech />
        </div>

<div >
   <Projects />
</div>
       

        <div
          className="bg-white flex justify-center">
          <div>
            <Experience />
          </div>
        </div>
        <div className="relative z-0 bg-gray-500">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
