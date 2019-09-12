$('form.form').on('submit', function(e) {
    $gender = $('#gender').val();
    $salary = $('#salary').val();
    if ($gender == 'male' && $salary == '1') {
        $('.result-01').show().siblings().hide();
    }
    if ($gender == 'male' && $salary == '2') {
        $('.result-02').show().siblings().hide();
    }
    if ($gender == 'male' && $salary == '3') {
        $('.result-03').show().siblings().hide();
    }
    if ($gender == 'male' && $salary == '4') {
        $('.result-04').show().siblings().hide();
    }
    if ($gender == 'female' && $salary == '1') {
        $('.result-05').show().siblings().hide();
    }
    if ($gender == 'female' && $salary == '2') {
        $('.result-06').show().siblings().hide();
    }
    if ($gender == 'female' && $salary == '3') {
        $('.result-07').show().siblings().hide();
    }
    if ($gender == 'female' && $salary == '4') {
        $('.result-08').show().siblings().hide();
    }
    return false;
});