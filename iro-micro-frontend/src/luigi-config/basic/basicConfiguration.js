//you can now use ES6 goodies here
Luigi.setConfig({
    navigation: {
        nodes: () => [
            {
                pathSegment: 'home',
                label: 'Home',
                hideFromNav: true,
                children: [
                    {
                        pathSegment: 'one',
                        label: 'Micro-Frontend Angular ',
                        viewUrl: 'http://13.233.255.84/micro-frontend/angular/'
                    },
                    {
                        pathSegment: 'two',
                        label: 'Micro-Frontend Angular component',
                        viewUrl: 'http://13.233.255.84/micro-frontend/angularComponent/'
                    },
                    {
                        pathSegment: 'three',
                        label: 'Micro-Frontend React hybrid',
                        viewUrl: 'http://13.233.255.84/micro-frontend/react/#/',
                        loadingIndicator: {
                            enabled: false
                        },
                    },
                    {
                        pathSegment: 'app',
                        label: 'Application',
                        viewUrl: 'https://nad.techmahindra.com/webapp/#/login',
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
