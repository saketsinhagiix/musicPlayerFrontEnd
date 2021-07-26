const { alias } = require("react-app-rewire-alias")

module.exports = {
    webpack: (config) => {

        alias({
            // define these based on your needs
            // "@appConfig": "./src/AppConfig",
            // "@language": "./src/AppConfig/Language",
            "@actions": "./src/actions",
            "@apiCalls": "./src/api",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/Constants",
            "@pages": "./src/pages",
            "@reducers": "./src/reducers",
            "@shared": "./src/shared",
        })(config)

        return config
    }
}