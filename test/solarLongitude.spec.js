const { astronomy: { solarLongitude } } = require( '../index' )
const rd = require( './rd' )

const results = [
  119.473431,
  254.248961,
  181.435996,
  188.663922,
  289.091566,
  59.119741,
  228.314554,
  34.460769,
  63.187995,
  2.457591,
  350.475934,
  13.49822,
  37.40392,
  81.02813,
  313.860498,
  19.95443,
  176.059431,
  344.922951,
  79.964921,
  99.302317,
  121.535304,
  88.567428,
  129.289884,
  6.14691,
  28.251993,
  151.780633,
  185.945867,
  28.555607,
  193.347892,
  357.151254,
  336.170692,
  228.184879,
  116.439352,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'solarLongitude()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of solarLongitude(${rd}) should be: '${result}'`, () => {
    // 'rd + 0.5' because result data is at 12:00:00 UT
    expect( solarLongitude( rd + 0.5 ) ).toBeCloseTo( result )
  } ) )
} )
