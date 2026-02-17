---
title: Motorola 68000 Addressing Modes
description: Addressing Modes of the Motorola 68000 microprocessor.
---

|**Addressing Mode**|**Format**|**M**|**Xn**|
|---|---|---|---|
|Data register |**Dn**|0 0 0|reg|
|Address register |**An**|0 0 1|reg |
|Address |**(An)**|0 1 0|reg |
|Address with Postincrement |**(An)+**|0 1 1|reg|
|Address with Predecrement |**-(An)**|1 0 0|reg|
|Address with Displacement |**(d16, An)**|1 0 1|reg |
|Address with Index |**(d8, An, Xn)**|1 1 0|reg|
|Program Counter with Displacement |**(d16, PC)**|1 1 1|0 1 0|
|Program Counter with Index |**(d8, PC, Xn)**|1 1 1|0 1 1|
|Absolute Short |**(xxx).W**|1 1 1|0 0 0|
|Absolute Long |**(xxx).L**|1 1 1|0 0 1|
|Immediate|**#imm**|1 1 1|1 0 0|