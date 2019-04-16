    var tabindex = 0,index=1;

    var products=[
        {
            
        }
    ]

    $(function(){
        imagePlay();
        selectDownMenu();
    });

    function selectDownMenu(){
        $(".head-collect-left").click(function(){
            alert("收藏慕课网！");
        });
        $(".menu-one").mouseover(function(){
            $(".content-menu").show();
        }).mouseout(function(){
            $(".content-menu").hide();
        });

        $(".twomenu,.ringt-picture,.menu-left-tab2").mouseover(function(){
            var $this = $(".menu-left-tab2:eq("+tabindex+")");
            if($(this).hasClass("menu-left-tab2")){
                $this = $(this);
                tabindex = $this.index();
                var _html = getHtml(tabindex);
                //console.log(_html);
                $(".twomenu").html(_html);
            }
            mouseover($this);
        }).mouseout(function(){
            var $this=$(".menu-left-tab2:eq("+tabindex+")");
            mouseout($this);
        });
    }

    function imagePlay(){
        $(".focus-main-btns a").hover(function(){
            $(".focus-main-btns a").removeClass("mid-active");
            $(this).addClass("mid-active");
            var index=$(this).text();
            $(".focus-main>div").hide();
            $(".bananer-a"+index).show();
        });

        $(".focus-main-btns a").click(function(){
            $(".focus-main-btns a").removeClass("mid-active");
            $(this).addClass("mid-active");
            var index=$(this).text();
            $(".focus-main>div").hide();
            $(".bananer-a"+index).show();
        });

        
        setInterval(function(){
            $(".btn"+index).trigger("click");
            if(index==5){
                index =0;
            }else{
                index++;
            }
        },2000);
    }

    function getHtml(tabindex){
        var _html = '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">电脑整机'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">笔记本'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">超级本'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">上网本'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">平板电脑'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">台式机'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">装机配件'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">cpu'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">硬盘'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">SSD固态硬盘'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">内存'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">显示'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">器智能显示器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">主板'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">显卡'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">机箱'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">电源'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">散热器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">刻录机/光驱'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">声卡'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">拓展卡'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">服务器配件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">DIY小附件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">装机/配件安装'+(tabindex?(tabindex+1):'')+'</a></dd>';     
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">整机附件'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">电脑包'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">电脑桌'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">电池'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">电源适配器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">贴膜'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">清洁用品'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">笔记本散热器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">USB扩展平板配件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">特色配件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">特色附件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">插座网线/电话线'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">影音线材'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">电脑线材'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">电脑外设'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">鼠标'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">键盘'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">游戏外设'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">移动硬盘'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">摄像头'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">高清播放器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">外置盒'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">移动硬盘包'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">手写板/绘画板'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">网络设备'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">路由器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">网卡'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">3G无线上网'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">交换器'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">网络储存'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">布线工具'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">网络配件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">正版软件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-text1 clear">';
            _html += '<div class="twomenu-dt">';
            _html += '<dl class="clear">';
            _html += '<dt><a href="javascript:void(0)">音频设备'+(tabindex?(tabindex+1):'')+'</a></dt>';
            _html += '</dl>';
            _html += '</div>';
            _html += '<div class="twomenu-dd">';
            _html += '<dl class="clear">';
            _html += '<dd><a href="javascript:void(0)">音箱'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">耳机/耳麦'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">麦克风'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">声卡'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">音频附件'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '<dd><a href="javascript:void(0)">录音笔'+(tabindex?(tabindex+1):'')+'</a></dd>';
            _html += '</dl>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="twomenu-foot fl clear">';
            _html += '<div class="twomenu-foot-left fl"><a href="javascript:void(0)">电脑整机频道</a></div>';
            _html += '<div class="twomenu-foot-right fr"><a href="javascript:void(0)">硬件/外设频道</a></div>';
            _html += '</div>';
        return _html;
    }

    function mouseover($this){
        $this.css({
            "backgroundColor":"#fff",
            "borderRight":"1px solid #fff"
        });

        $(".twomenu,.content-menu").show();
        $this.find(".text1-icon").hide(); 
        $this.find("a:not(.text1-aTab)").css("color","#000");
        
    }

    function mouseout($this){
        $this.css({
            "backgroundColor":"#4593fd",
            "borderRight":"1px solid #ccc"
        });
        
        $(".twomenu,.content-menu").hide();
        $this.find(".text1-icon").show();
        $this.find("a:not(.text1-aTab)").css("color","#fff");
        $this.find(".tab1-text2 a").css("color","#c2d9f8");
    }

 


   


