const { astronomy: { equationOfTime } } = require( '../index' )
const rd = require( './rd' )

const results = [
  -0.00119,
  0.003159,
  0.005373,
  0.006791,
  -0.007231,
  0.00441,
  0.009897,
  0.001987,
  0.003478,
  -0.004947,
  -0.007588,
  -0.002369,
  0.00214,
  0.001195,
  -0.010356,
  -0.001013,
  0.004277,
  -0.008429,
  0.000943,
  -0.002039,
  -0.004076,
  -0.000541,
  -0.004143,
  -0.004008,
  0.000392,
  -0.001555,
  0.006529,
  0.000427,
  0.00818,
  -0.005843,
  -0.009214,
  0.011238,
  -0.004466,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'equationOfTime()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of equationOfTime(${rd}) should be: '${result}'`, () => {
    expect( equationOfTime( rd ) ).toBeCloseTo( result )
  } ) )
} )
