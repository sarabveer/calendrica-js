const { MECCA } = require( './locations' )
const rd = require( './rd' )
const {
  general: { timeFromMoment },
  astronomy: { moonset },
} = require( '../index' )

const results = [
  0.084225,
  0.627607,
  0.842646,
  0.030307,
  0.419886,
  0.965784,
  0.252852,
  0, // null
  0.528119,
  0.052493,
  0.037996,
  0.493177,
  0.060322,
  0.856017,
  0, // null
  0.908706,
  0.818009,
  0.714185,
  0.416862,
  0.932503,
  0.956378,
  0.952629,
  0.070965,
  0.200419,
  0.489200,
  0.429962,
  0.031414,
  0.224521,
  0, // null
  0.214825,
  0, // null
  0.211858,
  0.963174,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'moonset()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of moonset(${rd}) should be: '${result}'`, () => {
    expect( timeFromMoment( moonset( rd, MECCA ) ) ).toBeCloseTo( result )
  } ) )
} )
