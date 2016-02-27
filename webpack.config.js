module.exports = {
    entry: "./src/components/main/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    //loaders...
    module:{
        loaders : [ //se aplicara a todo fichero que cuadre con test (termine en js)
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /(node_modules|public)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }  //Da acceso a todas las funcionalidades de ES2015, entre ellas los propTypes 
                   //y defaultProps dentro de la clase.
                   //Antes es necesario instalarlo con npm.
            }, //loader es el loader que hará el preprocesado del ES6 a ES5 ántes de que 
            // webpack haga el bundle con todos los ficherosla carga
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}