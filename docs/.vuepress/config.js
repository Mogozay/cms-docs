module.exports = {
    base: '/cms-docs/',
    title: 'All-in-One Marketplace',
    description: 'All-in-One Marketplace solution for Arcadier and October CMS',
    markdown: {
        lineNumbers: true,
        anchor: {permalink: true, permalinkBefore: true, permalinkSymbol: '#'}
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Installation',
                children: [
                    '/getting-started/content'
                ]
            },
            {
                title: 'CMS API',
                children: [
                    '/cms-api/data'
                ]
            },
            {
                title: 'API',
                children: [
                    '/api/authentication',
                    '/api/accounts',
                    '/api/discounts',
                    '/api/cart',
                    '/api/invoices',
                    '/api/orders'
                ]
            },
            {
                title: 'API Guidelines',
                children: [
                    '/development/guidelines'
                ]
            },
            {
                title: 'Webhooks',
                children: [
                    '/webhooks/content'
                ]
            },
            {
                title: 'Changelog',
                children: [
                    '/changelog/1.1.0'
                ]
            }
        ],
        repo: 'mogozay/cms-docs',
        nav: [
            {text: 'Guide', link: '/'},
            {text: 'All-in-One Marketplace', link: 'http://209.97.165.107/'},
        ],
        docsRepo: 'mogozay/cms-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
    }
}
