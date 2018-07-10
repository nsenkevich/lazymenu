import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have menu', () => {
    page.navigateTo();
    expect(page.getMenu()).toEqual('This Week Menu');
  });
});
