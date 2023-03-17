import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class SlotsSharedService {
    public providerChange = new Subject<string>();

    public updateProvider(provider: string) {
        this.providerChange.next(provider);
    }

}