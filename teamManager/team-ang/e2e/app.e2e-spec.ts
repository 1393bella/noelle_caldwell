import { TeamAngPage } from './app.po';

describe('team-ang App', () => {
  let page: TeamAngPage;

  beforeEach(() => {
    page = new TeamAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
