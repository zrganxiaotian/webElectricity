
$(".screnn-group-two dd").click(function(){
   $(this).closest(".screnn-group-two").find("dd").removeClass("active");
   $(this).addClass("active");

})



