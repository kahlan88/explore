const init = () => {
  // check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  } else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }
};

const getLocationFromUser = callback => {
  let startPos;
  const geoSuccess = position => {
    startPos = position;
    if (callback) {
      callback(position);
    }
  };
  const geoError = error => {
    console.log('Error occurred. Error code: ' + error.code);
  };
  const geoOptions = {
    // TODO: add an option for the user to use up less battery - set to false if they choose that
    enableHighAccuracy: true, // slower, but more accurate location
    timeout: 10 * 1000, // timeout if not received the response
  };
  return navigator.geolocation.getCurrentPosition(
    geoSuccess,
    geoError,
    geoOptions
  );
};

const getCurrentLocation = callback => {
  const watchId = navigator.geolocation.watchPosition(position => {
    if (callback) {
      callback(position, watchId);
    }
  });
};

const getHomeLocation = callback => {
  init();
  getLocationFromUser(callback);
};

const startCurrentLocationTracking = callback => {
  getCurrentLocation(callback);
};

const stopCurrentLocationTracking = watchId => {
  console.log(watchId);
  navigator.geolocation.clearWatch(watchId);
};

export {
  startCurrentLocationTracking,
  stopCurrentLocationTracking,
  getHomeLocation,
};
