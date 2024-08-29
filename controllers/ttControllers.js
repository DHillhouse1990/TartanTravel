

exports.landing_page = function(req,res) {
    res.render('homepage', {
        'title': 'Tartan travel Website'
    });
}

exports.about = function(req,res) {
    res.render('about')
}

exports.asia = function(req,res) {
    res.render('asia', {
        'countries' : [ { 
            'country': 'Vietnam'

        }, 
        {
            'country': 'Hong Kong'
        },
        {
            'country': 'Cambodia'
        },
        {
            'country': 'Singapore'
        },
        {
            'country': 'Kuala Lumpur'
        },
        {
            'country': 'Thailand'
        }
    ]
            
 })};
    


exports.holiday = function(req,res) {
    res.render('holiday')
}

exports.europe = function(req,res) {
    res.render('europe', { 'countries' : [ { 
            'country': 'Greece'
        }, 
        {
            'country': 'Hungary'
        },
        {
            'country': 'Italy'
        },
        {
            'country': 'Austria'
        },
        {
            'country': 'United Kingdom'
        }
    ]

})};

exports.oceania = function(req,res) {
    res.render('oceania', { 'countries' : [ {
        'country' : 'New Zealand'
}]


})}

exports.test = function(req,res) {
    res.render('test');
}