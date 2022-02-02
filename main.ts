input.onButtonPressed(Button.A, function () {
    music.setVolume(127)
    music.playMelody("B A G A G F A C5 ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
})
