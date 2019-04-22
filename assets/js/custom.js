
var pos =  new Array('25', '30', '46', '58');
function get_random(){
    var rand = pos[Math.floor(Math.random() * pos.length)];
    return rand;
}

jQuery(document).ready(function($) {
    $('.open-menu').on('click', function(){
        $('.site-menu').toggleClass('show-menu');
        $('.nav-menu').toggleClass('hide-nav');
        $('body').toggleClass('hide-scroll');

        console.log('Show');
    });
});
