/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { Injectable /*, Inject */ } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { BaseLogger } from '../shared/logger';
import { _throw } from 'rxjs/observable/throw';

import { Globalization } from './globalization';

@Injectable()
export class DateTimeService {

  private readonly logger: ZLUX.ComponentLogger = BaseLogger;

  readonly globalization: Globalization = new Globalization();

  constructor(
  ) {
  }

  getLanguage(): string {
    return this.globalization.getLanguage();
  }

  getBaseLanguage(): string {
    const language = this.getLanguage();
    return language.split('-')[0];
  }

  isConfiguredForDefaultLanguage(): boolean {
    const language = this.getLanguage();
    return  !language || language === 'en-US' || language === 'en';
  }

  getLocale(): string {
    return this.globalization.getLocale();
  }

  makeLocaleURI(localeId: string): string {
    const baseURI: string = (window as any).ZoweZLUX.uriBroker.desktopRootUri();
    return `${baseURI}locales/${localeId}`;
  }

  checkForLocaleFile(localeId: string): Observable<any> {
    const uri = `${this.makeLocaleURI(localeId)}.js`;
    // From lchudinov: This code is called before Angular's Http API is initialized,
    // hence the call to window.fetch.
    return fromPromise(window.fetch(uri).then(res => {
      if (res.ok) {
        return res.text();
      }
      throw new Error(`${res.status} ${res.statusText}`);
    }));
  }

  



}
