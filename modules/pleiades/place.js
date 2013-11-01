// Module: Pleiades places

define(function() {
    return {
        name: 'Pleiades Places',
        type: 'place',
        toDataUri: function(uri) {
            var pleiadesID = uri.match(/[0-9]+$/);
            return 'http://ryanfb.github.io/pleiades-geojson/geojson/'+ pleiadesID + '.geojson';
        },
        // add name to data
        parseData: function(data) {
            data.name = data.json.title;
            data.latlon = data.json.reprPoint && data.json.reprPoint.reverse();
            data.description = 'A place described in the Pleiades gazetteer: ' + data.json.description + " <br/><a href='http://pelagios.dme.ait.ac.at/api/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F"+data.json.id+"'>Further information at Pelagios</a>";
            return data;
        }
    };
});
