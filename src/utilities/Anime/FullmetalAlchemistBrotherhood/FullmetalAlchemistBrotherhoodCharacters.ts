import * as react from "react"
import Character from "../../AnimeConfig/Character"

const EdwardElric = new Character();
EdwardElric.name = "Edward Elric"
EdwardElric.image = "https://static.wikia.nocookie.net/fma/images/0/08/213254_1407532169190_full.png"

const AlphonseElric = new Character();
AlphonseElric.name = "Alphonse Elric"
AlphonseElric.image = "https://static.wikia.nocookie.net/fma/images/5/51/Avatar_alphonse.png/revision/latest?cb=20160722004325"

let FullmetalAlchemistBrotherhoodCharacters = [
    EdwardElric,
]

export default FullmetalAlchemistBrotherhoodCharacters