var neighborhoods = [];

function Neighborhood (rawDataObject) {
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#neighborhood-template').html());
  return templateRender(this);
};

function handleShowNeighborhoods() {
  $.getJSON('/data/neighborhoodData.json')
  .then(function(data) {
    console.log(data);
    data.forEach(function(neighborhoodObject) {
      neighborhoods.push(new Neighborhood(neighborhoodObject));
      console.log('neighborhoods array being built', neighborhoods);
    });
    neighborhoods.forEach(function(ourNewNeighborhoodObject){
      $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
    });
  }, function(err) {
    console.error(err);
  });
}

console.log('neighborhoods array', neighborhoods);

$('#show-neighborhoods').on('click', handleShowNeighborhoods);
