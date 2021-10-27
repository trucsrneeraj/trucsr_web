function f1(objButton){ 
    var donate_amount =  objButton.value;
    let donate_submit = "Proceed to donate ₹  ";
    var donta_value =document.getElementById("myTextBoxResult").value=donate_submit.concat(donate_amount);
// alert(objButton.value);   
    }
    // code for 80 G option start here
    $(document).ready(function(){
        $(".optional_container").hide();
            $(".80g_option").click(function() {
            if($(this).is(":checked")) {
                $(".optional_container").fadeIn(1000);
            } 
            
        });
        
    });

    $(document).ready(function(){
        $(".optional_container").hide();
            $(".anyonymous_option").click(function() {
            if($(this).is(":checked")) {
                $(".optional_container").fadeOut(1000);
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
        })

        
        
    });


    