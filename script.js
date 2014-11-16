window.onload = function() {

  var skrollrInit = function() {

    //initialize skrollr
    skrollr.init({
        smoothScrolling: false
    });

    // disable skrollr if using handheld device
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        skrollr.init().destroy();
    }

};

//execute function
skrollrInit();
};