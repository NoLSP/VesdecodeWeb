$(document).ready(function(){
  $(".btn").on("click", languageSelect);
});

var langauges = {
  "en":{
    "formTitle":"Form title",
    "notificationSuccess":"Form data submitted successfully",
    "notificationFailed":"Errors received while processing the form",
    "firstName":"first name*",
    "lastName":"last name*",
    "email":"email*",
    "company":"company",
    "city":"city*",
    "message":"message*",
    "sendButton":"Send"
  },
  "ru":{
    "formTitle":"Заголовок формы",
    "notificationSuccess":"Данные формы успешно отправлены",
    "notificationFailed":"При обработке формы получены ошибки",
    "firstName":"Имя*",
    "lastName":"Фамилия*",
    "email":"Почта*",
    "company":"Компания",
    "city":"Город*",
    "message":"Сообщение*",
    "sendButton":"Отправить"
  },
  "ar":{
    "formTitle":"رأس النموذج",
    "notificationSuccess":"تم إرسال بيانات النموذج بنجاح",
    "notificationFailed":"تم استلام الأخطاء أثناء معالجة النموذج",
    "firstName":"اسم*",
    "lastName":"لقب*",
    "email":"بريد الالكتروني*",
    "company":"شركة",
    "city":"مدينة*",
    "message":"رسالة*",
    "sendButton":"يرسل"
  }
};

function languageSelect(el){
  var input = $("#" + $(this).data("id"))
  var isActive = input.is(':checked');

  if(isActive){
    return;
  }

  var language = input.data("id");

  if(language == "en"){
    $("#formTitle").html(langauges.en.formTitle);
    $("#firstName").html(langauges.en.firstName);
    $("#lastName").html(langauges.en.lastName);
    $("#email").html(langauges.en.email);
    $("#company").html(langauges.en.company);
    $("#city").html(langauges.en.city);
    $("#message").html(langauges.en.message);
    $("#sendButton").html(langauges.en.sendButton);
  } else if(language == "ru"){
    $("#formTitle").html(langauges.ru.formTitle);
    $("#firstName").html(langauges.ru.firstName);
    $("#lastName").html(langauges.ru.lastName);
    $("#email").html(langauges.ru.email);
    $("#company").html(langauges.ru.company);
    $("#city").html(langauges.ru.city);
    $("#message").html(langauges.ru.message);
    $("#sendButton").html(langauges.ru.sendButton);
  }else if(language == "ar"){
    $("#formTitle").html(langauges.ar.formTitle);
    $("#firstName").html(langauges.ar.firstName);
    $("#lastName").html(langauges.ar.lastName);
    $("#email").html(langauges.ar.email);
    $("#company").html(langauges.ar.company);
    $("#city").html(langauges.ar.city);
    $("#message").html(langauges.ar.message);
    $("#sendButton").html(langauges.ar.sendButton);
  }
}

function ChangeLanguage(language){
  
}