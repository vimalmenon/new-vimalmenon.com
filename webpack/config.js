const path = require("path");


const entry = {
    main : path.resolve(__dirname, "../assets/index.tsx"),
    sw:path.resolve(__dirname, "../assets/sw.ts")
};

exports.entry = entry;