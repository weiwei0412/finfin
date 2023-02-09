input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
basic.forever(function () {
    basic.showNumber(20230209)
    basic.showString("happy birthday to you !")
    basic.showString("FINFIN")
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
