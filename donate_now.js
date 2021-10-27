function f1(objButton){ 
    var donate_amount =  objButton.value;
    $("#txt_name").val(donate_amount);
    let donate_submit = "Proceed to donate ₹  ";
    var donta_value =document.getElementById("myTextBoxResult").value=donate_submit.concat(donate_amount);
// alert(objButton.value);   
    }
    // code for 80 G option start here
    $(document).ready(function(){
        $(".optional_container").hide();
            $(".80g_option").click(function() {
            if($(this).is(":checked")) {
                $(".optional_container").fadeIn(500);
            } 
            
        });
        
    });

    $(document).ready(function(){
        $(".optional_container").hide();
            $(".anyonymous_option").click(function() {
            if($(this).is(":checked")) {
                $(".optional_container").fadeOut(400);
            } 
            
        });

       

        $('.other_amt').hide();
        $('.other').click(function(){
            $(".other").hide();
            $(".other_amt").show();
            $("#txt_name").animate({ width: "100%" }, 600);
            $(".other_amt").dblclick();
        });

        $(document).ready(function() {
            $("#txt_name").keyup(function() {
               // alert($(this).val());
        var other_donate_amount = $(this).val();
        var donate_submit = "Proceed to donate ₹  ";
        var donta_value =document.getElementById("myTextBoxResult").value=donate_submit.concat(other_donate_amount);
            });
        })

        $(document).ready(function(){
            $(".amt_btn").click(function(){
                 $("#amt_btn").animate({ width: "40%"},1200);
                $(".other_amt").hide();
                $(".other").show();
                $(".ohter").animate({width:"400%"},1000);
            });
        });

    });
// code for donate now button active color 
    $('.amt_btn').click(function() {
        var value = $(this).attr('id');
        // alert(value);
        if (value == "amt") {
            $('.menu').removeClass("current");
            $(this).addClass("current");
        }
    
    });

    $(".donate_now_btn").click(function(){
    //    var donate_now_amount = $('.donate_amtt').val();
    var donate_now_amount = $('.current_amount').val();
       if(donate_now_amount>0){
        $(".other").hide();
        $(".other_amt").show();
        $("#txt_name").val(donate_now_amount).animate({ width: "100%"},1000);
        $("#myTextBoxResult").val("Proceed to donate ₹  "+ donate_now_amount);
        $(".amt_btn").removeClass("current");
        

       }
       else if(donate_now_amount<0){
        alert("The amount value is wrong , You can select another amount....!");
        //$(".donate_amt").reset();

       }
       

    });

    $(".donate_amt").click(function(){
        var value = $(this).attr('id');
        //  alert(value);
        if (value == "dnt_now") {
            $('.menu').removeClass("current_amount");
            $(this).addClass("current_amount");
        }
    });


        
        
