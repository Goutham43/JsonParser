import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DataComponent } from '../json/data.component';
import { ProcessDataComponent } from '../processjson/data.component';

const APP_ROUTE: Routes = [
    { path: 'dataPage', component: DataComponent },
    { path: 'dataProcessPage', component: ProcessDataComponent }    
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTE,
        )
    ],
    exports: [
        RouterModule
    ],

})
export class AppRoutingModule { }
