import './App.css';
import LookItUp from './lookItUp';
import ListOfInvitedPeople from './listOfPeople';
import Mechanics from './mechanics';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [mechanics, setMechanics] = useState([
    {
      id : 1,
      firstNameLastName : "AAA BBB",
      age : 17,
      gender : "male",
      employmentStatus : "full time",
      shortStory : "AAAAAAAA",
      invited : 0
    },
    {
      id : 2,
      firstNameLastName : "BBB CCC",
      age : 18,
      gender : "male",
      employmentStatus : "full time",
      shortStory : "BBBBBBBB",
      invited : 0
    },
    {
      id : 3,
      firstNameLastName : "CCC DDD",
      age : 19,
      gender : "female",
      employmentStatus : "part time",
      shortStory : "DDDDDDDD",
      invited : 0
    },
    {
      id : 4,
      firstNameLastName : "DDD EEE",
      age : 20,
      gender : "female",
      employmentStatus : "full time",
      shortStory : "CCCCCCCC",
      invited : 0
    },
    {
      id : 5,
      firstNameLastName : "EEE FFF",
      age : 21,
      gender : "male",
      employmentStatus : "part time",
      shortStory : "EEEEEEEEE",
      invited : 0
    },
  ]);

  const [numberOfInvitedPeople, setNumberOfInvitedPeople] = useState(0);

  const addToPartyList = (id) => 
  {
    mechanics.map((mechanic) => {
      if(mechanic.id === id && mechanic.invited == 1){
        alert("You already plan to invite this individual to the outgoing");
      } else{
        if(mechanic.id === id)
        {
          mechanic.invited = 1;
          setNumberOfInvitedPeople(numberOfInvitedPeople + 1);
        }
      }
    })
  };
  const removeFromPartyList = (id) => 
  {
    mechanics.map((mechanic) => {
      if(mechanic.id === id && mechanic.invited == 1){
        mechanic.invited = 0;
        setNumberOfInvitedPeople(numberOfInvitedPeople - 1);
      } else{
        if(mechanic.id === id && mechanic.invited == 0)
        {
          alert("This individual is not even invited to the outgoing");
        }
      }
    })
  };

  return (
    <BrowserRouter>
      <LookItUp numberOfInvitedPeople={numberOfInvitedPeople}/>
      <Routes>
        <Route path="/" element={<Mechanics mechanics={mechanics} onAdd={addToPartyList} onRemove={removeFromPartyList}/>} />
        <Route path="/listOfInvitedPeople" element={<ListOfInvitedPeople />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
