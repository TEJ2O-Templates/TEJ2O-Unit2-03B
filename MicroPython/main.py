"""
Created by: Mr. Coxall
Created on: Sep 2020
This module does basic math
"""

from microbit import *
from time import sleep


display.clear()
sleep(1)

# addition
display.scroll("40 + 2 = " + str(40 + 2))
display.show(Image.HAPPY)
sleep(0.5)
display.clear()

# subtraction
display.scroll("45 - 3 = " + str(45 - 3))
display.show(Image.HAPPY)
sleep(0.5)
display.clear()

# multiplication
display.scroll("2 + 8 x 5 = " + str(2 + 8 * 5))
display.show(Image.HAPPY)
sleep(0.5)
display.clear()

# division
display.scroll("(80 / 2) + 2  = " + str((80 / 2) + 2))
display.show(Image.HAPPY)
sleep(0.5)
display.clear()

# incorrect way to do exponents
display.scroll("10 + 2^5 = " + str(10 + 2 ^ 5))
display.show(Image.SAD)
sleep(0.5)
display.clear()

# exponent
display.scroll("10 + 2^5 = " + str(10 + 2**5))
display.show(Image.HAPPY)
sleep(0.5)
display.clear()
