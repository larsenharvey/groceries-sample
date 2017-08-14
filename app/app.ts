/**
 * Created by Lars on 7/3/17.
 */
import * as app from 'application';

import {BackgroundFetch} from "nativescript-background-fetch";

if (app.ios) {
      class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];
          // BackgroundFetch delegate method
          public applicationPerformFetchWithCompletionHandler(application: any, completionHandler:any) {
                    BackgroundFetch.performFetchWithCompletionHandler(completionHandler);
                  }
        }
        app.ios.delegate = MyDelegate;
    }

app.start({ moduleName: 'main-page' });