module.exports = {
    lintOnSave: true,

    devServer: {
        proxy: {
            '/': {
                target: 'http://192.168.137.55:8888', // http://192.168.137.68:8081  http://localhost:8081
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}