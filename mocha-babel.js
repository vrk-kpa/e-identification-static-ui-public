require('babel-core/register')({
    plugins: [
        "transform-async-to-generator",
        "transform-object-rest-spread"
    ]
});
require("babel-polyfill");