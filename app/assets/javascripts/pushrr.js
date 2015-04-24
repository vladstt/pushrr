$(document).ready(function(){
    $('.custom-label, .label_radio').click(function(){
        setupLabel();
    });
    setupLabel();
});

function setupLabel() {
    if ($('.custom-label input').length) {
        $('.custom-label').each(function(){
            $(this).removeClass('checked');
        });
        $('.custom-label input:checked').each(function(){
            $(this).parent('label').addClass('checked');
        });
    };
    if ($('.label_radio input').length) {
        $('.label_radio').each(function(){
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){
            $(this).parent('label').addClass('r_on');
        });
    };
};