$(function () {
    // 左边菜单
    function selectMenu(level1) {
        $('.contContUl li:eq(' + level1 + ') div img:hidden').show().siblings('img').hide();
        $('.contContUl li:eq(' + level1 + ')').addClass('contContBack ').siblings('li').removeClass('contContBack ');

        $('.contContUl  li').mouseenter(function () {
            if ($(this).hasClass('contContBack')) return;
            if ($(this).index() != parseInt(level1))
                $(this).removeClass('contContBack');
            $(this).addClass('contContBack');
            $(this).children('div').children('p').children('img:hidden').show().siblings("img").hide();
            $(this).children('div').children('a').children('.contCliDivSpan').addClass('contCliDivS');
        }).mouseleave(function () {
            if ($(this).index() != parseInt(level1)) {
                $(this).removeClass('contContBack');
                $(this).children('div').children('a').children('.contCliDivSpan').removeClass('contCliDivS');
                $(this).children('div').children('p').children('img:hidden').show().siblings("img").hide();
            }
        });
    }

    window.selectMenu = selectMenu;//selectMenu将该函数变为全局函数

    $('.contContUl li:last div').attr('style', 'border-bottom:0px;');

    // 头部
    $('.nevDiv ul li:first').attr('style', 'padding-left:0px;');

    $('.resource ul li:last').attr('style', 'border:0px');
    $('.contentRDiv2 ul li:nth-child(5n)').attr('style', 'margin-right:0px');
    $('.contentRDiv3 ul li:nth-child(4n)').attr('style', 'margin-right:0px');

    $('.contentRDiv3 ul li').mouseover(function () {
        $(this).children('div').show();
    }).mouseout(function () {
        $(this).children('div').hide();
    });
    // 右边  留言板
    $('.messDivU ul').each(function () {
        $(this).children('li').last().attr('style', 'border-bottom:0px;');
    });
    $('.visitU ul li:nth-child(3n)').attr('style', 'margin-right:0px;');

    //右边 人气老师
    $('.popDivR img').click(function () {
        $(this).hide().siblings('img').show();
    });

    // 首页  全部动态
    $('.issueImg ul li:nth-child(3)').attr('style', 'margin-right:0px;');
    $('.criticR').click(function () {
        var helpSpan=$(this).children('.helpSpan');
        var cancelSpan=$(this).children('.cancelSpan');
        if(helpSpan.is(':hidden')){
            cancelSpan.hide().siblings().show();
        }else {
            helpSpan.hide().siblings().show();
        }
    });

    $('.uploadImg').click(function () {//点击上传图片按钮
        $('#btn_file').click();
    });

    // 点击（弹出框）关闭/取消按钮
    $('.closeBut').click(function () {
        $('.depictFrame').attr({'value': ''});//创建相册中,点击关闭和取消按钮，情况描述框中的值，预防缓存值存在
        $('.albumNameFrame').attr({'value': ''});//创建相册中,班级名称框

        $(".close-reveal-modal").click();//关闭弹出框
        $('input,textarea').trigger('blur.placeholder');
    });

    //我的班级
    $('.classInfoUl li:nth-child(2n)').attr('style', 'margin-right:0px;');

    //创建班级  下来框
    $('.uplCont table tr:gt(0)').mouseover(function () {
        $(this).addClass('uplBack').siblings('tr').removeClass('uplBack');
    });
    $('.timeSelect p:last').attr('style', 'border:0px');
    $('.timeSelect p').click(function () { //点击当前下拉框中的值
        $(this).parent('div').siblings('.uplLiL').text($(this).text());
        $(this).hide().siblings('p').show();
    });
    $('.uplTermL ul li,.listP').toggle(function () {
        $(this).children('div').show();
    }, function () {
        $(this).children('div').hide();
    });
    $('.timeSelect').mouseleave(function () { //鼠标移出下拉框,下拉框隐藏
        $(this).hide();
    });
    $('.timeSelect').each(function () { //中间内容下来菜单最后一个p去掉底边框
        $(this).children('p').last().attr('style', 'border:0px;');
    });

    //搜索班级  点击重置按钮
    $('.resetting').click(function () {
        $('.searchTerm table tr td input').attr('value', "");
        $('.gradeOne').parent().siblings('.uplLiL').text($('.gradeOne').text());
        $('.gradeTwo').parent().siblings('.uplLiL').text($('.gradeTwo').text());
    });
    //搜索班级弹出框 点击下一步
    $('.nextStepBut').click(function () {
        $(".close-reveal-modal").click();//关闭弹出框
        $('#applyAddOneNext').reveal(); //打开弹出框
    });
    //创建相册 弹出框
    $('.depictFrame,.photoFrame').keyup(function () {
        var depictLength = $(this).val().length;//松开键盘时，获取当前框中值的长度
        $('.changeNum').html(depictLength);
    });
    //创建相册 弹出框
    $('.albumNameFrame,.photoAmeFrame').keyup(function () {
        var dalbumNameLength = $(this).val().length;//松开键盘时，获取当前框中值的长度
        $('.albumNameChange').html(dalbumNameLength);
    });
    //创建相册   弹出框点击保存
    $('.keepP').click(function () {
        $('.depictFrame').attr({'value': ''});//创建相册中,点击关闭和取消按钮，情况描述框中的值，预防缓存值存在
        $('.albumNameFrame').attr({'value': ''});//创建相册中,班级名称框

        $(".close-reveal-modal").click();//关闭弹出框
        $('input,textarea').trigger('blur.placeholder');

        var foundAlbum = "<li>" +
            "<div class='frontCover moImg'>" +
            "<div class='deleteImg'><p class='deleteP'><img src='images/g6.4.png'></p></div>" +
            "<p class='frontCoverNum'>0</p>" +
            "</div>" +
            "<div class='albumCBottom'><p class='albumCWord'>未命名相册</p><p class='albumCImg'></p></div>" +
            "</li>";
        $('.albumCont ul').append(foundAlbum);
        mouseEvent();
        deletePImg();
    });
    //鼠标滑过出现删除按钮
    function mouseEvent() {
        $('.deleteImg').mouseenter(function () {
            $(this).children('p').children('img').show();
        }).mouseleave(function () {
            $(this).children('p').children('img').hide();
        });
        $('.albumCont ul li:nth-child(4n)').attr('style', 'margin-right:0px;');
    }

    mouseEvent();
    //点击删除按钮
    function deletePImg() {
        $('.deleteP img').click(function (event) {
            event.stopPropagation(); //停止冒泡

            $('#deleteRemind').reveal(); //打开弹出框提示
        });
        $('.albumCont ul li').click(function () { //点击我的相册 每个li跳转页面
            window.open('photoList.html', '_self');
        });
    }

    deletePImg();


    // 我的相册
    $('.allDyDiv ul li:nth-child(12)').attr('style', 'margin-right:0px;');

    $('.optPin').click(function () {//上传相册  点击选择照片
        $('#btn_file').click();
    });

    $('.uploadDiv dl dd:last').attr('style', 'border:0px;');

    $('.uploadDiv dl dd:first').attr('style', 'border:0px;');

    $('.uploadList ul li').click(function () {  //上传照片  点击默认选中框
        $(this).children('.uploadDiv').show();
        $('.uploadDiv').mouseover(function () {
            $('.uploadDiv').show();
        }).mouseout(function () {
            $('.uploadDiv').hide();
        });
    });

    $('.uploadDiv dl dd').click(function (event) { //上传照片 点击下拉框
        event.stopPropagation(); //停止冒泡

        $(this).hide().siblings().show();
        var thisHtml = $(this).html();//获取当前选中
        $('.uplTDiv').html(thisHtml); //改变指定元素内容

        $('.uploadList ul li div:eq(0)').children('div').children('.uplDivImg').addClass('addMargin');
        $('.uploadList ul li div:eq(0) div .rightWord p span').text(''); //选中的元素去掉张数后显示

        $('.uploadDiv dl dd:eq(0) div').show();

        //解决选中后别的dd出现无底边线情况
        var a = $('.uploadDiv dl dd').toArray();
        var saveValue; //保存值
        for (var i = 0; i < a.length; i++) {
            if ($(a[i]).is(':visible')) {
                saveValue = $(a[i]);
                saveValue.attr('style', 'border-bottom:1px dashed #d9d9d9;');
            }
        }
        saveValue.attr('style', 'border-bottom:0px;');

        $('.uploadDiv').hide(); //隐藏下拉框
    });

    //相册照片列表
    $('.photoCul ul li:nth-child(5n)').attr('style', 'margin-right:0px;');
    $('.photoIdImgR img').click(function () {  //点击 相册列表页中 设置按钮
        $('#photoSetUp').reveal();
    });
    $('.dropDownList').mouseenter(function () {
        $(this).children('.dropDiv').show();
    }).mouseleave(function () {
        $(this).children('.dropDiv').hide();
        $(this).children('.downListDiv').hide()
    });
    $('.dropDiv').click(function (event) {  //点击 按钮显示操作列表
        $(this).siblings('.downListDiv').show();
        event.stopPropagation(); //停止冒泡
    });
    $('.editImg').click(function (event) { //点击 编辑
        $('#foundAlbum').reveal();
        event.stopPropagation(); //停止冒泡
    });
    // 相册列表  设置封面
    var photoContHeig = $('.photoCont').height();
    $('.displayText').height(photoContHeig);
    var displayHig = $('.displayText').height() / 2;
    $('.displayText').attr('style', 'padding-top:' + displayHig + 'px;');  //封面设置成功！ 放在页面中间显示
    $('.setCover').click(function (event) { //点击 设为封面
        if (!$('.displayText p').is(":animated")) {
            $('.displayText p').attr('style', 'marginTop:0px');
        }
        $('.displayText').show();
        $('.displayText p').animate({marginTop: '-60px'}, 'slow').fadeOut('slow');
        event.stopPropagation(); //停止冒泡
    });
    //鼠标划入划出图片操作的效果
    $('.downListDiv ul li').mouseenter(function () {
        $(this).children('img').eq(1).show().siblings('img').hide();
    }).mouseleave(function () {
        $(this).children('img').eq(1).hide().siblings('img').show();
    });
    $('.deleteList').click(function (event) { //点击 删除
        $('#deleteRemind').reveal();
        event.stopPropagation(); //停止冒泡
    });

    //留言板
    $('.messageConUl >li:last').attr('style', 'border:0;');

    $('.operateSpan').click(function () {  //点击回复按钮
        $(this).parent().parent().siblings('.replyDiv').toggle();
        $(this).parent().parent().parent().parent().siblings().children().children('.replyDiv').hide();
    });

    $('.preserveWord').click(function () { //点击保存按钮
        var thisText=$(this).siblings('div').html();
        var replyConUl="<ul class='replyBackUl'></ul>";
        var replyConLi="<li><div class='replyBackConTop'>" +
            "<div class='repBacLeft'><img src='images/g8.2.png' /></div>" +
            "<div class='repBacRight'>" +
            "<div class='messWord' style='color:#6ea9a7'>秋天的弹唱</div>" +
            "<div class='messConP'><p>"+thisText+"</p></div>" +
            "</div></div>" +
            "<div class='replyBackConDiv'>" +
            "<div class='date'>10:20</div>" +
            "<div class='operate'><span><a href='#' class='big-link' data-reveal-id='deleteConfirm'>删除</a></span></div>" +
            "</div></li>";

        var a=$(this).parent().siblings('.replyBackUl');
        if(a.length!=0){ //判断否存在class='replyBackUl' 的ul
            $(this).parent().siblings('.replyBackUl').append(replyConLi); //有就向里面添加li
        }else{
            $(this).parent().before(replyConUl); //没有就先添加ul
            $(this).parent().siblings('.replyBackUl').append(replyConLi); //后添加li
        }
        $('.replyBor').html('');
        //添加完后，除了第一个li以外其他li添加borderTop=0
        $(this).parent().siblings('.replyBackUl').children('li:gt(0)').attr('style','border-top:0px');
    });


    //我的关注
    $('.opeImg img').click(function () {
        $(this).hide().siblings().show();
    });
    $('.concernCon ul li:nth-child(3n)').attr('style','margin-right:0px;');

    //我的群组
    $('.confirmTransfer').click(function () {
        $(".close-reveal-modal").click();//关闭弹出框
        $('#attornThree').reveal(); //打开弹出框
    });

    //验证信息
    $('.validOperate p').click(function () {  //点击同意或拒绝按钮
        $(this).parent().hide();
        $(this).parent().siblings('div').show();
        if($(this).index()==0){
            $(this).parent().siblings('div').children('span').text('同意');
        }else {
            $(this).parent().siblings('div').children('span').text('拒绝');
        }
    });
    //我的账户
    $('.choiceUl li').click(function () {
        $(this).addClass('choUlBor').siblings('li').removeClass('choUlBor');
    });
    $('.choiceRightSpan').click(function () {
        $(".close-reveal-modal").click();//关闭窗口
        $('#setUpSchool').reveal(); //打开窗口
    });
    $('.preserveBut').click(function () {
        alert('保存成功！');
    });
    $('.modifyButton').click(function () {
        $('.successfulMod').show();
    });
    $('.referToP').click(function () { //验证邮箱
        $('.mailboxVerification').show();
    });
    // 验证邮箱 倒计时
    var wait=60;
    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value="发送验证码";
            o.className="but1";
            wait =60;
            $('.requiredWord').hide();
        } else {
            o.setAttribute("disabled", true);
            o.value="重新发送(" + wait + ")";
            o.className="but2";
            wait--;
            $('.requiredWord').show();
            setTimeout(function() {
                    time(o)
                },
                1000)
        }
    }
    $('.sendVerificationCode').click(function () { //点击发送验证码
        time(this);
    });


    //判断左边菜单的高度是否小于右边内容的高度
    if ($('.contentL').height() < $('.divCentre').height() || $('.contentL').height() < $('.divR').height()) {
        //根据浏览器滚动条的滚动来达到对左边菜单滚动位子的控制
        $(window).scroll(function () { //滚动条发生滚动时触发事件
            var divL = $('.divL');
            var divLget = divL.get(0);
            if ($('.divCentre').outerHeight() > $('.divR').outerHeight()) {
                $('.divL').height($('.divCentre').outerHeight()); //将中间内容的高度赋给左边菜单的高度
            } else {
                $('.divL').height($('.divR').outerHeight()); //将右边的高度赋给左边菜单的高度
            }

//           $(window).scrollTop();//滚动条到顶端的距离、divLget.offsetTop;//菜单外层到顶端的高度、contentLGet.offsetTop;//菜单内层到顶端的高度
            var contMarginTop = ($(window).scrollTop()) - (divLget.offsetTop);

            if ($(window).scrollTop() > divL.offset().top) { //滚动条的位子大于菜单外层到顶端的高度
                var contMarginTop = contMarginTop + 10;
                $('.contentL').attr('style', 'margin-top:' + contMarginTop + 'px');
            } else {
                $('.contentL').attr('style', 'margin-top:0px');
            }
            var divLHeig = $('.divL').height(); //菜单外层的高度
            var contentLHeig = $('.contentL').height();//菜单内层的高度
            var marTopVal = divLHeig - contentLHeig;//等于菜单内层marginTop最大值
            var contMargTop = parseInt($('.contentL').css('marginTop'));//获取当前菜单内层的marginTop的值
            if (contMargTop > marTopVal) {
                $('.contentL').attr('style', 'margin-top:' + marTopVal + 'px');
            }
        });
    }
});

