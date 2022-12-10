import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkComponent } from './work/work.component';
import { PInfoComponent } from './p-info/p-info.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [WorkComponent, PInfoComponent, SkillsComponent, EducationComponent],
  exports: [WorkComponent, PInfoComponent, SkillsComponent, EducationComponent],
})
export class CompModule {}
