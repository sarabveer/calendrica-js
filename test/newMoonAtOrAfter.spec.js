const { astronomy: { newMoonAtOrAfter } } = require( '../index' )
const rd = require( './rd' )

const results = [
  -214174.6058,
  -61382.99533,
  25495.80978,
  49238.50245,
  171318.4353,
  210180.6918,
  253442.8594,
  369763.7464,
  400091.5783,
  434376.5781,
  452627.192,
  470167.5784,
  473858.8533,
  507878.6668,
  524179.2471,
  544702.7539,
  567146.5132,
  569479.2033,
  601727.0336,
  613449.7621,
  626620.3698,
  645579.0767,
  664242.8867,
  671418.9705,
  694807.5634,
  704433.4912,
  708863.597,
  709424.4049,
  709602.0827,
  727291.2094,
  728737.4477,
  744329.574,
  764676.1913,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'newMoonAtOrAfter()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of newMoonAtOrAfter(${rd}) should be: '${result}'`, () => {
    expect( newMoonAtOrAfter( rd ) ).toBeCloseTo( result )
  } ) )
} )
