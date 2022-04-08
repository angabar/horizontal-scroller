export default {
    input: "build/index.js",
    output: {
        file: "dist/index.js",
        format: "esm",
    },
    external: ["lit", "lit/decorators.js"],
    plugins: [],
    onwarn(warning) {
        if (warning.code !== "THIS_IS_UNDEFINED") {
            console.error(`(!) ${warning.message}`);
        }
    },
};
