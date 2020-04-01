let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . . 2 2 2 2 2 2 2 2 7 7 . . . . . . 
. . . . . 3 . 2 2 2 2 2 2 2 2 7 7 7 7 7 . . . . 
. . . . 3 3 3 2 2 2 2 2 2 2 7 7 7 7 7 7 7 . . . 
. . . 3 3 3 3 3 2 2 2 2 2 2 7 7 7 7 7 7 . . . . 
. . . 3 3 3 3 3 3 2 2 2 2 7 7 7 7 7 7 7 . . . . 
. 8 8 8 3 3 3 3 3 3 2 2 2 7 7 7 7 7 7 4 4 . . . 
. 8 8 8 8 3 3 3 3 3 5 5 5 7 7 7 7 7 4 4 4 4 . . 
. 8 8 8 8 8 8 3 3 5 5 5 5 5 7 7 4 4 4 4 4 4 . . 
. 8 8 8 8 8 8 8 8 5 5 5 5 5 5 4 4 4 4 4 4 4 . . 
. 8 8 8 8 8 8 8 5 5 5 5 5 5 5 4 4 4 4 4 4 4 . . 
. . a a a 8 8 a a 5 5 5 5 5 2 2 2 4 4 4 4 4 . . 
. a a a a a a a a a 5 5 5 2 2 2 2 2 4 4 . . . . 
. a a a a a a a a a 7 7 7 2 2 2 2 2 2 4 . . . . 
. a a a a a a a a 7 7 7 7 . 2 2 2 2 2 2 2 . . . 
. a a a a a a . . 7 7 7 . . 2 2 2 2 2 2 . . . . 
. . a a a . . . . 7 7 7 . . . 2 2 2 2 2 . . . . 
. . . . . . . . . 7 7 . . . . 2 2 2 2 . . . . . 
. . . . . . . . . 7 7 7 . . . . . 2 . . . . . . 
. . . . . . . . . . 7 7 . . . . . . . . . . . . 
. . . . . . . . . 7 7 7 . . . . . . . . . . . . 
. . . . . . . . . 7 7 7 . . . . . . . . . . . . 
. . . . . . . . 7 7 7 7 7 . . . . . . . . . . . 
. . . . . . . . . 7 7 7 7 . . . . . . . . . . . 
. . . . . . . . 7 7 7 7 . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 . . . . . . . . . . . 8 8 . . . . . . . . . . 
. . . . . . . . . . 8 8 8 . . . . . . . . . 8 8 8 . . . . . . . . . . 
. . . . . . . . . . 8 8 8 . . . . . . . . . 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 . . . . . . . 8 8 8 . . . . . . . . . . . 
1 . . . . . . . . . . . 8 8 . . . . . . . 8 8 . . . . . . . . . . . . 
. . . . . . . . . 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 . . . . . . . . . 
. . . . . . . . 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f . . . . . . . . 
. 1 1 . . . . . 5 5 3 3 3 5 f f 5 5 f f 5 5 3 3 3 5 f . . . . 1 1 1 . 
. 1 6 1 1 . . . 5 3 f f 5 5 f f 5 5 f f 5 5 f f 5 3 f . . 1 1 1 6 1 . 
. 1 1 6 1 1 . . 5 5 f f 1 5 f f 5 5 f f 5 5 f 1 5 5 f . 1 1 1 6 1 1 . 
. . 1 6 1 1 1 . 5 5 f f 8 5 f f 5 5 f f 5 5 f 8 5 5 f 1 1 1 1 6 1 . . 
. . 1 6 6 1 1 1 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f 1 1 1 6 6 1 . . 
. . 1 1 6 6 6 1 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f 1 6 6 6 1 1 . . 
. . . . 1 1 1 1 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f 1 1 1 1 . . . . 
. . . . 1 1 . . 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f . . 1 1 . . . . 
. . . . . . . . 5 5 f f 5 5 a a a a a a a 5 f f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f 5 a f 1 5 1 f 1 5 a f f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f a 1 f f 5 5 f f 5 1 a f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f 5 a 1 f 1 5 1 f 1 a f f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f 5 5 a a a a a a a 5 f f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f . . . . . . . . 
. . . . . . . . 5 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 f . . . . . . . . 
. . . . . . . . . 5 f f 5 5 f f 5 5 f f 5 5 f f 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, mySprite, Math.randomRange(-200, 200), Math.randomRange(-200, 200))
    projectile.startEffect(effects.fire)
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
