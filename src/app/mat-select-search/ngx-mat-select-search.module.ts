/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask'

export const MatSelectSearchVersion = '3.3.0';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective
  ],
  exports: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective
  ]
})
export class NgxMatSelectSearchModule { }
