import { ProjectAlfaPage } from './app.po';

describe('project-alfa App', function() {
  let page: ProjectAlfaPage;

  beforeEach(() => {
    page = new ProjectAlfaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
