
    

    $(".btn-free").click(function(){
        window.location.href="../register/";
    });

    


    $(function(){
        var currentUser=localStorage.currentUser;
        if(currentUser){
            currentUser=JSON.parse(currentUser);
            var name=currentUser.username;
            $(".right-login").hide();
            $(".right-free").hide();
            $("#username").text(name).show();
            $("#loginOut").show();
        }else{
            $(".right-login").show();
            $(".right-free").show();
            $("#username").hide();
            $("#loginOut").hide();
        }
        
    });
    
    var loginOut = function(){
        localStorage.currentUser ="";
        location.reload();
    }
      
 

     
     