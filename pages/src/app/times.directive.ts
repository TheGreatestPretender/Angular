import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})

//STURCTURAL DIRECTIVE
export class TimesDirective {

  constructor(
    //a reference to the element that we applied our directive to. 
    //reference to UL
    // (*appTimes) being applied to the UL element
    private viewContainer: ViewContainerRef,

    //reference to whatever elements that are placed inside the directive (LI)
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(value: number) {
    this.viewContainer.clear();

    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        idx: i
      });
    }
  }

}
