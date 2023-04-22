import Opening from './Opening';
import Ending from './Ending';
import Character from './Character';

export default class AnimeConfig {
    title: string[]
    genre: string[]
    aired: number[]
    studio: string[]
    demographic: string[]
    ops: Opening[]
    eds: Ending[]
    characters: Character[]

    constructor() {
        this.title = []
        this.genre = []
        this.aired = []
        this.studio = []
        this.demographic = []
        this.ops = []
        this.eds = []
        this.characters = []
    }
}