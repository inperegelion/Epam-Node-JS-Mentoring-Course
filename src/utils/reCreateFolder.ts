import fs from 'fs';

export function reCreateFolder(address): void {
    try {
        // eslint-disable-next-line no-sync
        fs.mkdirSync(address);
        console.log('📂 output folder created!');
    } catch {
        console.log('📁 output folder found!');
    }
}
