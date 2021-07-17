import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App } from '@capacitor/app'
const AppUrlListener: React.FC<any> = () => {
  let history = useHistory();

  useEffect(() => {
    App.addListener('appUrlOpen', (data: any) => {
      // Example url: https://beerswift.app/tabs/tab2
      // slug = /tabs/tab2
      const slug = data.url.split('.starter').pop();
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  return null;
};

export default AppUrlListener;