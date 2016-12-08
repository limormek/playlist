abstract class WeWillRockYou {

    public artist: string;

    constructor() {
        this.artist = "Queen";
    }
}

class WeWillForkYou extends WeWillRockYou {

    public partA: string = `
        Buddy you're a boy make a big nice
        app I'm shure all world know some day
        but, there a bugs in the view
        doc is a big todo
        but don't worry we trust in you

  `;

    public chorusA: string = `
        We will we will fork you
        We will we will fork you
  `;
}

new WeWillForkYou();
