# Stretto Streamer

Offers endpoints for streaming mp3s from youtube and soundcloud.

## Running

Dependencies: nodejs, ffmpeg (needed for youtube videos)

Setup:

```
npm install
```

Run:

```
PORT=<port> SOUNDCLOUD_ID=<soundcloud client id> node server.js
```

## Endpoints

#### `/youtube/<youtube_id`

Starts streaming a youtube video as an mp3.

#### `/soundcloud/<soundcloud_id>`

Starts steaming a soundcloud track as an mp3 (requires a `SOUNDCLOUD_ID` be passed as an environment variable).

## License

MIT
