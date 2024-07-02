import {Main} from './components/Main';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [showModal,setShowModal] = useState(false);
  const [data,setData] = useState(null);
  function handleToggleModal(){
    setShowModal(!showModal);
  }
  const NASA_API = import.meta.env.VITE_NASA_API_KEY;
  // using useEffect to fetch data from api
  useEffect(()=>{
    async function fetchAPIData(){
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_API}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log(apiData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  },[]);
  return (
    <>
    {data ? (<Main data = {data}/>):(
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (
      <SideBar data = {data} handleToggleModal = {handleToggleModal}/>
    )}
    {data && (
      <Footer data = {data} showModal = {showModal} handleToggleModal = {handleToggleModal}/>
    )}
    </>
  );
}
export default App;