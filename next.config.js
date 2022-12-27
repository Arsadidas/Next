const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        // domains: ['fakestoreapi.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
        ],
        minimumCacheTTL: 1500000
    },
}

