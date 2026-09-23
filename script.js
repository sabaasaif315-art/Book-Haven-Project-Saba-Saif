Toastify({
    text: "Welcome to Book Haven!",
    duration: 3000,
    gravity: "top",
    position: "center"
}).showToast();

$(document).ready(function() {

    $("#openModal").click(function() {
        $("#modalContent").load("modal.html", function() {
            $("#modal").show();
        });
    });

    $("#closeModal").click(function() {
        $("#modal").hide();
    });

});
$
("#openModal2").click(function(){
    $
    ("#modalContent2").load("modal2.html", function(){
        $("#modal2").show();
    });
});
$
("#closeModal2").click(function(){
    $("#modal2").hide();
});
