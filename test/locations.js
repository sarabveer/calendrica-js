const { general: { hr, angle } } = require( '../index' )

const JERUSALEM = {
  latitude: 31.78,
  longitude: 35.24,
  elevation: 740,
  zone: hr( 2 ),
}

const MECCA = {
  latitude: angle( 21, 25, 24 ),
  longitude: angle( 39, 49, 24 ),
  elevation: 298,
  zone: hr( 3 ),
}

const PARIS = {
  latitude: angle( 48, 50, 11 ),
  longitude: angle( 2, 20, 15 ),
  elevation: 27,
  zone: hr( 1 ),
}

module.exports = {
  JERUSALEM,
  MECCA,
  PARIS,
}
