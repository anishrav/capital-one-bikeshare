$.getJSON("./passholder_vs_duration.json").then(function(ids) {
    	var data = {
    		labels: ids.map(function(id) {
        return id.Label;
      }),
      series: ids.map(function(id) {
        return id.Value;
      })
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