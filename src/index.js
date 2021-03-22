function ytgetCaption(videoID) {
    xml2js = require('xml2js');
    axios = require('axios');

    return new Promise((resolve, reject) => {

        axios.get('https://youtube.com/get_video_info?video_id=' + videoID)
            .then(function (response) {


                decodedData = response.data;
                decodedData = decodeURIComponent(response.data);
                regex = /(?<="captionTracks":\[\{"baseUrl":")(.*)(?=","name":{"simpleText")/;
                match = regex.exec(decodedData);
                result = match[0].replace(/\\u0026/g, "&")


                axios.get(result)
                    .then(function (response2) {


                        var xml = response2.data

                        xml2js.parseString(xml, function (err, data) {

                            data_format = JSON.stringify(data)
                            resolve(data_format);
                            // console.log(data_format);


                        });

                    })

            })

    })
}


module.exports = {
    ytgetCaption
}
