import { DatafilterPage } from './app.po';

describe('datafilter App', function() {
  let page: DatafilterPage;

  beforeEach(() => {
    page = new DatafilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
