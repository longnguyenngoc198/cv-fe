/**
 * utils/validation.ts
 * Util functions for validations
 */

import { has } from 'lodash';
import { FieldErrors } from 'react-hook-form';

/**
 * setFormHelperText
 * @desc Check and return validation error message for form validation
 */
const setFormHelperText = (
  errors: FieldErrors<Record<string, Record<string, any>>>,
  key: string
) => {
  const hasMessage = has(errors, `${key}.message`);
  if (hasMessage) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return errors[key]!.message;
  }
  return '';
};

/**
 * setActiveRoute
 * @param routePathname
 * @param menuPathname
 * @param checkLevel - Number of nested route pathname to validate
 * @desc Set active menu based on current route's pathname
 */
const setActiveRoute = (
  routePathname: string,
  menuPathname: string,
  checkLevel: number
) => {
  const routePathnameSplit = routePathname.substring(1).split('/');
  const menuPathnameSplit = menuPathname.substring(1).split('/');
  for (let i = 0; i < checkLevel; i += 1) {
    if (routePathnameSplit[i] !== menuPathnameSplit[i]) {
      return false;
    }
  }
  return true;
};

export default { setFormHelperText, setActiveRoute };
