const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


const divisibleBy3Pkmn = pokémon.filter( p => p.id % 3 === 0)
// console.log(divisibleBy3Pkmn)

const firePkmn = pokémon.filter( p => p.types[0] === "fire")
// console.log(firePkmn)

const twoTypePkmn = pokémon.filter( p => p.types.length === 2 )
// console.log(twoTypePkmn)

const justNamePkmn = pokémon.map( p => p.name ).join()
// console.log(justNamePkmn)

const justName99Pkmn = pokémon.filter( p => p.id > 99).map( p => p.name)
// console.log(justName99Pkmn)

const poisonPkmn = pokémon.filter(p => p.types[0] === "poison" || p.types[1] === "poison").map( p => p.name)
// console.log(poisonPkmn)

const withFlyingPkmn = pokémon.filter(p => p.types[1] === "flying").map( p => p.types[0])
// console.log(withFlyingPkmn)

const normalTypePkmn = pokémon.filter(p => p.types[0] === "normal")
console.log(normalTypePkmn.length)