<?php 
$type = $_GET['tp']; 
if($type=='login') login(); 
elseif($type=='Teacherlogin') Teacherlogin(); 
elseif($type=='rate') rate();
elseif($type=='rate1') rate1();
elseif($type=='rate2') rate2();
elseif($type=='feed') feed(); 
elseif($type=='review') review(); 
elseif($type=='review1') review1(); 
elseif($type=='review2') review2(); 

function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $un = $json['un']; $pwd = $json['pwd']; 
       $userData =''; 
       $query = "SELECT * FROM s_login WHERE un='$un' and pwd='$pwd'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }
}

function Teacherlogin() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $un = $json['un']; $pwd = $json['pwd']; 
       $userData =''; 
       $query = "SELECT * from `t_login` where un='$un' and pwd='$pwd'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }
 }


function rate(){
    require 'config.php'; 
    $json = json_decode(file_get_contents('php://input'), true);
    $temp = $_POST['value'];
    $temp1 = $_POST['value1'];
    $temp2 = $_POST['value2'];
    $temp3 = $_POST['value3'];
    $temp4 = $_POST['value4'];
    $temp5 = $_POST['value5'];
    $teachername = $_POST['teachername'];
    $userData ='';
    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        echo "ok";
    }
    else{


    $query = "INSERT INTO `time_mgmt`(`rate_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `teacher_id`, `date`) VALUES (NULL,'$temp','$temp1','$temp2','$temp3','$temp4','$temp5','$teachername',NOW())";
        $result1=$db->query($query);
            if($result1) {
               echo "New record created successfully";
            } else {
                echo "Error: " . $query . "<br>" . $db->error;
            }
    }
}


function rate1(){
    require 'config.php'; 
    $json = json_decode(file_get_contents('php://input'), true); 
    $temp6 = $_POST['value6'];
    $temp7 = $_POST['value7'];
    $temp8 = $_POST['value8'];
    $temp9 = $_POST['value9'];
    $temp10 = $_POST['value10'];
    $temp11 = $_POST['value11'];
    $temp12 = $_POST['value12'];
    $teachername=$_POST['teachername'];
    $userData ='';
    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        echo "ok";
    }else{

        $query = "INSERT INTO `sub_cmd`(`q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`,`teacher_id`, `date`) VALUES ('$temp6','$temp7','$temp8','$temp9','$temp10','$temp11','$temp12','$teachername',NOW())";
        
        
        if($db->query($query) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $query . "<br>" . $db->error;
        }
    }
}

function rate2(){
    require 'config.php'; 
    $json = json_decode(file_get_contents('php://input'), true); 
    
    $temp13 = $_POST['value13'];
    $temp14 = $_POST['value14'];
    $temp15 = $_POST['value15'];
    $temp16 = $_POST['value16'];
    $temp17 = $_POST['value17'];
    $teachername=$_POST['teachername'];
    $userData ='';
    // $query = "INSERT INTO `rate2` (rate14, rate15, rate16, rate17, rate18,date) VALUES ($temp14,$temp15,$temp16,$temp17,$temp18,NOW())";
    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        echo "ok";
    }else{

        $query = "INSERT INTO `teaching_skills`(`q1`, `q2`, `q3`, `q4`, `q5`,`teacher_id`, `date`) VALUES ('$temp13','$temp14','$temp15','$temp16','$temp17','$teachername',NOW())";
       
        if ($db->query($query) === TRUE) {
           echo "New record created successfully";
        } else {
            echo "Error: " . $query . "<br>" . $db->error;
        }
    }
}

function feed(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $semester=$_POST['semester'];
    $query = "SELECT * FROM `semester`";
    $query = "SELECT `t1`,`t2`,`t3`,`t4`,`t5`,`t6`,`t7` FROM `semester` WHERE `sem_name` = '$semester'";
    $result = $db->query($query); 
    $feedData = mysqli_fetch_row($result);
    $feedData=json_encode($feedData);
    echo '{"feedData":'.$feedData.'}';      
}



function review(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $teachername=$_POST['teacher_name'];
    $query = "SELECT SUM(q1),SUM(q2),SUM(q3),SUM(q4),SUM(q5),SUM(q6) FROM time_mgmt WHERE teacher_id='$teachername'";
    $result = $db->query($query); 
    $chartData = mysqli_fetch_row($result);
    $chartData=json_encode($chartData);
    
    echo '{"chartData":'.$chartData.'}';
}

function review1(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $teachername=$_POST['teacher_name'];
    $query="SELECT SUM(q1),SUM(q2),SUM(q3),SUM(q4),SUM(q5),SUM(q6),SUM(q7) FROM sub_cmd WHERE teacher_id='$teachername'";
    $result = $db->query($query); 
    $chartData1 = mysqli_fetch_row($result);
    $chartData1=json_encode($chartData1);
   echo '{"chartData1":'.$chartData1.'}';
}


function review2(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $teachername=$_POST['teacher_name'];
    $query="SELECT SUM(q1),SUM(q2),SUM(q3),SUM(q4),SUM(q5) FROM teaching_skills WHERE teacher_id='$teachername'";
    $result = $db->query($query); 
    $chartData2 = mysqli_fetch_row($result);
    $chartData2=json_encode($chartData2);
    echo '{"chartData2":'.$chartData2.'}';
}
?>
 