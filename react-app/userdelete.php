<?php
// database connection code
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '', 'datapath');
// get the Id of the record to delete
$rs=0;
$res=mysqli_query($con,"SELECT * FROM USER");
$recordId = $_POST['email'];
if($res)
{
   while( $row = mysqli_fetch_assoc($res)){

       if($row['email']==$recordId){
               $rs=1;
               break;
   }

}

}

else {
        echo "Error fetching USER information: " . mysqli_error($con);
    }

// database delete SQL code
if($rs){
$sql = "DELETE FROM `USER` WHERE `email` = '$recordId'";

// delete record from the database
$rs = mysqli_query($con, $sql);
}
else{
    echo "Record not found";
}

if ($rs) {
    echo "User Deleted Successfully";
} 

?>
