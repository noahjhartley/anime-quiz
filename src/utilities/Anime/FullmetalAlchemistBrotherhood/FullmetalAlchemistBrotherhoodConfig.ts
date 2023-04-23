import * as react from "react"
import AnimeConfig from "../../AnimeConfig/AnimeConfig"
import FullmetalAlchemistBrotherhoodOps from "./FullmetalAlchemistBrotherhoodOps";
import FullmetalAlchemistBrotherhoodEds from "./FullmetalAlchemistBrotherhoodEds";
import FullmetalAlchemistBrotherhoodCharacters from "./FullmetalAlchemistBrotherhoodCharacters";

const FullmetalAlchemistBrotherhood = new AnimeConfig();
FullmetalAlchemistBrotherhood.title = ["Fullmetal Alchemist: Brotherhood", "FMA:B", "FMAB", "Fullmetal Alchemist Brotherhood", "Hagane no Renkinjutsushi"]
FullmetalAlchemistBrotherhood.genre = ["Action", "Adventure", "Drama", "Fantasy"]
FullmetalAlchemistBrotherhood.aired = [2009, 2010]
FullmetalAlchemistBrotherhood.studio = ["Bones"]
FullmetalAlchemistBrotherhood.demographic = ["Shounen"]
FullmetalAlchemistBrotherhood.ops = FullmetalAlchemistBrotherhoodOps
FullmetalAlchemistBrotherhood.eds = FullmetalAlchemistBrotherhoodEds
FullmetalAlchemistBrotherhood.characters = FullmetalAlchemistBrotherhoodCharacters

export default FullmetalAlchemistBrotherhood