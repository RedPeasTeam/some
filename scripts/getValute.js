$.ajax({
    dataType: "json",
    method: "GET",
    url: "https://www.nbrb.by/api/exrates/rates?periodicity=0",
    success: function(data) {
        $('#usd').html("<div class='current'>1 Доллар</div> <div class='result'>" + data[4].Cur_OfficialRate + " Рублей</div>");
        $('#eur').html("<div class='current'>1 Евро</div> <div class='result'>" + data[5].Cur_OfficialRate + " Рублей</div>");
        $('#rub').html("<div class='current'>1 Рубль российский</div> <div class='result'>" + data[16].Cur_OfficialRate + " Рублей</div>");
        $('#uah').html("<div class='current'>1 Гривна</div> <div class='result'>" + data[2].Cur_OfficialRate + " Рублей</div>");
        $('#jpy').html("<div class='current'>1 Японская йена</div> <div class='result'>" +  data[7].Cur_OfficialRate + " Рублей</div>");
    }
});