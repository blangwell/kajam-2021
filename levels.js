import { k } from './load.js';
import { SCALE } from './main.js';

const LEVEL_LIST =  [
	{ // LEVEL 1
		floor: [
			// "                    ",
			"----x--------x------",
			" ssssssssssssssssss ",
			" ssssssssssssssssss ",
			" ss              ss ",
			" ss              ss ",
			" ss              ss ",
			" ss              ss ",
			" ss              ss ",
			" ssssssssssssssssss ",
			" ssssssssssssssssss ",
			" ss              ss ",

		],
		map: [
			"------------------",
			"------------------",
			"----------------e",
			"------o----------",
			"----------------h",
			"---------p-------",
			"---1-o--------o--",
			"---q-------------",
			"------------------",
			"-z--------------c",
		]
	}, 
	{ // LEVEL 2
		floor: [
			"                       ",
			"                     s ",
			"                     s ",
			"                     s ",
			"                     s ",
			"                     s ",
			"                     s ",
			"                     s ",
			" sssssssssssssssssssss ",
			" sssssssssssssssssssss ",
			"                       ",
		],
		map: [
			"-wwwwwwwwwwwwwwwwwwwww",
			"-sssssssssssssssssssss",
			"-s-------b----------d-",
			"-s-------------------d-",
			"-s------o-------o----d-",
			"-s---o--------p------d-",
			"-s-----o-------------d-",
			"-s---------b-----h---d-",
			"-s-------------------d-",
			"-----------------------",
		]
	},
	{ // LEVEL 3
		floor: [
			"                   ",
			" sssssssssssssssss ",
			" sssssssssssssssss ",
			" ssssss     ssssss ",
			" ssssss     ssssss ",
			" s               s ",
			" s               s ",
			" s               s ",
			" s               s ",
			" s               s ",
			" s               s ",
			" sssssssssssssssss ",
			"                   ",
		],
		map: [
			"w-w----ww--w---w----",
			"-------$--------$---",
			"--$-----------------",
			"--------h-o-----d---",
			"-------o--------d---",
			"----------------b---",
			"-----o-----p--------",
			"--------------------",
			"--------------------",
			"--1---b--------b3---",
			"--zx---------x--c---",
		]
	}, 
	{ // LEVEL 4
		floor: [
			"sssssssssssssss",
			"sssssssssssssss",
			"ssssss  sssssss",
			"ssss      sssss",
			"ss           ss",
			"               ",
			"               ",
			"               ",
			"               ",
			"               ",
			"               ",
			"               ",
			"ss          sss",
			"ss          sss",
			"sssssss     sss",
			"sssssss     sss",
			"sssssssssssssss",
			"sssssssssssssss",
			"sssssssssssssss",
		],
		map: [
			"wwwwwwwwwwwwwww",
			"------xx-------",
			"ssssxx--xxsssss",
			"ssxxa--p--zxxss",
			"xc-----------zx",
			"a-------------d",
			"a-------------d",
			"a-------------d",
			"a-------------d",
			"a-------------d",
			"a---------b---d",
			"a-------------d",
			"wwa--o------aww",
			"a-a------b--a--",
			"aswwwww----ha--",
			"zxxxxxcxxxxxa--",
		]
	}, 
	{ // LEVEL 5
		floor: [
			"ssssssssssssssssssssssssssssssssss",
			"                                  ",
			"                                  ",
			"                                  ",
			"                                  ",
			"                                  ",
			"ssssssssssssssssssssssssssssssssss"
		],
		map: [
			"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwd",
			"a--------------------------------d",
			"a--------------------------------d",
			"aN---p---------------------------d",
			"a--------------------------------d",
			"zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc",
		]
	}, 
	{ // LEVEL 
		floor: [
			"sssssssssss",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"           ",
			"---     ---",
			"---     ---",
			"---     ---",
			"---     ---",
			"---     ---",
			"sssssssssss",
			"sssssssssss",
		],
		map: [
			"wwwwwwwwwww",
			"a----o----d",
			"a---------d",
			"a---------d",
			"a----p----d",
			"a---------d",
			"a---------d",
			"a---------d",
			"a---------d",
			"a---------d",
			"ao-----o--d",
			"a---------d",
			"a--------bd",
			"zxxa---dxxc",
			"sssa---dsss",
			"sssa---dsss",
			"sssa-b-dsss",
			"sssa-h-dsss",
			"ssszxxxcsss",
		]
	}, 
	{ // LEVEL 7
		floor: [
			"-----       -----",
			"-----       -----",
			"-----       -----",
			"-----       -----",
			"                 ",
			"                 ",
			"                 ",
			"                 ",
			"                 ",
			"-----       -----",
			"-----       -----",
			"-----       -----",
			"                 ",
			"                 ",
			"                 ",
			"                 ",
			"                 ",
			"                 ",
			"-----       -----",
			"-----       -----",
			"-----       -----",
			"-----       -----",
			"-----       -----",

		],
		map: [
			"-----wwwwwww-----",
			"-----a-----d-----",
			"-----a--p--d-----",
			"-----a-----d-----",
			"awwww-------wwwwd",
			"a---------------d",
			"a---------------d",
			"a---------------d",
			"zxxxx-------xxxxc",
			"-----a-----d-----",
			"-----a-----d-----",
			"-----a-----d-----",
			"wwwww-------wwwww",
			"a---------------d",
			"a-------o-------d",
			"a---------------d",
			"a---------------d",
			"zxxxx-------xxxxc",
			"----d-------a----",
			"----d-------a----",
			"----d-------a----",
			"----d---h---a----",
			"----dxxxxxxxa----",
		]
	}, { // LEVEL 
		floor: [
			"              ",
			"              ",
			"              ",
			"              ",
		],
		map: [
			"--------------",
			"-----p--------",
			"--------------",
			"--------------",
		]
	}
];

