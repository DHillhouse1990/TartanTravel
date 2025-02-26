

exports.landing_page = function(req,res) {
    res.render('homepage', {
        'title': 'Tartan travel Website'
    });
}

exports.reviews = function(req,res) {
    res.render('reviews')
}

exports.blog = function(req,res) {
    res.render('blog')
}

exports.addblog = function(req,res) {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my nre blog bla bla hdgd'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
}
exports.about = function(req,res) {
    res.render('about')
}

exports.contact = function(req,res) {
    res.render('contact')
}

exports.tech = function(req,res) {
    res.render('tech')
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
    
exports.hotels = function(req,res) {
    res.render('hotels')
}

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

exports.equipment = function(req,res) {
    res.render('equipment');
}