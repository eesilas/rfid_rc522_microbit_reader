MFRC522.Init()
basic.forever(function () {
    serial.writeLine("ID:" + MFRC522.getID())
    MFRC522.write("12345")
    serial.writeLine("Data:" + MFRC522.read())
})
