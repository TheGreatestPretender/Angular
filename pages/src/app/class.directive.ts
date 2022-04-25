import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})

//ATTRIBUTE DIRECTIVE
export class ClassDirective {

  constructor(private element: ElementRef) {}

  //Intercept any time angular tries to set a property on our directive
  //as soon as we intercept that, we are going to take that value and update something else
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
