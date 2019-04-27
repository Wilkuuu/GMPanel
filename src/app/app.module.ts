import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {AddPanelComponent} from './add-panel/add-panel.component';
import {DicePanelComponent} from './dice-panel/dice-panel.component';
import {BattleViewComponent} from './battle-view/battle-view.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FileSelectDirective} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {AngularFirestore, FirestoreSettingsToken} from '@angular/fire/firestore';
import { RoundComponent } from './round/round.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        AddPanelComponent,
        DicePanelComponent,
        BattleViewComponent,
        NotFoundComponent,
        FileSelectDirective,
        RoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase, 'GMApp'),
        AngularFireStorageModule,
        AngularFireAuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [{provide: FirestoreSettingsToken, useValue: {}},
        AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {
}

