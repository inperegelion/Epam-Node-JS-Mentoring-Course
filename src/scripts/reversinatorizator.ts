import { reverseString } from '../utils/reverseString';

console.log('Say Hi to Reversinatorizator! ');

process.stdin.on('data', (data) => {
    const input = data.toString();
    const reversedInput = reverseString(input);
    console.log(reversedInput);
});
