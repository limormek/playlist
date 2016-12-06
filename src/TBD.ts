abstract class LetItBe {

  public artist: string;
  public link: string;

  constructor() {
    this.artist = "The Beatles";
    this.link   = "https://www.youtube.com/watch?v=rfX0q1aNCos";
  }
}

class TBD extends LetItBe {

  public partA: string = `
    When I find myself in times of trouble,
    No time for refactoring,
    I use the words of wisdom - TBD.

    And in my hour of darkness
    When the codebase looks like spaghetti,
    Write these words of wisdom - TBD.
  `;

  public chorusA: string = `
    TBD, TBD, TBD, yeah TBD.
    I will fix it later, TBD.
  `;

  public partB: string = `
    And when the broken-syntax methods
    Living in my code agree
    There must be a stop to - TBD
    
    morning at the daily stand-up
    everyone is stare at me
    but all i got to say is: TBD     
  `;

  public partC: string = `
   my calender is filled with meetings
   all of them including me
   I look at the description: TBD   
  `

  public chorusB: string = `
    TBD, TBD, TBD, yeah TBD.
    I will fix it later, TBD.

    TBD, TBD, TBD, yeah TBD.
    No one will remember, TBD.
  `;
}

new TBD();
