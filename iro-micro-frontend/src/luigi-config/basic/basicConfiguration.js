//you can now use ES6 goodies here
Luigi.setConfig({
    navigation: {
        nodes: () => [
            {
                pathSegment: 'home',
                label: 'Home',
                children: [
                    {
                        pathSegment: 'one',
                        label: 'Micro frontend Angular',
                        viewUrl: 'http://api.iauro.com/neel/micro-frontend/angular1/'
                    },
                    {
                        pathSegment: 'two',
                        label: 'Micro frontend Angular',
                        viewUrl: 'http://api.iauro.com/neel/micro-frontend/angular2/'
                    },
                    {
                        pathSegment: 'three',
                        label: 'Micro frontend React',
                        viewUrl: 'http://api.iauro.com/neel/micro-frontend/react/',
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
