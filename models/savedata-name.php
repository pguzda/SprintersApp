<?php

// Config: headers
// header('Content-Type: application/json');

// Config: JSON data file
$sprintersfilepath = __DIR__ . '/sprinters.json';

// --------------

// Save data (sprinters details)
$postdata = file_get_contents("php://input");
echo $postdata;
$sprinters_filehandle = fopen($sprintersfilepath, 'w');
fwrite($sprinters_filehandle, $postdata);
fclose($sprinters_filehandle);