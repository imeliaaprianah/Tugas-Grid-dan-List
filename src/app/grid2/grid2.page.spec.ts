import { ComponentFixture, TestBed } from '@angular/core/testing';
import { grid2Page } from './grid2.page';

describe('Grid2Page', () => {
  let component: grid2Page;
  let fixture: ComponentFixture<grid2Page>;

  beforeEach(async () => { 
    TestBed.configureTestingModule({
      declarations: [grid2Page]
    }).compileComponents();
    
    fixture = TestBed.createComponent(grid2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
