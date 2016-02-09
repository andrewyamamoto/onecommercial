$(document).ready(function(){
    $('body').scrollspy({ target: '#navbar', offset:101});
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');

        modal.css('display', 'block');
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }


    $('.modal').on('show.bs.modal', reposition);

    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });

    function registerForm(formClass, toHide){
        var tester = $(formClass).serialize();
        $.ajax({
            type: "POST",
            url: "/process.php", //process to mail
            data: $(formClass).serialize(),
            success: function(msg){
                $(toHide).modal('hide');
            },
            error: function(){
                alert("failure");
            }
        });
    }

    $("button#submit-nobae1").click(function(e){
        e.preventDefault();
        registerForm('form.nobae1','#asseteval');
    });
    $("button#submit-cfnsp").click(function(e){
        e.preventDefault();
        registerForm('form.cfnsp','#syndicationproject');
    });
    $("button#submit-rdw").click(function(e){
        e.preventDefault();
        registerForm('form.rdw','#productdeal');
    });
    $("button#submit-nobae2").click(function(e){
        e.preventDefault();
        registerForm('form.nobae2','#assetevalsellers');
    });
    $("button#submit-omv").click(function(e){
        e.preventDefault();
        registerForm('form.omv','#offmarket');
    });
    $("button#submit-mfg").click(function(e){
        e.preventDefault();
        registerForm('form.mfg','#multigoals');
    });
});
