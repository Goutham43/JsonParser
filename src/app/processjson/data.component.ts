import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DataEntity } from '../json/Data.entity';
import { DataService } from '../json/Data.service';
import { IProcessDataEntity } from './IprocessData.entity';

@Component({
    selector: 'processData-comp',
    templateUrl: './data.component.html'

})
export class ProcessDataComponent implements OnInit {
    DataObjects = new Array<DataEntity>();
    proccessedDataObjects = new Array<IProcessDataEntity>();

    ngOnInit(): void {
        this.dataService.getJSON().subscribe(
            (data) => {
                this.DataObjects = data['data'];
                this.sortBy("category");
                var myMap = new Map();
                
                for (var index = 0; index < this.DataObjects.length; index++) {
                    var element = this.DataObjects[index];
                    var currentval = myMap.get(element.name) ? myMap.get(element.name) :new Map() ;
                    currentval.set(element.category,element.amount);
                    myMap.set(element.name, currentval );
                }
                myMap.forEach((value: any, key: any) =>{
                    var x=new IProcessDataEntity(key,value.get("C1"),value.get("C2"),value.get("C3"));
                    this.proccessedDataObjects.push(x);
                });
            }
        );
    }
    sortBy(sortelement: any) {
        this.DataObjects.sort(function (a, b) { return (a[sortelement] > b[sortelement]) ? 1 : ((b[sortelement] > a[sortelement]) ? -1 : 0); });
    }

    constructor(private dataService: DataService,
        private changeDetectorRef: ChangeDetectorRef) { }
}
