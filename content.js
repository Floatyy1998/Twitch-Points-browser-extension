chrome.runtime.onMessage.addListener(function(request) {
if (request =='einsammeln') {
  setInterval(function(){
     var elements = document.getElementsByClassName("tw-button tw-button--success");
  var element1 = elements[0];
      if (typeof(element1) != 'undefined' && element1 != null)
      {
        element1.click();
      }
  }, 3000);
}
else if (request =='nichteinsammeln') {
clearInterval(punkte);
}
})

setInterval(function(){
   var elements = document.getElementsByClassName("tw-button tw-button--success");
var element1 = elements[0];
    if (typeof(element1) != 'undefined' && element1 != null)
    {
      element1.click();
    }
}, 3000);
