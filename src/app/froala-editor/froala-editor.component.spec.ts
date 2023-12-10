import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaEditorComponent } from './froala-editor.component';

describe('FroalaEditorComponent', () => {
  let component: FroalaEditorComponent;
  let fixture: ComponentFixture<FroalaEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FroalaEditorComponent]
    });
    fixture = TestBed.createComponent(FroalaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