const mapKey = {
	" ": () => [
		k.sprite("floorV2", { frame: ~~rand(0, 11) }),
		k.origin('center'),
		k.scale(SCALE),
		k.layer('bg')
	],
	"p": () => [
		k.sprite('pc', { anim: 'idle' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		k.area({ width: 16, height: 28 }),
		k.health(3),
		k.solid(),
		// k.z(2),
		{
			invulnerable: false,
			cooldownTime: .5,
			inCooldown: false,
		},
		"player"
	],
	"$": () => [
		k.sprite("skeleton"),
		k.scale(SCALE),
		k.area({ offset: vec2(0, -25) }),
		k.solid(),
		k.layer('game'),
		k.origin('center')
	],
	"h": () => [
		k.sprite("potionRed"),
		k.scale(SCALE + 2),
		k.area({ width: 8, height: 8 }),
		k.layer('bg'),
		k.origin('center'),
		"potion"
	],
	"q": () => [
		k.sprite("wallTL"),
		k.scale(SCALE),
		k.area(),
		k.solid(),
		origin('center'),
		k.layer('game'),
		"wall"
	],
	"w": () => [
		k.sprite("wallT"),
		k.scale(SCALE),
		k.area(),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"e": () => [
		k.sprite("wallTR"),
		k.scale(SCALE),
		k.area(),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"a": () => [
		k.sprite("wallL"),
		k.scale(SCALE),
		k.area({ offset: vec2(-25,0) }),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"1": () => [
		k.sprite("wallLTop"),
		k.scale(SCALE),
		k.area(),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"3": () => [
		k.sprite("wallRTop"),
		k.scale(SCALE),
		k.area(),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"s": () => [
		k.sprite("wallFaceTilesV2", { frame: ~~rand(0, 6) }),
		k.scale(SCALE),
		k.origin('center'),
		k.layer('bg'),
		k.area({ offset: vec2(0, -8 * SCALE - 1), height: 16 }),
		k.solid(),
		"wall"
	],
	"x": () => [
		k.sprite("wallB"),
		k.scale(SCALE),
		k.area({offset: vec2(0, 19), height: 8}),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		z(2),
		"wall"
	],
	"d": () => [
		k.sprite("wallR"),
		k.scale(SCALE),
		k.area({ offset: vec2(28, 20) }),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	
	"z": () => [
		k.sprite("wallBL"),
		k.scale(SCALE),
		k.area({ offset: vec2(-10, 20) }),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"c": () => [
		k.sprite("wallBR"),
		k.scale(SCALE),
		k.area({ offset: vec2(0, 20) }),
		k.solid(),
		k.layer('game'),
		k.origin('center'),
		"wall"
	],
	"b": () => [
		k.sprite('cats2', { anim: 'blackIdle' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		k.area({ width: 25, height: 25, offset: { x: 0, y: 10 } }),
		k.solid(),
		k.health(3),
		{
			aggro: false,
			timesFed: 0,
			moveSpeed: 50,
			buffed: true,
			growModifier: 1,
			meowLoop: setInterval(() => {
				play('meow');
			}, rand(2000, 5000))
		},
		"cat"
	],
	"o": () => [
		k.sprite('cats2', { anim: 'orangeWalk' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		k.area({ width: 25, height: 25,  offset: { x: 0, y: 10 } }),
		k.solid(),
		k.health(2),
		{
			aggro: false,
			timesFed: 0,
			moveSpeed: 50,
			buffed: true,
			growModifier: 1,
			meowLoop: setInterval(() => {
				play('meow');
			}, rand(2000, 5000))
		},
		"cat"
	],
	"t": () => [
		k.sprite('cats2', { anim: 'calicoThrow' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		k.area({ width: 25, height: 25,  offset: { x: 0, y: 10 } }),
		k.solid(),
		k.health(2),
		{
			aggro: false,
			timesFed: 0,
			stationary: true,
			buffed: true,
			moveSpeed: 0,
			growModifier: 1,
			meowLoop: setInterval(() => {
				play('meow');
			}, rand(2000, 5000))
		},
		"cat",
		"throw"
	],
	"n": () => [
		k.sprite('cats2', { anim: 'eliteIdle' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		// k.area({ width: 25, height: 25,  offset: { x: 0, y: 10 } }),
		k.area(),
		k.solid(),
		k.z(3),
		k.health(5),
		{
			aggro: false,
			// attacking: false,
			timesFed: 0,
			buffed: true,
			moveSpeed: 70,
			growModifier: .5,
			meowLoop: setInterval(() => {
				play('meow');
			}, rand(2000, 5000))
		},
		"cat",
		"elite"
	],
	"N": () => [
		k.sprite('cats2', { anim: 'eliteIdle' }),
		k.origin('center'),
		k.layer('game'),
		k.scale(SCALE),
		// k.area({ width: 25, height: 25,  offset: { x: 0, y: 10 } }),
		k.area(),
		k.solid(),
		k.z(3),
		k.health(17),
		{
			aggro: false,
			// attacking: false,
			timesFed: 0,
			buffed: true,
			moveSpeed: 140,
			growModifier: .5,
			meowLoop: setInterval(() => {
				play('eliteMeow', { volume: .5 });
			}, rand(2000, 5000))
		},
		"cat",
		"elite"
	],
}

export function buildLevel(levelNum) {
	if (!LEVEL_LIST[levelNum]) {
		return k.go('gameOver');
		
	}
	addLevel(LEVEL_LIST[levelNum]["floor"], {
		width: 32 * SCALE,
		height: 32 * SCALE,
		...mapKey	
	});
	addLevel(LEVEL_LIST[levelNum]["map"], {
		width: 32 * SCALE,
		height: 32 * SCALE,
		...mapKey
	});
}

export function addFloor() {
	addLevel(LEVELS.one.floor, {
		width: 16 * SCALE,
		height: 16 * SCALE,
		...mapKey	
	});
}

export function addMap() {
	addLevel(LEVELS.one.map, {
		width: 16 * SCALE,
		height: 16 * SCALE,
		...mapKey
	});
}