
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageLocaleService } from '../../../../../virtual-desktop/src/app/i18n/language-locale.service';
import { ZluxPopupWindowModule, ZluxButtonModule } from '@zlux/widgets';


// import libraries modules
 
import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { LocaleComponent } from './locale/locale.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
// import { LaunchbarWidgetComponent } from '../../../../../virtual-desktop/src/app/window-manager/mvd-window-manager/launchbar/launchbar-widget/launchbar-widget.component'

@NgModule({
  declarations: [
    AppComponent, LanguageComponent, LocaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ZluxPopupWindowModule,
    ZluxButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
    ],
  providers: [LanguageLocaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
