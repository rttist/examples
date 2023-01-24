const tstReflectTransform = require("tst-reflect-transformer").default;

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    getCustomTransformers: (program) => ({
                        before: [
                            tstReflectTransform(program)
                        ]
                    })
                }
            }
            // ... other rules
        ]
    }
    // ... other options
};