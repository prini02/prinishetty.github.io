// JavaScript Document
$(document).ready(function () {
  "use strict";
  $("buttons").button(); /// BUTTONS
  $("#salutation").selectmenu(); // TITLE
$("#gender").selectmenu(); // GENDER 
	$("#meal").selectmenu(); // MEAL PREFERENCE 


  $(function () {
    var tooltips = $("[title]").tooltip({ // TOOLTIPS FOR NAME AND ASSISTANCE
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }

    });
  });
});
