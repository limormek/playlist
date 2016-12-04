class ManInTheMirror {
  
  public artist: string;
  public link  : string;

  constructor() {
    this.artist = "Michael Jackson";
    this.link   = "https://www.youtube.com/watch?v=PivWY9wn5ps";
  }
}

class ChangeDetector extends ManInTheMirror {

  public partA: string = `
    I'm Gonna Make A Change,
    To One Of My Vars
    It's Gonna Feel Real Good,
    Gonna Make A Difference
    Gonna Make It Right...
    
    As I, Bootstrap My Module On
    My favorite platform
    Something Is Blowin' My Mind.
        
    I See The Kids In The Street,
    With Not Enough To Eat
    Who Am I, To Be Blind?
    Pretending Not To See
    Their Needs
    `;

  public partB: string = `
    A Timer just blows off,
    Http response,
    And Some Method Invoked
    
    They Follow Each Other to
    The Zone Ya' Know
    'Cause They Got Nowhere
    To Go
    That's Why I Want You To
    Know
    `;

  public chorus: string = `
    I'm Starting With The Change detector
    I'm Asking it to markForCheck()    
    And No Method Could Have Been Any Clearer
    If You Wanna Make Your app
    In Sync With state    
    Take A Look At Your Class, And
    Track The Change  
    (Na Na NaN, Na Na NaN, Na Na,
    Na NaN)
  `

  public partC: string = `
    I've Been A Victim Of 
    $Digest and all this stuff
    It's Time That I Realize
    
    That There Are vars With No
    watch, Not A cycle to launch
    Could It Be Really it,
    Pretending That They're Not
    Alone?
   `;
}

new ChangeDetector();
