 window.onload = function () {
 	CanvasJS.addColorSet("greenShades",
                [//colorSet Array
                "#00b9ff",
                "#009bff",
                "#4f62d8",
                "#1455b6",
                "#0e3d73"                
                ]);

    var chart = new CanvasJS.Chart("chartContainer", {
      colorSet: "greenShades",
      title:{
        text: "Shortend title of the selected"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         { label: "Monday", y: 71 },
         { label: "Tuesday", y: 55},
         { label: "Wednesday", y: 50 },
         { label: "Thursday", y: 65 },
         { label: "Friday", y: 45 },
         { label: "Saturday", y: 95 },
         { label: "Sunday", y: 68 }

         ]
       }
       ]
     });

    chart.render();
  }