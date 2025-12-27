import { useState } from 'react';
import './App.css'

function Task({name, onPopup}){
  return (
    <>
    <button className='task-button' onClick={onPopup}>{name}</button>
    <br/>
    </>
  )
}

function PopupTask({definition, link}){
  return (
    <>
    <label>
      {definition}
      <br/>
      <br/>
      <b>Выполнение задания здесь: <a href={link}>{link}</a> </b>
    </label>
    </>
  )
}

function StageDiv({stageNumber}){
  const [clickedTask, setClickedTask] = useState({});
  const [isViewing, setIViewing] = useState(false);
  // const tasksStageOne = fetch("api/give_me_stage_one_pidor");
  const tasksStageOne = [
    {
      id: 0,
      stage: 1,
      name: "Взлом гугла",
      definition: "Короче тут очевидный SQL Injection, Быстрее ботайте",
      link: "https://accounts.google.com"
    },
    {
      id: 1,
      stage: 1,
      name: "Взлом телеги",
      definition: "Короче тут поиграйте с эндпоинтами где-то админ оставил креды",
      link: "https://telegram.org"
    },
    {
      id: 2,
      stage: 1,
      name: "Взлом жопы",
      definition: "Чекни жопу",
      link: "https://max.ru"
    },
  ];

  return (
    <>
    {isViewing && <span className='test'>Smth</span>}
    <div className='stage-tasks'>
      <p className='stage-title'>Задания первого этапа</p>
      <tr className='tasks'>
        <td>
        <Task name={tasksStageOne[0].name} onPopup={() => setClickedTask(tasksStageOne[0])}/>
        </td>
        <td>
        <Task name={tasksStageOne[1].name} onPopup={() => setClickedTask(tasksStageOne[1])}/>
        </td>
        <td>
        <Task name={tasksStageOne[2].name} onPopup={() => setClickedTask(tasksStageOne[2])}/>
        </td>
        <td>
        <Task name={tasksStageOne[0].name} onPopup={() => setClickedTask(tasksStageOne[0])}/>
        </td>
        <td>
        <Task name={tasksStageOne[1].name} onPopup={() => setClickedTask(tasksStageOne[1])}/>
        </td>
        <td>
        <Task name={tasksStageOne[2].name} onPopup={() => setClickedTask(tasksStageOne[2])}/>
        </td>
      </tr>
      <br/>
      <p className='stage-title'>Условие задачи <span>{clickedTask.name}</span></p>
      <PopupTask definition={clickedTask.definition} link={clickedTask.link}/>
    </div>
    </>
  )

}

function App() {

  return (

    <StageDiv stageNumber={1}/>

  )
}

export default App
