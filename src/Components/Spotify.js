export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "";

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played"
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
//join joins the elements of array with the passed element. here it is ascii code of space.

export const getTokenFromUrl = () => {
    //#token=sfjdsflnsgkdlksg&resp=dsfndlsfn&fdkjgndfk  => it is something like this and merko isme se sirf access token nikalna hh... 
    return window.location.hash.substring(1).split('&').reduce((initial,item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    },{});
}