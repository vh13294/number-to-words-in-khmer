<h2 align="center">Number to Khmer words</h2>

<p align="center">
    <a href="https://vh13294.github.io/number-to-khmer-word/">
        Try it!
    </a>
</p>

<p align="center">
    <a href="https://www.codefactor.io/repository/github/vh13294/number-to-khmer-word">
        <img src="https://www.codefactor.io/repository/github/vh13294/number-to-khmer-word/badge" alt="CodeFactor" />
    </a>
    <a href="https://www.npmjs.com/package/number_to_khmer_word">
        <img src="https://img.shields.io/npm/v/number_to_khmer_word.svg?style=flat-square&sanitize=true" alt="NPM Version" />
    </a>
    <a href="https://www.npmjs.com/package/number_to_khmer_word">
        <img src="https://img.shields.io/npm/dm/number_to_khmer_word.svg?style=flat-square&sanitize=true" alt="NPM Downloads" >
    </a>
    <a href="#">
        <img src="https://img.shields.io/npm/l/number_to_khmer_word.svg?colorB=black&label=LICENSE&style=flat-square&sanitize=true" alt="License"/>
    </a>
</p>

# Description

Javascript and Typescript library for converting Arabic numerals to Khmer words

# Installation

```bash
npm i number_to_khmer_word
```

# Basic Usage

### Include Module

```ts
import { numberToWord } from 'number_to_khmer_word';

const words = numberToWord(input: number | string)

// Example
numberToWord(100_000)
numberToWord('1000')
```

For Currency Mode

CurrencyType = ['USD', 'KHR']

```ts
import { currencyToWord } from 'number_to_khmer_word';

const words = currencyToWord(input: number | string, currency: currencyType)

// Example
currencyToWord(100_000, 'USD')
currencyToWord('1000', 'KHR')
```

### TODO

- [ ] Allow copy paste but show error toast if invalid number (insert in series)
- [ ] Animate text change
