function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }

export const servicessection = [
    {
        id:generateRandomId(),
        img:'https://kuyou.id/content/images/ctc_2020021605150668915.jpg',
        category:'SUBTITLE',
        title:"Chichen Itza",
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
    {
        id:generateRandomId(),
        img:'https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg',
        category:'SUBTITLE',
        title:"Chichen Itza",
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
    {
        id:generateRandomId(),
        img:'https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574',
        category:'SUBTITLE',
        title:"Chichen Itza",
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
]