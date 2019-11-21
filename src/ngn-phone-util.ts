import { networks } from './misc';
import validate from './validate';

/**
 * @description Alias to validate
 * @param phone
 * @returns {boolean | never}
 */
export const test = phone => validate(phone);

export function detect(phone: string): any {
  if (test(phone)) {
    let primaryPrefix = phonePrifix(phone);
    let secondaryPrefix = phonePrifix(phone, 5);

    if (networks.mtn.includes(primaryPrefix)) {
      return Providers.mtn;
    } else if (networks.glo.includes(primaryPrefix)) {
      return Providers.glo;
    } else if (networks['9mobile'].includes(primaryPrefix)) {
      return Providers['9mobile'];
    } else if (networks.airtel.includes(primaryPrefix)) {
      return Providers.airtel;
    } else if (
      networks.starcomms.includes(secondaryPrefix) ||
      networks.starcomms.includes(primaryPrefix)
    ) {
      return Providers.starcomms;
    } else if (
      networks.visafone.includes(secondaryPrefix) ||
      networks.visafone.includes(primaryPrefix)
    ) {
      return Providers.visafone;
    } else if (
      networks.multilinks.includes(primaryPrefix) ||
      networks.multilinks.includes(secondaryPrefix)
    ) {
      return Providers.multilinks;
    } else if (networks.zoom.includes(primaryPrefix)) {
      return Providers.zoom;
    } else if (networks.ntel.includes(primaryPrefix)) {
      return Providers.ntel;
    }
  }

  throw new Error('Inconsitency violation: Somehow this code should never be called!');
}

/**
 * @api {Private}
 * @param phone
 * @param len
 * @returns {string}
 */
function phonePrifix(phone: string, len?: number): string {
  len = len || 4;
  return phone.substr(0, len);
}

export enum Providers {
  mtn = 'MTN',
  glo = 'GLO',
  airtel = 'AIRTEL',
  '9mobile' = '9Mobile',
  starcomms = 'STARCOMMS',
  visafone = 'VISAFONE',
  zoom = 'ZOOM',
  ntel = 'NTEL',
  multilinks = 'MULTILINKS'
}
