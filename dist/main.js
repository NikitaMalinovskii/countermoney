$(document).ready(function() {
    
    

    $('#cheat_percent').val(0);

    function calculateAll(){

        // Курс доллара
        var dollar_price = 0;

        // Процент скупа
        var percent = 0;

        // Профит воркера
        var worker_dollar_profit = 0;
        var worker_rub_profit = 0;

        // Профит тимы
        var team_dollar_profit = 0;
        var team_rub_profit = 0;

        // Курс доллара
        dollar_price = parseFloat($('#dollar_price').val());

        // Процент цены скупа от цены бота по панели
        percent = Math.round(((parseFloat($('#bot_market_price').val()) / parseFloat($('#bot_panel_price').val())) * 100) * 100) / 100;

        // Выводим округленый до двух цифр процент
        $('#market_percent').val(percent);

        worker_dollar_profit = parseFloat($('#bot_market_price').val()) * (parseFloat($('#worker_percent').val()) / 100) * (1 - parseFloat($('#cheat_percent').val()) / 100);

        // Профит воркера в долларах
        $('#worker_profit_dollar').val(worker_dollar_profit);

        // Профит воркера в рублях
        $('#worker_profit_rub').val(worker_dollar_profit * dollar_price);

        team_dollar_profit = parseFloat($('#bot_market_price').val()) - worker_dollar_profit;

        // Профит тимы в долларах
        $('#team_profit_dollar').val(team_dollar_profit);

        // Профит тимы в долларах
        $('#team_profit_rub').val(team_dollar_profit * dollar_price);

    }

    $('#bot_panel_price').keyup(function(){
        calculateAll();
    });

    $('#bot_market_price').keyup(function(){
        calculateAll();
    });

    $('#worker_percent').keyup(function(){
        calculateAll();
        
    });

    $('#dollar_price').keyup(function(){
        calculateAll();
        
    });

    $('#cheat_percent').keyup(function(){
        calculateAll();
    });
});