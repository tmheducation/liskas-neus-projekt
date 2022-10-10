input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playMelody("- - - - - - - - ", 120)
})
basic.showString("ICH HEISE CALLIOPE MINNI")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    music.playMelody("- G F G G - - - ", 40)
    basic.showIcon(IconNames.Rabbit, 600)
})
