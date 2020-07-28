import fetch from 'node-fetch'

export async function getJoke() {
    const res = await fetch('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist')
    return res.json()
}