input.onPinPressed(TouchPin.P0, function () {
    game.gameOver()
})
input.onButtonPressed(Button.AB, function () {
    if (!(game.isGameOver())) {
        Left_fire = game.createSprite(0, Left_Tank.get(LedSpriteProperty.Y))
        for (let index = 0; index < 4; index++) {
            Left_fire.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
        if (Left_fire.isTouching(Right_Tank) == true) {
            game.addScore(1)
        }
        Left_fire.delete()
    }
})
let Right_Fire: game.LedSprite = null
let Tank_1_Y = 0
let Left_fire: game.LedSprite = null
let Right_Tank: game.LedSprite = null
let Left_Tank: game.LedSprite = null
Left_Tank = game.createSprite(0, 2)
Right_Tank = game.createSprite(4, 2)
basic.forever(function () {
    basic.pause(500)
    if (Left_Tank.get(LedSpriteProperty.Y) < Right_Tank.get(LedSpriteProperty.Y)) {
        Tank_1_Y += -1
    }
    if (Left_Tank.get(LedSpriteProperty.Y) > Right_Tank.get(LedSpriteProperty.Y)) {
        Tank_1_Y += 1
    }
})
basic.forever(function () {
    basic.pause(500)
    if (Left_Tank.get(LedSpriteProperty.Y) < Right_Tank.get(LedSpriteProperty.Y)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 514, 514, 255, 231, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    if (Left_Tank.get(LedSpriteProperty.Y) > Right_Tank.get(LedSpriteProperty.Y)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 514, 514, 255, 231, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
})
basic.forever(function () {
    Right_Tank.set(LedSpriteProperty.Y, Tank_1_Y)
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(2000)
        Right_Fire = game.createSprite(4, Right_Tank.get(LedSpriteProperty.Y))
        for (let index = 0; index < 4; index++) {
            Right_Fire.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
        if (Right_Fire.isTouching(Left_Tank) == true) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
            game.gameOver()
        }
        Right_Fire.delete()
    }
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(2000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
        Left_Tank.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
        basic.pause(100)
        Left_Tank.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (!(game.isGameOver())) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        }
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
        basic.pause(3500)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 255, 700, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 700, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        while (game.isGameOver()) {
            music.playMelody("D G G A G F E F ", 176)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1275, 1275, 255, 231, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1275, 1275, 255, 231, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
})
