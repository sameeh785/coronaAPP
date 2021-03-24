import { ListItemSecondaryAction } from "@material-ui/core";
import { ConfirmationNumberRounded, Height } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./charts.module.css";

export default function Charts({name , coronaData}) {

  let daily = [
    { reportDate: "", totalConfirmed: "", deaths: {} },
  ];
 let country={
    confirmed: { value: "0" },
    recovered: { value: "0" },
    deaths: { value: "0" },
  };
  

  if(name){
   
    country = coronaData.graphCountry(name);
  


    }
    else{
     daily = coronaData.graphData()

    }

 
  // console.log(name);
  // useEffect(() => {

    // async function daily() {
    //   if (!name) {
    //     try {
    //       let respond = await fetch("https://covid19.mathdro.id/api/daily");
    //       let responseData = await respond.json();
    //       setDailyData(responseData);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   } else {
    //     try {
    //       let respond = await fetch(
    //         "https://covid19.mathdro.id/api/countries/" + name
    //       );
    //       let responseData = await respond.json();
    //       setCountryData(responseData);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    // }
    // daily();
  // }, [name]);

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        {!name ? (
          <Line
            data={{
              labels: daily.map(({ reportDate }) => {
                return reportDate;
              }),
              datasets: [
                {
                  label: "Confirmed",
                  data: daily.map(({ totalConfirmed }) => {
                    return totalConfirmed;
                  }),
                  borderColor: "#3333ff",
                  fill: true,
                },
                {
                  label: "Deaths",
                  data: daily.map(({ deaths }) => {
                    return deaths.total;
                  }),

                  borderColor: "red",
                  backgroundColor: "rgba(255,0,0,0.5)",
                  fill: true,
                },
              ]
            }}
          />
        ) : (
          <Bar
            data={{
              labels: ["Infected", "Recovered", "Deaths"],
              datasets: [
                {
                  label: "People",
                  backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                  ],
                  data: [
                    country.confirmed.value,
                    country.recovered.value,
                    country.deaths.value,
                  ]
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${name}` },
            }}
          />
        )}
      </div>
    </div>
  );
}
