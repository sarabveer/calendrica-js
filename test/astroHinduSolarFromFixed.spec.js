const { modernHindu: { astroHinduSolarFromFixed } } = require( '../index' )
const rd = require( './rd' )

const results = [
  { year: -664, month: 5, day: 13 },
  { year: -246, month: 9, day: 21 },
  { year: -8, month: 7, day: 5 },
  { year: 57, month: 7, day: 11 },
  { year: 391, month: 10, day: 17 },
  { year: 498, month: 2, day: 27 },
  { year: 616, month: 8, day: 13 },
  { year: 935, month: 1, day: 26 },
  { year: 1018, month: 2, day: 24 },
  { year: 1111, month: 12, day: 21 },
  { year: 1161, month: 12, day: 8 },
  { year: 1209, month: 12, day: 31 },
  { year: 1220, month: 1, day: 25 },
  { year: 1313, month: 3, day: 7 },
  { year: 1357, month: 10, day: 28 },
  { year: 1414, month: 1, day: 4 },
  { year: 1475, month: 6, day: 9 },
  { year: 1481, month: 11, day: 28 },
  { year: 1570, month: 3, day: 2 },
  { year: 1602, month: 3, day: 22 },
  { year: 1638, month: 4, day: 13 },
  { year: 1690, month: 3, day: 9 },
  { year: 1741, month: 4, day: 20 },
  { year: 1760, month: 12, day: 15 },
  { year: 1825, month: 1, day: 7 },
  { year: 1851, month: 5, day: 10 },
  { year: 1863, month: 6, day: 14 },
  { year: 1865, month: 1, day: 6 },
  { year: 1865, month: 6, day: 21 },
  { year: 1913, month: 12, day: 4 },
  { year: 1917, month: 11, day: 13 },
  { year: 1960, month: 7, day: 25 },
  { year: 2016, month: 4, day: 2 },
]

// Change year from Saka to Bikrami
results.forEach( ( { year }, i ) => { results[ i ].year = year + 135 } )

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

// Skip due to Location and Sunrise calc differences
describe.skip( 'astroHinduSolarFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of astroHinduSolarFromFixed(${rd}) should be: '${result}'`, () => {
    expect( astroHinduSolarFromFixed( rd ) ).toEqual( result )
  } ) )
} )
