$(document).ready(function () {
    $("#sendMail").click(function(event) {
        event.preventDefault()

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
            url:"scripts/review.php",
            cache: false,
            data:$("#review-form").serialize(),
            success: function(result) {
                alert('Success!');
                $('.pop-back').fadeOut(1800);
            }
        })
    })
})