const { gregorian: { gregorianFromFixed } } = require( '../index' )
const rd = require( './rd' )

const results = [
  { year: -586, month: 7, day: 24 },
  { year: -168, month: 12, day: 5 },
  { year: 70, month: 9, day: 24 },
  { year: 135, month: 10, day: 2 },
  { year: 470, month: 1, day: 8 },
  { year: 576, month: 5, day: 20 },
  { year: 694, month: 11, day: 10 },
  { year: 1013, month: 4, day: 25 },
  { year: 1096, month: 5, day: 24 },
  { year: 1190, month: 3, day: 23 },
  { year: 1240, month: 3, day: 10 },
  { year: 1288, month: 4, day: 2 },
  { year: 1298, month: 4, day: 27 },
  { year: 1391, month: 6, day: 12 },
  { year: 1436, month: 2, day: 3 },
  { year: 1492, month: 4, day: 9 },
  { year: 1553, month: 9, day: 19 },
  { year: 1560, month: 3, day: 5 },
  { year: 1648, month: 6, day: 10 },
  { year: 1680, month: 6, day: 30 },
  { year: 1716, month: 7, day: 24 },
  { year: 1768, month: 6, day: 19 },
  { year: 1819, month: 8, day: 2 },
  { year: 1839, month: 3, day: 27 },
  { year: 1903, month: 4, day: 19 },
  { year: 1929, month: 8, day: 25 },
  { year: 1941, month: 9, day: 29 },
  { year: 1943, month: 4, day: 19 },
  { year: 1943, month: 10, day: 7 },
  { year: 1992, month: 3, day: 17 },
  { year: 1996, month: 2, day: 25 },
  { year: 2038, month: 11, day: 10 },
  { year: 2094, month: 7, day: 18 },
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'gregorianFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of gregorianFromFixed(${rd}) should be: '${result}'`, () => {
    expect( gregorianFromFixed( rd ) ).toEqual( result )
  } ) )
} )
