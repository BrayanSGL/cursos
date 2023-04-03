function videoPlay(id){
    const url = `https://platzi.com/clases/${id}`;
    console.log(`Reproduciendo video: ${url}`);
}

function videoStop(id){
    const url = `https://platzi.com/clases/${id}`;
    console.log(`Video detenido: ${url}`);
}

export class PlatziClass {
  constructor({
    name,
    videoID
  }) {
    this.name = name;
    this.videoID = videoID;
  }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

