const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.get('/youtube/:id', function(req, res) {
  const requestUrl = 'http://youtube.com/watch?v=' + req.params.id;
  try {
    ytdl(requestUrl, {filter: 'audioonly', quality: 'highest'})
    .on('error', (error) => {
      res.status(500).send(error);
    })
    .pipe(res);
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

const PORT = process.env.PORT || 54123;
app.listen(PORT, function () {
  console.log('Server running on port ' + PORT);
})
