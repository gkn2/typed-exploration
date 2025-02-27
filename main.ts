sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let newsprite = sprites.create(assets.image`
    hero
`, SpriteKind.Player)
newsprite.setPosition(10, 10)
controller.moveSprite(newsprite)
newsprite.setStayInScreen(true)
let NewFood = sprites.create(assets.image`
    burger
`, SpriteKind.Food)
NewFood.x = randint(10, 150)
NewFood.y = randint(10, 120)
let NewFood1 = sprites.create(assets.image`
    apple
`, SpriteKind.Food)
NewFood1.x = randint(10, 150)
NewFood1.y = randint(10, 120)
let enemy = sprites.create(assets.image`
    ghost
`, SpriteKind.Enemy)
enemy.x = randint(10, 150)
enemy.y = randint(10, 120)
enemy.follow(newsprite)
