namespace SpriteKind {
    export const cpu = SpriteKind.create()
    export const ITEM = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d 4 d d 4 4 d d d d d 4 d d d 
d d d d d d d d d d d d d d d d 
d d d d d 4 d d d d d d d d d d 
d d d d d d d d d d d d d d d 4 
d d d d d d d d d d d 4 d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d 4 d d d d 4 d d d d d d d 
d d d d d d d 4 d d d d d d d d 
d d d d d d d d d d d 4 d d d d 
d d d d d d d d d d d d d d d d 
d d d d d 4 d d d d d d d 4 d d 
d d d d d 4 d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . f f f f f f . . . . . 
. . . . f b b b b b b f . . . . 
. . . f b b b b b b b b f . . . 
. . f b b b b b b b b b b f . . 
. f b b b b b b b b b b b b f . 
f b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f f f f f f d d d d d d d d d f 
f f e e e f d f f f d f f f d f 
f f e e e f d f 9 f d f 9 f d f 
f f e e b f d f f f d f f f d f 
f f e e e f d d d d d d d d d f 
f f e e e f d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . f f 
f d . . . . . . . . . . . . d f 
f d . . . . . . . . . . . . d f 
f f f . . . . . . . . . . . d f 
f f e . . . . . . . . . . . d f 
f f e e . . . . . . . . . . d f 
f f e e b . . . . . . . . . d f 
f f e e e f . . d . d d d d d f 
f f e e e f . d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . b b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . d d . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . d d . f . . . . . . . . . . 
. . d . f e f . . . . . . . . . 
. . . f e e e f . . . . . . . . 
. . f e e e b e f f . . . . . . 
. . . f e e e e e f . . . . . . 
. . . . f e e e e f . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 7 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . . . 
. . 7 7 . 7 . . . . . . . . . . 
. . 7 . 7 7 7 . . . . . . . . . 
. . . 7 7 7 7 7 . . . . . . . . 
. . 7 7 7 7 7 7 7 7 . . . . . . 
. . . 7 7 7 7 7 7 7 . . . . . . 
. . . . 7 7 7 7 7 7 . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 e e e e e e f e e 7 7 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e f e e f e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e e e e e e e f e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e f e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 7 7 e e e e e e e f e 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 7 7 7 8 7 7 7 8 7 7 7 8 7 7 7 
8 8 7 8 8 8 7 8 8 8 7 8 8 8 7 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 7 8 8 8 7 8 8 8 7 8 8 8 7 8 8 
7 7 7 8 7 7 7 8 7 7 7 8 7 7 7 8 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 7 7 7 8 7 7 7 8 7 7 7 8 7 7 7 
8 8 7 8 8 8 7 8 8 8 7 8 8 8 7 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 7 8 8 8 7 8 8 8 7 8 8 8 7 8 8 
7 7 7 8 7 7 7 8 7 7 7 8 7 7 7 8 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f f f f e e f 
f f f f e e f e e f e e f e e f 
f e e f e e f e e f e e f f f f 
f e e f e e f f f f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f f f f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f f f f e e f 
f e e f e e f e e f e e f e e f 
f e e f e e f e e f e e f e e f 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
. . . . . f f f f f f . . . . . 
. . . . f b b b b b b f . . . . 
. . . f b b b b b b b b f . . . 
. . f b b b b b b b b b b f . . 
. f b b b b b b b b b b b b f . 
f b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f f f f f f 3 3 3 3 3 3 3 3 3 f 
f f e e e f 3 f f f 3 f f f 3 f 
f f e e e f 3 f 9 f 3 f 9 f 3 f 
f f e e b f 3 f f f 3 f f f 3 f 
f f e e e f 3 3 3 3 3 3 3 3 3 f 
f f e e e f 3 3 3 3 3 3 3 3 3 f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
f f f f f f f f f f f f f f f f 
e e f e e e e e f e e e e e f e 
e e f e e e e e f e e e e e f e 
f f f f f f f f f f f f f f f f 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
f f f f f f f f f f f f f f f f 
e e f e e e e e e e f e e e e e 
e e f e e e e e e e f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e f e e e f e e e f e e e 
e e e e f e e e f e e e f e e e 
f f f f f f f f f f f f f f f f 
e e f e e e f e e e f e e e f e 
e e f e e e f e e e f e e e f e 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
f f f f f f f f f f f f f f f f 
e e f e e e e e f e e e e e f e 
e e f e e e e e f e e e e e f e 
f f f f f f f f f f f f f f f f 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
f f f f f f f f f f f f f f f f 
e e f e e e e e e e f e e e e e 
e e f e e e e e e e f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e f e e e f e e e f e e e 
e e e e f e e e f e e e f e e e 
f f f f f f f f f f f f f f f f 
e e f e e e f e e e f e e e f e 
e e f e e e f e e e f e e e f e 
e e f e e e f e e e f e e e f e 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
f f f f f f f f f f f f f f f f 
e e f e e e e e f e e e e e f e 
e e f e e e e e f e e e e e f e 
f f f f f f f f f f f f f f f f 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
f f f f f f f f f f f f f f f f 
e e f e e e b b b b b b e e e e 
e e f e e e b 5 5 9 9 b e e e e 
f f f f f f b 5 9 9 9 b f f f f 
e e e e f e b 9 9 9 9 b f e e e 
e e e e f e b 8 8 8 8 b f e e e 
f f f f f f b 8 8 8 8 b f f f f 
e e f e e e b 7 7 7 7 b e e f e 
e e f e e e b 7 7 7 7 b e e f e 
f f f f f f b 7 7 7 7 b f f f f 
`
    //% blockIdentity=images._tile
    export const tile17 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d b d d d d d d d d 
d b b d d d d b d d d d d d d d 
d b b b d b b b b b b b d d d d 
d d d b b b b b b b d b d d d d 
d d d d b b b b b b d b d d d d 
d d d d d b b b b b d b d d d d 
d d d d d b b b b b b d d d d d 
d d d e e e e e e e e e e d d d 
d d d d e e e e e e e e d d d d 
d d d d e e e e e e e e d d d d 
d d d d e e e e e e e e d d d d 
d d d d e e e e e e e e d d d d 
d d d d e e e e e e e e d d d d 
d d d d e e e e e e e e d d d d 
`
    //% blockIdentity=images._tile
    export const tile18 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . . b b b . . . . . 
. . . . . . . b . b b . . . . . 
. . . . . . b . . . . . . . . . 
. . . . . b . . . . . . . . . . 
. . . e e e e e e e e e e . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
`
    //% blockIdentity=images._tile
    export const tile19 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 e e e e e e f e e 7 7 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e 6 6 6 e 6 6 6 e 6 6 6 e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e f e e e e e e e e 7 7 
7 e e e e e 6 6 6 e e e e e 7 7 
7 7 e e e e e 6 e e e e e 7 7 7 
7 7 7 e e e e 6 e e f e 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile20 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 e e e e e e f e e 7 7 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e f e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 7 e e e e e 6 e e e e e 7 7 7 
7 7 7 e e e e 6 e e f e 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile21 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 e e e e e e f e e 7 7 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e f e e e e e e e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 7 7 e e e e 6 e e f e 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile22 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 e e e e e e f e e 7 7 7 7 
7 7 e e e e e e e e e e e 7 7 7 
7 e e 4 e e e 4 e e e 4 e e 7 7 
7 e 6 6 6 e 6 6 6 e 6 6 6 e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e 6 e e e 6 e e e 6 e e 7 7 
7 e e e e e e e e e e e e e 7 7 
7 e e e e f e 4 e e e e e e 7 7 
7 e e e e e 6 6 6 e e e e e 7 7 
7 7 e e e e e 6 e e e e e 7 7 7 
7 7 7 e e e e 6 e e f e 7 7 7 7 
7 7 7 7 e e e e e e e 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile23 = img`
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e f e e e 
e e e e e e e e e e e e f e e e 
f f f f f f f f f f f f f f f f 
f e e e e e e e f e e e e e e e 
f e e e e e e e f e e e e e e e 
f e e e e e e e f e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e f e e e e e e e e e e e e 
e e e f e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile24 = img`
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 . . . 7 . . 7 7 . 7 7 
. 7 7 7 7 . 7 . 7 . 7 7 . . . 7 
. 7 7 7 7 . . . 7 . . 7 7 . 7 7 
. 7 7 7 7 . 7 7 7 . 7 7 7 . 7 7 
7 . 7 7 7 . 7 7 7 . . 7 7 . 7 7 
7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile25 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 6 6 . 6 . . . . . . . 
. . . . 6 6 6 6 . . . . . . . . 
. . . . . 6 6 . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataString(item, "thing") == "watering can") {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e d d d d e . . . . . 
. . . . e d f d d f d e . . . . 
. . . . e d f d d f d e . . . . 
. . . . . d d d d d d . . b . . 
. . . . 5 5 5 5 5 5 5 5 d b b b 
. . . . d 5 5 5 5 5 5 . . b b . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile7)) {
            tiles.setTileAt(tilemap.locationOfSprite(mySprite), myTiles.tile20)
            locashon = tilemap.locationOfSprite(mySprite)
            pause(1000)
            tiles.setTileAt(locashon, myTiles.tile20)
            pause(1000)
            tiles.setTileAt(locashon, myTiles.tile19)
            pause(1000)
            tiles.setTileAt(locashon, myTiles.tile22)
            if (Quest == "Quest 2") {
                if (tilemap.tileIs(tiles.getTileLocation(0, 2), myTiles.tile22) && tilemap.tileIs(tiles.getTileLocation(5, 2), myTiles.tile22) && tilemap.tileIs(tiles.getTileLocation(2, 2), myTiles.tile22) && tilemap.tileIs(tiles.getTileLocation(3, 2), myTiles.tile22) && tilemap.tileIs(tiles.getTileLocation(4, 2), myTiles.tile22)) {
                    game.showLongText("you watered all the flowers", DialogLayout.Top)
                    Quest = "Quest 3"
                    tiles.setTilemap(tiles.createTilemap(
            hex`32003200050505050505090a05050505050505051e140e140e140e0e0e0e0e0e0e0e0000000e000000000000001f040303030303030315151515151517171515151515151515151515151515151515151515151500000000000001000000000004030303030303032310232323230708000100000100000000000000000000000000001c1c1c00000100000000000001000004030303030303030000000100000708000100000000000000000000001800111213001c1c1c000000000100000000000000040303030303030300000000000007060c0c0c0c0c0c0c0c0c0c0c0c0c0c00000000001c1c1c0000000000000000000000000403030303030303000e000000000b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d00000000001c1c1c00000000000000000000000404030303030303030000000000000000000000000001000000000000000000000000001c1c1c000100000000040404040404030303030303030300000000010000000e0000000000000000000000000000000000001c1c1c00000000000404030317170303030303030303030000000100000000000005010000000000000000000000000000001c1c1c000100000404030303171703030303030303030304040404040404000000000000000000000000000000000000001f1c1c1c00000004040303030317170303030303030303030303030303030404040404040404040404040404000000000000001d1d1d00000404030303030317170303030303030303030303030303030303030303030303030303030304040404040404041c1c1c0404040303030303031717030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303171703030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304010101010403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030401010101040303030303030303030303030303030303030303030303030303030303030303030303030303030303030303040100000104030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304010000010403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040401000000040303030303030303030303030303030303030303030303030303030303030303030303030303030303030400000100000004040403030303030303030303030303030303030303030303030303030303030303030303030303030303040000001c000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303041c000000000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303041c0000000000001c040303030303030303030303030303030303030303030303030303030303030303030303030303030304040404000000000404030303030303030303030303030303030303030303030303030303030303030303030303030303030303040400260000040303030303030303030303030303040404040404242424242424242424242424242424242424242424242404000000000004030303030303030303030303030404040404040404242424242424242424242424242424242424242424240404040000000403030303030303030303030303040404040404040424242424242424242424242424242424242424242424040404040404040303030303030303030303030304040000000000040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404000000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303040400000000000404030303030303030303030303030303030303030303030303030303030303030303030303030303030304040000000000040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404270000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303040404040404040404030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404000000000004040303030303030303030303030303030303030303040404040404040303030303030303030303030303040400000000000404030303030303030303030303030303030303040404000000000004040303030303030303030303030304040000000000040403030303030303030303030303030303030304040000000000000004030303030303030303030303030404000000000004040303030303030303030303030303030303030404000000000000000403030303030303030303030303040400000000000403030303030303030303030303030303030303040400000000000000040303030303030303030303030303040404040404040303030303030303030303030303030303030304040000000000000004030303030303030303030303030303040404040404030303030303030303030303030303030303030404000000000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303030304000000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 . . . . . . 2 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 . . . 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.castle.tilePath3,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile16,sprites.castle.saplingOak,sprites.castle.rock1,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,sprites.castle.rock0,myTiles.tile24,myTiles.tile25],
            TileScale.Sixteen
        ))
                    cat.setFlag(SpriteFlag.Invisible, false)
                    cat.setFlag(SpriteFlag.Ghost, false)
                    tiles.placeOnRandomTile(cat, myTiles.tile24)
                }
            }
        }
    }
    if (sprites.readDataString(item, "thing") == "hammer") {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e d d d d e . . . . . 
. . . . e d f d d f d e b b b . 
. . . . e d f d d f d e b b b . 
. . . . . d d d d d d . . b . . 
. . . . 5 5 5 5 5 5 5 5 d b . . 
. . . . d 5 5 5 5 5 5 . . b . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        if (mySprite.tileKindAt(TileDirection.Right, sprites.castle.rock1)) {
            tiles.setTileAt(tilemap.locationInDirection(tilemap.locationOfSprite(mySprite), CollisionDirection.Right), myTiles.tile7)
            tiles.setWallAt(tilemap.locationInDirection(tilemap.locationOfSprite(mySprite), CollisionDirection.Right), false)
        }
    }
    if (sprites.readDataString(item, "thing") == "fish") {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e d d d d e . . . . . 
. . . . e d f d d f d e . . . . 
. . . . e d f d d f d e . 6 . 6 
. . . . . d d d d d d . 6 6 6 . 
. . . . 5 5 5 5 5 5 5 5 d 6 . 6 
. . . . d 5 5 5 5 5 5 . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
function cpus () {
    dad = sprites.create(img`
. . . . e e e e e e . . . . . . 
. . . e d d d d d d e . . . . . 
. . . d d f d d f d d . . . . . 
. . . d d f d d f d d . . . . . 
. . . d d d d d d d d . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . . . 
. . d 1 1 1 1 1 1 1 1 d . . . . 
. . d 1 1 1 1 1 1 1 1 d . . . . 
. . d f f f 5 5 f f f d . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.cpu)
    sprites.setDataBoolean(dad, "dad", true)
    tiles.placeOnTile(dad, tiles.getTileLocation(4, 8))
    mom = sprites.create(img`
. . . . e e e e e e . . . . . . 
. . . e d d d d d d e . . . . . 
. . e d d f d d f d d e . . . . 
. . e d d f d d f d d e . . . . 
. . . d d d d d d d d . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 . . . . 
. . d 3 3 3 3 3 3 3 3 d . . . . 
. . d 3 3 3 3 3 3 3 3 d . . . . 
. . d a a a a a a a a d . . . . 
. . . a a a a a a a a . . . . . 
. . a a a a a a a a a a . . . . 
. . a a a a a a a a a a . . . . 
. . . . 3 . . . . 3 . . . . . . 
. . . f f . . . . f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.cpu)
    sprites.setDataString(dad, "npc", "dad")
    sprites.setDataString(mom, "npc", "mom")
    tiles.placeOnTile(mom, tiles.getTileLocation(8, 8))
    dad.setFlag(SpriteFlag.Invisible, true)
    dad.setFlag(SpriteFlag.Ghost, true)
    mom.setFlag(SpriteFlag.Invisible, true)
    mom.setFlag(SpriteFlag.Ghost, true)
    mySprite2 = sprites.create(img`
. . . . e e e e e e . . . . . . 
. . . e d d d d d d e . . . . . 
. . . d d f d d f d d . . . . . 
. . . d d f d d f d d . . . . . 
. . . d d d d d d d d . . . . . 
. . 4 4 4 4 4 4 4 4 4 4 . . . . 
. . d 4 4 4 4 4 4 4 4 d . . . . 
. . d 4 4 4 4 4 4 4 4 d . . . . 
. . d 6 6 6 6 6 6 6 6 d . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . 
. . . 6 6 6 6 6 6 6 6 . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.cpu)
    Quest = "Quest 1"
    sprites.setDataString(mySprite2, "npc", "house giy")
    tiles.placeOnRandomTile(mySprite2, myTiles.tile6)
    cat = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 4 4 . 4 4 . . . . . . . . 
. . . 4 4 . 4 4 . . . . . . . . 
. . . 4 f 4 f 4 . . . . . . . . 
. . . 4 f 4 f 4 . . . . . 4 . . 
. . . e 4 4 4 e . . . . . 4 . . 
. . . . 4 4 4 . . . . . . 4 . . 
. . . . 4 4 4 4 e 4 e 4 e 4 . . 
. . . . 4 4 4 4 4 4 4 4 4 . . . 
. . . . 4 . 4 . . . 4 . 4 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.cpu)
    sprites.setDataString(cat, "npc", "cat")
    cat.setFlag(SpriteFlag.Invisible, true)
    cat.setFlag(SpriteFlag.Ghost, true)
}
function Quest2 (mySprite: Sprite, mySprite2: Sprite) {
    if (Quest == "Quest 2") {
        if (sprites.readDataString(mySprite, "npc") == "mom") {
            game.splash("" + name + " go water the flowers.")
            game.showLongText("Quest go water the flowers.", DialogLayout.Top)
            pause(500)
        } else {
            if (sprites.readDataString(mySprite, "npc") == "dad") {
                game.splash("" + name + " go water the flowers.")
                game.showLongText("Quest go water the flowers.", DialogLayout.Top)
                pause(500)
            }
        }
    }
    if (Quest == "Quest 3") {
        if (sprites.readDataString(item, "thing") == "fish") {
            game.splash("thanks for the fish", "Cat")
            game.splash("I think I should stay with you.", "Cat")
            Quest = "Quest 4"
            mySprite.follow(mySprite, 50)
            pause(500)
        } else {
            if (sprites.readDataString(mySprite, "npc") == "cat") {
                game.splash("I need fish", "Cat")
                game.showLongText("Quest go get some fish.", DialogLayout.Top)
                pause(500)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cpu, function (sprite, otherSprite) {
    if (Quest == "Quest 1") {
        if (sprites.readDataString(otherSprite, "npc") == "house giy") {
            game.splash("" + name + " go get your mom and dad")
            game.showLongText("Quest get mom and dad", DialogLayout.Top)
            pause(500)
        } else {
            if (sprites.readDataString(otherSprite, "npc") == "mom") {
                game.splash("what Tom`s house was destroyed.")
                dad.setFlag(SpriteFlag.Invisible, true)
                dad.setFlag(SpriteFlag.Ghost, true)
                mom.setFlag(SpriteFlag.Invisible, true)
                mom.setFlag(SpriteFlag.Ghost, true)
                tiles.placeOnTile(mom, tiles.getTileLocation(24, 5))
                tiles.placeOnTile(dad, tiles.getTileLocation(23, 5))
                Quest = "Quest 2"
                pause(500)
            } else {
                if (sprites.readDataString(otherSprite, "npc") == "dad") {
                    game.splash("what Tom`s house was destroyed.")
                    dad.setFlag(SpriteFlag.Invisible, true)
                    dad.setFlag(SpriteFlag.Ghost, true)
                    mom.setFlag(SpriteFlag.Invisible, true)
                    mom.setFlag(SpriteFlag.Ghost, true)
                    tiles.placeOnTile(mom, tiles.getTileLocation(24, 5))
                    tiles.placeOnTile(dad, tiles.getTileLocation(23, 5))
                    Quest = "Quest 2"
                    pause(500)
                }
            }
        }
    } else {
        Quest2(otherSprite, sprite)
    }
})
function start () {
    item = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.ITEM)
    name = game.askForString("name", 12)
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e d d d d e . . . . . 
. . . . e d f d d f d e . . . . 
. . . . e d f d d f d e . . . . 
. . . . . d d d d d d . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . d 5 5 5 5 5 5 d . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    sprites.setDataString(item, "thing", "w")
    scene.setBackgroundColor(7)
    tiles.setTilemap(tiles.createTilemap(
            hex`1e001000050505050505090a05050505050505050e0e0e0e0e0e0e0e0e0e0e0e0e1f1515151515151717151515151515151515151515151515151515151515151410141414140708000100000100000000000000000000000000001c1c1c0000000100000708000100000000000000000000001800111213001c1c1c00000000000007060c0c0c0c0c0c0c0c0c0c0c0c0c0c00000000001c1c1c000e000000000b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d00000000001c1c1c0000000000000000000000000001000000000000000000000000001c1c1c00000000010000000e0000000000000000000000000000000000001c1c1c0000000100000000000005010000000000000000000000000000001c1c1c0404040404040400000000000000000000000000000000000000001c1c1c0303030303030404040404040404040404040404000000000000001d1d1d0303030303030303030303030303030303030304040404040404041c1c1c030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.castle.tilePath3,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile16,sprites.castle.saplingOak,sprites.castle.rock1,myTiles.tile17,sprites.dungeon.floorDark2,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25],
            TileScale.Sixteen
        ))
    scene.cameraFollowSprite(mySprite)
    scene.cameraShake(4, 500)
    controller.moveSprite(mySprite)
    game.setDialogFrame(img`
. . b b b b b b b b b b b b b b b b b b b b . . 
. b 1 1 b b 1 1 b b 1 1 b b 1 1 b b 1 1 b b b . 
b b b 1 1 b b 1 1 b b 1 1 b b 1 1 b b 1 1 b 1 b 
b b 1 b b b b b b b b b b b b b b b b b b 1 1 b 
b 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 b b 
b 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 b 
b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 
b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 b b 
b 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 b 
b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 
b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 b b 
b 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 b 
b b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 
b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 b b 
b 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 b 
b b 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 b 
b 1 1 b b b b b b b b b b b b b b b b b b 1 b b 
b 1 b 1 1 b b 1 1 b b 1 1 b b 1 1 b b 1 1 b b b 
. b b b 1 1 b b 1 1 b b 1 1 b b 1 1 b b 1 1 b . 
. . b b b b b b b b b b b b b b b b b b b b . . 
`)
    game.splash("Boom")
    game.showLongText("Quest investigate the sound!", DialogLayout.Top)
    statusbar = statusbars.create(20, 2, StatusBarKind.Health)
    statusbar.setColor(2, 15, 4)
    statusbar.setLabel("HP")
    statusbar.attachToSprite(mySprite)
}
function house () {
    if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile3)) {
        if (controller.A.isPressed()) {
            mySprite2.setFlag(SpriteFlag.Invisible, true)
            mySprite2.setFlag(SpriteFlag.Ghost, true)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 5))
            tiles.setTilemap(tiles.createTilemap(
            hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001918181a181818000000000000000000191c1c1c1c1c19000000000000000000191c0f10111c19000000000000000000191c1217161c19000000000000000000191c1217161c19000000000000000000191c1217161c19000000000000000000191c1217161c19000000000000000000191c1314151c19000000000000000000191d1c1c1c1c19000000000000000000181818181818180000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorDark3,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,myTiles.tile12,myTiles.tile13,myTiles.tile16,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25],
            TileScale.Sixteen
        ))
            scene.setBackgroundColor(15)
            if (Quest == "Quest 1") {
                dad.setFlag(SpriteFlag.Invisible, false)
                dad.setFlag(SpriteFlag.Ghost, false)
                mom.setFlag(SpriteFlag.Invisible, false)
                mom.setFlag(SpriteFlag.Ghost, false)
            } else {
                dad.setFlag(SpriteFlag.Invisible, true)
                dad.setFlag(SpriteFlag.Ghost, true)
                mom.setFlag(SpriteFlag.Invisible, true)
                mom.setFlag(SpriteFlag.Ghost, true)
                cat.setFlag(SpriteFlag.Invisible, true)
                cat.setFlag(SpriteFlag.Ghost, true)
            }
            pause(1000)
        }
    } else {
        if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile16)) {
            if (controller.A.isPressed()) {
                if (Quest == "Quest 3") {
                    cat.setFlag(SpriteFlag.Invisible, false)
                    cat.setFlag(SpriteFlag.Ghost, false)
                    tiles.setTilemap(tiles.createTilemap(
            hex`32003200050505050505090a05050505050505051e140e140e140e0e0e0e0e0e0e0e0000000e000000000000001f040303030303030315151515151517171515151515151515151515151515151515151515151500000000000001000000000004030303030303032310232323230708000100000100000000000000000000000000001c1c1c00000100000000000001000004030303030303030000000100000708000100000000000000000000001800111213001c1c1c000000000100000000000000040303030303030300000000000007060c0c0c0c0c0c0c0c0c0c0c0c0c0c00000000001c1c1c0000000000000000000000000403030303030303000e000000000b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d00000000001c1c1c00000000000000000000000404030303030303030000000000000000000000000001000000000000000000000000001c1c1c000100000000040404040404030303030303030300000000010000000e0000000000000000000000000000000000001c1c1c00000000000404030317170303030303030303030000000100000000000005010000000000000000000000000000001c1c1c000100000404030303171703030303030303030304040404040404000000000000000000000000000000000000001f1c1c1c00000004040303030317170303030303030303030303030303030404040404040404040404040404000000000000001d1d1d00000404030303030317170303030303030303030303030303030303030303030303030303030304040404040404041c1c1c0404040303030303031717030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303171703030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304010101010403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030401010101040303030303030303030303030303030303030303030303030303030303030303030303030303030303030303040100000104030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304010000010403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040401000000040303030303030303030303030303030303030303030303030303030303030303030303030303030303030400000100000004040403030303030303030303030303030303030303030303030303030303030303030303030303030303040000001c000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303041c000000000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303041c0000000000001c040303030303030303030303030303030303030303030303030303030303030303030303030303030304040404000000000404030303030303030303030303030303030303030303030303030303030303030303030303030303030303040400260000040303030303030303030303030303040404040404242424242424242424242424242424242424242424242404000000000004030303030303030303030303030404040404040404242424242424242424242424242424242424242424240404040000000403030303030303030303030303040404040404040424242424242424242424242424242424242424242424040404040404040303030303030303030303030304040000000000040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404000000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303040400000000000404030303030303030303030303030303030303030303030303030303030303030303030303030303030304040000000000040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404270000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303040404040404040404030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030404000000000004040303030303030303030303030303030303030303040404040404040303030303030303030303030303040400000000000404030303030303030303030303030303030303040404000000000004040303030303030303030303030304040000000000040403030303030303030303030303030303030304040000000000000004030303030303030303030303030404000000000004040303030303030303030303030303030303030404000000000000000403030303030303030303030303040400000000000403030303030303030303030303030303030303040400000000000000040303030303030303030303030303040404040404040303030303030303030303030303030303030304040000000000000004030303030303030303030303030303040404040404030303030303030303030303030303030303030404000000000000000403030303030303030303030303030303030303030303030303030303030303030303030303030303030304000000000004040303030303030303030303030303030303030303030303030303030303030303030303030303030303030404040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 . . . . . . 2 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 . . . 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.castle.tilePath3,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile16,sprites.castle.saplingOak,sprites.castle.rock1,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,sprites.castle.rock0,myTiles.tile24,myTiles.tile25],
            TileScale.Sixteen
        ))
                    tiles.placeOnRandomTile(cat, myTiles.tile24)
                } else {
                    tiles.setTilemap(tiles.createTilemap(
            hex`1e001000050505050505090a05050505050505050e0e0e0e0e0e0e0e0e0e0e0e0e0e1515151515151717151515151515151515151515151515151515151515151410141414140708000100000100000000000000000000000000001c1c1c0000000100000708000100000000000000000000001800111213001c1c1c00000000000007060c0c0c0c0c0c0c0c0c0c0c0c0c0c00000000001c1c1c000e000000000b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d00000000001c1c1c0000000000000000000000000001000000000000000000000000001c1c1c00000000010000000e0000000000000000000000000000000000001c1c1c0000000100000000000005010000000000000000000000000000001c1c1c0404040404040400000000000000000000000000000000000000001c1c1c0303030303030404040404040404040404040404000000000000001d1d1d0303030303030303030303030303030303030304040404040404041c1c1c030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.castle.tilePath3,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile16,sprites.castle.saplingOak,sprites.castle.rock1,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25],
            TileScale.Sixteen
        ))
                }
                scene.setBackgroundColor(7)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 3))
                mySprite2.setFlag(SpriteFlag.Invisible, false)
                mySprite2.setFlag(SpriteFlag.Ghost, false)
                if (Quest == "Quest 1") {
                    dad.setFlag(SpriteFlag.Invisible, true)
                    dad.setFlag(SpriteFlag.Ghost, true)
                    mom.setFlag(SpriteFlag.Invisible, true)
                    mom.setFlag(SpriteFlag.Ghost, true)
                } else {
                    dad.setFlag(SpriteFlag.Invisible, false)
                    dad.setFlag(SpriteFlag.Ghost, false)
                    mom.setFlag(SpriteFlag.Invisible, false)
                    mom.setFlag(SpriteFlag.Ghost, false)
                }
                pause(1000)
            }
        }
    }
}
function tilemaps (myImage: Image, mySprite: Sprite, myImage2: Image, COOL_STUFF: string) {
    if (mySprite.tileKindAt(TileDirection.Center, myImage)) {
        tiles.setTileAt(tilemap.locationOfSprite(mySprite), myImage2)
        sprites.setDataString(item, "thing", COOL_STUFF)
        game.splash("You got a " + COOL_STUFF + ".")
    }
}
let statusbar: StatusBarSprite = null
let name = ""
let mySprite2: Sprite = null
let mom: Sprite = null
let dad: Sprite = null
let cat: Sprite = null
let Quest = ""
let locashon: tiles.Location = null
let mySprite: Sprite = null
let item: Sprite = null
start()
cpus()
forever(function () {
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
})
forever(function () {
    house()
    tilemaps(myTiles.tile17, mySprite, sprites.dungeon.floorDark2, "watering can")
    tilemaps(myTiles.tile18, mySprite, sprites.castle.tileGrass3, "hammer")
    tilemaps(myTiles.tile25, mySprite, sprites.castle.tileGrass3, "fish")
})
