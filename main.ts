input.onButtonPressed(Button.A, function () {
    serial.writeLine("ID:" + MFRC522.getID())
    MFRC522.write("12345")
    serial.writeLine("Data:" + MFRC522.read())
})
function init () {
    MFRC522.Init()
    reading()
    basic.clearScreen()
    text_list = ["730974132981", "108292839542", "591664682793"]
}
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
let text_list: string[] = []
pins.setAudioPin(DigitalPin.P0)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
init()
basic.forever(function () {
    if (MFRC522.getID() == 730974132981) {
        basic.showIcon(IconNames.Giraffe)
        basic.clearScreen()
    } else if (MFRC522.getID() == 108292839542) {
        basic.showIcon(IconNames.Snake)
        basic.clearScreen()
    } else if (MFRC522.getID() == 591664682793) {
        basic.showIcon(IconNames.Duck)
        basic.clearScreen()
    } else {
        reading()
        basic.clearScreen()
    }
})
