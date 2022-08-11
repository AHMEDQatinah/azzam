<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="azam.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function colors(){
            bodyy.style.background = "#bb0000";
        }
        function colo(){
            bodyy.style.background = "blue";
        }
        function az(){
            var nam=document.getElementById("name");
            var pas=document.getElementById("pass");
            if(nam.value == "Azam" && pas.value == "181"){
                alert('Hello '+nam.value);
                document.write('<a href:"home1.html"></a>');
            }
            else if(nam.value != "Azam"){
                alert('اسم المستخدم غير صحيح');
            }
            else if(nam.value == "Azam" && pas.value !="181"){
                alert('كلمة المرور غير صحيح');
            }
        }
    </script>
    <div class="bg-img">
        <div class="content" id="bodyy">
            <button style="background-color: red; color: white; padding: 5px;" onclick="colors()">click 1</button>
            <button style="background-color: blue; color: white; padding: 5px;" onclick="colo()">click 2</button>
            <header>Login Form</header>
            <form action="">
                <div class="field">
                    <span></span>
                    <input type="text" id="name" placeholder="Name">
                </div>

                <div class="field span">
                    <span></span>
                    <input type="password" id="pass" placeholder="password">
                </div>

<div class="pass">
    <a href="#">Forgot password </a>
</div>

                <div class="field">
                    <span></span>
                    <input type="submit" onclick="az()" value="Login">
                </div>

<div class="login">Or login with</div>
<div class="link">
    <div class="facebook">
<li class="fad"></li>
    </div>
    <div class="ins">
        <li class="fad"></li>
    </div>
</div>
            </form>
        </div>
    </div>
    <script src="azam.js"></script>
</body>
</html>
