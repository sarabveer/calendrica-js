const { astronomy: { solarLongitudeAfter } } = require( '../index' )
const rd = require( './rd' )

const results = [
  -214131.1473,
  -61371.05305,
  25556.78909,
  49297.58457,
  171378.5393,
  210187.9081,
  253468.413,
  369798.5591,
  400113.6185,
  434446.3286,
  452615.1349,
  470240.0174,
  473892.4326,
  507859.912,
  524202.6224,
  544749.3187,
  567122.5122,
  569492.6732,
  601727.0187,
  613508.2591,
  626656.9709,
  645556.002,
  664276.9077,
  671488.1669,
  694863.6283,
  704453.5362,
  708926.2391,
  709473.3,
  709656.7282,
  727277.3666,
  728738.3354,
  744354.7928,
  764718.4688,
]

const data = rd.map( ( rd, i ) => [ rd, results[ i ] ] )

describe( 'solarLongitudeAfter()', () => {
  data.map( ( [ rd, result ] ) => it( `Output of solarLongitudeAfter(${rd}) should be: '${result}'`, () => {
    // 'rd + 0.5' because result data is at 12:00:00 UT
    expect(
      Math.min(
        solarLongitudeAfter( 0, rd ),
        solarLongitudeAfter( 90, rd ),
        solarLongitudeAfter( 180, rd ),
        solarLongitudeAfter( 270, rd ),
      ),
    ).toBeCloseTo( result )
  } ) )
} )
