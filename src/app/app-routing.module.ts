import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MenShirtsComponent } from './men/MenShirts/MenShirts.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'home', component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/categories' },
  { path: 'MenShirts', component: MenShirtsComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
