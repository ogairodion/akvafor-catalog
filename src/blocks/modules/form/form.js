import $ from "jquery"
import Inputmask from "inputmask";

$(".form__checkbox-input").on("click", function (el) {
    let checkbox = el.currentTarget;
    let form = el.currentTarget.form;
    let formBtn = $(form).find($("input[type=\"submit\"]"));
    if (!$(checkbox).is(":checked")) {
        $(formBtn).attr("disabled" , true);
    } else {
        $(formBtn).removeAttr("disabled");
    }
});

var im = new Inputmask("+7(999)-999-99-99");
im.mask(document.querySelectorAll(".phone"));


$("input").on("input",function() {
    if ($(this).is(":valid")) {
        $(this).parent().addClass('form__input-checked');
    } else {
        $(this).parent().removeClass('form__input-checked');
    }
});

$(".form").submit(function (e) {
    e.preventDefault();
    let $this = $(this);
    let form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function(response) {
            $this.html(response);
        } 
    });
});
