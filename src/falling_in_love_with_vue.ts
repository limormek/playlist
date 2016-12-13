class CantHelpFallingInLove {
  public artist: string = "Elvis Presley";
  public link  : string = "https://www.youtube.com/watch?v=vGJTaP6anOU";
}

class FallingInLove extends CantHelpFallingInLove {

  public chorus: string = `
    Wise men say
    Only fools rush in
    But I can't help falling in love with you
    Shall I stay?
    Would it be a sin
    If I can't help falling in love with vue?
  `;

  public partB: string = `
    Like a river flows
    Surely to the sea
    Darling, so it goes
    Some things are meant to be
    Take my app,
    Take my whole life, too
    For I can't help falling in love with vue
    `;

}

new FallingInLove();

