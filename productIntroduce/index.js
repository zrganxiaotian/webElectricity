$(function(){
    clickTab1();
    $(".prouct-assess-tab1").click(function(){
        clickTab1();
    });
    $(".prouct-assess-tab2").click(function(){
        clickTab2();
    });  
});

function clickTab2(){
    $(".prouct-intro").hide();
    $(".prouct-assess-tab2").css({
        "backgroundColor":"#0479ca",
        "color":"#fff",
    });
    $("#icon2").css("backgroundImage","url(../rsc/imgs/icon/pj2.jpg)");
    $(".prouct-assess-tab1").css({
        "backgroundColor":"#f0f0f0",
        "color":"#555",});
    $("#icon1").css("backgroundImage","url(../rsc/imgs/icon/pj1.jpg)");
}

function clickTab1(){
    $(".prouct-intro").show();
    $(".prouct-assess-tab1").css({
        "backgroundColor":"#0479ca",
        "color":"#fff"
    });
    $("#icon1").css("backgroundImage","url(../rsc/imgs/icon/pj3.jpg)");
    $(".prouct-assess-tab2").css({
        "backgroundColor":"#f0f0f0",
        "color":"#555"
    });
    $("#icon2").css("backgroundImage","url(../rsc/imgs/icon/pj4.jpg)");
}

$(".goods-text2 li").click(function(){
    $(this).closest(".goods-text2-tab5").find("li").removeClass("active2");
    $(this).closest(".goods-text2-tab6").find("li").removeClass("active2");
    $(this).addClass("active2");
    var text1=$(".goods-text2-tab5 .active2").text();
    console.log(text1);
    var text2=$(".goods-text2-tab6 .active2").text();
    $(".choice span").text('"'+text1+'|'+text2+'"');

});
$(".goods-text2-tab10").click(function(){
    var num=$(".goods-text2-tab9").text();
     num=num-0+1;
     console.log(num);
     if(num>9){
        $(".goods-text2-tab9").text(9);
     }else{
     $(".goods-text2-tab9").text(num);
    }
});
$(".goods-text2-tab8").click(function(){
    var num=$(".goods-text2-tab9").text();
    num=num-1;
    if(num<=0){
        $(".goods-text2-tab9").text(0);
    }else{
    $(".goods-text2-tab9").text(num)}
    console.log(num);
});
$(".goods-pic-sm li").click(function(){
    $(".goods-pic-sm li").removeClass("active3");
    $(this).addClass("active3");
    console.log($(this));
    var tab=$("li").index($(this));
    console.log(tab);
    if(tab==0){
        $(".goods-pic-foucs").css("backgroundImage","url(../rsc/imgs/pe1.jpg)");
    console.log('0000');
}else if(tab==1){
    $(".goods-pic-foucs").css("backgroundImage","url(../rsc/imgs/pe3.jpg)");
}else if(tab==2){
    $(".goods-pic-foucs").css("backgroundImage","url(../rsc/imgs/pe4.jpg)");
}else if(tab==3){
    $(".goods-pic-foucs").css("backgroundImage","url(../rsc/imgs/pe5.jpg)");
}else if(tab==4){
        $(".goods-pic-foucs").css("backgroundImage","url(../rsc/imgs/pe6.jpg)");
}
});
$("#btnaddcar").click(function(){
    var num=$(".car-text1").text();
    num=num-0+1;
    $(".car-text1").text(num);
    window.localStorage.setItem("car",num);
    console.log(localStorage);
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
    var num=$(".pe-page1").val();
    var num2=$(".pe-page2").val();
    var page=$(".pading-num li").length-1;
    var page2=$(".pading-num2 li").length-1;
    console.log($(this).parent(".pading-total-pe1").length,$(this).parent(".pading-total-pe2").length,page,page2,num,num2);
    if($(this).parent(".pading-total-pe1")){
        console.log(page);
        if(num>0&&num<page){
                $(".pading-num li").removeClass("active4");
                $(".pading-num li:eq("+num+")").addClass("active4"); 
            }else{
                $(".pading-num li").removeClass("active4");
                $(".pading-num li:eq(1)").addClass("active4"); 
            }  
    }else if($(this).parent(".pading-total-pe2")){
        console.log(page2);
        if(num2>0&&num2<page2){
                $(".pading-num2 li").removeClass("active4");
                $(".pading-num2 li:eq("+num2+")").addClass("active4"); 
        }else{
            $(".pading-num2 li").removeClass("active4");
            $(".pading-num2 li:eq(1)").addClass("active4"); 
        }
}
});

$(".pading-num2 li").click(function(){
    tab=$(".pading-num2 .active4").text();  
    $(".pading-num2 li").removeClass("active4");
    var index=$(".pading-num2 li").index($(this)); 
    if(index!==0){
        $(this).addClass("active4");      
        tab=$(".pading-num2 .active4").text(); 
    }else if(index==0&&tab>1){
        console.log(tab);
        $(".pading-num2 li:eq("+(tab-1)+")").addClass("active4"); 
        tab=$(".pading-num2 .active4").text();            
    }

    if($(".pading-num2 li:eq(1)").hasClass("active4")){
        $(".pading-num2 .first").css("color","#ccc");
    }else {
        $(".pading-num2 .first").css("color","#000");
    }
   
});
/*$(".btnsure2").click(function(){
    var num=$(".pe-page2").val();
    var page=$(".pading-num2 li").length;
    console.log(typeof num);
    if(num>0&&num<page){
        $(".pading-num2 li").removeClass("active4");
        $(".pading-num2 li:eq("+num+")").addClass("active4"); 
        }else{
            $(".pading-num2 li").removeClass("active4");
            $(".pading-num2 li:eq(1)").addClass("active4"); 
        }
});*/


$(".prouct-text-esses .cai").click(function(){
if($(this).hasClass("one")){
    console.log($(this).hasClass("one"));
    var tab1=$(".cai .danum1").text();
    $(".cai .danum1").text(tab1-0+1);
}else if($(this).hasClass("two")){
    var tab2=$(".cai .anum1").text();
    $(".cai .anum1").text(tab2-0+1);
}else if($(this).hasClass("tree")){
    var tab3=$(".cai .danum2").text();
    $(".cai .danum2").text(tab3-0+1);
}else if($(this).hasClass("four")){
    var tab4=$(".cai .anum2").text();
    $(".cai .anum2").text(tab4-0+1);
}
});
