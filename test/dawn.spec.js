const { PARIS } = require( './locations' )
const rd = require( './rd' )
const {
  general: { timeFromMoment },
  astronomy: { dawn },
} = require( '../index' )

const results = [
  0.095285,
  0.277372,
  0.203569,
  0.212231,
  0.28637,
  0.09628,
  0.25373,
  0.149472,
  0.088486,
  0.209217,
  0.228552,
  0.189859,
  0.14392,
  0, // null
  0.272361,
  0.178067,
  0.196839,
  0.236578,
  0.045748,
  0, // null
  0.105595,
  0, // null
  0.122462,
  0.202856,
  0.162579,
  0.163289,
  0.208698,
  0.16202,
  0.216912,
  0.217687,
  0.24798,
  0.25189,
  0.094955,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'dawn()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of dawn(${rd}) should be: '${result}'`, () => {
    expect( timeFromMoment( dawn( rd, PARIS, 18 ) ) ).toBeCloseTo( result )
  } ) )
} )
