const { Persian } = require( '../index' )
const rd = require( './rd' )

const persian = new Persian()

const results = [
  { year: -1208, month: 5, day: 1 },
  { year: -790, month: 9, day: 14 },
  { year: -552, month: 7, day: 2 },
  { year: -487, month: 7, day: 9 },
  { year: -153, month: 10, day: 19 },
  { year: -46, month: 2, day: 31 },
  { year: 73, month: 8, day: 19 },
  { year: 392, month: 2, day: 5 },
  { year: 475, month: 3, day: 4 },
  { year: 569, month: 1, day: 3 },
  { year: 618, month: 12, day: 20 },
  { year: 667, month: 1, day: 14 },
  { year: 677, month: 2, day: 8 },
  { year: 770, month: 3, day: 22 },
  { year: 814, month: 11, day: 13 },
  { year: 871, month: 1, day: 21 },
  { year: 932, month: 6, day: 28 },
  { year: 938, month: 12, day: 14 },
  { year: 1027, month: 3, day: 21 },
  { year: 1059, month: 4, day: 10 },
  { year: 1095, month: 5, day: 2 },
  { year: 1147, month: 3, day: 30 },
  { year: 1198, month: 5, day: 10 },
  { year: 1218, month: 1, day: 7 },
  { year: 1282, month: 1, day: 29 },
  { year: 1308, month: 6, day: 3 },
  { year: 1320, month: 7, day: 7 },
  { year: 1322, month: 1, day: 29 },
  { year: 1322, month: 7, day: 14 },
  { year: 1370, month: 12, day: 27 },
  { year: 1374, month: 12, day: 6 },
  { year: 1417, month: 8, day: 19 },
  { year: 1473, month: 4, day: 28 },
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'persianFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of persianFromFixed(${rd}) should be: '${result}'`, () => {
    expect( persian.persianFromFixed( rd ) ).toEqual( result )
  } ) )
} )
