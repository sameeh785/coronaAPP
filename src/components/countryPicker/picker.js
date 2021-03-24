import React, { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import style1 from "./picker.module.css";
export default function Picker({ searchCountry , coronaData}) {
 let country = { countries: []};
  
   
    country = coronaData. countryNames()
 
  return (
    <div className={style1.a1}>
      <FormControl>
        <NativeSelect
          className={style1.a2}
          onChange={(event) => {
            searchCountry(event.target.value);
          }}
        >
          <option value="">Global</option>
          {country.countries.map((list, index) => {
            return (
              <option key={index} value={list.name}>
                {list.name}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
