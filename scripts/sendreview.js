$(document).ready(function () {
    $("#sendMail").click(function() {
        if($("#email").val() === '') {
            $("#email").css("border-color", "#f00");
            return false;
        } else {
            $("#email").css("border-color", "#000");
        }
        if($("#name").val() === '') {
            $("#name").css("border-color", "#f00");
            return false;
        } else {
            $("#name").css("border-color", "#000");
        }
        if($("#phone").val() === '') {
            $("#phone").css("border-color", "#f00");
            return false;
        } else {
            $("#phone").css("border-color", "#000");
        }
        if($("#report").val() === '') {
            $("#report").css("border-color", "#f00");
            return false;
        } else {
            $("#report").css("border-color", "#000");
        }


        $.ajax({
            type:"POST",
            method:"POST",
            url:"review.php",
            data:$("#review-form").serialize(),
            success: function(result) {
                alert(result);
                alert('Success!');
                $('.pop-back').fadeOut(1800);
            }
        })
    })
})