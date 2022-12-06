import funkylog from 'funkylog';
import colors from 'colors/safe.js';

const { log } = funkylog({ delay: 5, randomized: false });

export function rainbowLog(string = '!') {
    console.log(`${colors.rainbow(string)}\n`);
}

export async function funkyRainbowLog(string = '!') {
    await log(`${colors.rainbow(string)}\n`);
}
