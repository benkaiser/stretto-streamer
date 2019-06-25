const express = require('express');
const request = require('request');
const ytdl = require('ytdl-core');
const app = express();

app.get('/youtube/:id', function(req, res) {
  const requestUrl = 'http://youtube.com/watch?v=' + req.params.id;
  const options = {
    filter: 'audioonly',
    quality: 'highestaudio',
  };
  ytdl.getInfo(requestUrl, options).then((info) => {
    const format = ytdl.chooseFormat(info.formats, options);
    request.get(format.url).pipe(res);
  }).catch((error) => {
    res.status(500).send(error);
  })
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
