input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Snake)
    radio.sendNumber(123)
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("ID:" + MFRC522.getID())
    MFRC522.write("12345")
    serial.writeLine("Data:" + MFRC522.read())
})
input.onButtonPressed(Button.B, function () {
    myID = "ID:" + MFRC522.getID()
    basic.showString(myID)
    myData = MFRC522.read()
    basic.showString(myData)
})
function reading () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
}
let myData = ""
let myID = ""
MFRC522.Init()
reading()
basic.clearScreen()
radio.setTransmitPower(7)
radio.setGroup(123)
pins.setAudioPin(DigitalPin.P0)
basic.showIcon(IconNames.StickFigure)
music.setVolume(48)
basic.forever(function () {
    if (MFRC522.getID() == 730974132981) {
        radio.sendNumber(111)
        basic.showIcon(IconNames.Giraffe)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.clearScreen()
    } else if (MFRC522.getID() == 108292839542) {
        radio.sendNumber(112)
        basic.showIcon(IconNames.Snake)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.clearScreen()
    } else if (MFRC522.getID() == 591664682793) {
        radio.sendNumber(113)
        basic.showIcon(IconNames.Duck)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.clearScreen()
    } else if (MFRC522.getID() == 486167157902) {
        radio.sendNumber(114)
        basic.showIcon(IconNames.Diamond)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.clearScreen()
    } else if (MFRC522.getID() == 454841178547) {
        radio.sendNumber(115)
        basic.showIcon(IconNames.Triangle)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.clearScreen()
    } else {
        reading()
        basic.clearScreen()
    }
})
