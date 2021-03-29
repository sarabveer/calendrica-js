const { julian: { julianFromFixed } } = require( '../index' )
const rd = require( './rd' )

const results = [
  { year: -587, month: 7, day: 30 },
  { year: -169, month: 12, day: 8 },
  { year: 70, month: 9, day: 26 },
  { year: 135, month: 10, day: 3 },
  { year: 470, month: 1, day: 7 },
  { year: 576, month: 5, day: 18 },
  { year: 694, month: 11, day: 7 },
  { year: 1013, month: 4, day: 19 },
  { year: 1096, month: 5, day: 18 },
  { year: 1190, month: 3, day: 16 },
  { year: 1240, month: 3, day: 3 },
  { year: 1288, month: 3, day: 26 },
  { year: 1298, month: 4, day: 20 },
  { year: 1391, month: 6, day: 4 },
  { year: 1436, month: 1, day: 25 },
  { year: 1492, month: 3, day: 31 },
  { year: 1553, month: 9, day: 9 },
  { year: 1560, month: 2, day: 24 },
  { year: 1648, month: 5, day: 31 },
  { year: 1680, month: 6, day: 20 },
  { year: 1716, month: 7, day: 13 },
  { year: 1768, month: 6, day: 8 },
  { year: 1819, month: 7, day: 21 },
  { year: 1839, month: 3, day: 15 },
  { year: 1903, month: 4, day: 6 },
  { year: 1929, month: 8, day: 12 },
  { year: 1941, month: 9, day: 16 },
  { year: 1943, month: 4, day: 6 },
  { year: 1943, month: 9, day: 24 },
  { year: 1992, month: 3, day: 4 },
  { year: 1996, month: 2, day: 12 },
  { year: 2038, month: 10, day: 28 },
  { year: 2094, month: 7, day: 5 },
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'julianFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of julianFromFixed(${rd}) should be: '${result}'`, () => {
    expect( julianFromFixed( rd ) ).toEqual( result )
  } ) )
} )
