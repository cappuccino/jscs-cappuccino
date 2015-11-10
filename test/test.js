"use strict";

const
    captureStream = require("capture-stream"),
    Checker = require("jscs"),
    fs = require("fs"),
    path = require("path"),
    reporter = require("jscs/lib/reporters/inline.js");

const checker = new Checker();  // jscs: ignore requireMultipleVarDecl

checker.registerDefaultRules();
checker.configure(require("../presets/cappuccino.json"));

let errors = [];

fs.readdirSync("test/fixtures").forEach((file) =>
{
    if (path.extname(file) === ".js")
    {
        const
            filePath = path.join("test/fixtures", file),
            source = fs.readFileSync(filePath, { encoding: "utf8" });

        errors.push(checker.checkString(source));
    }
});

let restore = captureStream(process.stdout),
    output;

reporter(errors);
output = restore(true);

if (process.argv[2] === "generate")
{
    fs.writeFileSync("test/fixtures/errors.txt", output);
    console.log("Fixtures generated");
}
else
{
    const fixture = fs.readFileSync("test/fixtures/errors.txt", { encoding: "utf8" });

    if (fixture === output)
    {
        console.log("Test passed");
    }
    else
    {
        console.log("Oops, fixture doesn't match");
        process.exit(1);
    }
}
