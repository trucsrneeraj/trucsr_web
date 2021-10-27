// code for category wise ngo 

$(document).ready(function(){

    $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
    
    //  $('.filter').show('1000');
  // $('.filter').show('1000');
  $('.filter').show('');
    }
    else
    {
    
    // $(".filter").not('.'+value).hide('3000');
    $(".filter").not('.'+value).hide();
    // $('.filter').filter('.'+value).show('3000');
    $('.filter').filter('.'+value).show();
    
    }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });

    // code ends for category wise 
$(document).ready(function(){
    $('.button_cat').click(function(){
        // $("button").removeClass("active");
        $('.button_cat').removeClass("active");
        $(this).addClass("active");
      });

      jQuery(function(){
        jQuery('#modal').click();
     });
// code for search button start here 
$('#search').click(function(e) {
  $(".mini_search_button").css("display","none");
  $(".expand_button").css("display", "block");
  e.stopPropagation();
});
$(".expand_button").click(function(e){
  e.stopPropagation();
});

$(document).click(function(){
  $(".mini_search_button").css("display","block");
  $(".expand_button").hide();
});

// code ends for search button here
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

    //  code for search button ends here
});

// $(".whytrucsr").click(function(){
//   $(".popup_text").css("display","block");
// });


// code for popup start here
// for whytrucsr
$('#md-trigger').on('click', function(e) {
  $('#modal-1').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close').on('click', function(e) {
  $('#modal-1').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

// code for NGOS
$('#md-trigger2').on('click', function(e) {
  $('#modal-2').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-2').on('click', function(e) {
  $('#modal-2').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});
//for sign in 
$('#md-trigger3').on('click', function(e) {
  $('#modal-3').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-3').on('click', function(e) {
  $('#modal-3').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

// for donate now 
$('#md-trigger4').on('click', function(e) {
  $('#modal-4').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-4').on('click', function(e) {
  $('#modal-4').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

function Donate_now(){
  // $('#md-trigger4').on('click', function(e) {
    $('#modal-4').toggleClass("md-show"); //you can list several class names 
    e.preventDefault();
  // });
  
  // $('#md-close-4').on('click', function(e) {
    $('#modal-4').toggleClass("md-show"); //you can list several class names 
    e.preventDefault();
  // });
}


$('#md-trigger5').on('click', function(e) {
  $('#modal-5').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-5').on('click', function(e) {
  $('#modal-5').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

function my_fundraise(){
  // $('#md-trigger5').on('click', function(e) {
    $('#modal-5').toggleClass("md-show"); //you can list several class names 
    e.preventDefault();
  // });
  
  // $('#md-close-5').on('click', function(e) {
    $('#modal-5').toggleClass("md-show"); //you can list several class names 
    e.preventDefault();
  // });
}

// REQUEST A FUNDRAISING
$('#md-trigger6').on('click', function(e) {
  $('#modal-6').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-6').on('click', function(e) {
  $('#modal-6').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

//book frp
$('#md-trigger7').on('click', function(e) {
  $('#modal-7').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-7').on('click', function(e) {
  $('#modal-7').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

// code for dontae now razor pay
$('#md-trigger8').on('click', function(e) {
  $('#modal-8').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-8').on('click', function(e) {
  $('#modal-8').toggleClass("md-show"); //you can list several class names \
  window.location.reload().animate(3000);
  e.preventDefault();
});


// code for contact us page
$('#md-trigger9').on('click', function(e) {
  $('#modal-9').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-9').on('click', function(e) {
  $('#modal-9').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});

$('#md-trigger10').on('click', function(e) {
  $('#modal-10').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-10').on('click', function(e) {
  $('#modal-10').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});

$('#md-trigger11').on('click', function(e) {
  $('#modal-11').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-11').on('click', function(e) {
  $('#modal-11').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});

$('#md-trigger12').on('click', function(e) {
  $('#modal-12').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-12').on('click', function(e) {
  $('#modal-12').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});
$('#md-trigger13').on('click', function(e) {
  $('#modal-13').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-13').on('click', function(e) {
  $('#modal-13').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});

$('#md-trigger14').on('click', function(e) {
  $('#modal-14').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-14').on('click', function(e) {
  $('#modal-14').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});
$('#md-trigger15').on('click', function(e) {
  $('#modal-15').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-15').on('click', function(e) {
  $('#modal-15').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});
$('#md-trigger16').on('click', function(e) {
  $('#modal-16').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-16').on('click', function(e) {
  $('#modal-16').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});
$('#md-trigger17').on('click', function(e) {
  $('#modal-17').toggleClass("md-show"); //you can list several class names 
  e.preventDefault();
});

$('#md-close-17').on('click', function(e) {
  $('#modal-17').toggleClass("md-show"); //you can list several class names \
  e.preventDefault();
});
// code for popup ends here
// code for popup ends here


// load more logic set here

$(function(){
  $(".loadmore").slice(0, 1).show(); // select the first ten
  $("#load,.load").click(function(e){ // click event for load more
      e.preventDefault();
      $(".loadmore:hidden").slice(0, 1).slideDown(); // select next 10 hidden divs and show them
      if($(".loadmore:hidden").length == 0){ // check if any hidden divs still exist
          alert("Content ends"); // alert if there are none left
      }
  });
});

//load more logic ends here 


// code for feature and services

$('.fs_button').click(function(){
  // $("button").removeClass("active");
  $('.fs_button').removeClass("active_fs");
  $(this).addClass("active_fs");
});

jQuery(function(){
  jQuery('#modal_fs').click();
});
// code for feature and services ends here


// serach overlay set here

function on() {
  $("#overlay").css("display","block");
  // document.getElementById("overlay").style.display = "block";
}

function off() {
  $("#overlay").css("display","none");
  $(".expand_button").hide();
  $(".mini_search_button").css("display","block");
  // document.getElementById("overlay").style.display = "none";
}
// search overlay ends here

// $(function(){   
//   $(".squares").hover(function(){
//       $(this).addClass("hovers");
//   }, function(){
//       $(this).removeClass("hovers");
//   })
// });

// $("#dashboard_fs,#dashboard_fs1,#dashboard_fs2,#dashboard_fs3,#dashboard_fs4").click(function(){
//  var value = $(this).attr('name');
//  alert(value);
//   $("#container_services").hide();
//   $("#container_feature").hide();
//   $('.'+value).css("display","block");  
// });

// FEATURE AND SERVICES CODE START HERE 
$("#dashboard_fs").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  //$(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  
  $(".feature_dashboard").css("display","block");
});

$("#dashboard_fs1").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".feature_dashboard").hide();
  // $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  
  $(".feature_op").css("display","block");
});
$("#dashboard_fs2").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  // $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  
  $(".feature_reporting").css("display","block");
});
$("#dashboard_fs3").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
   $(".feature_funding").hide();
  // $(".feature_gantt").hide();
  
  $(".feature_gantt").css("display","block");
});

$("#dashboard_fs4").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  // $(".feature_funding").hide();
   $(".feature_gantt").hide();
  
  $(".feature_funding").css("display","block");
});


$("#dashboard_fs5").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  // $(".service_advisory").hide();
  $(".service_compliance").hide();
  $(".service_project").hide();
  $(".service_monitoring").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  $(".service_advisory").css("display","block");
});

