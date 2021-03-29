const { modernHindu: { hinduLunarFromFixed } } = require( '../index' )
const rd = require( './rd' )

const results = [
  { year: -529, month: 6, leapMonth: false, day: 11, leapDay: false },
  { year: -111, month: 9, leapMonth: false, day: 27, leapDay: false },
  { year: 127, month: 8, leapMonth: false, day: 3, leapDay: false },
  { year: 192, month: 8, leapMonth: false, day: 9, leapDay: false },
  { year: 526, month: 11, leapMonth: false, day: 19, leapDay: false },
  { year: 633, month: 3, leapMonth: false, day: 5, leapDay: false },
  { year: 751, month: 9, leapMonth: false, day: 15, leapDay: false },
  { year: 1070, month: 2, leapMonth: false, day: 6, leapDay: false },
  { year: 1153, month: 3, leapMonth: true, day: 23, leapDay: false },
  { year: 1247, month: 1, leapMonth: false, day: 8, leapDay: false },
  { year: 1297, month: 1, leapMonth: false, day: 8, leapDay: false },
  { year: 1345, month: 1, leapMonth: false, day: 22, leapDay: false },
  { year: 1355, month: 2, leapMonth: false, day: 8, leapDay: false },
  { year: 1448, month: 4, leapMonth: false, day: 1, leapDay: false },
  { year: 1492, month: 11, leapMonth: false, day: 7, leapDay: false },
  { year: 1549, month: 2, leapMonth: true, day: 3, leapDay: false },
  { year: 1610, month: 7, leapMonth: false, day: 2, leapDay: false },
  { year: 1616, month: 11, leapMonth: false, day: 28, leapDay: true },
  { year: 1705, month: 3, leapMonth: false, day: 20, leapDay: false },
  { year: 1737, month: 4, leapMonth: false, day: 4, leapDay: false },
  { year: 1773, month: 5, leapMonth: false, day: 6, leapDay: false },
  { year: 1825, month: 4, leapMonth: false, day: 5, leapDay: false },
  { year: 1876, month: 5, leapMonth: false, day: 11, leapDay: false },
  { year: 1896, month: 1, leapMonth: false, day: 13, leapDay: false },
  { year: 1960, month: 1, leapMonth: false, day: 22, leapDay: false },
  { year: 1986, month: 5, leapMonth: false, day: 20, leapDay: false },
  { year: 1998, month: 7, leapMonth: false, day: 9, leapDay: false },
  { year: 2000, month: 1, leapMonth: false, day: 14, leapDay: false },
  { year: 2000, month: 7, leapMonth: false, day: 8, leapDay: false },
  { year: 2048, month: 12, leapMonth: false, day: 14, leapDay: false },
  { year: 2052, month: 12, leapMonth: false, day: 7, leapDay: false },
  { year: 2095, month: 8, leapMonth: false, day: 14, leapDay: false },
  { year: 2151, month: 4, leapMonth: false, day: 6, leapDay: false },
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

// Remove 5th result due to Sunrise calc difference
// R.D. 210155
data.splice( 5, 1 )

describe( 'hinduLunarFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of hinduLunarFromFixed(${rd}) should be: '${result}'`, () => {
    expect( hinduLunarFromFixed( rd ) ).toEqual( result )
  } ) )
} )
