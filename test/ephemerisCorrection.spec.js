const { astronomy: { ephemerisCorrection } } = require( '../index' )
const rd = require( './rd' )

const results = [
  0.214169,
  0.143632,
  0.114444,
  0.107183,
  0.069498,
  0.057506,
  0.044758,
  0.017397,
  0.012796,
  0.008869,
  0.007262,
  0.005979,
  0.00574,
  0.003875,
  0.003157,
  0.002393,
  0.001731,
  0.001669,
  0.000615,
  0.000177,
  0.000101,
  0.000171,
  0.000136,
  0.000061,
  0.000014,
  0.000276,
  0.000296,
  0.000302,
  0.000302,
  0.000675,
  0.000712,
  0.000963,
  0.002913,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'ephemerisCorrection()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of ephemerisCorrection(${rd}) should be: '${result}'`, () => {
    expect( ephemerisCorrection( rd ) ).toBeCloseTo( result )
  } ) )
} )
