// error-handler.service.ts
import { Injectable } from '@angular/core';
import { ErrorResponse } from '../models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerService {
  formatError(operation: string, error: any): ErrorResponse {
    let message = '';
    if (error?.error?.message) {
      message = error.error.message;
    } else if (error.status) {
      message = `Status: ${error.status} - ${error.statusText}`;
    } else {
      message = 'Erro desconhecido';
    }
    return {
      erro: true,
      operation,
      message,
      originalError: error
    };
  }
}
