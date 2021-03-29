const { mod } = require( './general' )

// Fixed date of start of the (proleptic) Gregorian calendar.
const GREGORIAN_EPOCH = 1

// January on Julian/Gregorian calendar.
const JANUARY = 1

// February on Julian/Gregorian calendar.
const FEBRUARY = 2

// March on Julian/Gregorian calendar.
const MARCH = 3

// April on Julian/Gregorian calendar.
const APRIL = 4

// May on Julian/Gregorian calendar.
const MAY = 5

// June on Julian/Gregorian calendar.
const JUNE = 6

// July on Julian/Gregorian calendar.
const JULY = 7

// August on Julian/Gregorian calendar.
const AUGUST = 8

// September on Julian/Gregorian calendar.
const SEPTEMBER = 9

// October on Julian/Gregorian calendar.
const OCTOBER = 10

// November on Julian/Gregorian calendar.
const NOVEMBER = 11

// December on Julian/Gregorian calendar.
const DECEMBER = 12

// True if g-year is a leap year on the Gregorian calendar.
const isGregorianLeapYear = gYear => (
  ( mod( gYear, 4 ) === 0 ) && !( [ 100, 200, 300 ].includes( mod( gYear, 400 ) ) )
)

// Fixed date equivalent to the Gregorian date g-date.
const fixedFromGregorian = ( year, month, day ) => (
  GREGORIAN_EPOCH - 1 + 365 * ( year - 1 )
    + Math.floor( ( year - 1 ) / 4 )
    - Math.floor( ( year - 1 ) / 100 )
    + Math.floor( ( year - 1 ) / 400 )
    + Math.floor( ( 1 / 12 ) * ( 367 * month - 362 ) )
    + ( ( month <= 2 ) ? 0 : ( isGregorianLeapYear( year ) ? -1 : -2 ) )
    + day
)

// Fixed date of January 1 in g-year.
const gregorianNewYear = gYear => fixedFromGregorian( gYear, JANUARY, 1 )

// Gregorian year corresponding to the fixed date.
const gregorianYearFromFixed = date => {
  const d0 = date - GREGORIAN_EPOCH
  const n400 = Math.floor( d0 / 146097 )
  const d1 = mod( d0, 146097 )
  const n100 = Math.floor( d1 / 36524 )
  const d2 = mod( d1, 36524 )
  const n4 = Math.floor( d2 / 1461 )
  const d3 = mod( d2, 1461 )
  const n1 = Math.floor( d3 / 365 )
  const year = 400 * n400 + 100 * n100 + 4 * n4 + n1
  return ( n100 === 4 || n1 === 4 ) ? year : year + 1
}

// Gregorian (year month day) corresponding to fixed date.
const gregorianFromFixed = date => {
  const year = gregorianYearFromFixed( date )
  const priorDays = date - gregorianNewYear( year )
  const correction = date < fixedFromGregorian( year, MARCH, 1 )
    ? 0
    : ( isGregorianLeapYear( year ) ? 1 : 2 )
  const month = Math.floor( ( 1 / 367 ) * ( 12 * ( priorDays + correction ) + 373 ) )
  const day = date - fixedFromGregorian( year, month, 1 ) + 1
  return { year, month, day }
}

// Number of days from Gregorian date g-date1 until g-date2.
const gregorianDateDifference = (
  { year: year1, month: month1, day: day1 }, // g-date1
  { year: year2, month: month2, day: day2 }, // g-date2
) => (
  fixedFromGregorian( year2, month2, day2 ) - fixedFromGregorian( year1, month1, day1 )
)

module.exports = {
  GREGORIAN_EPOCH,
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
  isGregorianLeapYear,
  fixedFromGregorian,
  gregorianNewYear,
  gregorianYearFromFixed,
  gregorianFromFixed,
  gregorianDateDifference,
}
