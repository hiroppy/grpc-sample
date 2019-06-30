function checkFeature(point) {
  let feature;

  // Check if there is already a feature object for the given point
  for (let i = 0; i < feature_list.length; i++) {
    feature = feature_list[i];

    if (
      feature.location.latitude === point.latitude &&
      feature.location.longitude === point.longitude
    ) {
      return feature;
    }
  }

  let name = '';
  feature = {
    name: name,
    location: point
  };
  return feature;
}

function getFeature(call, callback) {
  callback(null, checkFeature(call.request));
}
