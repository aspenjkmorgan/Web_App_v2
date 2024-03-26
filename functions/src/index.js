const functions = require("firebase-functions");
const admin = require('firebase-admin')
const axios = require('axios');

exports.pubsub = functions
    .runWith({timeoutSeconds:60})
    .pubsub
    .schedule('every 12 hours')
    .onRun(async context => {
        await axios.get('https://gis.mtdeq.us/hosting/rest/services/Hosted/montana_aqmon_stations_dataportal/FeatureServer/0/query?where=1%3D1&outFields=sitename,latitude,longitude,hour,parameter,parametername,rawvalue,date&outSR=4326&f=json',)
        .then(response => {
            const apiResponse = response.data;
            docRef.set({current: apiResponse,})
        }).catch(error => {console.log(error);});
    });
