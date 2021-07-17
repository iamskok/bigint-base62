[![CI](https://github.com/iamskok/bigint-base62/actions/workflows/ci.yml/badge.svg)](https://github.com/iamskok/bigint-base62/actions/workflows/ci.yml)

<h1 align="center">BigInt Base62 codec</h1>

Base62 codec that supports numbers greater than `Number.MAX_SAFE_INTEGER`.

## Installation

```sh
yarn add bigint-base62
```

## Usage

```
encode("1111111111111111111111111111111111111111") // "prkIoxEMsYZR5feGSINceX"
decode("prkIoxEMsYZR5feGSINceX") // "1111111111111111111111111111111111111111"
```
