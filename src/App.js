import React, { useState,Suspense } from "react";
import { Cards, Picker, Charts } from "./components/index";
import {apiData} from './components/api'


const coronaData = apiData();
export default function App() {
  let [country, setCountry] = useState("");
  function selectCountry(value) {


    setCountry(value);
  }

  return (
    <>
      <div style={{ width: "100%", textAlign: "center", margin: "20px 0" }}>
        <img src="./image.png" class="responsive" />
      </div>
      <Suspense fallback={<h1>LOading...</h1>}>
      <Cards data={country} coronaData={coronaData} />  

        <Picker searchCountry={selectCountry} coronaData={coronaData}  />  
      <Charts name={country}  coronaData={coronaData} />
      </Suspense>
      

      
    </>
  );
}
