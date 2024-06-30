import {Main} from './components/Main';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';
import { useState } from 'react';
function App() {
  const [showModal,setShowModal] = useState(false);
  function handleToggleModal(){
    setShowModal(!showModal);
  }
  return (
    <>
    <Main/>
    {showModal && (
      <SideBar handleToggleModal = {handleToggleModal}/>
    )}
    <Footer showModal = {showModal} handleToggleModal = {handleToggleModal}/>
    </>
  );
}
export default App;