/*
function makeValidation returns an object with two properties: "isValid" (boole) and a "message" with the text of a validation error. For validation, the checked value must be passed to the function as the first parameter; the second parameter - is a settings object with check functions. The validation function should accept a validated value and return true (boolean) if validation was successful and an error message if the passed value did not pass validation (string).
*/

export function makeValidation(value = '', optionsObg = {}) {
  if (
    !optionsObg ||
    typeof optionsObg === 'string' ||
    Object.keys(optionsObg).length === 0
  )
    return null;

  const validation = {
    isValid: true,
    message: '',
  };

  for (const key in optionsObg) {
    const result = optionsObg[key](value);

    if (result !== true) {
      validation.isValid = false;
      if (result) validation.message = result;
    }
  }

  return validation;
}

export const checkEmpty = (value) => {
  return value === '' ? 'This field in required' : true;
};

export const checkIsLetter = (value) => {
  if (value !== '') return /^[a-zA-Z]+$/.test(value) || 'Only letters allowed';
};

export const checkIsNumber = (value) =>
  Number.isNaN(Number(value)) ? 'Only numbers allowed' : true; //or /^[0-9]+$/.test(value)

export const checkLength = (value) =>
  String(value).length !== 12 ? 'Should contain 12 characters' : true;
