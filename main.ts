/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program does basic math
*/

basic.clearScreen()
basic.pause(1000)

// addition
basic.showString('40 + 2 = ' + (40 + 2).toString())
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// subtraction
basic.showString('45 - 3 = ' + (45 - 3).toString())
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// multiply
basic.showString('2 + 8 x 5 = ' + (2 + 8 * 5).toString())
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// divide
basic.showString('(80 / 2) + 2 = ' + (80 / 2 + 2).toString())
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// incorrect way to do exponents
basic.showString('10 + 2^5 = ' + (10 + 2 ^ 5).toString())
basic.showIcon(IconNames.Sad)
basic.pause(100)
basic.clearScreen()

// exponent
basic.showString('10 + 2^5 = ' + (10 + 2 ** 5).toString())
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
