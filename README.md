# calendrica-js

Javascript implementation of some functions from the book *Calendrical Calculations: The Ultimate Edition* (2018) by Edward M. Reingold and Nachum Dershowitz.

Used by [nanakshahi-js](https://github.com/Sarabveer/nanakshahi-js)

## Functions

The Calendrical functions were mainly ported to Javascript for use in the `nanakshahi-js` library. As such, not all the functions from the book are implemented.

- Partially Implemented
  - Section 2: The Gregorian Calendar
  - Section 3: The Julian Calendar
  - Section 14: Time and Astronomy
  - Section 18.3: The Observational Islamic Calendar¹
  - Section 20: The Modern Hindu Calendars¹

The file `general.js` includes functions needed for mathematical computations given in the book and are taken from *Section 1: Calendar Basics*.

¹ For these functions, the reference location used is Amritsar, Punjab.

### Tests

The dataset used in the tests is taken from "Appendix C - Sample Data" of the *Calendrical Calculations: The Ultimate Edition* book. These tests are meant to show correct implementation of the functions from the book, they do not necessarily represent historical reality.

## Resources

[Calendrical Calculations site](https://www.cs.tau.ac.il/~nachum/calendar-book/index.shtml)

[CALENDRICA 4.0 -- Common Lisp](https://www.cambridge.org/download_file/972862): Original source code for the functions given in the *Calendrical Calculations: The Ultimate Edition* book.

[Errata](https://www.cs.tau.ac.il/~nachum/calendar-book/fourth-edition/errors.pdf): Errata for *Calendrical Calculations: The Ultimate Edition*, which includes corrections sent by me. The corrections submitted by me have also been implemented into the functions of this library.

[PyCalCal](https://github.com/espinielli/pycalcal): An implementation of the older 3rd edition of the Calendrical Calculations book in Python.
