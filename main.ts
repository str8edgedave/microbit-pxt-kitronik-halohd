input.onButtonPressed(Button.A, function () {
    basic.showString("" + (kitronik_halo_hd.readTimeParameter(TimeParameter.Hours)))
})
input.onButtonPressed(Button.AB, function () {
    kitronik_halo_hd.setTime(20, 30, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (kitronik_halo_hd.readTimeParameter(TimeParameter.Minutes)))
})
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    haloDisplay.clear()
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes), kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Hours), kitronik_halo_hd.colors(ZipLedColors.Yellow))
    haloDisplay.show()
})
