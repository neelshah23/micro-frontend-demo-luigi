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
                        label: 'Micro frontend',
                        viewUrl: 'http://localhost:4000/'
                    },
                    {
                        pathSegment: 'two',
                        label: 'Micro frontend two',
                        viewUrl: 'http://localhost:4100/'
                    },
                    {
                        pathSegment: 'three',
                        label: 'Micro frontend React',
                        viewUrl: 'http://localhost:3000/',
                        loadingIndicator: {
                            enabled: false
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
