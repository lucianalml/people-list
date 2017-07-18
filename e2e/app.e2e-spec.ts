import { PeopleListPage } from './app.po';

describe('people-list App', () => {
  let page: PeopleListPage;

  beforeEach(() => {
    page = new PeopleListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
