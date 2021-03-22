# Packages Dependency
![Axios](https://img.shields.io/badge/axios-npmjs-blue.svg)
![xml2js](https://img.shields.io/badge/xml2js-npmjs-red.svg)

# Description

This is a data scraping tool that extracts video_info from youtube using axios for any videoID and return parsed caption data for the ASR (automatic speech recognition) data as a JSON object.

# Installation

```
npm i ytgetcaption
```

# How to use

```javascript
caption = require('ytgetcaption');

caption.ytgetCaption(VideoID).then(function (data) {
    console.log(data)
});

```

# Github

[https://github.com/costargc/ytgetcaption.git](https://github.com/costargc/ytgetcaption.git)