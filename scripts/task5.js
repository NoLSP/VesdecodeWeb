var counter = 0;

$(document).ready(function(){
  $(".btn").on("click", languageSelect);
  $("#notificationFailed").hide();
  $("#notificationSuccess").hide();
  
  $("form").submit(function(e){
    e.preventDefault();
    if(counter % 2 == 0){
      $("#notificationSuccess").show();
      setTimeout(() => $("#notificationSuccess").hide(), 5000);
    }
    if(counter % 2 != 0){
      $("#notificationFailed").show();
      setTimeout(() => $("#notificationFailed").hide(), 5000);
    }
    counter++;
  });
});

function languageSelect(el){
  var input = $("#" + $(this).data("id"))
  var isActive = input.is(':checked');
  if(isActive){
    return;
  }
  var language = input.data("id");
  if(language == "en"){
    alert("ar");
  } else if(language == "ru"){
    alert("ar");
  }else if(language == "ar"){
    alert("ar");
  }
}

function ChangeLanguage(language){
  
}