// Solution for Connection Towns

'use strict';

import { createWriteStream } from 'fs';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'connectingTowns' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY routes
 */

function connectingTowns(n, routes) {
    const mod = 1234567;
    let totalRoutes = 1;
    for (let i = 0; i < n - 1; i++) totalRoutes = (totalRoutes * routes[i]) % mod;
    return totalRoutes;
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const routes = readLine().replace(/\s+$/g, '').split(' ').map(routesTemp => parseInt(routesTemp, 10));

        const result = connectingTowns(n, routes);

        ws.write(result + '\n');
    }

    ws.end();
}
