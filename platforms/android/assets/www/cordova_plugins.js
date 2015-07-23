cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-join-images/www/JoinImages.js",
        "id": "cordova-plugin-join-images.JoinImages",
        "clobbers": [
            "plugins.JoinImages"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.2-dev",
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-join-images": "1.0.0"
}
// BOTTOM OF METADATA
});