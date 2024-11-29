// src/app/core/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  /**
   * Realiza una solicitud GET al endpoint especificado con parámetros opcionales.
   * @param endpoint - Ruta del endpoint.
   * @param queryParams - Objeto con parámetros de consulta (opcional).
   */
  get(endpoint: string, queryParams?: Record<string, string | number | boolean>) {
    let params = new HttpParams();

    if (queryParams) {
      for (const key of Object.keys(queryParams)) {
        params = params.set(key, queryParams[key].toString());
      }
    }

    return this.http.get(`${this.baseUrl}/${endpoint}`, { params });
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }
}
