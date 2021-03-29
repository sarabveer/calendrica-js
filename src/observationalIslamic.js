const { mod, hr } = require( './general' )
const { MEAN_SYNODIC_MONTH, phasisOnOrBefore, phasisOnOrAfter } = require( './astronomy' )
const { fixedFromJulian } = require( './julian' )

const ObservationalIslamic = class {
  // Fixed date of start of the Islamic calendar.
  static ISLAMIC_EPOCH = fixedFromJulian( 622, 7, 16 )

  constructor( ISLAMIC_LOCATION ) {
    if ( ISLAMIC_LOCATION ) {
      this.ISLAMIC_LOCATION = ISLAMIC_LOCATION
    } else {
      // Sample location for Observational Islamic calendar
      // (Cairo, Egypt).
      this.ISLAMIC_LOCATION = {
        latitude: 30.1,
        longitude: 31.3,
        elevation: 200,
        zone: hr( 2 ),
      }
    }
  }

  // Fixed date equivalent to Observational Islamic date 'i-date'.
  fixedFromObservationalIslamic( year, month, day ) {
    const midmonth = ObservationalIslamic.ISLAMIC_EPOCH
      + Math.floor( ( ( year - 1 ) * 12 + month - ( 1 / 2 ) ) * MEAN_SYNODIC_MONTH )
    return phasisOnOrBefore( midmonth, this.ISLAMIC_LOCATION ) + day - 1
  }

  // Observational Islamic date (year month day) corresponding to fixed 'date'.
  observationalIslamicFromFixed( date ) {
    const crescent = phasisOnOrBefore( date, this.ISLAMIC_LOCATION )
    const elapsedMonths = Math.round(
      ( crescent - ObservationalIslamic.ISLAMIC_EPOCH ) / MEAN_SYNODIC_MONTH,
    )
    const year = Math.floor( ( 1 / 12 ) * elapsedMonths ) + 1
    const month = mod( elapsedMonths, 12 ) + 1
    const day = date - crescent + 1
    return { year, month, day }
  }

  // Length of lunar month based on observability at 'location',
  // which includes 'date'.
  static monthLength( date, location ) {
    const moon = phasisOnOrAfter( date + 1, location )
    const prev = phasisOnOrBefore( date, location )
    return moon - prev
  }

  // Fixed 'date' in 'location' is in a month that was forced to start early.
  static isEarlyMonth( date, location ) {
    const start = phasisOnOrBefore( date, location )
    const prev = start - 15
    return (
      ( date - start ) >= 30
      || ObservationalIslamic.monthLength( prev, location ) > 30
      || ( ObservationalIslamic.monthLength( prev, location ) === 30
        && ObservationalIslamic.isEarlyMonth( prev, location ) )
    )
  }

  // Fixed date equivalent to Observational Islamic 'i-date'.
  // Months are never longer than 30 days.
  altFixedFromObservationalIslamic( year, month, day ) {
    const midmonth = ObservationalIslamic.ISLAMIC_EPOCH
      + Math.floor( ( ( year - 1 ) * 12 + month - ( 1 / 2 ) ) * MEAN_SYNODIC_MONTH )
    const moon = phasisOnOrBefore( midmonth, this.ISLAMIC_LOCATION )
    const date = moon + day - 1
    return ObservationalIslamic.isEarlyMonth( midmonth, this.ISLAMIC_LOCATION ) ? date - 1 : date
  }

  // Observational Islamic date (year month day) corresponding to fixed 'date'.
  // Months are never longer than 30 days.
  altObservationalIslamicFromFixed( date ) {
    const early = ObservationalIslamic.isEarlyMonth( date, this.ISLAMIC_LOCATION )
    const long = early && ( ObservationalIslamic.monthLength( date, this.ISLAMIC_LOCATION ) > 29 )
    const datePrime = long ? date + 1 : date
    const moon = phasisOnOrBefore( datePrime, this.ISLAMIC_LOCATION )
    const elapsedMonths = Math.round(
      ( moon - ObservationalIslamic.ISLAMIC_EPOCH ) / MEAN_SYNODIC_MONTH,
    )
    const year = Math.floor( ( 1 / 12 ) * elapsedMonths ) + 1
    const month = mod( elapsedMonths, 12 ) + 1
    const day = datePrime - moon - ( ( early && !long ) ? -2 : -1 )
    return { year, month, day }
  }
}

module.exports = ObservationalIslamic
