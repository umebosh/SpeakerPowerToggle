
$btn = null;

$(function() {
    // init
    post_power('state');
    $btn = $('#main-btn');
    $icon = $('#main-icon');
    state = 0;
    $btn.click(function() {
        $('#main-btn').attr('disabled', '');
        post_power(['on', 'off'][state]);
    });

});

function update_button(state) {
    $btn.removeAttr('disabled');
    if (state == 0) {
        $btn.text('Power On');
        $icon.removeClass('fa-volume-up');
        $icon.addClass('fa-volume-off');
    } else {
        $btn.text('Power Off');
        $icon.removeClass('fa-volume-off');
        $icon.addClass('fa-volume-up');
    }
}

function post_power(arg) {
    url = 'https://api.particle.io/v1/devices/53ff68066667574849402567/power?access_token=a11f697cf9b8b67babf2c1352da987d4c2266e6f';
    $.post(
        url,
        { args: arg },
        function(data) {
            console.log(data);
            console.log('clicked');
            // TODO: check connected
            state = data['return_value'];
            update_button(state);
        }
    );
}
