import { Ng2ServerCommunicationPage } from './app.po';

describe('ng2-server-communication App', () => {
  let page: Ng2ServerCommunicationPage;

  beforeEach(() => {
    page = new Ng2ServerCommunicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
