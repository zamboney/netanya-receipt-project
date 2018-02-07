import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
var config = {
  apiKey: "AIzaSyC04bLIPh2ZSDKP_MbwpzdVTnxoddYxZGs",
  authDomain: "receipt-project-netanya.firebaseapp.com",
  databaseURL: "https://receipt-project-netanya.firebaseio.com",
  projectId: "receipt-project-netanya",
  storageBucket: "receipt-project-netanya.appspot.com",
  messagingSenderId: "14281771207"
};
firebase.initializeApp(config);
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        } else { 
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
