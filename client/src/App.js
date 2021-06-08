import React, { useState } from 'react';
import './App.scss';
import { Winner } from "./assets/images/index"
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Main from './pages/Main';

function App() {
  const [modal, setModal] = useState(false)
  const selectModal = () => {
    setModal(!modal)
  }
  return (
    <div className="App">
      <Header />
      <Main />
      <button style={{ backgroundColor: "red" }} onClick={selectModal}
      >Open Modal</button>
      <Modal
        displayModal={modal}
        closeModal={selectModal}
        title={"Modal Title Text"}
        body={"Modal Body Text"}
        img={Winner}
      />
    </div>
  );
}

export default App;
