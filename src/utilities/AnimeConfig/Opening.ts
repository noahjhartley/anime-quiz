export default class Opening {
    number: number
    title: string[]
    artist: string[]
    url: string
    lyrics: string[]
    englishLyrics: string[]
    chorusStart: number
    chorusEnd: number
    videoLength: number;

    constructor() {
        this.number = 0
        this.title = []
        this.artist = []
        this.url = ""
        this.lyrics = []
        this.englishLyrics = []
        this.chorusStart = 0
        this.chorusEnd = 0
        this.videoLength = 0
    }
}