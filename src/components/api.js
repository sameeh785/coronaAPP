let status = "Pending";
let result;
let status2 = "Pending";
let result2;
let countryPickStatus = "Pending";
let countryPickResult;
let countryGraphStatus = "Pending";
let countryGraphData;
let countryGraphStatus2 = "Pending";
let countryGraphData2;

const countryPicker1 = () => {
  return fetch("https://covid19.mathdro.id/api/countries")
    .then((data) => {
      return data.json();
    })
    .then((realData) => {
      return realData;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

// const countryData = (name) => {

//   if (name) {
//     return fetch("https://covid19.mathdro.id/api/countries/" + name)
//       .then((data) => data.json())
//       .then((realData) => realData)
//       .catch((e) => e);
//   } else {
//     return fetch("https://covid19.mathdro.id/api")
//       .then((data) => {
//         return data.json();
//       })
//       .then((realData) => {
//         return realData;
//       })
//       .catch((e) => {
//         console.log(e);
//         return e;
//       });
//   }
// };
const countryData = () => {
  return fetch("https://covid19.mathdro.id/api")
    .then((data) => {
      return data.json();
    })
    .then((realData) => {
      return realData;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};
const countryData2 = (name) => {
  return fetch("https://covid19.mathdro.id/api/countries/" + name)
    .then((data) => data.json())
    .then((realData) => realData)
    .catch((e) => e);
};
const graphData1 = () => {
  return fetch("https://covid19.mathdro.id/api/daily")
    .then((data) => {
      return data.json();
    })
    .then((realData) => {
      return realData;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const graphData2 = (name) => {
  return fetch("https://covid19.mathdro.id/api/countries/" + name)
    .then((data) => {
      return data.json();
    })
    .then((realData) => {
      return realData;
    })
    .catch((e) => {
      return e;
    });
};

// const countryPick = (promise) => {
//   let suspender = promise
//     .then((r) => {
//       countryPickStatus = "success";
//       countryPickResult = r;
//     })
//     .catch((e) => {
//       countryPickStatus = "error";
//       countryPickResult = e;
//     });

//   if (countryPickStatus === "Pending") {
//     throw suspender;
//   } else if (countryPickStatus === "error") {
//     throw countryPickResult;
//   } else {

//     return countryPickResult;
//   }
// };

const countryPick = (promise) => {
  let suspender = promise
    .then((r) => {
      countryPickStatus = "success";
      countryPickResult = r;
    })
    .catch((e) => {
      countryPickStatus = "error";
      countryPickResult = e;
    });

  if (countryPickStatus === "Pending") {
    throw suspender;
  } else if (countryPickStatus === "error") {
    throw countryPickResult;
  } else {
    return countryPickResult;
  }
};

const wrapPromise = (promise) => {
  let suspender = promise
    .then((r) => {
      status = "success";
      result = r;
    })
    .catch((e) => {
      status = "error";
      result = e;
    });

  if (status === "Pending") {
    throw suspender;
  } else if (status === "error") {
    throw result;
  } else {
    return result;
  }
};
const wrapPromise2 = (promise) => {
  let suspender = promise
    .then((r) => {
      status2 = "success";
      result2 = r;
    })
    .catch((e) => {
      status2 = "error";
      result2 = e;
    });

  if (status2 === "Pending") {
    throw suspender;
  } else if (status2 === "error") {
    throw result2;
  } else {
    return result2;
  }
};
const graphResult = (promise) => {
  let suspender = promise
    .then((r) => {
      countryGraphStatus = "success";
      countryGraphData = r;
    })
    .catch((e) => {
      countryGraphStatus = "error";
      countryGraphData = e;
    });

  if (countryGraphStatus === "Pending") {
    throw suspender;
  } else if (countryGraphStatus === "error") {
    throw countryGraphData;
  } else {
    console.log(countryGraphData);
    return countryGraphData;
  }
};
const graphResult2 = (promise) => {
  let suspender = promise
    .then((r) => {
      countryGraphStatus2 = "success";
      countryGraphData2 = r;
    })
    .catch((e) => {
      countryGraphStatus2 = "error";
      countryGraphData2 = e;
    });

  if (countryGraphStatus2 === "Pending") {
    throw suspender;
  } else if (countryGraphStatus2 === "error") {
    throw countryGraphData2;
  } else {
    return countryGraphData2;
  }
};
export const apiData = () => {
  return {
    countryNames: function () {
      return countryPick(countryPicker1());
    },
    countryData: function () {
      return wrapPromise(countryData());
    },
    countryData1: function (country) {
      return wrapPromise2(countryData2(country));
    },
    graphData: function () {
      return graphResult(graphData1());
    },
    graphCountry: function (country) {
      return graphResult2(graphData2(country));
    },
  };
};
