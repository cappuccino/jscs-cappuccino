"use strict";

/* eslint-disable no-unused-vars, no-undef */

// maximumLineLength: 120
let x = "It is not the critic who counts; not the one who points out where the great man stumbles, or where the doer of deeds could have done them better.";

// requireMultipleVarDecl
// requireLineBreakAfterVariableAssignment
let y = 7, z = 13;

// requirePaddingNewLinesAfterBlocks
if (x)
{
    x = 0;
}
console.log("oops"); // requirePaddingNewLinesBeforeExport
module.exports = 7;

// requirePaddingNewlinesBeforeKeywords: do, for, if, switch, case, try, void, with
x = 0;
do
{
    x = 1;
}
while (x);

x = 0;
for (let key in object)
    x = 7;

x = 0;
if (x)
    x = 0;

x = 0;
switch (x)
{
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

x = 0;
try
{
    x = 7;
}
catch (e)
{
    // nothing
}

// requireSpacesAfterBinaryOperators
y = x +1;

// requireSpaceAfterKeywords: do, for, while, if, else, switch, catch, typeof
do
{
    x = 7;
}
while(x > 1);

for(let zz in y)
    ++i;

if(x)
    x = 7;

switch(x)
{
    default:
        break;
}

try
{
    x = 7;
}
catch(ex)
{
    // nothing
}

let t = typeof x;

// requireSpacesBeforeBinaryOperators
x = y+ 1;

// requireSpacesInConditionalExpression
console.log(y === 7?"yes":"no");

// validateAlignedFunctionParameters
function align1(foo,
    bar)
{
    // nothing
}

function align2(
    foo,
    bar)
{
    // nothing
}

function align3(
    foo,
     bar
)
{
    // nothing
}

// validateNewlineAfterArrayElements: maximum 4
let a = [1, 2, 3, 4, 5];
