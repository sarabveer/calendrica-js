const { astronomy: { lunarLatitude } } = require( '../index' )
const rd = require( './rd' )

const results = [
  2.452759,
  -4.90223,
  -2.939469,
  5.001904,
  -3.208909,
  0.894361,
  -3.863335,
  -2.522444,
  1.032069,
  3.005689,
  1.613843,
  4.766741,
  4.899203,
  4.838474,
  2.301475,
  -0.890563,
  4.765784,
  -2.737358,
  -4.035652,
  -3.157214,
  -1.879614,
  -3.379519,
  -4.398341,
  2.099198,
  5.268746,
  -1.672299,
  4.682012,
  3.705518,
  2.493964,
  -4.167774,
  -2.873757,
  -4.667251,
  5.138562,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'lunarLatitude()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of lunarLatitude(${rd}) should be: '${result}'`, () => {
    expect( lunarLatitude( rd ) ).toBeCloseTo( result )
  } ) )
} )
