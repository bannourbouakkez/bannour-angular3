import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurMesSessionsComponent } from './tuteur-mes-sessions.component';

describe('TuteurMesSessionsComponent', () => {
  let component: TuteurMesSessionsComponent;
  let fixture: ComponentFixture<TuteurMesSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuteurMesSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurMesSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
