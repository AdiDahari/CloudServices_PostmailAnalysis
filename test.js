var bigml = require('bigml');
var fs = require('fs');
var connection = new bigml.BigML('AdiDahari', '7b73a60961a3876eaa0549458d070d57520f403f')
var source = new bigml.Source(connection);


source.create('./data/data.csv', function (error, sourceInfo) {
    if (!error && sourceInfo) {
        var dataset = new bigml.Dataset(connection);
        dataset.create(sourceInfo, function (error, datasetInfo) {
            if (!error && datasetInfo) {
                var model = new bigml.Association(connection);
                model.create(datasetInfo, { search_strategy: 'support' }, function (error, modelInfo) {
                    if (!error && modelInfo) {
                        console.log(modelInfo)

                        var model = new bigml.Model(connection);
                        model.get(modelInfo.resource,
                            true,
                            'only_model=true;limit=-1',
                            function (error, resource) {
                                if (!error && resource) {
                                    fs.writeFileSync('./data/dataset.json', JSON.stringify(resource));
                                    console.log(resource.object.associations);
                                }
                            })
                    }
                });
            }
        });
    }
});