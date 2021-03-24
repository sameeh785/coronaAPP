import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import style from "./cards.module.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  border1: {
    borderBottom: "10px solid rgba(0, 0, 255, 0.5)",
  },
  border2: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
  },
  border3: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
  },
});
export default function Cards({ data, coronaData }) {
  let apiData = {
    confirmed: { value: "0" },
    recovered: { value: "0" },
    deaths: { value: "0" },
    lastUpdate: "",
  };

  if (data) {
    console.log(data);
    apiData = coronaData.countryData1(data);
  } else {
    apiData = coronaData.countryData();
  }

  // useEffect(() => {
  // async function data1() {
  //   try {
  //     if (data) {
  //       let res = await fetch(
  //         "https://covid19.mathdro.id/api/countries/" + data
  //       );
  //       let respond = await res.json();
  //       setData(respond);
  //     } else {
  //       let res = await fetch("https://covid19.mathdro.id/api");
  //       let respond = await res.json();
  //       console.log(respond);
  //       setData(respond);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // data1();
  // }, [data]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid container spacing={3} className={style.ab}>
        <Grid item xs={12} sm={3}>
          <Card className={(classes.root, classes.border1)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={apiData.confirmed.value}
                  duration={4}
                  separator=","
                />
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {new Date(apiData.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of active cases of <br /> Covid-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={(classes.root, classes.border2)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={apiData.recovered.value}
                  duration={4}
                  separator=","
                />
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {new Date(apiData.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of Recovered cases of <br /> Covid-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={(classes.root, classes.border3)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={apiData.deaths.value}
                  duration={4}
                  separator=","
                />
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {new Date(apiData.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of Deaths cases of <br /> Covid-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
