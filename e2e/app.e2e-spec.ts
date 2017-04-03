import { BpmAngularPage } from './app.po';

describe('bpm-angular App', () => {
  let page: BpmAngularPage;

  beforeEach(() => {
    page = new BpmAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
