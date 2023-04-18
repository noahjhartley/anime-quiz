import * as React from 'react';

export default class FilterConfig {
    aired: number[]
    genres: string[]
    studio: string[]
    demographic: string[]

    constructor() {
        this.aired = [1900, 2023]
        this.genres = []
        this.studio = []
        this.demographic = []
    }
}