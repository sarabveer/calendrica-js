const {
  general: { timeFromMoment },
  astronomy: { sunset },
} = require( '../index' )
const { JERUSALEM } = require( './locations' )
const rd = require( './rd' )

const results = [
  0.780845,
  0.69755,
  0.735132,
  0.728754,
  0.709014,
  0.774489,
  0.701105,
  0.763005,
  0.777067,
  0.748335,
  0.742775,
  0.753355,
  0.764673,
  0.784339,
  0.722763,
  0.756392,
  0.739904,
  0.739901,
  0.784355,
  0.787384,
  0.782255,
  0.786607,
  0.778413,
  0.749936,
  0.760494,
  0.762172,
  0.730888,
  0.760654,
  0.724249,
  0.745604,
  0.734985,
  0.700049,
  0.78477,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'sunset()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of sunset(${rd}) should be: '${result}'`, () => {
    expect( timeFromMoment( sunset( rd, JERUSALEM ) ) ).toBeCloseTo( result )
  } ) )
} )
