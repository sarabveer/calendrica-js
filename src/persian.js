const { fixedFromJulian } = require( './julian' )
const { MARCH, gregorianYearFromFixed } = require( './gregorian' )
const { MEAN_TROPICAL_YEAR, estimatePriorSolarLongitude, midday, solarLongitude } = require( './astronomy' )
const { hr, next } = require( './general' )

// Fixed date of start of the Persian calendar.
const PERSIAN_EPOCH = fixedFromJulian( 622, MARCH, 19 )

// Location of Tehran, Iran.
const TEHRAN = {
  latitude: 35.68,
  longitude: 51.42,
  elevation: 1100,
  zone: hr( 3 + 1 / 2 ),
}

// Universal time of true noon on fixed $date$ in Tehran.
const middayInTehran = date => midday( date, TEHRAN )

const Persian = class {
    static PERSIAN_EPOCH = PERSIAN_EPOCH

    static TEHRAN = TEHRAN

    static middayInTehran = middayInTehran

    // Set location for midday calculation
    constructor( LOCATION ) {
      this.midday = date => ( LOCATION ? midday( date, LOCATION ) : middayInTehran( date ) )
    }

    // Fixed date of Astronomical Persian New Year on or before fixed date.
    persianNewYearOnOrBefore = date => {
      const approx = estimatePriorSolarLongitude( 0, this.midday( date ) )
      return next( Math.floor( approx ) - 1, day => (
        solarLongitude( this.midday( day ) ) <= 0 + 2
      ) )
    }

    // Fixed date of Astronomical Persian date p-date.
    fixedFromPersian = ( year, month, day ) => {
      const newYear = this.persianNewYearOnOrBefore(
        PERSIAN_EPOCH + 180 + Math.floor( MEAN_TROPICAL_YEAR * ( year > 0 ? year - 1 : year ) ),
      )
      return newYear - 1 + ( month <= 7 ? 31 * ( month - 1 ) : 30 * ( month - 1 ) + 6 ) + day
    }

    // Astronomical Persian date (year month day) corresponding to fixed date.
    persianFromFixed = date => {
      const newYear = this.persianNewYearOnOrBefore( date )
      const y = Math.round( ( newYear - PERSIAN_EPOCH ) / MEAN_TROPICAL_YEAR ) + 1
      const year = y > 0 ? y : y - 1
      const dayOfYear = date - this.fixedFromPersian( year, 1, 1 ) + 1
      const month = dayOfYear <= 186
        ? Math.ceil( ( 1 / 31 ) * dayOfYear )
        : Math.ceil( ( 1 / 30 ) * ( dayOfYear - 6 ) )
      const day = date - this.fixedFromPersian( year, month, 1 ) + 1
      return { year, month, day }
    }

    // Fixed date of Persian New Year (Nowruz) in Gregorian year g-year.
    nowruz = gYear => {
      const persianYear = gYear - gregorianYearFromFixed( PERSIAN_EPOCH ) + 1
      const y = persianYear <= 0 ? persianYear - 1 : persianYear
      return this.fixedFromPersian( y, 1, 1 )
    }
}

module.exports = Persian
