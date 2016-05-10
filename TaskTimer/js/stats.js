
 $(document).ready(function(){

// Test Data
var myData = [71,55,50,65,45,95,68];
var myData2 = [45,75,14,33,57,42,68];
var myDate = ["April 4-11", "April 12-19", " April 20-27"];


CanvasJS.addColorSet("greenShades",
                [
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
      data: [              
        { 
         type: "column",
         dataPoints: 
         [
           { label: "Monday", y: myData[0] },
           { label: "Tuesday", y: myData[1]},
           { label: "Wednesday", y: myData[2] },
           { label: "Thursday", y: myData[3] },
           { label: "Friday", y: myData[4] },
           { label: "Saturday", y: myData[5] },
           { label: "Sunday", y: myData[6] }
         ]
       }
       ]
     });

    chart.render();



    function myChart(dataArray){
      chart = new CanvasJS.Chart("chartContainer", {
      colorSet: "greenShades",
      title:{
        text: "Shortend title of the selected"              
      },
      data: [              
        { 
         type: "column",
         dataPoints: 
         [
           { label: "Monday", y: dataArray[0] },
           { label: "Tuesday", y: dataArray[1]},
           { label: "Wednesday", y: dataArray[2] },
           { label: "Thursday", y: dataArray[3] },
           { label: "Friday", y: dataArray[4] },
           { label: "Saturday", y: dataArray[5] },
           { label: "Sunday", y: dataArray[6] }
         ]
       }
       ]
     });

      chart.render();
    }



    // Change chart when a item is selected
    $(".myBtn").click(function(){

      myChart(myData2);

    });


    $(".weekArw").click(function(){

      $("#changeRangeTitle").text(myDate[1]);

    });





// Keep track of whether or not a selection is active
var selectedBtn = false;
// Using on() binds the dynamically created items, allowing them to be clicked
$(".myBtn").click(function(){
  
  // Only allow One item to be selected at a time
  if (!selectedBtn) {
      $(this).siblings().removeClass("activeItm");
      $(this).addClass("activeItm");
      selectedBtn = true;
      // alert($(".activeItm").index());
    } else {
      $(this).siblings().removeClass("activeItm");
      $(this).removeClass("activeItm");
      selectedBtn = false;
    }


});

// $("#rightBtnHolderMain").click(function(){
//   var val = $(".activeItm").index();
  
//       $("#selection-button").siblings().removeClass("activeItm");
//       $("#selection-button").eq(val).next().addClass("activeItm");
     


// });





});
