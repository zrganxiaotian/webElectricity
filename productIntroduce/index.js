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



