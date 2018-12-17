import { UiCardModule } from './ui-card.module';

describe('UiCardModule', () => {
  let uiCardModule: UiCardModule;

  beforeEach(() => {
    uiCardModule = new UiCardModule();
  });

  it('should create an instance', () => {
    expect(uiCardModule).toBeTruthy();
  });
});
