import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DataEntity } from './Data.entity';
import { DataService } from './Data.service';
@Component({
    selector: 'Data-comp',
    templateUrl: './data.component.html'

})
export class DataComponent implements OnInit {
    DataObjects = new Array<DataEntity>();
    sort: String;
    ngOnInit(): void {
        this.dataService.getJSON().subscribe(
            (data) => {
                this.DataObjects = data['data'];
                this.sortBy("name");
                this.sortBy("category");
            }
        );
    }

    sortBy(sortelement: any) {
        if (this.sort == "sortedBy" + sortelement) {//rev sort
            this.DataObjects.reverse();
            this.sort = "vertsortedBy" + sortelement;
            
        }
        else {//normal sort
            this.DataObjects.sort(function (a, b) { return (a[sortelement] > b[sortelement]) ? 1 : ((b[sortelement] > a[sortelement]) ? -1 : 0); });
            this.sort = "sortedBy" + sortelement;
        }
    }


    constructor(private dataService: DataService,
        private changeDetectorRef: ChangeDetectorRef) { }
}
