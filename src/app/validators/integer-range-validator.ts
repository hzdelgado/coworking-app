import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function integerRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Convertir el valor a un número si es posible
    const numericValue = Number(value);

    // Verificar si es un número entero y está en el rango especificado
    if (
      value === null || // Permitir vacío si no es obligatorio
      value === undefined ||
      (Number.isInteger(numericValue) && numericValue >= min && numericValue <= max)
    ) {
      return null; // Válido
    }

    return { integerRange: { min, max } }; // Inválido
  };
}
