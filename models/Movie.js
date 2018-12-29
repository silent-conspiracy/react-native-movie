export interface Movie {
  id: number,
  name: string,
  description: string,
  imgPath: string,
  duration: number,
  genre: string[],
  language: string,
  userRating: string
}