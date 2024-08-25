

exports.landing_page = function(req,res) {
    res.render('homepage', {
        'title': 'Tartan travel Website'
    });
}

exports.about = function(req,res) {
    res.render('about')
}

exports.asia = function(req,res) {
    res.render('asia')
}

exports.holiday = function(req,res) {
    res.render('holiday')
}

exports.europe = function(req,res) {
    res.render('europe')
}

exports.oceania = function(req,res) {
    res.render('oceania')
}