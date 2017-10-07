
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('dddd') + ' '
                            + momentNow.format('DD.MM.YYYY')
                             .toUpperCase());
        $('#time-part').html(momentNow.format('HH:mm:ss'));
    }, 100);
    
    

});

