var arg = process.argv.slice(2);
console.log(`The minimum of [${arg}] is ${Math.min(...arg)}`);
