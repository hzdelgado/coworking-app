// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatTableModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule,  MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    TranslateModule],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatTableModule,
      TranslateModule
    ]
})
export class SharedModule {}
