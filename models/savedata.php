<?php

// Config: headers
// header('Content-Type: application/json');

// Config: JSON data file
$sprintersdetfilepath = __DIR__ . '/sprinters-details.json';

// --------------

// Save data (sprinters details)
$postdata = file_get_contents("php://input");
echo $postdata;
$sprintersdet_filehandle = fopen($sprintersdetfilepath, 'w');
fwrite($sprintersdet_filehandle, $postdata);
fclose($sprintersdet_filehandle);