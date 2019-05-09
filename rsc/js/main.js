
    

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

    $(function(){
        var car=window.localStorage.getItem("car");         
        $(".car-text1").text(car);
        console.log(car);
    });
    $(".carnone").click(function(){
        var car=window.localStorage.getItem("car"); 
        console.log(car);      
        if(car>0){
            confirm("确定清空购物车？");
            if(confirm("确定清空购物车？")){
            $(".car-text1").text(0);
            window.localStorage.setItem("car",0);
            }else{                    
            $(".car-text1").text(car);}
            }
    });

    function a(){
        var num=$(".pading-num li").length-2;
        if($(".pading-num li:eq(1)").hasClass("active4")){
            $(".pading-num .first").css("color","#ccc");       
        }else if($(".pading-num li:eq("+num+")").hasClass("active4")){
            $(".pading-num li:eq("+(num+1)+")").css("color","#ccc");
        }else{
            $(".pading-num .first").css("color","#000");
            $(".pading-num li:eq("+(num+1)+")").css("color","#085c9b");
        }
        }

     
     