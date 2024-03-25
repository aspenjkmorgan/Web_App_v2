const {onCall} = require("firebase-functions/v2/https");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const axios = require('axios');

// const params = {
//     access_key: 
//     query: 
// }

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
