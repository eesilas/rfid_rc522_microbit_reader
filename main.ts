input.onButtonPressed(Button.A, function () {
    serial.writeLine("ID:" + MFRC522.getID())
    MFRC522.write("12345")
    serial.writeLine("Data:" + MFRC522.read())
})
let myData = ""
let myID = ""
MFRC522.Init()
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    myID = "ID:" + MFRC522.getID()
    basic.showString(myID)
    myData = MFRC522.read()
    basic.showString(myData)
})
