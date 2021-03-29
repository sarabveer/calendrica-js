const { ObservationalIslamic } = require( '../index' )
const rd = require( './rd' )

const islamic = new ObservationalIslamic()

const results = [
  { year: -1245, month: 12, day: 11 },
  { year: -813, month: 2, day: 25 },
  { year: -568, month: 4, day: 2 },
  { year: -501, month: 4, day: 7 },
  { year: -157, month: 10, day: 18 },
  { year: -47, month: 6, day: 3 },
  { year: 75, month: 7, day: 13 },
  { year: 403, month: 10, day: 5 },
  { year: 489, month: 5, day: 22 },
  { year: 586, month: 2, day: 7 },
  { year: 637, month: 8, day: 7 },
  { year: 687, month: 2, day: 21 },
  { year: 697, month: 7, day: 7 },
  { year: 793, month: 6, day: 30 },
  { year: 839, month: 7, day: 6 },
  { year: 897, month: 6, day: 2 },
  { year: 960, month: 9, day: 30 },
  { year: 967, month: 5, day: 27 },
  { year: 1058, month: 5, day: 18 },
  { year: 1091, month: 6, day: 3 },
  { year: 1128, month: 8, day: 4 },
  { year: 1182, month: 2, day: 4 },
  { year: 1234, month: 10, day: 10 },
  { year: 1255, month: 1, day: 11 },
  { year: 1321, month: 1, day: 20 },
  { year: 1348, month: 3, day: 19 },
  { year: 1360, month: 9, day: 7 },
  { year: 1362, month: 4, day: 14 },
  { year: 1362, month: 10, day: 7 },
  { year: 1412, month: 9, day: 12 },
  { year: 1416, month: 10, day: 5 },
  { year: 1460, month: 10, day: 12 },
  { year: 1518, month: 3, day: 5 },
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'altObservationalIslamicFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of altObservationalIslamicFromFixed(${rd}) should be: '${result}'`, () => {
    expect( islamic.altObservationalIslamicFromFixed( rd ) ).toEqual( result )
  } ) )
} )
