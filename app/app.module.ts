import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.components'
import { EventsListComponent } from './events/events-list.components'
import { EventsThumbnailComponent } from './events/events-thumbnail.component'
import { NavBarComponent} from './nav/navbar.component'
@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent,
                   EventsListComponent,
                   EventsThumbnailComponent,
                   NavBarComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}