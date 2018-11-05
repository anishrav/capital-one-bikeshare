$.getJSON("/data/passholder_vs_duration.json", function(jsonData) {
      const durations = [
        {name: "Flex Pass", data: []},
        {name: "Monthly Pass", data: []},
        {name: "Walk-Up", data: []}
      ];

      Object.keys(jsonData).forEach(function(key) {
        const passholderType = key;
        if (passholderType === "Flex Pass") {
          durations[0].data = jsonData[key];
        } else if (passholderType === "Monthly Pass") {
          durations[1].data = jsonData[key];
        } else {
          durations[2].data = jsonData[key];
        }
      });
      7
    	var data = {
    		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
        series: durations
      };
    
     var chart = new Chartist.Line('.ct-chart-1', data, {
        width: 600,
        height: 400,
        distributeSeries: true,
        plugins: [
          Chartist.plugins.legend()
        ]
      });
   });

$.getJSON("/data/trip_category_vs_duration.json", function(jsonData) {
      console.log('done loading');
      const durations = [
        {name: "Round Trip", data: []},
        {name: "One Way", data: []}
      ];

      Object.keys(jsonData).forEach(function(key) {
        const passholderType = key;
        if (passholderType === "Round Trip") {
          durations[0].data = jsonData[key];
        } else {
          durations[1].data = jsonData[key];
        }

      });
      7
      var data = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
        series: durations
      };
    
     var chart = new Chartist.Line('.ct-chart-2', data, {
        width: 800,
        height: 400,
        distributeSeries: true,
        plugins: [
          Chartist.plugins.legend()
        ]
      });
  });

$.getJSON("/data/duration_vs_bike_id.json", function(jsonData) {
      const durations = jsonData;

      7
      var data = {
        labels: ["6435.0", "4727.0", "6254.0", "5839.0", "6162.0", "6583.0", "6328.0", "6618.0", "6075.0", "6635.0"],
        series: durations
      };
    
     var chart = new Chartist.Bar('.ct-chart-3', data, {
        width: 800,
        height: 400,
        distributeSeries: true,
        plugins: [
          Chartist.plugins.legend()
        ]
      });
  });

$.getJSON("/data/distance_vs_bike_id.json", function(jsonData) {
      const distances = jsonData;

      7
      var data = {
        labels: ["6435.0", "4727.0", "6254.0", "5839.0", "6162.0", "6583.0", "6328.0", "6618.0", "6075.0", "6635.0"],
        series: distances
      };
    
     var chart = new Chartist.Bar('.ct-chart-4', data, {
        width: 600,
        height: 400,
        distributeSeries: true,
        plugins: [
          Chartist.plugins.legend()
        ]
      });
  });