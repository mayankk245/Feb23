import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { NestedRoutingComponent } from './nested-routing/nested-routing.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { FormsComponent } from './forms/forms.component';
import { GuardsComponent } from './guards/guards.component';
import { AgePipePipe } from './pipes/age-pipe.pipe';
import { AntiIfDirective } from './anti-if.directive';
import { HighlightDirective } from './highlight.directive';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PipesComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    InterceptorComponent,
    NestedRoutingComponent,
    LazyLoadingComponent,
    FormsComponent,
    GuardsComponent,
    AgePipePipe,
    AntiIfDirective,
    HighlightDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports:[HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
