$(document).ready(function () {
      setTimeout(function () {
        $('.lazyload').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('src');
            $(imagex).attr('src', imgOriginal);
        });
    }, 10000);

});