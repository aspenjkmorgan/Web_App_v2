const functions = require("firebase-functions");
const admin = require('firebase-admin')
const axios = require('axios');
const { onRequest } = require("firebase-functions/v1/https");

admin.initializeApp();


// exports.pubsub = functions
//     .runWith({timeoutSeconds:60})
//     .pubsub
//     .schedule('1 * * * *')
//     .onRun(async () => {
//         const output = {
//             method: 'GET',
//             url: 'https://gis.mtdeq.us/hosting/rest/services/Hosted/montana_aqmon_stations_dataportal/FeatureServer/0/query?where=1%3D1&outFields=sitename,latitude,longitude,hour,rawvalue,date,parameter&outSR=4326&f=json',
//         };

//         try {
//             // Make API request
//             const response =  await axios.request(output);

//             // Process the response
//             const data = await response.data 
    
//             const firestore = admin.firestore();
//             const docRef = firestore.collection('DEQ_Data').doc('Daily_Readings');
            
//             // Set the data for the new document using the generated document reference
//             await docRef.update(data);
    
//             console.log('Data updated in Firestore.');
//             console.log('Data:', JSON.stringify(data));
//             return null;
//         } catch (error) {
//             console.error('Error:', error.message);
//             return null;
//         }
//     });

