var vg_2 = "Js/premierships_bar.vg.json";
var vg_3 = "Js/attendance_line.vg.json";
var vg_4 = "Js/scoring_trends.vg (1).json";

var embedOpt = {"actions": false};



vegaEmbed("#premierships_bar", vg_2, embedOpt).then(function(result) {
}).catch(console.error);

vegaEmbed("#attendance_line", vg_3, embedOpt).then(function(result) {
}).catch(console.error);

vegaEmbed("#scoring_trends", vg_4, embedOpt).then(function(result) {
}).catch(console.error);
