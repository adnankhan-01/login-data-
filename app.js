function f() {
    var n=document.getElementById("name").value;
    var p=document.getElementById("password").value;
    var e=document.getElementById("email").value;
    var user=[{
        name: n ,
        email:e,
        password:p,}]
    console.log(user);
    if (n==""|| e=="" ||p=="") {
        alert("please chake your wacher")
       
    }else{ document.getElementById("table").innerHTML+=
        `<tr style="border-color :red"><td>name = ${ n}<br> email = ${ e}<br> password = ${ p}</tr></td>`}
    
    
    }