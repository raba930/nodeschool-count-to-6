var inputs = process.argv.slice(2),
    result = inputs.map(x => x[0])
                    .reduce((x, y) => x + y);
console.log(`[${inputs}] becomes "${result}"`);
