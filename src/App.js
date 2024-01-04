import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-between px-14 items-center bg-[#121212] opacity-95 sticky h-14">
        <div className="flex gap-8 item-center text-2xl text-white">
          <div className="flex items-center">
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
          <div className="flex gap-2 items-center  justify-center">
            <FaYoutube className="text-2xl text-red-500"/>
          <span className="text-xl font-medium">Youtube</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
