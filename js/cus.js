
$(document).ready(function() {
  $("#a").on("click", function(e) {
    e.preventDefault();
    $("#cake").slideDown("slow");
    $("#c5").hide("hide");
    $("#c6").hide();
	  $(".selected").removeClass('selected');
	  $("#a").addClass('selected');
	  
	});  
  });
  $(document).ready(function() {
    $(".se2").on("click", function(e) {
      e.preventDefault();
      $("#c5").slideDown("slow");
      $(".cake").hide();
      $("#c6").hide();
      $("#c67").hide();
      $(".selected").removeClass('selected');
      $(".se2").addClass('selected');
      
    });  
    });
    $(document).ready(function() {
      $(".se21").on("click", function(e) {
        e.preventDefault();
        $("#c6").slideDown("slow");
        $(".cake").hide();
        $("#c5").hide();
        $(".c67").hide();
        $(".selected").removeClass('selected');
        $(".se21").addClass('selected');
        
      });  
      });
      $(document).ready(function() {
        $(".se22").on("click", function(e) {
          e.preventDefault();
          $(".c67").slideDown("slow");
          $(".cake").hide();
          $("#c5").hide();
          $("#c6").hide();
          $(".selected").removeClass('selected');
          $(".se22").addClass('selected');
          
        });  
        });
        $(document).ready(function() {
          $(".close").on("click", function(e) {
            e.preventDefault();
            $(".cake").hide();
            $("#c5").hide();
            $(".c67").hide();
            $("#c6").hide();
            $(".selected").removeClass('selected');
            $(".close").addClass('selected');
            
          });  
          });
          $('.carousel').carousel({
            interval: 5000
          })
          $(document).ready(function(){
           
            $(".ch2").hover(function(){
                $(this).css("width", "90px");
                }, function(){
                $(this).css("height", "90px");
                $(this).css("margin-top", "10px");
                $(".hide1").fadeIn(2000);
                $(".hide1").mouseout(function(){
                 $(".hide1").fadeOut();
                 $(".ch2").css("height", "200px");
                 $(".ch2").css("width", "200px");
                 $(".ch2").css("margin-top", "30px");
              });
            });
        });
        $(document).ready(function(){
         
          $(".ch22").hover(function(){
              $(this).css("width", "90px");
              }, function(){
              $(this).css("height", "90");
              $(this).css("margin-top", "10px");
              $(".hide12").fadeIn(2000);
              $(".hide12").mouseout(function(){
                $(".hide12").fadeOut();
               $(".ch22").css("height", "200px");
               $(".ch22").css("width", "200px");
               $(".ch22").css("margin-top", "30px");
            });
          });
      });
      $(document).ready(function(){
       
        $(".ch23").hover(function(){
            $(this).css("width", "90px");
            }, function(){
            $(this).css("height", "90px");
            $(this).css("margin-top", "10px");
             $(".hide13").fadeIn(2000);
            $(".hide13").mouseout(function(){
             $(".hide13").fadeOut();
             $(".ch23").css("height", "200px");
             $(".ch23").css("width", "200px");
             $(".ch23").css("margin-top", "30px");
          });
        });
        
    });
    $(".me1").on("click", function(e) {
      e.preventDefault();
    $(this).css("background", "green");
    $(".me1").html('Thanks we will conntect you');
    });
    
  $(document).ready(function(){
    $('#datetimepicker1').datetimepicker();
});
$(".me2").on("click", function(e) {
  e.preventDefault();
$(this).css("background", "green");
$(".me2").html('Message Sent Thanks');
});
$("#xs1").on("click", function(e) {
  e.preventDefault();
$(this).css("background", "green");
$("#xs1").html('Thaks for subcribe us');
});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

    
  
          


  