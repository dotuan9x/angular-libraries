# AngularLibraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

- How to create [angular libraries](https://angular.io/guide/creating-libraries)
- [Complete guide to angular libraries](https://www.willtaylor.blog/complete-guide-to-angular-libraries/)
- To create new library, typing `ng generate library my-lib` at root folder

## How to create and publish your library
```shell
# cd folder project/calendar-recurrence/src/lib
# Then create module and component (1 module per 1 component)
ng generate module components/example-component
ng generate component component/example-component

# After develop feature of component, export your component at ngModule of module 
@NgModule({
  declarations: [
    RecurrenceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecurrenceComponent
  ]
})

# Run command prompt to build library
ng build --project=calendar-recurrence

# Then cd dist/calendar-recurrence and publish your component
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
