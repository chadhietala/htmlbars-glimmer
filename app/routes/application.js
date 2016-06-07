import Ember from 'ember';

let A1 = new Array(1);


for (let i = 0; i < 1; i++) {
  let A2 = new Array(20);
  for (let j = 0; j < 20; j++) {
    A2[j] = { id: j + i, isEven: !!(j % 2), isVideo: false, isArticle: true, isShare: false, bloop: [] };

    if (j % 3) {
      A2[j].isVideo = true;
      A2[j].isArticle = false;
    } else if (j % 5) {
      A2[j].isShare = true;
      A2[j].isArticle = false;
    } else {
      A2[j].bloop = [1,2,3,4];
    }
  }


  A1[i] = A2;
}

export default Ember.Route.extend({
  model() {
    return A1;
  }
});
