process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var fs = require('fs');
var path = require('path');
var request = require('request');
var url = require('url');
/**
 *
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
function getfileByUrl(url, fileName, dir) {
  console.log('------------------------------------------------');
  console.log(url);
  console.log(fileName);
  console.log(dir);
  let stream = fs.createWriteStream(path.join(dir, fileName));
  request(url)
    .pipe(stream)
    .on('close', function (err) {
      console.log('文件' + fileName + '下载完毕');
    });
}

function makeDir(dirpath) {
  if (!fs.existsSync(dirpath)) {
    var pathtmp;
    dirpath.split('/').forEach(function (dirname) {
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname);
      } else {
        if (dirname) {
          pathtmp = dirname;
        } else {
          pathtmp = '/';
        }
      }
      if (!fs.existsSync(pathtmp)) {
        if (!fs.mkdirSync(pathtmp)) {
          return false;
        }
      }
    });
  }

  // else {
  //   deleteFolderFiles(dirpath);
  // }
  return true;
}

let filesArr = [
  'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css',
  'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js',
  'https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js',
  'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',
  'https://cdn.bootcss.com/simple-line-icons/2.4.1/css/simple-line-icons.css',
  'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://cdn.bootcss.com/bootstrap-table/1.12.1/bootstrap-table.css',
  'https://cdn.bootcss.com/jquery-treegrid/0.2.0/css/jquery.treegrid.min.css',
  'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',
  'https://cdn.bootcss.com/bootstrap-table/1.12.1/bootstrap-table.js',
  'https://cdn.bootcss.com/bootstrap-table/1.12.0/extensions/treegrid/bootstrap-table-treegrid.js',
  'https://cdn.bootcss.com/bootstrap-3-typeahead/4.0.2/bootstrap3-typeahead.js',
  'https://cdn.bootcss.com/bootstrap-fileinput/4.4.8/css/fileinput.min.css',
  'https://cdn.bootcss.com/bootstrap-fileinput/4.4.8/js/fileinput.min.js',
  'https://cdn.bootcss.com/jquery-treegrid/0.2.0/js/jquery.treegrid.min.js',
];

function unique(arr) {
  return Array.from(new Set(arr));
}

filesArr = unique(filesArr);

filesArr.forEach(async item => {
  const { pathname } = url.parse(item);
  let pathnameStr = pathname.split('/');
  const fileName = pathnameStr.pop();
  pathnameStr = pathnameStr.join('/');
  const dist = `./assets${pathnameStr}`;

  makeDir(dist);
  getfileByUrl(item, fileName, dist);
});
