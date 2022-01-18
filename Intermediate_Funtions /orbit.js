function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let pi2 = 2* Math.PI
    let result = [];
  
    const orbitalPeriod = (obj) => {
      console.log(obj)
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(pi2* b);
      return {name: obj.name, orbitalPeriod: orbPeriod};
    }
    for (let elem in arr) {
      result.push(orbitalPeriod(arr[elem]));
    }
    
    console.log(result)
    // return result
  }
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])