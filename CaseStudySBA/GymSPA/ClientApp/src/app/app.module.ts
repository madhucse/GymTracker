import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryService } from './category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { FindCategoryComponent } from './find-category/find-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ListComponent } from './list/list.component';
import { Filterpipe } from '../../Search';
import { ListWorkoutComponent } from './list-workout/list-workout.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutService } from './workout.service';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { EditComponent } from './edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    FindCategoryComponent,
    DeleteCategoryComponent,
    ListComponent,
   
    Filterpipe,
    ListWorkoutComponent,
    AddWorkoutComponent,
    EditWorkoutComponent,
    EditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'Category', component:ListCategoryComponent },
      { path: 'delete-Category/:id', component: DeleteCategoryComponent},
      { path: 'add-Category', component: AddCategoryComponent},
      { path: 'edit-Category', component: EditCategoryComponent},
      { path: 'find-Category', component: FindCategoryComponent },
      { path: 'list', component: ListComponent },
      { path: 'edit-workout', component: EditWorkoutComponent },
      { path: 'add-workout', component: AddWorkoutComponent },
      { path: 'Workout', component: ListWorkoutComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: '', redirectTo: 'list-Category', pathMatch: 'full' }

    ])
  ],
  providers: [CategoryService,WorkoutService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
