const path = require('path');
const { createReadStream } = require('fs');
const { readdir, readFile, stat } = require('fs').promises;
const readline = require('readline');
const crypto = require('crypto');
const objectsToCSV = require('objects-to-csv');

async function readShares() {
  const fileStream = createReadStream('./shares.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  shares = [];
  for await (const line of rl) {
    shares.push(line.match(/[A-Za-z]:\\.*/)[0].trim());
  }

  return shares;
}

async function generateChecksum(filePath) {
  const filestream = await readFile(filePath, 'binary');

  const checksum = crypto
    .createHash('md5')
    .update(filestream, 'utf8')
    .digest('hex');

  return checksum;
}

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

(async () => {
  const shares = await readShares();
  console.log(shares);
  const sharesInfo = []
  const errorsInfo = []
  
  for (const share of shares) {
    for await (const f of getFiles(share)) {
      try {
        const stats = await stat(f);
        if (stats.isFile()) {
          console.log(f);
          const checksum = await generateChecksum(f);
          sharesInfo.push({
            fullName: f,
            directoryName:  path.dirname(f),
            name: path.basename(f),
            extension: path.extname(f),
            length: stats.size,
            creationTime: stats.birthtime.toISOString(),
            lastAccessTime: stats.atime.toISOString(),
            lastWriteAccessTime: stats.mtime.toISOString(),
            checksum,
          });
        }
      } catch (error) {
        errorsInfo.push({
          fullName: f,
          description: error.message,
        })
      }
    }
  }

  const sharesInfoCSV = new objectsToCSV(sharesInfo);
  const errorsInfoCSV = new objectsToCSV(errorsInfo);
  await sharesInfoCSV.toDisk('./shareInfo.csv');
  await errorsInfoCSV.toDisk('./errorsInfo.csv');
})()