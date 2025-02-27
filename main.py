def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap)

newsprite = sprites.create(assets.image("""
    hero
"""), SpriteKind.player)
newsprite.set_position(10, 10)
controller.move_sprite(newsprite)
newsprite.set_stay_in_screen(True)
NewFood = sprites.create(assets.image("""
    burger
"""), SpriteKind.food)
NewFood.x = randint(10, 150)
NewFood.y = randint(10, 120)
NewFood1 = sprites.create(assets.image("""
    apple
"""), SpriteKind.food)
NewFood1.x = randint(10, 150)
NewFood1.y = randint(10, 120)
enemy = sprites.create(assets.image("""
    ghost
"""), SpriteKind.enemy)
enemy.x = randint(10, 150)
enemy.y = randint(10, 120)
enemy.follow(newsprite)