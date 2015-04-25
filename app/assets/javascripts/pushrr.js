$(document).ready(function(){
    $('.custom-label, .label_radio').click(function(){
        setupLabel();
    });
    setupLabel();

    $('.test-click').click(function() {
        $(this).toggleClass('selected-card');
        $(".selected-install").toggle();
    });

    $('.test-error').click(function() {
        $('.selected-install').hide();
        $('.install-error').show();
    })

    /* Centering the modals */
    $('.modal').on('show.bs.modal', centerModals);
    $(window).on('resize', centerModals);

    $('.date-trigger').daterangepicker(null, function(start, end, label) {
        opens: 'left'
        parentEl: 'div.in-table-filters'
    });
    $('.date-trigger').click(function() {
        $(".in-table-filters").toggle();
    });
    $('.kill-modal').click(function() {
        $(".in-table-filters").hide();
    })

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

/* center modal */
function centerModals(){
    $('.modal').each(function(i){
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}