<?php
$email =$_POST['YourEmail'];
$emailvert =$_POST['VerifyEmail'];
$name =$_POST['YourName'];
$username =$_POST['UserName'];
$password =$_POST['Password'];
$hint =$_POST['Hint'];



if (!enpty ($username) || !empty($password)) {
    $host ="lxsrv107.oru.edu:3306";
    $dbUsername = "SQL Linux Team2";
    $dbPassword = "Data^machine2";
    $dbname = "Team2"; 

    //create connection 
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if(mysqli_connection_error()) {
        die('Connection Error('.mysqli_connect_error().')'.mysqli_connect_error());
        
    }else {
        $sql = "INSERT INTO USER (Email, Name, Username, Password, Reminder) values ('$email' , '$name' , '$username' , '$password', '$hint' )";

        if ($conn->query($sql)) {
            echo "New account created" ;
        } else {
            echo "error" .$sql. "<br>" .$conn->error;
        }
        $conn->close();
       // $SELECT = "SELECT INVENTORY From "
    }
}else { 
    echo "All field are required";
    die();
}

?>