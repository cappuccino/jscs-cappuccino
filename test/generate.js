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
    fs.writeFileSync("test/fixtures/errors.txt", result.stdout);
    console.log("Fixtures generated");
}
else if (result.status === 0)
    console.log("jscs returned no errors!");
else
    console.log("jscs returned status %d: %s", result.status, result.stderr);
