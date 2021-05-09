import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router-dom';

import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { LichList, LichCreate, LichEdit } from './pages/Lich';
import { HCList, HCCreate, HCEdit } from './pages/HC';
import { TinhHinhChungList, TinhHinhChungCreate, TinhHinhChungEdit } from './pages/TinhHinhChung';
// import CustomLoginPage from './CustomLoginPage';
import ViewLich from './pages/custom/ViewLich';
import vietnameseMessages from 'ra-language-vietnamese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import {emailAndPasswordAuthProvider} from "ra-auth-firebase-client";
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from 'firebase/app'
import 'firebase/auth';
import "firebase/database";

const i18nProvider = polyglotI18nProvider(() => vietnameseMessages, 'vi');

firebase.initializeApp({
  apiKey: 'AIzaSyCDuHf0UAAfR4o4_hGcmlRf8ZYFNv5xw8c',
  databaseURL: 'https://lichmo-efda9-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'lichmo-efda9'
})
const settings = {context: 'dev', imagekey: "images", filekey: "files"}

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    authProvider={emailAndPasswordAuthProvider(firebase)}
    dataProvider={firebaseDataProvider(firebase, settings)}
    customRoutes={[<Route path="/lich-display" component={ViewLich} noLayout/>]}
  >
    <Resource
      name="lich"
      options={{ label: 'Lịch' }}
      icon={EventIcon}
      list={LichList}
      create={LichCreate}
      edit={LichEdit}
    />
    <Resource
      name="hc"
      options={{ label: 'Hành chính' }}
      icon={ScheduleIcon}
      list={HCList}
      create={HCCreate}
      edit={HCEdit}
    />
    <Resource
      name="tinhhinhchung"
      options={{ label: 'Tình hình chung' }}
      icon={ViewComfyIcon}
      list={TinhHinhChungList}
      create={TinhHinhChungCreate}
      edit={TinhHinhChungEdit}
    />
  </Admin>
);

export default App;
