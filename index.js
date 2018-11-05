$.getJSON("./passholder_vs_duration.json").then(function(jsonData) {
      const durations = [
        {name: "Flex Pass", data: []},
        {name: "Monthly Pass", data: []},
        {name: "Walk-Up", data: []}
      ];

      jsonData.keys(obj).forEach(function(key) {
        const passholderType = obj;
        durations[passholderType] = obj[k];
      });

    	var data = {
    		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
        series: durations
    };
    //options variable will go here
    var options = {
      width: 400,
      height: 300,
      distributeSeries: true
    };
  
   //define chart variable will go here
    var chart = new Chartist.Bar('.ct-chart', data, options);
  });