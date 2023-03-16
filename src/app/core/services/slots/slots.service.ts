import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { SlotsPlatform } from "../../enums/slots-platforms";
import { ProvidersList, Slots, SlotsByProvider } from "../../intefaces/slots";

@Injectable()

export class SlotsService {

    constructor(private http: HttpClient) { }

    getProvidersList(): Observable<ProvidersList[]> {
        const path = '?type=slot&platform=desktop';
        return this.http.get<{ data: ProvidersList[] }>(`${environment.basicApiUrl}${path}`)
            .pipe(map(({ data }) => data))
    }

    getSlots(): Observable<Slots[]> {
        const path = '/v2/slot/categories?include=games';
        return this.http.get<{ data: Slots[] }>(`${environment.basicApiUrl}${path}`)
            .pipe(map(({ data }) => data.filter(slot => slot.platform !== SlotsPlatform.Mobile)))
    }

    getSlotsByProvider(provider: string): Observable<SlotsByProvider> {
        const path = `/v2/slot/providers/${provider}?platform=desktop`;
        return this.http.get<{ data: SlotsByProvider }>(`${environment.basicApiUrl}${path}`)
            .pipe(map(({ data }) => data));
    }
}
