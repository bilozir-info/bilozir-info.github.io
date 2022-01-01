class InstagramParser {
  constructor() {
    // this.fatherBlock = fatherBlock;
    // this.arrayAccount = arrayAccount;

    this.log();
  }

  log() {
    // this.arrayAccount.forEach(elem => {
      fetch(`https://www.instagram.com/_man.ko_/?__a=1`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
            console.log(data);
          })
    }
    // })
  }


new InstagramParser();