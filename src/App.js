import './App.css';
import Movie from './components/Movie';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navigation from './components/Nav/Navigation';
import Layout from './components/Layout';

function App() {
  const movies = ['1', '2', '3']


  return (
    <div className="">
      <Navigation />
      <Layout/>
        {/* <Register/> */}
        {/* <Login/> */}
    </div>
  );
}

export default App;
