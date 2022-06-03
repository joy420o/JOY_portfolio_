$(document).ready(function(){
    
    
    var typing = document.getElementById('TextBox');
    var typewriter = new Typewriter(typing, {
    
    });

    typewriter
            .typeString('Hi.')
        .pauseFor(100)
            // .deleteAll()
            .typeString('<br/>')
        .typeString('Welcome to')
        .pauseFor(150)
            // .deleteAll()                        
            .typeString('<br/>')        
        .typeString(' JOY PORTFOLIO')
            .pauseFor(200)
        .start();




        


//////////////////////// mosue wheel //////////////////////
     setInterval(function(){
        $('#wheel').animate({'top':'12px','opacity':'0'},600)
        $('#wheel').animate({'top':'6px','opacity':'1'},0)
    },900)




    $(function(){ 
        $("#logo").click(function(){
            var pt = $("#main").offset().top;
            $("html").animate({scrollTop:pt}, 300); 
         });
        $(".menu1").click(function(){
          var pt = $("#main").offset().top;
          $("html").animate({scrollTop:pt}, 300); 
       });
       $(".menu2").click(function(){
         var pt = $("#about_me").offset().top;
          $("html").animate({scrollTop:pt}, 300); 
      }); 
       $(".menu3").click(function(){ 
        var pt = $("#main_work").offset().top; 
        $("html").animate({scrollTop:pt}, 300); 
       });
       $(".menu4").click(function(){
        var pt = $("#pc_work").offset().top;
        $("html").animate({scrollTop:pt}, 300); 
        });
        $(".menu5").click(function(){
        var pt = $("#design").offset().top;
        $("html").animate({scrollTop:pt}, 300); 
        }); 
        $(".menu6").click(function(){ 
        var pt = $("#contact").offset().top; 
        $("html").animate({scrollTop:pt}, 300); 
        });
    });






//////////////////////// sub menu //////////////////////

    $('#moblie_menu').click(function(){
        $('#menu_popup').fadeIn()
    })
    $('#close_btn').click(function(){
        $('#menu_popup').fadeOut()
    })






    //////////////////////// A b O U t M e 3 //////////////////////

    $('.creative').mouseenter(function(){
        $('.creativeIMG').css({opacity:'1'})
    })
    $('.creative').mouseleave(function(){
        $('.creativeIMG').css({opacity:'0'})
    })
    $('.enterprising').mouseenter(function(){
        $('.enterprisingIMG').css({opacity:'1'})
      
    })
    $('.enterprising').mouseleave(function(){
        $('.enterprisingIMG').css({opacity:'0'})
    })
    $('.global').mouseenter(function(){
        $('.globalIMG').css({opacity:'1'})
      
    })
    $('.global').mouseleave(function(){
        $('.globalIMG').css({opacity:'0'})
    })
    $('.perfectionist').mouseenter(function(){
        $('.perfectionistIMG').css({opacity:'1'})
      
    })
    $('.perfectionist').mouseleave(function(){
        $('.perfectionistIMG').css({opacity:'0'})
    })
    $('.cooperative').mouseenter(function(){
        $('.cooperativeIMG').css({opacity:'1'})
      
    })
    $('.cooperative').mouseleave(function(){
        $('.cooperativeIMG').css({opacity:'0'})
    })

    creative_left = 0; creative_top = 0;
    enterprising_left = 0; enterprising_top = 0;
    global_left = 0; global_top = 0;
    perfectionist_left = 0; perfectionist_top = 0;
    cooperative_left = 0; cooperative_top = 0;
    
    $('.creative').mousemove(function(e){
        mouse_x = e.offsetX -($('.creativeIMG').width()/4); //mouse의 x좌표 생성 변수			
        mouse_y = e.offsetY -($('.creativeIMG').height()/4); //mouse의 x좌표 생성 변수		
    })
    setInterval(function(){
        creative_left = creative_left + 0.1 * ( mouse_x - creative_left );
        creative_top = creative_top + 0.1 * ( mouse_y - creative_top );
        $('.creativeIMG').css({'left':creative_left,'top':creative_top})
    },30)
    
    $('.enterprising').mousemove(function(e){
        mouse_x = e.offsetX -($('.enterprisingIMG').width()/4); //mouse의 x좌표 생성 변수			
        mouse_y = e.offsetY -($('.enterprisingIMG').height()/4); //mouse의 x좌표 생성 변수		
    })
    setInterval(function(){
        enterprising_left = enterprising_left + 0.1 * ( mouse_x - enterprising_left );
        enterprising_top = enterprising_top + 0.1 * ( mouse_y - enterprising_top );
        $('.enterprisingIMG').css({'left':enterprising_left,'top':enterprising_top})
    },30) 
    
    $('.global').mousemove(function(e){
        mouse_x = e.offsetX -($('.globalIMG').width()/4); //mouse의 x좌표 생성 변수			
        mouse_y = e.offsetY -($('.globalIMG').height()/4); //mouse의 x좌표 생성 변수		
    })
    setInterval(function(){
        global_left = global_left + 0.1 * ( mouse_x - global_left );
        global_top = global_top + 0.1 * ( mouse_y - global_top );
        $('.globalIMG').css({'left':global_left,'top':global_top})
    },30) 

    $('.perfectionist').mousemove(function(e){
        mouse_x = e.offsetX -($('.perfectionistIMG').width()/4); //mouse의 x좌표 생성 변수			
        mouse_y = e.offsetY -($('.perfectionistIMG').height()/4); //mouse의 x좌표 생성 변수		
    })
    setInterval(function(){
        perfectionist_left = perfectionist_left + 0.1 * ( mouse_x - perfectionist_left );
        perfectionist_top = perfectionist_top + 0.1 * ( mouse_y - perfectionist_top );
        $('.perfectionistIMG').css({'left':perfectionist_left,'top':perfectionist_top})
    },30) 

    $('.cooperative').mousemove(function(e){
        mouse_x = e.offsetX -($('.cooperativeIMG').width()/4); //mouse의 x좌표 생성 변수			
        mouse_y = e.offsetY -($('.cooperativeIMG').height()/4); //mouse의 x좌표 생성 변수		
    })
    setInterval(function(){
        cooperative_left = cooperative_left + 0.1 * ( mouse_x - cooperative_left );
        cooperative_top = cooperative_top + 0.1 * ( mouse_y - cooperative_top );
        $('.cooperativeIMG').css({'left':cooperative_left,'top':cooperative_top})
    },30) 







    let about_me1_age = 0;
    let about_me2_age = 0;
    let about_me3_age = 0;
    let main_work1_age = 0;
    let main_work2_age = 0;
    let pc_work_age = 0;
    let pc_mobile_age = 0;
    let design_age = 0;
    let contact_age = 0;

    $(window).scroll(function(){
        sc=$(window).scrollTop() // sc= 현재 스크롤 위치
        
     //////////////////////  Header ///////////////////
        if(sc >= $('#about_me').offset().top-50 ){
            $('header').css({'position':'fixed','z-index':'999999','top':'0'})
        }
        else {
        $('header').css({'position':'static'})
        }


     //////////////////////  about_me ///////////////////
        if( sc >= $('#about_me').offset().top-100){
            about_me1_age =  about_me1_age + 1
            if( about_me1_age == 1){
                $('#about_me>h2').animate({'marginTop':'0','opacity':'1'},600)
                $('.about_text').delay(100).animate({'marginTop':'2%','opacity':'1'},600)
                $('#about_me_img').delay(150).animate({'marginTop':'0','opacity':'1'},600)
            }
        }
        if( sc >= $('#about_me').offset().top-150){
            about_me2_age =  about_me2_age + 1
            if( about_me2_age == 1){
                $('#skills>ul>li:nth-child(1)>.skills_bg>.skills_box').animate({'width':'90%'},400)
                $('#skills>ul>li:nth-child(2)>.skills_bg>.skills_box').delay(100).animate({'width':'90%'},400)
                $('#skills>ul>li:nth-child(3)>.skills_bg>.skills_box').delay(200).animate({'width':'85%'},400)
                $('#skills>ul>li:nth-child(4)>.skills_bg>.skills_box').delay(300).animate({'width':'75%'},400)
            }
        }
        if( sc >= $('#about_me').offset().top-300){
            about_me3_age =  about_me3_age + 1
            if( about_me3_age == 1){
                $('#about_me3').animate({'marginTop':'0','opacity':'1'},600)
                $('.about_me3_text').delay(150).animate({'marginTop':'0','opacity':'1'},300)
            }
        }


     ///////////////////// #main_work_title,  #main_work_img ///////////////////
        if( sc >= $('#main_work').offset().top-50){
            main_work1_age = main_work1_age + 1 
            if(main_work1_age == 1 ){
                $('#main_work1').animate({'marginTop':'50px','opacity':'1'},300)
                    $('#main_work1>img').delay(150).animate({'marginTop':'0','opacity':'1'},300)
                    $('#main_work1>p').delay(300).animate({'marginTop':'0','opacity':'1'},300)
            }     
        }
        if( sc >= $('#main_work').offset().top-300){
            main_work2_age = main_work2_age + 1 
            if(main_work2_age == 1 ){
                $('#main_work2').animate({'marginTop':'0','opacity':'1'},300)
            }     
        }


     ///////////////////// #pc_work ///////////////////   
        if( sc >= $('#pc_work').offset().top-150){
            pc_work_age = pc_work_age + 1
            if( pc_work_age == 1 ){
                    $('#pc_work>h3').animate({'marginTop':'0','opacity':'1'},300)
                    $('#pc_work>p').delay(150).animate({'marginTop':'25px','opacity':'1'},300)
                    $('.pc').delay(300).animate({'marginTop':'0','opacity':'1'},300)
            }
        }


    ////////////////////// responsive ///////////////////
        if( sc >= $('#pc_work').offset().top-300){
            pc_mobile_age = pc_mobile_age + 1
            if(pc_mobile_age == 1){
                    $('.responsive').animate({'marginTop':'0','opacity':'1'},300)
            }
        }


    ///////////////////// design_///////////////////
        if( sc >= $('#design').offset().top-150){
            design_age = design_age + 1
            if(design_age == 1){
                    $('#design>h3').animate({'marginTop':'0','opacity':'1'},300)
                    $('#design>p').delay(150).animate({'marginTop':'2%','opacity':'1'},300)
                    $('#design img').delay(300).animate({'marginTop':'2%','opacity':'1'},300)
            }
        }


    ///////////////////// responsive///////////////////
        if( sc >= $('#contact').offset().top-300){
            contact_age = contact_age + 1
            if(contact_age == 1){
                    $('#contact>h3').animate({'marginTop':'0','opacity':'1'},300)
                    $('#contact>ul').delay(150).animate({'marginTop':'2%','opacity':'1'},300)
            }
        }
    })
});