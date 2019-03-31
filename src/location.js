// button.onclick = function() {

const init = () => {
  // check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  } else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }
};

// const getLocationFromUser = () => {
//   let startPos;
//   const geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//   };
//   return navigator.geolocation.getCurrentPosition(geoSuccess);
// };

const watchUserPosition = () => {
  navigator.geolocation.watchPosition(function(position) {
    document.getElementById('currentLat').innerHTML = position.coords.latitude;
    document.getElementById('currentLon').innerHTML = position.coords.longitude;
  });
};

const getLocation = () => {
  init();
  watchUserPosition();
  // window.onload = function() {
  //   getLocationFromUser();
  // };
  // setInterval(() => {
  //   getLocationFromUser();
  // }, 1500);

  //   var startPos;
  //   var nudge = document.getElementById("nudge");

  //   var showNudgeBanner = function() {
  //     nudge.style.display = "block";
  //   };

  //   var hideNudgeBanner = function() {
  //     nudge.style.display = "none";
  //   };

  //   var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

  // const geoSuccess = function(position) {
  //   hideNudgeBanner();
  //   // We have the location, don't display banner
  //   clearTimeout(nudgeTimeoutId);

  //   // Do magic with location
  //   startPos = position;
  //   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  // };
  // const geoError = function(error) {
  //   switch (error.code) {
  //     case error.TIMEOUT:
  //       // The user didn't accept the callout
  //       showNudgeBanner();
  //       break;
  //   }
  // };

  // navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
// };

export default getLocation;
export { getLocation };
