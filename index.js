var S = function(elem){
    var elemObj = null;
    if(document.getElementById(elem)){
        elemObj = document.getElementById(elem);
    }else if(document.getElementsByClassName(elem)){
        elemObj = document.getElementsByClassName(elem);
    }else if(document.getElementsByName(elem)){
        elemObj = document.getElementsByName(elem);
    }else if(document.getElementsByTagName(elem)){
        elemObj = document.getElementsByTagName(elem);
    }else if(document.getElementsByTagNameNS(elem)){
        elemObj = document.getElementsByTagNameNS(elem);
    }
    return elemObj;
}

console.log(S("head-mid"));



