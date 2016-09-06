import { DemoDirectoryPage } from './app.po';

describe('demo-directory App', function() {
  let page: DemoDirectoryPage;

  beforeEach(() => {
    page = new DemoDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
