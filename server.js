const express = require('express');
const youtubeStream = require('youtube-audio-stream')
const app = express();

app.get('/youtube/:id', function(req, res) {
  const requestUrl = 'http://youtube.com/watch?v=' + req.params.id;
  try {
    youtubeStream(requestUrl).pipe(res)
  } catch (exception) {
    res.status(500).send(exception)
  }
});

function soundcloudUrl(id) {
  return `https://api.soundcloud.com/tracks/${id}/stream?client_id=${process.env.SOUNDCLOUD_ID}`;
}

app.get('/soundcloud/:id', function(req, res) {
  res.redirect(soundcloudUrl(req.params.id));
});

app.listen(process.env.PORT || 54123, function () {
  console.log('Server running');
})
