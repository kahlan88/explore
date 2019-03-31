const storeLocationPreference = () =>
  localStorage.setItem('allowedLocation', JSON.stringify(true));

// Then to retrieve it from the store and convert to an object again:
const getLocationPreference = () =>
  JSON.parse(localStorage.getItem('allowedLocation'));

// If we need to delete all entries of the store we can simply do:
const clear = () => localStorage.clear();

export { storeLocationPreference, getLocationPreference, clear };
export default storeLocationPreference;
