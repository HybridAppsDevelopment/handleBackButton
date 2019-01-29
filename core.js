/Event Listener for previous screen button press
$('.navBack').click(function() {
 
handleBack();
});


/*detect and handle browser back button event*/
$(window).on('popstate', function (e) {
    var state = e.originalEvent.state;
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');

});


function handleBack(){

 
      //Only grab the current location.hash on change of url -- use onhashchange  (onpopstate not supported cross browser)
      window.onhashchange = function() {
      var hashValue = location.hash;
      //we don't pass the # char - just return the value after the #
      hashValue = hashValue.replace(/^#/, '');

      changeAppPage(_currentStep, _currentScreen);
       

}//close handleBack
