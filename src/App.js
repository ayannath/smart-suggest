// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import {IntlProvider} from "react-intl";
import Layout from "./components/main/layout";
import German from "./languages/german.json";
import English from "./languages/en.json";
import Dutch from "./languages/dutch.json";
function App() {
  const[language,setlanguage]=useState("en");
   const[selectedLang,setSelectedLang]=useState(English);
  useEffect(()=>{
  if(language==="ge"){
    setSelectedLang(German)
  }
  else if(language==="du"){
     setSelectedLang(Dutch)
  }
  else{
    setSelectedLang(English)
  }
  },[language])
  return (
    <div className="App">
      <select value={language} className='form-select lang-input' onChange={(e)=>setlanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="du">Dutch</option>
        <option value="ge">German</option>
      </select>
      <IntlProvider locale={"EN"} messages={selectedLang}>
      <Layout/>
      </IntlProvider>
    </div>
  );
}

export default App;
