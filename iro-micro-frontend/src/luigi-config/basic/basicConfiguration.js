//you can now use ES6 goodies here
Luigi.setConfig({
    navigation: {
        nodes: () => [
            {
                pathSegment: 'home',
                label: 'Home',
                children: [
                    {
                        pathSegment: 'hw',
                        label: 'Hello World!',
                        viewUrl: '/assets/basicexternal.html'
                    },
                    {
                        pathSegment: 'one',
                        label: 'Section one',
                        viewUrl: 'http://localhost:4000/'
                    },
                    {
                        pathSegment: 'two',
                        label: 'Section two',
                        viewUrl: 'http://localhost:4100/',
                        context: {
                            currentProject: id
                        },
                    }
                ]
            }
        ]
    },
    routing: {
        /**
         * Development:
         * For path routing, set to false
         * For hash routing, set to true
         */
        useHashRouting: true,
        nodeParamPrefix: '~'
},
    settings: {
        hideNavigation: false,
        header:{
            logo: 'https://iauro.com/images/white-logo.png'
        }
    }
});
