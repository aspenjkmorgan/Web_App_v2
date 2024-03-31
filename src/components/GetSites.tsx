import { IonText } from '@ionic/react';
import { firestore } from '../firebaseConfig';
import React, { useState, useEffect } from 'react';

// FIX: export list of current locations and their pm25 values
const SiteData: React.FC = () => {
    const [site, updateSite] = useState<{ sitename: string }>({ sitename: ''});
    useEffect(() => {
        const getNext = firestore.collection('Sites').doc('Z9blUFIpD58NFClxTlHk')
            .onSnapshot((doc: any) => {
                updateSite({sitename: doc.data().sitename});
        });
        return () => {
            getNext(); 
        };
    }, []);
    return (
        <>
            <IonText>{site.sitename}</IonText>
        </>
    )
}

export default SiteData;