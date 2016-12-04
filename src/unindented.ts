abstract class Unintended {

  public artist: string;
  public link  : string;

  constructor() {
    this.artist = "Muse";
    this.link   = "https://www.youtube.com/watch?v=i9LOFXwPwC4";
  }
}

class Unindented extends Unintended {

  public partA: string = `
    You could be my unindented
    choice to use no tabs or spaces
    you could be the file I'll always love

    True you can't distinguish when a
    for begins and when it ends but
    I'm in love with this unnested code
  `;

  public chorus:string = `
    I'll indent as soon as I can
    but I'm busy staring at these
    lines that leave no blank space in my heart
  `;

}

new Unindented();
