import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LanguagePage } from '../pages/language/language';
import { StartPage } from '../pages/start/start';
import { ExercisePage } from '../pages/exercise/exercise';
import { SettingsPage } from '../pages/settings/settings';
import { ExtrasPage } from '../pages/extras/extras';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanguagePage,
    StartPage,
    ExercisePage,
    SettingsPage,
    ExtrasPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanguagePage,
    StartPage,
    ExercisePage,
    SettingsPage,
    ExtrasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
