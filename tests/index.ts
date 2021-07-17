import { decode, encode } from "../src"

describe(`base62 codec`, () => {
  test(`encode`, () => {
    expect(encode(`0`)).toBe(`0`)
    expect(encode(`7`)).toBe(`7`)
    expect(encode(`16`)).toBe(`g`)
    expect(encode(`61`)).toBe(`Z`)
    expect(encode(`65`)).toBe(`13`)
    expect(encode(`999`)).toBe(`g7`)
    expect(encode(`9999`)).toBe(`2Bh`)
    expect(encode(`238327`)).toBe(`ZZZ`)
    expect(encode(`10000000000001`)).toBe(`2Q3rKTOF`)
    expect(encode(`10000000000002`)).toBe(`2Q3rKTOG`)
    expect(encode(`1111111111111111111111111111111111111111`)).toBe(
      `prkIoxEMsYZR5feGSINceX`
    )
    expect(encode(`1234567890123456789012345678901234567890`)).toBe(
      `sgANgCxWNj9w342DTgikhk`
    )
    expect(encode(`3248723497234982374892374238942342342342`)).toBe(
      `1cnTbX2B2yumcsCXjb9DLAq`
    )
    expect(encode(`9999999999999999999999999999999999999999`)).toBe(
      `3GY0rySV2cQYHLd8dWv8Maz`
    )
  })

  test(`decode`, () => {
    expect(decode(`0`)).toBe(`0`)
    expect(decode(`7`)).toBe(`7`)
    expect(decode(`g`)).toBe(`16`)
    expect(decode(`Z`)).toBe(`61`)
    expect(decode(`13`)).toBe(`65`)
    expect(decode(`0013`)).toBe(`65`)
    expect(decode(`g7`)).toBe(`999`)
    expect(decode(`2Bh`)).toBe(`9999`)
    expect(decode(`ZZZ`)).toBe(`238327`)
    expect(decode(`2Q3rKTOF`)).toBe(`10000000000001`)
    expect(decode(`2Q3rKTOH`)).toBe(`10000000000003`)
    expect(decode(`prkIoxEMsYZR5feGSINceX`)).toBe(
      `1111111111111111111111111111111111111111`
    )
    expect(decode(`sgANgCxWNj9w342DTgikhk`)).toBe(
      `1234567890123456789012345678901234567890`
    )
    expect(decode(`1cnTbX2B2yumcsCXjb9DLAq`)).toBe(
      `3248723497234982374892374238942342342342`
    )
    expect(decode(`3GY0rySV2cQYHLd8dWv8Maz`)).toBe(
      `9999999999999999999999999999999999999999`
    )
  })
})
