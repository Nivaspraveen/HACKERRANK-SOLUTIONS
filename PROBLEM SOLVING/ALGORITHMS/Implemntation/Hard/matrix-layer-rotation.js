// Solution for Matrix Layer Rotation

'use strict';

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
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */

function matrixRotation(matrix, r) {
    const m = matrix.length, n = matrix[0].length, layers = Math.min(m, n) / 2;
    for (let layer = 0; layer < layers; layer++) {
        const elements = [];
        for (let j = layer; j < n - layer; j++) elements.push(matrix[layer][j]);
        for (let i = layer + 1; i < m - layer; i++) elements.push(matrix[i][n - layer - 1]); 
        for (let j = n - layer - 2; j >= layer; j--) elements.push(matrix[m - layer - 1][j]); 
        for (let i = m - layer - 2; i > layer; i--) elements.push(matrix[i][layer]);
        
        const rotation = r % elements.length, rotated = elements.slice(rotation).concat(elements.slice(0, rotation));
        let index = 0; 
        for (let j = layer; j < n - layer; j++) matrix[layer][j] = rotated[index++]; 
        for (let i = layer + 1; i < m - layer; i++) matrix[i][n - layer - 1] = rotated[index++]; 
        for (let j = n - layer - 2; j >= layer; j--) matrix[m - layer - 1][j] = rotated[index++]; 
        for (let i = m - layer - 2; i > layer; i--) matrix[i][layer] = rotated[index++];
    }
    for (const row of matrix) console.log(row.join(' '));
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const r = parseInt(firstMultipleInput[2], 10);

    let matrix = Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    matrixRotation(matrix, r);
}
