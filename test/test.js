"use strict";

/* eslint-disable no-var, prefer-arrow-callback */
// jscs: disable requireMultipleVarDecl

var child_process = require("child_process"),
    fs = require("fs");

var result = child_process.spawnSync(
        "jscs",
        "-r inline test/fixtures".split(" "),
        { encoding: "utf8" }
    );

// jscs: enable

if (result.status === 2)
{
    var fixture = fs.readFileSync("test/fixtures/errors.txt", "utf8");

    if (fixture === result.stdout)
    {
        console.log("Test passed");
        process.exit(0);
    }
    else
    {
        console.log("Oops, fixture doesn't match");
        process.exit(1);
    }
}
else if (result.status === 0)
    console.log("jscs returned no errors!");
else
    console.log("jscs returned status %d: %s", result.status, result.stderr);
