import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validador personalizado para solo letras
export function onlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Permitir vacío si no es obligatorio
    if (!value) {
      return null;
    }

    // Validar que solo contenga letras (incluye mayúsculas y minúsculas)
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (regex.test(value)) {
      return null; // Válido
    }

    return { onlyLetters: true }; // Inválido
  };
}
