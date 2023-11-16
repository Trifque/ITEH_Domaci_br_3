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
      profilePic: "https://preview.redd.it/request-for-the-gigachad-v0-87aogy2wid0b1.jpg?width=1000&format=pjpg&auto=webp&s=21809fcbd058e743ae34dad52d3f5e6c20d97df8",
      firstNameLastName : "AAA BBB",
      age : 17,
      gender : "male",
      employmentStatus : "full time",
      shortStory : "AAAAAAAA",
      invited : 0
    },
    {
      id : 2,
      profilePic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1d68920-a0c7-4ffa-8fb3-f87e79aa4d1d/dfgxwma-4b79b467-b359-470d-b04f-7bcf2cafdd46.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxZDY4OTIwLWEwYzctNGZmYS04ZmIzLWY4N2U3OWFhNGQxZFwvZGZneHdtYS00Yjc5YjQ2Ny1iMzU5LTQ3MGQtYjA0Zi03YmNmMmNhZmRkNDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yKO2UGEm0bcjtYwng_HEiE01R8Wtt53mU9gLfm7nxXw",
      firstNameLastName : "BBB CCC",
      age : 18,
      gender : "male",
      employmentStatus : "full time",
      shortStory : "BBBBBBBB",
      invited : 0
    },
    {
      id : 3,
      profilePic: "https://i1.sndcdn.com/avatars-000787434634-i9sqvl-t240x240.jpg",
      firstNameLastName : "CCC DDD",
      age : 19,
      gender : "female",
      employmentStatus : "part time",
      shortStory : "DDDDDDDD",
      invited : 0
    },
    {
      id : 4,
      profilePic: "https://i1.sndcdn.com/artworks-000042323839-e45j8b-t500x500.jpg",
      firstNameLastName : "DDD EEE",
      age : 20,
      gender : "female",
      employmentStatus : "full time",
      shortStory : "CCCCCCCC",
      invited : 0
    },
    {
      id : 5,
      profilePic: "https://i1.sndcdn.com/avatars-mp25tVEAkwcxwIPL-fSBDsg-t500x500.jpg",
      firstNameLastName : "EEE FFF",
      age : 21,
      gender : "male",
      employmentStatus : "part time",
      shortStory : "EEEEEEEEE",
      invited : 0
    },
    {
      id : 6,
      profilePic: "https://media.licdn.com/dms/image/C4D03AQGz-ltVGa16Zw/profile-displayphoto-shrink_800_800/0/1628569426845?e=2147483647&v=beta&t=z7Ke8diJaawmFdLNvtRQSwtZshBpMvKVn753eCPwkAc",
      firstNameLastName : "FFF GGG",
      age : 32,
      gender : "male",
      employmentStatus : "part time",
      shortStory : "FFFFFFFFF",
      invited : 0
    },
    {
      id : 7,
      profilePic: "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png",
      firstNameLastName : "GGG HHH",
      age : 40,
      gender : "female",
      employmentStatus : "full time",
      shortStory : "GGGGGGGGGG",
      invited : 0
    },
  ]);

  const [numberOfInvitedPeople, setNumberOfInvitedPeople] = useState(0);

  const [invitedPeople, setInvitedPeople] = useState([]);

  const refreshInvitedPeople = () => {
    const newInvites = mechanics.filter((mechanic) => mechanic.invited > 0);
    setInvitedPeople(newInvites);
  };


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
          refreshInvitedPeople();
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
        refreshInvitedPeople();
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
        <Route path="/listOfInvitedPeople" element={<ListOfInvitedPeople invitedPeople={invitedPeople} onAdd={addToPartyList} onRemove={removeFromPartyList}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
