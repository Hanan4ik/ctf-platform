import { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

// Essential for accessibility
Modal.setAppElement('#root');

function Task({ name, onPopup }) {
  return (
    <button className='task-button' onClick={onPopup}>
      {name}
    </button>
  );
}

function PopupTask({ task, onClose }) {
  return (
    <div className="modal-inner">
      <div className="modal-header">
        <h2>{task.name}</h2>
      </div>
      <div className="modal-body">
        <p className="definition">{task.definition}</p>
        <div className="link-section">
          <b>Выполнение задания здесь: </b>
          <a href={task.link} target="_blank" rel="noreferrer">{task.link}</a>
        </div>
      </div>
      <button className="action-btn" onClick={onClose}>Понятно</button>
    </div>
  );
}

function StageDiv({ stageNumber }) {
  const [clickedTask, setClickedTask] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  // const tasks = fetch(api/give_me_number_1)

  const tasksStageOne = [
    { id: 0, name: "Взлом гугла", definition: "Короче тут очевидный SQL Injection, Быстрее ботайте", link: "https://accounts.google.com" },
    { id: 1, name: "Взлом телеги", definition: "Короче тут поиграйте с эндпоинтами где-то админ оставил креды", link: "https://telegram.org" },
    { id: 2, name: "Взлом жопы", definition: "Чекни жопу", link: "https://max.ru" },
    { id: 3, name: "Взлом гугла", definition: "Короче тут очевидный SQL Injection, Быстрее ботайте", link: "https://accounts.google.com" },
    { id: 4, name: "Взлом телеги", definition: "Короче тут поиграйте с эндпоинтами где-то админ оставил креды", link: "https://telegram.org" },
    { id: 5, name: "Взлом жопы", definition: "Чекни жопу", link: "https://max.ru" },
  ];

  const openModal = (task) => {
    setClickedTask(task);
    setModalIsOpen(true);
  };

  return (
    <div className='stage-container'>
      <p className='stage-title'>Задания {stageNumber} этапа</p>
      
      {/* Adaptive grid for task buttons */}
      <div className='tasks-grid'>
        {tasksStageOne.map((task, index) => (
          <Task 
            key={index} 
            name={task.name} 
            onPopup={() => openModal(task)} 
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content-box"
        overlayClassName="modal-overlay-bg"
      >
        {clickedTask && (
          <PopupTask 
            task={clickedTask} 
            onClose={() => setModalIsOpen(false)} 
          />
        )}
      </Modal>
    </div>
  );
}

export default function App() {
  return (
  <>
  <StageDiv stageNumber={1}/>
  <StageDiv stageNumber={2}/>
  </>
);
}