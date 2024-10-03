# OK Karaoke 🎤

OK Karaoke is a full-stack web app that allows users to create, manage and sing along to their own karaoke playlists.
This app includes user authentication, an easy to use form for adding songs including the karaoke singer's name, and playlist management features. Users can filter songs by genre, decade or the karaoke singer's name for karaoke parties. Let the fun begin!

This project is in its early stages, with the MVP focused on essential playlist functionality and authentication, and stretch goals of integrating music and video via external APIs.

## MVP Features ✨

- Auth0 Login: Users can sign in securely with Auth0.
- Add Songs: A form allows users to add songs to the playlist, including details like the karaoke singer's name.
- View My Playlist: Users can see a list of all the songs they’ve added.
- Filter Playlist: Easily filter songs by genre, decade, or their own name.
- Update and Delete: Manage songs in your playlist by adding the names of new karaoke singers or deleting the songs from your playlist.

## Stretch Features 🚀
- MusixMatch API Integration: Use the MusixMatch API to autofill song details when adding new songs and provide lyrics.
- Lyrics Display: Provide song lyrics on the "Sing" page.
- YouTube Video Display: Show a YouTube video of the karaoke song alongside the lyrics.

## Tech Stack 🖥️
- Frontend: React, Tailwind CSS for styling, React Router for navigation
- Backend: Node.js, Express for server-side logic
- Authentication: Auth0 for secure user login
- Database: SQLite3 via Knex for managing song data
- External APIs: MusixMatch API for song information and lyrics, YouTube API for videos (future implementation)
- Testing: Vitest and Testing Library for unit and integration tests

## Installation ✅

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/[your-username]/ok-karaoke
cd ok-karaoke
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).


