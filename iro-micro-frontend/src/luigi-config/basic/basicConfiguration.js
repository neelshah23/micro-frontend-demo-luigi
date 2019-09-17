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
                        viewUrl: '[HOST]/micro-frontend/angular/'
                    },
                    {
                        pathSegment: 'two',
                        label: 'Micro-Frontend Angular component',
                        viewUrl: '[HOST]/micro-frontend/angularComponent/'
                    },
                    {
                        pathSegment: 'three',
                        label: 'Micro-Frontend React hybrid',
                        viewUrl: '[HOST]/micro-frontend/react/',
                        loadingIndicator: {
                            enabled: false
                        }
                    },
                    {
                        pathSegment: 'vue',
                        label: 'Micro-Frontend Vue.js',
                        viewUrl: '[HOST]/micro-frontend/vue/',
                        loadingIndicator: {
                            enabled: false
                        }
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
