Meteor.startup(function() {
    if (Meteor.isClient) {
        return SEO.config({
            title: 'Pictures of Lily Photography',
            meta: {
                'description': 'Welcome to Pictures of Lily, home of Scottish wedding Photographer Kevin Porter.',
                'google-site-verification' : 'AQU1VEZ9BNkNvQtgaJUua1b5QXXW4Qunw7fB6owl2WY'
            },
            rel_author: 'https://plus.google.com/+CraigPullar',
        });

        
    }
});
