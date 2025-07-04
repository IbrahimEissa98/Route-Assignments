// Array of quotes
var quotes = [
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
  },
  {
    quote:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides",
  },
  {
    quote: "Start where you are. Use what you have.  Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote:
      "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
  },
  {
    quote: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: " Albert Einstein",
  },
  {
    quote:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb",
  },
  {
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "You become what you believe.",
    author: "Oprah Winfrey",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers",
  },
  {
    quote:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    quote:
      "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    quote: "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    quote:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
  },
  {
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills",
  },
  {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    quote:
      "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "We can’t help everyone, but everyone can help someone.",
    author: "Ronald Reagan",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The greatest pleasure in life is doing what people say you cannot do.",
    author: "Walter Bagehot",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "A dropout will beat a genius through hard work.",
    author: "Rock Lee",
  },
  {
    quote: "Reject common sense to make the impossible possible.",
    author: "Simon",
  },
  {
    quote: "It is at the moment of death that humanity has value.",
    author: "Archer",
  },
  {
    quote:
      "Whatever you do, enjoy it to the fullest. That is the secret of life.",
    author: "Rider",
  },
  {
    quote:
      "There are no regrets. If one can be proud of one’s life, one should not wish for another chance.",
    author: "Saber",
  },
  {
    quote:
      "You should never give up on life, no matter how you feel. No matter how badly you want to give up.",
    author: "Canaan",
  },
  {
    quote:
      "When you lose sight of your path, listen for the destination in your heart.",
    author: "Allen Walker",
  },
  {
    quote: "Life is not a game of luck. If you wanna win, work hard.",
    author: "Sora",
  },
  {
    quote:
      "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",
    author: "Roy Mustang",
  },
  {
    quote:
      "Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
    author: "Clare",
  },
  {
    quote:
      "The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful.",
    author: "Roy Mustang",
  },
  {
    quote:
      "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",
    author: "Might Guy",
  },
  {
    quote:
      "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start a war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",
    author: "Paine",
  },
  {
    quote:
      "If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",
    author: "Erwin Smith",
  },
  {
    quote:
      "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about.",
    author: "Jet Black",
  },
  {
    quote:
      "Do not think about other things, there is only one thing you can do. So master that one thing. Do not forget. What you must imagine is always that you, yourself, are the strongest. You do not need outside enemies. For you, the one you have to fight is none other than your own image.",
    author: "Archer",
  },
  {
    quote:
      "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness.",
    author: "Gilgamesh",
  },
  {
    quote:
      "You re Gonna Care What Other People Think And Be Someone You re Not Your Whole Life You re Fine As You Are So Talk In Your Own Words",
    author: "Ymir",
  },
];

var quoteContainer = document.getElementById("quote-text");

function quoteContent(index) {
  quoteContainer.innerHTML = `<p class="quote-num text-uppercase fw-bolder">Advice # ${
    index + 1
  }</p>
              <h2 class="quote-content">
                ${quotes[index].quote}
              </h2>
              <h4 class="quote-author py-4">${quotes[index].author}</h4>`;
}

function checkLocalStorage() {
  if (localStorage.getItem("quoteIndex") !== null)
    return +localStorage.getItem("quoteIndex");
  else return 0;
}

quoteContent(checkLocalStorage());

// Function to generate a random quote
function generateQuote() {
  var randomQuote;
  do {
    randomQuote = Math.floor(Math.random() * quotes.length);
  } while (checkCurrentQuote(randomQuote));

  localStorage.setItem("quoteIndex", randomQuote);

  quoteContent(checkLocalStorage());
}

// Function to check if the current quote is the same as the previous one
function checkCurrentQuote(randomNum) {
  if (randomNum == checkLocalStorage()) return true;
}
