import FilterConfig from "../../../utilities/FilterConfig/FilterConfig"

const defaultFilter = new FilterConfig
defaultFilter.aired = [1900, 2023]
defaultFilter.genres = [
    'Action',
    'Adventure',
    'Avant Garde',
    'Award Winning',
    'Comedy',
    'Drama',
    'Fantasy',
    'Gourmet',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Sports',
    'Supernatural',
    'Suspense',
  ]
  defaultFilter.studio = [
    'Aniplex',
    'Sunrise',
    'Discotek Media',
    'Production I.G.',
    'J.C. Staff',
    'Madhouse',
    'Studio Deen',
    'Pierrot',
    'A-1 Pictures',
    'Bandai Entertainment',
    'Shaft',
    'David Production',
    'Gainax',
    'LIDENFILMS',
    'Lerche',
    'Shin-Ei Animation',
    'ufotable',
    'Bones'
]
defaultFilter.demographic = [
    'Josei',
    'Kids',
    'Seinen',
    'Shoujo',
    'Shounen'
];

export default defaultFilter