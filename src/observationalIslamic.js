const { mod } = require( './general' )
const { MEAN_SYNODIC_MONTH, phasisOnOrBefore, phasisOnOrAfter } = require( './astronomy' )
const { fixedFromJulian } = require( './julian' )
const { AMRITSAR } = require( './modernHindu' )

// Fixed date of start of the Islamic calendar.
const ISLAMIC_EPOCH = fixedFromJulian( 622, 7, 16 )

// Sample location for Observational Islamic calendar
const ISLAMIC_LOCATION = AMRITSAR

// Fixed date equivalent to Observational Islamic date 'i-date'.
const fixedFromObservationalIslamic = ( year, month, day ) => {
  const midmonth = ISLAMIC_EPOCH
    + Math.floor( ( ( year - 1 ) * 12 + month - ( 1 / 2 ) ) * MEAN_SYNODIC_MONTH )
  return phasisOnOrBefore( midmonth, ISLAMIC_LOCATION ) + day - 1
}

// Observational Islamic date (year month day) corresponding to fixed 'date'.
const observationalIslamicFromFixed = date => {
  const crescent = phasisOnOrBefore( date, ISLAMIC_LOCATION )
  const elapsedMonths = Math.round( ( crescent - ISLAMIC_EPOCH ) / MEAN_SYNODIC_MONTH )
  const year = Math.floor( ( 1 / 12 ) * elapsedMonths ) + 1
  const month = mod( elapsedMonths, 12 ) + 1
  const day = date - crescent + 1
  return { year, month, day }
}

// Length of lunar month based on observability at 'location',
// which includes 'date'.
const monthLength = ( date, location ) => {
  const moon = phasisOnOrAfter( date + 1, location )
  const prev = phasisOnOrBefore( date, location )
  return moon - prev
}

// Fixed 'date' in 'location' is in a month that was forced to start early.
const isEarlyMonth = ( date, location ) => {
  const start = phasisOnOrBefore( date, location )
  const prev = start - 15
  return (
    ( date - start ) >= 30
    || monthLength( prev, location ) > 30
    || ( monthLength( prev, location ) === 30 && isEarlyMonth( prev, location ) )
  )
}

// Fixed date equivalent to Observational Islamic 'i-date'.
// Months are never longer than 30 days.
const altFixedFromObservationalIslamic = ( year, month, day ) => {
  const midmonth = ISLAMIC_EPOCH
    + Math.floor( ( ( year - 1 ) * 12 + month - ( 1 / 2 ) ) * MEAN_SYNODIC_MONTH )
  const moon = phasisOnOrBefore( midmonth, ISLAMIC_LOCATION )
  const date = moon + day - 1
  return isEarlyMonth( midmonth, ISLAMIC_LOCATION ) ? date - 1 : date
}

// Observational Islamic date (year month day) corresponding to fixed 'date'.
// Months are never longer than 30 days.
const altObservationalIslamicFromFixed = date => {
  const early = isEarlyMonth( date, ISLAMIC_LOCATION )
  const long = early && ( monthLength( date, ISLAMIC_LOCATION ) > 29 )
  const datePrime = long ? date + 1 : date
  const moon = phasisOnOrBefore( datePrime, ISLAMIC_LOCATION )
  const elapsedMonths = Math.round( ( moon - ISLAMIC_EPOCH ) / MEAN_SYNODIC_MONTH )
  const year = Math.floor( ( 1 / 12 ) * elapsedMonths ) + 1
  const month = mod( elapsedMonths, 12 ) + 1
  const day = datePrime - moon - ( ( early && !long ) ? -2 : -1 )
  return { year, month, day }
}

module.exports = {
  ISLAMIC_EPOCH,
  ISLAMIC_LOCATION,
  fixedFromObservationalIslamic,
  observationalIslamicFromFixed,
  monthLength,
  isEarlyMonth,
  altFixedFromObservationalIslamic,
  altObservationalIslamicFromFixed,
}
