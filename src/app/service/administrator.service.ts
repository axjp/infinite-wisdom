import {EnvironmentInjector, inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { AdministratorI } from "../models/administrator.interface";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AdministratorService{
    private readonly httpClient=inject(HttpClient);
    private API_URL_ADMINISTRATOR= `${environment.API_URL}/administrators`;

    findAdministrators():Observable<AdministratorI[]> {
        return this.httpClient.get<AdministratorI[]>(this.API_URL_ADMINISTRATOR);
      }
    
      createAdministrator(payload: AdministratorI) {
        return this.httpClient.post(this.API_URL_ADMINISTRATOR, payload);
      }
    
      updateAdministrator(id: string, payload: AdministratorI):Observable<AdministratorI> {
        return this.httpClient.put<AdministratorI>(`${this.API_URL_ADMINISTRATOR}/${id}`, payload);
      }
    
      deleteAdministrator(id: string) {
        return this.httpClient.delete(`${this.API_URL_ADMINISTRATOR}/${id}`);
      }
    
      findAdministratorOne(id: string):Observable<AdministratorI> {
        return this.httpClient.get<AdministratorI>(`${this.API_URL_ADMINISTRATOR}/${id}`);
      }
    }