/**
 * This file is the BigML part of the project.
 * a CSV created (in cold.js) is processed on bigml cloud service.
 * the result object of bigml is being parsed and written to an updating JSON file (result.json).
 * for batch processing - the time interval is set to run each 10 seconds.
 */

var bigml = require('bigml');
var fs = require('fs');
var connection = new bigml.BigML('AdiDahari', '7b73a60961a3876eaa0549458d070d57520f403f')
var source = new bigml.Source(connection);


/* Batch processing the CSV created by the data on MongoDB Atlas database */
const main = async () => {
    let sets = []
    await source.create('./analytics/data/data.csv', { "source_parser": { "header": false, "missing_tokens": ["x"] } }, function (error, sourceInfo) {
        if (!error && sourceInfo) {
            var dataset = new bigml.Dataset(connection);
            dataset.create(sourceInfo, null, true, function (error, datasetInfo) {
                if (!error && datasetInfo) {
                    var association = new bigml.Association(connection);
                    association.create(datasetInfo, { search_strategy: 'support' }, function (error, associationInfo) {
                        if (!error && associationInfo) {
                            var model = new bigml.Model(connection);
                            model.get(associationInfo.resource,
                                true,
                                'only_model=true;limit=-1',
                                function (error, modelInfo) {
                                    if (!error && modelInfo.object.associations.rules) {
                                        for (let i = 0; i < modelInfo.object.associations.rules.length; ++i) {
                                            var left = modelInfo.object.associations.rules[i].lhs
                                            var right = modelInfo.object.associations.rules[i].rhs
                                            var set = []
                                            for (var item = 0; item < left.length; ++item) {
                                                set.push(modelInfo.object.associations.items[left[item]].name)
                                            }
                                            for (var item = 0; item < right.length; ++item) {
                                                set.push(modelInfo.object.associations.items[right[item]].name)
                                            }
                                            var support = (modelInfo.object.associations.rules[i].support[0] * 100) + '%'
                                            var count = modelInfo.object.associations.rules[i].support[1]
                                            sets.push({
                                                set: set,
                                                support: support,
                                                count: count
                                            })
                                        }
                                    }
                                    fs.writeFileSync(__dirname + '/data/result.json', JSON.stringify(sets, null, '\t'), { encoding: 'utf-8', flag: 'w' })
                                    console.log(sets)
                                })
                        }
                    });
                }
            });
        }
    });
}
setInterval(() => {
    main()
}, 10000)