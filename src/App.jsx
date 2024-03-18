import { useState } from 'react';
import './index.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Project from './component/Project/Project';
import Technology from './component/Technology/Technology';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import useLocalStorage from 'use-local-storage';
import data from './jsonData/data.json';
import HashLoader from 'react-spinners/HashLoader';

function App() {
  const [isDark, setIsDark] = useLocalStorage(true);

  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className={`app ${loading ? '' : 'noDisplay'}`} data-theme={isDark ? 'dark' : 'light'}>
        <Navbar isChecked={isDark} handleChange={() => setIsDark(!isDark)} data={data.navbar} />
        <div className="container kotakMain">
          <Header data={data.header} />
          <Project data={data.project} />
          <Technology data={data.tools} />
          <Contact data={data.contact} setLoading={setLoading} />
        </div>
        <Footer data={data.project} />
      </div>

      {!loading && (
        <div className="app loading d-flex flex-column  " data-theme={isDark ? 'dark' : 'light'}>
          <HashLoader className="my-2" />
          Loading
        </div>
      )}
    </>
  );
}

export default App;
