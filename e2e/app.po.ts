export class Ng2BlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-blog-app p')).getText();
  }
}
