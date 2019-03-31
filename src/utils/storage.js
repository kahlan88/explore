const storeLocationPreference = () =>
  localStorage.setItem('allowedLocation', JSON.stringify(true));

// Then to retrieve it from the store and convert to an object again:
const getLocationPreference = () =>
  JSON.parse(localStorage.getItem('allowedLocation'));

const storeWalkLocation = pos => {
  const walkLocations = localStorage.getItem('walkLocations')
    ? JSON.parse(localStorage.getItem('walkLocations'))
    : [];

  // coords parsed as JSON are {}, they're of type of Coordinates which seems to be the reason? I mean... who knows ¯\_(ツ)_/¯
  const {
    coords: {
      accuracy,
      altitude,
      altitudeAccuracy,
      heading,
      latitude,
      longitude,
      speed,
    },
    timestamp,
  } = pos;
  walkLocations.push({
    timestamp,
    location: {
      accuracy,
      altitude,
      altitudeAccuracy,
      heading,
      latitude,
      longitude,
      speed,
    },
  });
  localStorage.setItem('walkLocations', JSON.stringify(walkLocations));
};

// If we need to delete all entries of the store we can simply do:
const clear = () => localStorage.clear();

export {
  storeLocationPreference,
  getLocationPreference,
  storeWalkLocation,
  clear,
};
export default storeLocationPreference;
