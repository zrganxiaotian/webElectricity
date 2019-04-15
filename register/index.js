var submit = function(){
    var textval=$("#textname").val();
    var password1=$("#password1").val();
    var password2=$("#password2").val();
    var textaddress=$("#textaddress").val();
    var email1=$("#email1").val();
      if(textval==""||password1==""||password2==""||textaddress==""||email1==""){    
        alert("带*不能为空");  
      }else if(!($("#checkbox1").is(':checked'))){
         alert("需同意注册协议"); 
      }else{
        if(password1.length<6){
            alert("密码至少需要6位数"); 
        }else if(password1!=password2){
            alert("密码不相同");         
        }else if(!email1.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
            alert("邮箱格式不正确，重新输入"); 
        }else{
            
            var users=localStorage.users;
            //console.log(users);
            users = users?JSON.parse(users):[];
            var isExist=false;
            for(i=0;i<users.length;i++){
                if(users[i].username==textval){
                    isExist=true;
                    break;
                }
            }
            if(isExist){
                alert("用户名被占"); 
                return false;       
            }
            users.push({
                username:textval,
                password:password1,
                email:email1,
                address:textaddress
            });
            localStorage.users = JSON.stringify(users);
            location.href="../login/";           
        }
      }
};    