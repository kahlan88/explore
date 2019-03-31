const init = () => {
  // check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  } else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }
};

const getLocationFromUser = type => {
  let startPos;
  const geoSuccess = position => {
    startPos = position;
    document.getElementById(`${type}Lat`).innerHTML = startPos.coords.latitude;
    document.getElementById(`${type}Lon`).innerHTML = startPos.coords.longitude;
  };
  const geoError = error => {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };
  const geoOptions = {
    // TODO: add an option for the user to use up less battery - set to false if they choose that
    enableHighAccuracy: true, // slower, but more accurate location
    timeout: 10 * 1000, // timeout if not received the response
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  // console.log(startPos);

  // const watchId = navigator.geolocation.watchPosition(position => {
  //   document.getElementById('watchLat').innerHTML = position.coords.latitude;
  //   document.getElementById('watchLon').innerHTML = position.coords.longitude;
  // });
  // console.log(watchId);
};

const getHomeLocation = () => {
  init();
  getLocationFromUser('home');
};

const getCurrentLocation = () => {
  init();
  setInterval(() => {
    getLocationFromUser('current');
  }, 1500);
};

export { getCurrentLocation, getHomeLocation };
