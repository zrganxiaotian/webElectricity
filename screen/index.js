
$(".screnn-group-two dd").click(function(){
   $(this).closest(".screnn-group-two").find("dd").removeClass("active");
   $(this).addClass("active");
});
$(".group-product-car").click(function(){
   var num=$(".car-text1").text();
   num=num-0+1;
   $(".car-text1").text(num);
   window.localStorage.setItem("car",num);
});


$(".pading-num li").click(function(){
   var index=$(".pading-num li").index($(this));
   var num=$(".pading-num li").length-2;
   var tab = $(".pading-num .active4").text();
   $(".pading-num li").removeClass("active4");
   if(index!==0&&index!==num+1){
       $(this).addClass("active4");      
       tab=$(".pading-num .active4").text(); 
       console.log(tab);
   }else if(index==0&&tab>1){
       $(".pading-num li:eq("+(tab-1)+")").addClass("active4"); 
       tab=$(".pading-num .active4").text();      
       console.log(tab);
       console.log(index);
   }else if(index==num+1&&tab<num){
       $(".pading-num li:eq("+(tab-0+1)+")").addClass("active4");
       tab=$(".pading-num .active4").text();
       console.log(tab);
   }  

      a();
   
});
$(".btnsure").click(function(){
   var num=$(".pe-page").val();
   var page=$(".pading-num li").length-1;
   console.log(page);
   console.log(num);
   if(num>0&&num<page){
       $(".pading-num li").removeClass("active4");
       $(".pading-num li:eq("+num+")").addClass("active4"); 
       }else{
           $(".pading-num li").removeClass("active4");
           $(".pading-num li:eq(1)").addClass("active4"); 
           alert("无此页");
       }
});
