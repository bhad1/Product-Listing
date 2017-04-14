import { ProductListingPage } from './app.po';

describe('product-listing App', () => {
  let page: ProductListingPage;

  beforeEach(() => {
    page = new ProductListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
