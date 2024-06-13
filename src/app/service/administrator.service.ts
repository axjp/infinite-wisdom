import {Injectable,inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { AdministratorI } from "../models/administrator.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class AdministratorService{
    private readonly httpClient=inject(HttpClient);
    private readonly API_URL_ADMINISTRATOR= `${environment.API_URL}administrators`;

    // Obtener todos los administradores
    findAdministrators():Observable<AdministratorI[]> {
        return this.httpClient.get<AdministratorI[]>(this.API_URL_ADMINISTRATOR);
      }
     // Crear un nuevo administrador
      createAdministrator(payload: AdministratorI):Observable<AdministratorI> {
        return this.httpClient.post<AdministratorI>(this.API_URL_ADMINISTRATOR, payload);
      }
    // Actualizar un administrador existente
      updateAdministrator(id: string, payload: AdministratorI):Observable<AdministratorI> {
        return this.httpClient.put<AdministratorI>(`${this.API_URL_ADMINISTRATOR}/${id}`, payload);
      }
    // Eliminar un administrador
      deleteAdministrator(id: string) {
        return this.httpClient.delete(`${this.API_URL_ADMINISTRATOR}/${id}`);
      }
    // Obtener un solo administrador por ID
      findAdministratorOne(id: string):Observable<AdministratorI> {
        return this.httpClient.get<AdministratorI>(`${this.API_URL_ADMINISTRATOR}/${id}`);
      }
    }