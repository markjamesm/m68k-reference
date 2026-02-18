---
title: Addressing Modes
description: Addressing Modes of the Motorola 68000 family of microprocessors.
---

The original Motorola 68000 has 14 addressing modes [^1]. Later models introduced additional addressing modes but are all backwards compatible with the original 68000. 

If the 68000 encounters instructions from 

## Effective Addressing Modes

|**Mode**|**Assembler Syntax**|**EA Mode Field**|**EA Register Field**| **Extension Words**|
|---|---|---|---|---|
|Data Register Direct|Dn|0 0 0|Register number|0|
|Address Register Direct|An|0 0 1|Register number|0|
|Address Register Indirect|(An)|0 1 0|Register number|0|
|Address Register Indirect with Postincrement|(An)+|0 1 1|Register number|0|
|Address Register Indirect with Predecrement|-(An)|1 0 0|Register number|0|
|Address Register Indirect with Displacement |(d16, An)|1 0 1|Register number|1|
|Address Register Indirect with Index|(d8, An, Xn)|1 1 0|Register number|1|
|Program Counter Relative with Displacement |(d16, PC)|1 1 1|0 1 0|1|
|Program Counter Relative with Index |(d8, PC, Xn)|1 1 1|0 1 1|1|
|Absolute Short Data|(address).W|1 1 1|0 0 0|1|
|Absolute Long Data|(address).L|1 1 1|0 0 1|2|
|Immediate|#(data)|1 1 1|1 0 0|1, 2|

### Special Addressing Modes

- Quick immediate
- Implied

## References

[^1]: [SYSC3601: Microprocessor Systems, Carleton University](https://www.sce.carleton.ca/courses/sysc-3601/s14/SYSC3601-Slides-09-Motorola%2068000.pdf#page=9)