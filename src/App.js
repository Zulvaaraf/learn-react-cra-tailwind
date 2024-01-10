import Movie from './components/Movie';

function App() {
  return (
    <div className="w-full bg-gray-950 h-screen">
      <nav className="bg-[#0e0e0e] flex items-center absolute top-0 left-0 z-10 w-full my-2 p-3">
        <div className="container mx-auto">
          <h2 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-slate-300 font-extrabold text-3xl text-center uppercase">movlix</h2>
        </div>
      </nav>
      <div className="container pt-20 mx-auto">
        <div className="lg:w-12/12 sm:w-full mx-auto bg-[#0e0e0e] h-screen">
          <div className="px-5 py-3">
            <input type="text" placeholder="Search Here..." className="p-3 bg-black rounded-sm w-full focus:outline-none text-slate-300" />
          </div>
          <div className="flex flex-wrap my-4 justify-center gap-2">
            <Movie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
