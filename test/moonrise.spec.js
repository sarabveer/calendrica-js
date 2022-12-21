const { MECCA } = require( './locations' )
const rd = require( './rd' )
const {
  general: { timeFromMoment },
  astronomy: { moonrise },
} = require( '../index' )

const results = [
  0.645260,
  0.146650,
  0.365595,
  0.582553,
  0.926722,
  0.391565,
  0.737227,
  0.434271,
  0.028119,
  0.501712,
  0.494050,
  0.013196,
  0.519306,
  0.259826,
  0.452190,
  0.343276,
  0.300431,
  0.231763,
  0.973015,
  0.394417,
  0.450518,
  0.416008,
  0.657391,
  0.686259,
  0.008243,
  0.916779,
  0.586590,
  0.742587,
  0.555246,
  0.719220,
  0.466211,
  0.705999,
  0.436806,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'moonrise()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of moonrise(${rd}) should be: '${result}'`, () => {
    expect( timeFromMoment( moonrise( rd, MECCA ) ) ).toBeCloseTo( result )
  } ) )
} )
