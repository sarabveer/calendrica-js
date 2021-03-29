const { general: { jdFromFixed } } = require( '../index' )
const rd = require( './rd' )

const results = [
  1507231.5,
  1660037.5,
  1746893.5,
  1770641.5,
  1892731.5,
  1931579.5,
  1974851.5,
  2091164.5,
  2121509.5,
  2155779.5,
  2174029.5,
  2191584.5,
  2195261.5,
  2229274.5,
  2245580.5,
  2266100.5,
  2288542.5,
  2290901.5,
  2323140.5,
  2334848.5,
  2348020.5,
  2366978.5,
  2385648.5,
  2392825.5,
  2416223.5,
  2425848.5,
  2430266.5,
  2430833.5,
  2431004.5,
  2448698.5,
  2450138.5,
  2465737.5,
  2486076.5,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'jdFromFixed()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of jdFromFixed(${rd}) should be: '${result}'`, () => {
    expect( jdFromFixed( rd ) ).toBeCloseTo( result )
  } ) )
} )
