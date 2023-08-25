/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program does basic math
*/

basic.clearScreen()
basic.pause(1000)

// text
basic.showString('A rectangle has dimensions 5 cm & 3 cm.')

// perimeter
basic.showString('The perimeter would be: ' + (2 * (5 + 3)).toString() + ' cm.')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// area
basic.showString('The area would be: ' + (5 * 3).toString() + ' cm^2.')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
