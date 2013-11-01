// Module: Pleiades places

define(function() {
    return {
        name: 'Pelagios Places',
        type: 'place',
        toDataUri: function(uri) {
            var pleiadesID = uri.match(/[0-9]+$/);
            return 'http://ryanfb.github.io/pleiades-geojson/geojson/'+ pleiadesID + '.geojson';
        },
        // add name to data
        parseData: function(data) {
            data.name = data.json.title;
            data.latlon = data.json.reprPoint && data.json.reprPoint.reverse();
            data.description = data.json.description;
            return data;
        }
    };
});
