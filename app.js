const pronoun = ["the", "our", "big"];
const adj = ["great", "middle", "dog"];
const noun = ["jogger", "racoon", "tenis"];
let com = [".com", ".co", ".us"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let x = 0; x < noun.length; x++) {
      for (let z = 0; z < com.length; z++) {
        console.log(pronoun[i]+adj[j]+noun[x]+com[z]);
      }
    }
  }
}