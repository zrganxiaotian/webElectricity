$("#btn-logo").click(function(){
    var textname=$("#textname").val();
    var passwordlogo=$("#passwordlogo").val();
    var users=localStorage.users;
    users=users?JSON.parse(users):[];
    var isExist=false;
    for(i=0;i<users.length;i++){
        if(textname==users[i].username&&passwordlogo==users[i].password){
            isExist=true;
            localStorage.currentUser = JSON.stringify(users[i]);
            break;
        }
    }
    if(isExist){
        location.href="../index.html";       
    }else{
        alert("用户名或密码错误");
    }

})