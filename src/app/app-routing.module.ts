import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsComponent } from './forms/forms.component';
import { GuardsComponent } from './guards/guards.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';


const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch: 'full' },
  {path:'login',component:LoginComponent},

{
path:'home', component:HomeComponent, 
children:[ 
{path:'pipes',component:PipesComponent, pathMatch:'full'},
{path:'sdirective',component:StructuralDirectiveComponent},
{path:'adirective',component:AttributeDirectiveComponent},
{path:'interceptor',component:InterceptorComponent},
{path:'guards',component:GuardsComponent},
{path:'forms',component:FormsComponent},
{path:'lazyloading',component:LazyLoadingComponent}
]
}
 ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
