// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('Bienes_Inmuebles_CONAPESCA.csv')
// });

// lineReader.on('line', function (line) {
//     console.log('Line from file:', line);
// });

var fs = require('fs');
var Papa = require('papaparse');
fs.readFile('Bienes_Inmuebles_CONAPESCA.csv', 'utf8', function(err, file) {
    Papa.parse(file, {
        header: true,
        complete: function(results) {
            console.log(results.data);
        }
    });
});
