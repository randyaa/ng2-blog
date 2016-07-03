import { Ng2Blog2Page } from './app.po';

describe('ng2-blog-2 App', function() {
  let page: Ng2Blog2Page;

  beforeEach(() => {
    page = new Ng2Blog2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
