import csv from 'csvtojson';
import fs from 'fs';
import { pipeline } from 'stream';

import { reCreateFolder } from '../utils/reCreateFolder.js';

const CSV_SOURCE = `${process.cwd()}/assets/books.csv`;
const TXT_TARGET_FOLDER = `${process.cwd()}/output/`;
const TXT_TARGET_FILENAME = 'books.txt';
const TXT_TARGET = TXT_TARGET_FOLDER + TXT_TARGET_FILENAME;

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
