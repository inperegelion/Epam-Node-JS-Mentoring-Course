import { reverseString } from '../utils/reverseString.js';
import { rainbowLog, funkyRainbowLog } from '../utils/rainbowLog.js';

await funkyRainbowLog('Say Hi to Reversinatorizator! ');

process.stdin.on('data', (data) => {
    const input = data.toString();
    const reversedInput = reverseString(input);
    rainbowLog(reversedInput);
});
