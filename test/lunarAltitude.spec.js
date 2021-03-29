const { astronomy: { lunarAltitude } } = require( '../index' )
const { MECCA } = require( './locations' )
const rd = require( './rd' )

const results = [
  -13.163184,
  -7.281426,
  -77.1499,
  -30.401178,
  71.848578,
  -43.798579,
  40.653204,
  -40.278725,
  29.611156,
  -19.973178,
  -23.740743,
  30.956688,
  -18.88869,
  -32.161162,
  -45.680919,
  -50.29211,
  -54.345305,
  -34.566,
  44.131989,
  -57.539862,
  -62.082439,
  -54.072091,
  -16.120452,
  23.864594,
  32.950146,
  72.691651,
  -29.849481,
  31.610644,
  -42.219689,
  28.647809,
  -38.950553,
  27.601977,
  -54.854681,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'lunarAltitude()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of lunarAltitude(${rd}) should be: '${result}'`, () => {
    expect( lunarAltitude( rd, MECCA ) ).toBeCloseTo( result )
  } ) )
} )
