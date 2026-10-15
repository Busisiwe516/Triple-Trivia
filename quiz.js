// OOP
class Question {
  constructor(text, options, correctIndex) {
    this.text = text;
    this.options = options;
    this.correct = correctIndex; // 0 = first answer, 1 = second, 2 = third
  }
}
// Questions are now put in categories
const quizData = {
  music: [
    new Question(
      "Which music group was Beyonce in?",
      ["Destiny's Child", "The Pussycat Dolls", "TLC"],
      0, // Destiny's Child is correct
    ),
    new Question(
      "How many Grammy awards has Adele won?",
      ["13", "16", "17"],
      1, // 16 is correct
    ),
    new Question(
      "Whats the most popular music genre in South Africa?",
      ["Gqom", "Hip-Hop", "Amampiano"],
      2, // Amampiano is correct
    ),
    new Question(
      "Which band released the song 'Hey Jude'?",
      ["The Beatles", "The Black Eyed Peas", "Queen"],
      0, // The Beatles
    ),
  ],
  movies: [
    new Question(
      "How many movies does Harry Potter have?",
      ["7", "8", "9"],
      0, // 7 is correct
    ),
    new Question(
      "In the Lion King, what is the name of Simba's father?",
      ["Scar", "Mufasa", "Timon"],
      1, // Mufasa is correct
    ),
    new Question(
      "In finding Nemo, what kind of fish is Nemo?",
      ["Tuna", "Shark", "Clownfish"],
      2, // Clownfish is correct
    ),
    new Question(
      "Which actor played Wolverine in the X-Men movies?",
      ["Chris Evans", "Hugh Jackman", "Robert Downey Jr."],
      1, // Hugh Jackman is correct
    ),
    new Question(
      "What is the best-selling movie of all time?",
      ["Avatar", "Titanic", "Star Wars"],
      0, // Avatar is correct
    ),
  ],
  sports: [
    new Question(
      "Which country hosted the 2010 FIFA World Cup?",
      ["Germany", "Brazil", "South Africa"],
      2, // South Africa is correct
    ),
    new Question(
      "Which footballer is famously known as CR7?",
      ["Neymar", "Lionel Messi", "Cristiano Ronaldo"],
      2, // Cristiano Ronaldo is correct
    ),
    new Question(
      "Which basketball player is nicknamed “King James”?",
      ["LeBron James", "Kobe Bryant", "Michael Jordan"],
      0, // Lebron James is correct
    ),
    new Question(
      "Which Jamaican sprinter is famous for world records in the 100 metres and 200 metres?",
      ["Yohan Blake", "Usain Bolt", "Asafa Powell"],
      1, // Usain Bolt is correct
    ),
    new Question(
      "In golf, what does a “hole-in-one” mean?",
      [
        "Getting the ball in the hole with one stroke",
        "Hitting the ball out of bounds",
        "Missing the hole completely",
      ],
      0, // Getting the ball in the hole with one stroke is correct
    ),
  ],
};
