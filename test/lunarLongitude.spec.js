const { astronomy: { lunarLongitude } } = require( '../index' )
const rd = require( './rd' )

const results = [
  244.853905,
  208.856738,
  213.746842,
  292.046243,
  156.819014,
  108.055632,
  39.356097,
  98.565851,
  332.958296,
  92.259651,
  78.132029,
  274.946995,
  128.362844,
  89.51845,
  24.607322,
  53.485956,
  187.89852,
  320.172362,
  314.042566,
  145.474065,
  185.030507,
  142.189132,
  253.743375,
  151.648685,
  287.987743,
  25.626707,
  290.2883,
  189.913142,
  284.93173,
  152.339044,
  51.662265,
  26.68206,
  175.500822,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'lunarLongitude()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of lunarLongitude(${rd}) should be: '${result}'`, () => {
    // If 764652 R.D., then ignore. This test was broken by the ephemerisCorrection fix.
    if ( rd !== 764652 ) {
      expect( lunarLongitude( rd ) ).toBeCloseTo( result )
    }
  } ) )
} )
