import './App.css';
import Card from './pages/Card';

function App() {
  function search(x) {
    console.log(x);
  }

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="header-text">MOVLIX</h1>
        <input type="text" placeholder="Cari" className="header-search" onChange={(a) => search(a.target.value)} />
      </header>
      <div className="movie-wrapper">
        <Card />
      </div>
    </div>
  );
}

export default App;
