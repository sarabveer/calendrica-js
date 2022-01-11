# calendrica-js

Javascript implementation of some functions from the book *Calendrical Calculations: The Ultimate Edition* (2018) by Edward M. Reingold and Nachum Dershowitz.

Used by [nanakshahi-js](https://github.com/Sarabveer/nanakshahi-js)

## Functions

The Calendrical functions were mainly ported to Javascript for use in the `nanakshahi-js` library and for the dating of Sikh history. As such, not all the functions from the book are implemented.

- Partially Implemented
  - Section 2: The Gregorian Calendar
  - Section 3: The Julian Calendar
  - Section 14: Time and Astronomy
  - Section 15: The Persian Calendar[^note]
  - Section 18.3: The Observational Islamic Calendar[^note]
  - Section 20: The Modern Hindu Calendars[^note]

The file `general.js` includes functions needed for mathematical computations given in the book and are taken from *Section 1: Calendar Basics*.

[^note]: These sections have been written as classes to allow for custom options, such as using a custom location rather than the one given in the book.

### Tests

The dataset used in the tests is taken from "[Appendix C - Sample Data](https://www.cambridge.org/download_file/973771)" of the *Calendrical Calculations: The Ultimate Edition* book. These tests are meant to show correct implementation of the functions from the book, they do not necessarily represent historical reality.

Some tests have been skipped as the corrections from the Errata render the sample data for those functions incorrect.

## Resources

[Calendrical Calculations site](https://www.cs.tau.ac.il/~nachum/calendar-book/index.shtml)

[CALENDRICA 4.0 -- Common Lisp](https://www.cambridge.org/download_file/972862): Original source code for the functions given in the *Calendrical Calculations: The Ultimate Edition* book.

[Errata](https://www.cs.tau.ac.il/~nachum/calendar-book/fourth-edition/errors.pdf): Errata for *Calendrical Calculations: The Ultimate Edition*, which includes corrections sent by me. The corrections submitted by me have also been implemented into the functions of this library.

[PyCalCal](https://github.com/espinielli/pycalcal): An implementation of the older 3rd edition of the Calendrical Calculations book in Python.

# Notes

CALENDRICA 4.0 is written and copyrighted by E. M. Reingold and N. Dershowitz. Please check the LICENSE file for more information.
