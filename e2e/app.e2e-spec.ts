import { NEOWikiPage } from './app.po';

describe('neowiki App', () => {
  let page: NEOWikiPage;

  beforeEach(() => {
    page = new NEOWikiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
