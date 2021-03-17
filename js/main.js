$(document).ready(() => {
    $('.inner_slider').slider({
        range: 'min',
        max: '255',
        value: '255',
        slide: onSliderChange,
        change: onSliderChange
    });

    $('.btn').click(e => {
        $('.btn').removeClass('btn-selected');
        $(e.currentTarget).addClass('btn-selected');
    })
})

const onSliderChange = () => {
    let r = $('.R').slider('value');
    let g = $('.G').slider('value');
    let b = $('.B').slider('value');

    switch($('.btn-selected').attr('id')) {
        case 'btnText':
            $('.slider__preview-area').css('color', `rgb(${r}, ${g}, ${b})`)
            break;
        case 'btnBack':
            $('.slider__preview-area').css('background-color', `rgb(${r}, ${g}, ${b})`)
            break;
        default:
            break;
    }
}

