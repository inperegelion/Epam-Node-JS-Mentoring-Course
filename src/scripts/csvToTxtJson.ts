import csv from 'csvtojson';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';

import { reCreateFolder } from '../utils/reCreateFolder';

const CSV_SOURCE = path.resolve('./assets/books.csv');
const TXT_TARGET_FOLDER = path.resolve('./output');
const TXT_TARGET = path.join(TXT_TARGET_FOLDER, 'books.txt');

reCreateFolder(TXT_TARGET_FOLDER);

const readStream = fs.createReadStream(CSV_SOURCE);
const csvConverter = csv();
const writeStream = fs.createWriteStream(TXT_TARGET);

pipeline(
    readStream,
    csvConverter,
    writeStream, //
    (err) => {
        if (err) console.error(`😱 ${err.message}`);
        else console.log('🥳 txt file generated');
    }
);
