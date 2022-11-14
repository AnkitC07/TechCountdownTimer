// how to insert data into database in php language?
<?php

// Get the body of the POST request
$data = file_get_contents('php://input');

// Decode the JSON string so you can work with it in PHP
$decodedData = json_decode($data);

// $decodedData is now an array of the data you sent from the browser
foreach($decodedData as $row) {
  // write the row to your database here
}


function AddShoots() {
  $.ajax({
    method: "POST", // the post to your Pi I'm assuming?
    dataType: "json",
    url: "http://192.168.1.8",
    success: function (data) {
      $.ajax({
        method: "POST", // this is going out to your PHP backend
        dataType: "json",
        url: "http://localhost:8080/SaveMyData.php",
        data: data,
        success: function (response) {
          // do stuff with the response if you'd like
        })
      });
    },
  });
}
?>

