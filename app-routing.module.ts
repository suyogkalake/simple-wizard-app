import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'contact-details', component: ContactDetailsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'wizard-finished', component: WizardFinishedComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
