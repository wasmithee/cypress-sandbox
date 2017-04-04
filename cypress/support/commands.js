// Define locator string map
const locatorStringMap = {
  'queryButton': '#query-btn'
};

const plCypress      = {};
plCypress.getLocator = selector => {
  return locatorStringMap[selector];
}

module.exports = {getLocator: plCypress.getLocator}