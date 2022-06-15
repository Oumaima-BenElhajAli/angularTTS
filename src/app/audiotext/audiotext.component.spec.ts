import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiotextComponent } from './audiotext.component';

describe('AudiotextComponent', () => {
  let component: AudiotextComponent;
  let fixture: ComponentFixture<AudiotextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiotextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
