const fse = require('fs-extra')

fse.mkdirpSync('./dir1/')

fse.outputFileSync('./dir1/test1.txt', "Movie ")

fse.mkdirpSync('./dir2/')
fse.moveSync('./dir1/test1.txt', './dir2/test1.txt')

fse.mkdirpSync('./dir3/')
fse.copySync('./dir2/test1.txt', './dir3/test1.txt');

fse.removeSync('./dir3/test1.txt')
fse.removeSync('./dir2/test1.txt')

fse.removeSync('./dir1')
fse.removeSync('./dir2')
fse.removeSync('./dir3')