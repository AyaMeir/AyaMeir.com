import { Ayameir.ComPage } from './app.po';

describe('ayameir.com App', () => {
  let page: Ayameir.ComPage;

  beforeEach(() => {
    page = new Ayameir.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
