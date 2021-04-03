const { TEHRAN } = require( './locations' )
const rd = require( './rd' )
const {
  general: { timeFromMoment },
  astronomy: { standardFromUniversal, midday },
} = require( '../index' )

const results = [
  0.504216,
  0.499952,
  0.497556,
  0.496143,
  0.510331,
  0.498595,
  0.493137,
  0.500958,
  0.499538,
  0.507865,
  0.510516,
  0.505289,
  0.500814,
  0.501853,
  0.513383,
  0.503941,
  0.498637,
  0.511368,
  0.502105,
  0.505088,
  0.507082,
  0.503594,
  0.507129,
  0.506931,
  0.502551,
  0.504488,
  0.496387,
  0.502516,
  0.494746,
  0.508771,
  0.512176,
  0.491786,
  0.507483,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'midday()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of midday(${rd}) should be: '${result}'`, () => {
    expect(
      timeFromMoment( standardFromUniversal( midday( rd, TEHRAN ), TEHRAN ) ),
    ).toBeCloseTo( result )
  } ) )
} )