$("#dashboard_fs6").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".service_advisory").hide();
  // $(".service_compliance").hide();
  $(".service_project").hide();
  $(".service_monitoring").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  $(".service_compliance").css("display","block");
});

$("#dashboard_fs7").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".service_advisory").hide();
  $(".service_compliance").hide();
  // $(".service_project").hide();
  $(".service_monitoring").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  $(".service_project").css("display","block");
});

$("#dashboard_fs8").click(function(){
  $("#container_services").hide();
  $("#container_feature").hide();
  $(".service_advisory").hide();
  $(".service_compliance").hide();
  $(".service_project").hide();
  // $(".service_monitoring").hide();
  $(".feature_dashboard").hide();
  $(".feature_op").hide();
  $(".feature_reporting").hide();
  $(".feature_funding").hide();
  $(".feature_gantt").hide();
  $(".service_monitoring").css("display","block");
});

$(".fs_button").click(function(){
$(".feature_dashboard").hide();
$(".feature_op").hide();
$(".feature_reporting").hide();
$(".feature_funding").hide();
$(".feature_gantt").hide();
$(".service_advisory").hide();
$(".service_compliance").hide();
$(".service_project").hide();
$(".service_monitoring").hide();
});

// FEATURE AND SERVICES CODE ENDS HERE



// CODE FOR DONATE NOW CATEGORY MODEL
$(document).ready(function(){

  $(".filters-button").click(function(){
  var value = $(this).attr('data-filters');
  
  if(value == "all")
  {
  
  //  $('.filter').show('1000');
// $('.filter').show('1000');
$('.filters').show('');
  }
  else
  {
  
  // $(".filter").not('.'+value).hide('3000');
  $(".filters").not('.'+value).hide();
  // $('.filter').filter('.'+value).show('3000');
  $('.filters').filter('.'+value).show();
  
  }
  });
  
  if ($(".filters-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });

  jQuery(function(){
    jQuery('.dfc').click();
 });
 

  // code ends for category wise
  
  
  // CODE FOR CSS LINK IN DONATE FOR :
  $('.filters-button').click(function() {
    var value = $(this).attr('id');
    // alert(value);
    if (value == "donate_for") {
      // alert("testing");
        $('.menus').removeClass("currents");
        $(this).addClass("currents");
    }
  });


// CODE FOR FEATURE AND SERVICES FILTER START HERE
$(document).ready(function(){
  $(".filterfs-button").click(function(){
  var value = $(this).attr('data-filterfs'); 
    if(value == "all")
      {
        $('.filterfs').show('');
      }
      else
      {
      
        $(".filterfs").not('.'+value).hide();
        $('.filterfs').filter('.'+value).show();
      
      }
  });
  if ($(".filterfs-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });

  jQuery(function(){
    jQuery('.fs').click();
 });

// CODE FOR FEATURE AND SERVICES FILTER ENDS HERE



//CODE FOR FEATURE AND SERVICE FILTER ACITVE AND INACTIVE 

$('.featuref').click(function() {
  var value = $(this).attr("data");
  // alert(value);
  if (value == "dashboard_f") {
      //alert("testing");
      $('.featuref').removeClass("currentfs");
      $(this).addClass("currentfs");
      // $(this).addClass("currentfs");
  }
});

    // jQuery(function(){
    //   jQuery('.f_btn').click();
    //   jQuery('.s_btn').click();
    // });


  $(".feature_btn").click(function(){
    //alert("feature button");
    $(".dash_btn").click();
    // $(".f_btn").click();
   // jQuery('.f_btn').dblclick();
    //$('.f_btn').click();
  });

  $(".services_btn").click(function(){
   //alert("service alert");
   $(".adv_btn").click();
    //alert("tesing");
   // $('.s_btn').dblclick();
  });
  

//CODE ENDS FOR ACTIVE AND INACTIVE 

// default checked checkbox in radion button in donate now panel 
$(".donate_now_btn").click(function(){
$(".img_check1").addClass("default_check");
});

$(".80g_option").click(function(){
  $(".img_check1").removeClass("default_check")
})
// default checked checkbox ends here 


