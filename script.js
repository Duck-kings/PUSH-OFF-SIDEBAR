$(function(){
    
    $("div").click(function(){
        var frs = $("#frs");
        var scd = $("#scd");
        var tr = $("#tr");
        frs.toggleClass("frs_active");
        scd.toggle();
        tr.toggleClass("tr_active");
        var sdb = $(".sidebar");
        sdb.css('width', '20%');
        $('.window').css('width', '80%');
        $('.window').css('z-index', '0');
        

        
    });
});