$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").slideToggle("3000",function(){
            $("#btn1").text("view less ^ ")

        })
    })
    $("#div1").hover(function(){
        $("#div1").css("border-style","solid")
    },
    function(){
        $("#div1").css("border-style","none")
    });

    $("#div2").hover(function(){
        $("#div2").css("border-style","solid")
    },
    function(){
        $("#div2").css("border-style","none")
    });
    


    $("#h31").hover(function(){
        $("#h31").css("color","orange")
    },
    function(){
        $("#h31").css("color","black")
    });


    $("#h32").hover(function(){
        $("#h32").css("color","orange")
    },
    function(){
        $("#h32").css("color","black")
    });

    $("#h33").hover(function(){
        $("#h33").css("color","orange")
    },
    function(){
        $("#h33").css("color","black")
    });


    $("#imageleft").mouseover(function(){
        $(this).animate({height:"370",width:"620"})
    })

    $("#imageleft").mouseout(function(){
        $(this).animate({height:"350",width:"600"})
    })

    $("#imageright").mouseover(function(){
        $(this).animate({height:"370",width:"620"})
    })

    $("#imageright").mouseout(function(){
        $(this).animate({height:"350",width:"600"})
    })



    $("#imageleftone").mouseover(function(){
        $(this).animate({height:"370",width:"620"})
    })

    $("#imageleftone").mouseout(function(){
        $(this).animate({height:"350",width:"600"})
    })

    $("#imagerightone").mouseover(function(){
        $(this).animate({height:"370",width:"620"})
    })

    $("#imagerightone").mouseout(function(){
        $(this).animate({height:"350",width:"600"})
    })



        var accordionOpen = $('.first_depth p'),
                secondDepth = $('.second_depth');
         
        accordionOpen.on('click',function(){
                accordionOpen.closest('.first_depth').removeClass('on');
                $(this).closest('.first_depth').addClass('on');
                 
        });


    
    

    

})