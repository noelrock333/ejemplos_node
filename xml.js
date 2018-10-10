var fs = require('fs');
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
var xml = fs.readFile('places.xml', 'utf8', function(err, data) {
    parseString(data, function (err, result) {
        console.dir(result.places.place);
    });
});
