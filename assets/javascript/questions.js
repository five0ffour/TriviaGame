/* questions.js -  our game database of questions and answers*/

var questions = [

    /* History */
    {
        id: "1",
        category: "History",
        grade: "1st Grade",
        question: "The first Thanksgiving was celebrated by Native Americans and what other group of people?",
        answers: ["Pilgrims", "Mormons", "Phoenicians", "Millenials"],
        answer: 0,
        splash: "assets/images/pilgrims.png"
    },

    {
        id: "2",
        category: "History",
        grade: "1st Grade",
        question: "From which country did Mexico gain its independence in the 19th century?",
        answers: ["United States", "Aztecs", "Mayans", "Spain"],
        answer: 3,
        splash: "assets/images/mexico.jpg"
    },

    {
        id: "3",
        category: "History",
        grade: "1st Grade",
        question: "Who invented the light bulb in 1879?",
        answers: ["Nicolas Tesla",  "George Westinghouse", "Thomas Edison", "Elon Musk"],
        answer: 2,
        splash: "assets/images/edison.jpg"
    },

    {
        id: "4",
        category: "History",
        grade: "1st Grade",
        question: "Which language is the mostly widely spoken in South America?",
        answers: ["English", "Portuguese", "Spanish", "French"],
        answer: 1,
        splash: "assets/images/portuguese.jpg",
    },

    {
        id: "5",
        category: "History",
        grade: "1st Grade",
        question: "Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?",
        answers: ["Sail around the world", "Fly across the Atlantic Ocean", "Split the atom", "Walk on the moon"],
        answer: 3,
        splash: "assets/images/apollo11.jpg"
    },

    {
        id: "6",
        category: "History",
        grade: "2nd Grade",
        question: "What are the three branches of the United States government?",
        answers: ["Primary, Secondardy and Alternate", "Legal, Management, and Judiciary",  "Legislative, Judicial, and Executive", "Dumb, Dumber and Dumbest"],
        answer: 2,
        splash: "assets/images/usagov.png"
    },

    {
        id: "7",
        category: "History",
        grade: "2nd Grade",
        question: "Which war was fought between the north and south regions in the United States?",
        answers: ["The US Civil War", "The Revolutionary War",  "The War of 1812", "The French & Indian War"],
        answer: 0,
        splash: "assets/images/uscivilwar.png"
    },

    {
        id: "8",
        category: "History",
        grade: "2nd Grade",
        question: "Italy, Japan, and Germany’s alliance was called what during WWII?",
        answers: ["The Dark Ages", "The Axis Powers",  "The Reign of Terror", "The Red Scare"],
        answer: 1,
        splash: "assets/images/axis.jpg"
    },

    {
        id: "9",
        category: "History",
        grade: "2nd Grade",
        question: "What city was the first to be attacked by an atomic bomb?",
        answers: ["Berlin", "Tokyo",  "Beijing", "Hiroshima"],
        answer: 3,
        splash: "assets/images/abomb.jpg"
    },

    {
        id: "10",
        category: "History",
        grade: "2nd Grade",
        question: "What are the first ten amendments to the United States Constitution called?",
        answers: ["The Bill of Rights", "The Ten Commandments",  "The Articles of Confederacy", "The Declaration of Independence"],
        answer: 0,
        splash : "assets/images/constitution.jpg"
    },

    {
        id: "11",
        category: "History",
        grade: "3rd Grade",
        question: "What type of feather, beginning with letter Q, did people write with during the Middle Ages?",
        answers: ["Quiver", "Quill",  "Quarrel", "Quinine"],
        answer: 1,
        splash: "assets/images/quill.jpg"
    },

    {
        id: "12",
        category: "History",
        grade: "3rd Grade",
        question: "Julius Caesar was the emperor of what empire?",
        answers: ["British", "Ottoman",  "Roman", "Persian"],
        answer: 2,
        splash: "assets/images/roman.jpg"
    },

    {
        id: "13",
        category: "History",
        grade: "3rd Grade",
        question: "What is Rosa Parks most famous for?",
        answers: ["Being the first woman to travel into space", "Winning the New York Marathon",  "Walking into a voting booth to vote", "Refusing to give her seat up in the front of the bus."],
        answer: 3,
        splash: "assets/images/rosaparks.jpg"
    },

    {
        id: "14",
        category: "History",
        grade: "3rd Grade",
        question: "The first fireworks were invented in the 7th century in what country?",
        answers: ["China", "England",  "Egypt", "India"],
        answer: 0,
        splash: "assets/images/flames.jpg"
    },

    {
        id: "15",
        category: "History",
        grade: "3rd Grade",
        question: "Name the American president on the half dollar coin who was assassinated in 1963",
        answers: ["Richard M. Nixon", "John F. Kennedy",  "Dwight D. Eisenhower", "Franklin D. Roosevelt"],
        answer: 1,
        splash: "assets/images/jfk.jpg"
    },

    {
        id: "16",
        category: "History",
        grade: "4th Grade",
        question: "What ancient civilization built the Machu Picchu complex in Peru?",
        answers: ["The Pueblo", "The Aztecs",  "The Incas", "The Mayans"],
        answer: 2,
        splash: "assets/images/machupicchu.jpg"
    },

    {
        id: "17",
        category: "History",
        grade: "4th Grade",
        question: "The ancient Egyptian writing system was called what?",
        answers: ["Calligraphy", "Cuneiform",  "Sanskrit", "Hieroglyphics"],
        answer: 3,
        splash: "assets/images/egypt.jpg"
    },

    {
        id: "18",
        category: "History",
        grade: "4th Grade",
        question: "From whom did the United State buy territory in the Louisiana Purchase?",
        answers: ["Napoleon Bonaparte of France", "Queen Isabella of Spain",  "King George III of England", "Catherine the Great of Russia"],
        answer: 0,
        splash: "assets/images/louisiana.png"
    },
    
    {
        id: "19",
        category: "History",
        grade: "4th Grade",
        question: "Who wrote the national anthem of the United States of America?",
        answers: ["Betsy Ross", "Francis Scott Key",  "George M. Cohen", "Paul McCartney"],
        answer: 1,
        splash: "assets/images/fortmchenry.jpg"
    },
    
    {
        id: "20",
        category: "History",
        grade: "4th Grade",
        question: "The Battle of Gettysburg was fought in which war?",
        answers: ["The War of 1812", "The War of the Roses",  "The US Civil War", "World War I"],
        answer: 2,
        splash: "assets/images/gettysburg.jpg"
    },
    
    {
        id: "21",
        category: "History",
        grade: "5th Grade",
        question: "The what was the name of the last Queen of France?",
        answers: ["Catherine of Aragon", "Queen Victoria",  "Queen Latifa", "Marie Antoinette"],
        answer: 3,
        splash: "assets/images/marie.jpg"
    },

    {
        id: "22",
        category: "History",
        grade: "5th Grade",
        question: "The region known as the “Fertile Crescent” is located in present day…",
        answers: ["Middle East", "Midwest United States",  "Sub-Saharan Africa", "Argentina"],
        answer: 0,
        splash: "assets/images/middleeast.jpg"
    },
     
    {
        id: "23",
        category: "History",
        grade: "5th Grade",
        question: "The modern day city of Istanbul was known by what name in the 13th century…",
        answers: ["Ephesus", "Constantinople",  "Babylon", "Alexandria"],
        answer: 1,
        splash: "assets/images/constantinople.jpg"
    },

    {
        id: "24",
        category: "History",
        grade: "5th Grade",
        question: "The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…",
        answers: ["American Revolutionary War", "English Civil War",  "The Seven Years War", "King Philip's War"],
        answer: 2,
        splash: "assets/images/sevenyearswar.jpg"
    },
    
    {
        id: "25",
        category: "History",
        grade: "5th Grade",
        question: "What year did Hong Kong revert from British rule? ",
        answers: ["1917", "1692",  "1885", "1997"],
        answer: 3,
        splash: "assets/images/hongkong.jpg"
    },

    /* English  */
    {
        id: "26",
        category: "English",
        grade: "1st Grade",
        question: "The plural of “moose” is…",
        answers: ["moose", "mooses",  "meese", "bullwinkles"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "27",
        category: "English",
        grade: "1st Grade",
        question: "How many letters are in the English alphabet?",
        answers: ["20", "26",  "28", "50"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "28",
        category: "English",
        grade: "1st Grade",
        question: "In the story about the boy who cried wolf, what is the lesson?",
        answers: ["If you see something; say something", "Don't procrastinate",  "Always tell the truth", "Kids know best"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "29",
        category: "English",
        grade: "1st Grade",
        question: "What is the term for a word that is similar in meaning to another word?",
        answers: ["Antonym", "Homonym",  "Simile", "Synonym"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "30",
        category: "English",
        grade: "1st Grade",
        question: "What type of words should be capitalized",
        answers: ["proper nouns", "verbs",  "prepositions", "objects"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "31",
        category: "English",
        grade: "2nd Grade",
        question: "What type of literature features magical creatures, such as giants, gnomes, and goblins?",
        answers: ["Biographies", "Fairy Tales",  "Non-fiction", "Fake News"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "32",
        category: "English",
        grade: "2nd Grade",
        question: "Is 'red' an adjective or a noun?",
        answers: ["adjective", "noun",  "both", "neither"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "33",
        category: "English",
        grade: "2nd Grade",
        question: "What is the term for a word that has the opposite meaning of another word?",
        answers: ["Simile", "Homonym",  "Synonym", "Antonym"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "34",
        category: "English",
        grade: "2nd Grade",
        question: "What are the five interrogative or 'question' words?",
        answers: ["Who, what, when, where, why", "left, right, up, down, center",  "north, south, east, west, home", "before, after, during, earlier, later"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "35",
        category: "English",
        grade: "2nd Grade",
        question: "What are the comparative and superlative forms of the word “big?",
        answers: ["Big and bog", "Bigger and biggest",  "Smaller and smallest", "Big and bigly"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "36",
        category: "English",
        grade: "3rd Grade",
        question: "The person in a novel who tells the story from a third-person perspective is called a what?",
        answers: ["the first person", "an author",  " a narrator", "the third person"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "37",
        category: "English",
        grade: "3rd Grade",
        question: "What is the name of the book about a friendship between a pig named Wilbur and spider named Charlotte?",
        answers: ["Little Miss Spider", "Wilbur's Pen",  "Babe", "Chartlotte's Web"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "38",
        category: "English",
        grade: "3rd Grade",
        question: "Who is the author of James and the Giant Peach?",
        answers: ["Dr. Suess", "George RR Martin",  "JK Rowling", "Roald Dahl"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "39",
        category: "English",
        grade: "3rd Grade",
        question: "Adding conjunctions such as “and” or “but” turns a simple sentence into what type of sentence?",
        answers: ["compound sentence", "Declarative statement",  "Interrogative statement", "Prepositional phrase"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "40",
        category: "English",
        grade: "3rd Grade",
        question: "The main series of events in a story is called a what?",
        answers: ["a spoiler", "a plot",  "a theme", "a meme"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "41",
        category: "English",
        grade: "4th Grade",
        question: "What is the main character in a story called?",
        answers: ["a hero", "an antagonist",  "a protagonist", "a narrator"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "42",
        category: "English",
        grade: "4th Grade",
        question: "What type of word is truthfully?",
        answers: ["a gerund", "an adjective",  "a nound", "an adverb"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "43",
        category: "English",
        grade: "4th Grade",
        question: "In the book titled 'The Lion, the Witch, and the Wardrobe', what is the last comma called?",
        answers: ["an oxford comma", "a bracketing comma",  "a gapping comma", "a joining comma"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "44",
        category: "English",
        grade: "4th Grade",
        question: "A story that uses animal characters to convey a moral lesson is called a what?",
        answers: ["an allegory", "a fable",  "a metaphor", "a parable"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "45",
        category: "English",
        grade: "4th Grade",
        question: "What do you call a group of crows?",
        answers: ["a flock", "an omen",  "a murder", "a mess"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "46",
        category: "English",
        grade: "5th Grade",
        question: "Who is the creator of the classic book characters Tom Sawyer and Huckleberry Finn?",
        answers: ["Ray Bradbury", "Edgar Allen Poe",  "Benjamin Franklin", "Mark Twain"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    {
        id: "47",
        category: "English",
        grade: "5th Grade",
        question: "The words “the,” “an,” and “a,” are known as what in English grammar?",
        answers: ["articles", "noun markers",  "prepositions", "adjetives"],
        answer: 0,
        splash: "assets/images/english.webp"
    },

    {
        id: "48",
        category: "English",
        grade: "5th Grade",
        question: "Who is the author of the 1960 novel about social and racial inequality To Kill a Mockingbird?",
        answers: ["Tom Stoppard", "Harper Lee",  "Kurt Vonnegut", "Ken Kesey"],
        answer: 1,
        splash: "assets/images/english.webp"
    },

    {
        id: "49",
        category: "English",
        grade: "5th Grade",
        question: "Often seen at the end of a sentence, the three trailing dots that indicate the omission words that are superfluous are known as…",
        answers: ["series", "conjunction",  "ellipses", "emphasis"],
        answer: 2,
        splash: "assets/images/english.webp"
    },

    {
        id: "50",
        category: "English",
        grade: "5th Grade",
        question: "What is the name of the most famous English playwright?",
        answers: ["John Lennon", "Samuel Coleridge",  "James Joyce", "William Shakespeare"],
        answer: 3,
        splash: "assets/images/english.webp"
    },

    /* Geography  */
    {
        id: "50",
        category: "Georgraphy",
        grade: "1st Grade",
        question: "How many continents are there?",
        answers: ["7", "9",  "11", "5"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "51",
        category: "Georgraphy",
        grade: "1st Grade",
        question: "What country is Paris the capital of?",
        answers: ["Italy", "France",  "Spain", "England"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "52",
        category: "Georgraphy",
        grade: "1st Grade",
        question: "In which country are the famous Pyramids of Giza? ",
        answers: ["Morocco", "Lebanon",  "Egypt", "Iraq"],
        answer: 2,
        splash: "assets/images/geography.webp"
    },

    {
        id: "53",
        category: "Georgraphy",
        grade: "1st Grade",
        question: "In what city is the White House located? ",
        answers: ["New York City", "Mordor",  "Athens", "Washington, D.C."],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "54",
        category: "Georgraphy",
        grade: "1st Grade",
        question: "How many states are in the United States of America?",
        answers: ["50", "48",  "58", "13"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "55",
        category: "Georgraphy",
        grade: "2nd Grade",
        question: "Which state is called the Lone Star state?",
        answers: ["New York", "Texas",  "Alaska", "California"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "56",
        category: "Georgraphy",
        grade: "2nd Grade",
        question: "In what state is the Grand Canyon located?",
        answers: ["Idaho", "Montana",  "Nevada", "Florida"],
        answer: 2,
        splash: "assets/images/geography.webp"
    },

    {
        id: "57",
        category: "Georgraphy",
        grade: "2nd Grade",
        question: "What three countries are located in North America?",
        answers: ["Russia, China and Mongolia", "Honduras, Panama and Venezuala",  "Brazil, Columbia and Peru", "Canada, the United States, and Mexico"],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "58",
        category: "Georgraphy",
        grade: "2nd Grade",
        question: "To travel from New York to London, one must fly over what ocean?",
        answers: ["The Atlantic", "The Pacific",  "The Indian", "The Arctic"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "59",
        category: "Georgraphy",
        grade: "2nd Grade",
        question: "In what country is the famous Taj Mahal located?",
        answers: ["Iran", "India",  "Cambodia", "China"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "60",
        category: "Georgraphy",
        grade: "3rd Grade",
        question: "What is the longest river in the world?",
        answers: ["The Yangtze", "The Mississippi",  "The Nile", "The Amazon"],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "61",
        category: "Georgraphy",
        grade: "3rd Grade",
        question: "On what continent is the country of Greece located?",
        answers: ["Europe", "Asia",  "Africa", "The Balkans"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "62",
        category: "Georgraphy",
        grade: "3rd Grade",
        question: "What is the name for a body of land that is completely surrounded by water?",
        answers: ["a peninsula", "an island",  "an archipeligo", "a continent"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "63",
        category: "Georgraphy",
        grade: "3rd Grade",
        question: "What is the capital of New York?",
        answers: ["Buffalo", "Saratoga",  "Albany", "New York City"],
        answer: 2,
        splash: "assets/images/geography.webp"
    },

    {
        id: "64",
        category: "Georgraphy",
        grade: "3rd Grade",
        question: "How many Great Lakes are there in the United States?",
        answers: ["1", "3",  "5", "4"],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "65",
        category: "Georgraphy",
        grade: "4th Grade",
        question: "How many kingdoms are part of the United Kingdom?",
        answers: ["4", "3",  "5", "1"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "66",
        category: "Georgraphy",
        grade: "4th Grade",
        question: "Which country is the largest in size?",
        answers: ["Australia", "Russia",  "China", "United States"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "67",
        category: "Georgraphy",
        grade: "4th Grade",
        question: "The United States and Mexico are separated by which river?",
        answers: ["The Snake River", "Mississippi River",  "The Rio Grande", "The Missouri River"],
        answer: 2,
        splash: "assets/images/geography.webp"
    },

    {
        id: "68",
        category: "Georgraphy",
        grade: "4th Grade",
        question: "What is the southernmost continent called? ",
        answers: ["Africa", "Australia",  "South America", "Antarctica"],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "69",
        category: "Georgraphy",
        grade: "4th Grade",
        question: "Where is the largest desert in the world located?",
        answers: ["Central Asia", "North Africa",  "South America", "Austrialia"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "70",
        category: "Georgraphy",
        grade: "5th Grade",
        question: "What is the main language spoken in the Canadian province of Quebec?",
        answers: ["French", "Canuk",  "English", "Kodiak"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    {
        id: "71",
        category: "Georgraphy",
        grade: "5th Grade",
        question: "Which country is both an island and a continent?",
        answers: ["Greenland", "Australia",  "Iceland", "Madagascar"],
        answer: 1,
        splash: "assets/images/geography.webp"
    },

    {
        id: "72",
        category: "Georgraphy",
        grade: "5th Grade",
        question: "What is the name of the sea bordered by Europe to the north and North Africa to the south?",
        answers: ["The Red Sea", "The Caspian Sea",  "The Mediterranean Sea", "The North Sea"],
        answer: 2,
        splash: "assets/images/geography.webp"
    },

    {
        id: "73",
        category: "Georgraphy",
        grade: "5th Grade",
        question: "The mountain range that includes Mount Everest is called...",
        answers: ["The Alps", "The Tetons",  "The Urals", "The Himalayas"],
        answer: 3,
        splash: "assets/images/geography.webp"
    },

    {
        id: "74",
        category: "Georgraphy",
        grade: "5th Grade",
        question: "Imaginary lines traversing the globe from pole to pole are called…",
        answers: ["Meridians", "Latitudes",  "Tropics", "Vectors"],
        answer: 0,
        splash: "assets/images/geography.webp"
    },

    /* Science */
    {
        id: "75",
        category: "Science",
        grade: "1st Grade",
        question: "What causes tides?",
        answers: ["the sun", "the moon",  "the weather", "the wind"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "76",
        category: "Science",
        grade: "1st Grade",
        question: "The south pole of the magnet and the north pole of another magnet will do what?",
        answers: ["do nothing", "push apart",  "stick together", "snapchat"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "77",
        category: "Science",
        grade: "1st Grade",
        question: "What is the force that causes objects to fall to the ground?",
        answers: ["Chemistry", "Magnetism",  "Slapstick Comedy", "Gravity"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "78",
        category: "Science",
        grade: "1st Grade",
        question: "A caterpillar changes and grows into a what?",
        answers: ["Butterfly", "Earthworm",  "Spider", "Grasshopper"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "79",
        category: "Science",
        grade: "1st Grade",
        question: "What is the biggest organ in the human body?",
        answers: ["Heart", "Liver",  "Lung", "Kidney"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "80",
        category: "Science",
        grade: "2nd Grade",
        question: "What is H2O also known as?",
        answers: ["oxygen", "sugar",  "water", "soda"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "81",
        category: "Science",
        grade: "2nd Grade",
        question: "What gas is in the air we breathe?",
        answers: ["helium", "chlorine",  "passed", "oxygen"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "82",
        category: "Science",
        grade: "2nd Grade",
        question: "What gas do plants breathe in that humans and animals breathe out?",
        answers: ["carbon dioxide", "chlorophyl",  "oxygen", "sunshine"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "83",
        category: "Science",
        grade: "2nd Grade",
        question: "Earth is located in what galaxy?",
        answers: ["Andromeda", "Milky Way",  "Pinwheel", "far far away"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "84",
        category: "Science",
        grade: "2nd Grade",
        question: "Bats are mammals.",
        answers: ["only at night", "false",  "true", "only in human form"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "85",
        category: "Science",
        grade: "3rd Grade",
        question: "What phenomenon might be felt on the surface when two tectonic plates rub against each other?",
        answers: ["Hammer time", "Hurricane",  "Tornado", "Earthquake"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "86",
        category: "Science",
        grade: "3rd Grade",
        question: "The hardest naturally occurring mineral is… ",
        answers: ["Diamond", "Quartz",  "Granite", "Final Exams"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "87",
        category: "Science",
        grade: "3rd Grade",
        question: "What is the closest planet to the sun?",
        answers: ["Venus", "Mercury",  "Mars", "Earth"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "88",
        category: "Science",
        grade: "3rd Grade",
        question: "The process by which plants eat and make energy is called…",
        answers: ["Mitosis", "Osmosis",  "Photosyntheis", "Fusion"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "89",
        category: "Science",
        grade: "3rd Grade",
        question: "Does the sun orbit the Earth?",
        answers: ["it orbits the moon", "it orbits Hollywood actors",  "yes", "no"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "90",
        category: "Science",
        grade: "4th Grade",
        question: "What is the part of the eye that controls how much light enters?",
        answers: ["pupil", "retina",  "cornea", "eyewall"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "91",
        category: "Science",
        grade: "4th Grade",
        question: 'What planet is nicknamed the “Red Planet?”',
        answers: ["Jupiter", "Mars",  "Mercury", "Republica"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "92",
        category: "Science",
        grade: "4th Grade",
        question: "Animals that eat only meat are known as…",
        answers: ["omnivores", "herbivores",  "carnivores", "Ron Swanson"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "93",
        category: "Science",
        grade: "4th Grade",
        question: "How long does Earth take to revolve once around the sun?",
        answers: ["4 years", "one month",  "24 hours", "365 days"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "94",
        category: "Science",
        grade: "4th Grade",
        question: "What is the freezing point of water?",
        answers: ["32°F or 0°C", "212°F or 100°C",  "0° Kelvin", "there is no freezing point"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "96",
        category: "Science",
        grade: "5th Grade",
        question: "The Earth is at least how many billion years old?",
        answers: ["14 billion", "4 billion",  "1 billion", "100 billion"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    {
        id: "97",
        category: "Science",
        grade: "5th Grade",
        question: "What are the three states of matter?",
        answers: ["reading, writing, arithmetic", "fusion, fission, plasma",  "solid, liquid, gas", "proton, neutron, electron"],
        answer: 2,
        splash: "assets/images/science.webp"
    },

    {
        id: "98",
        category: "Science",
        grade: "5th Grade",
        question: "The Earth has 4 layers, the thickest of which is the mantle. What is the thinnest layer called?",
        answers: ["the GUI", "the Inner Core ",  "the Outer Core", "the Crust"],
        answer: 3,
        splash: "assets/images/science.webp"
    },

    {
        id: "99",
        category: "Science",
        grade: "5th Grade",
        question: "Animals without backbones are known as...",
        answers: ["invertebrates", "crustaceans",  "vertebrates", "politicians"],
        answer: 0,
        splash: "assets/images/science.webp"
    },

    {
        id: "100",
        category: "Science",
        grade: "5th Grade",
        question: "What species can live on both water and land?",
        answers: ["Arachnids", "Amphibians",  "Crustaceans", "Mammels"],
        answer: 1,
        splash: "assets/images/science.webp"
    },

    /* Mathematics */
    {
        id: "101",
        category: "Mathematics",
        grade: "1st Grade",
        question: "How many face cards are in a regular deck of playing cards?",
        answers: ["3", "40",  "12", "10"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "102",
        category: "Mathematics",
        grade: "1st Grade",
        question: "The first day of the 20th century was…",
        answers: ["January 1, 1900", "January 1,2000",  "January 1, 2001", "January 1, 1901"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "103",
        category: "Mathematics",
        grade: "1st Grade",
        question: "How many states made up the United States before Alaska and Hawaii joined?",
        answers: ["48", "13",  "50", "45"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "104",
        category: "Mathematics",
        grade: "1st Grade",
        question: "The largest number that can be pronounced with a single syllable is… ",
        answers: ["twenty", "twelve",  "million", "googol"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "105",
        category: "Mathematics",
        grade: "1st Grade",
        question: "You peer through a window into a classroom and count 20 eyes. If each person has a normal number of eyes, how many people are in the room?",
        answers: ["20", "5",  "10", "40"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "106",
        category: "Mathematics",
        grade: "2nd Grade",
        question: "What is the area of a triangle with a height of 4 and a width of 4?",
        answers: ["4", "12",  "16", "8"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "107",
        category: "Mathematics",
        grade: "2nd Grade",
        question: "Solve the following equation: 3 + 2 / 1 = …",
        answers: ["5", "2.5",  "4", "6"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "108",
        category: "Mathematics",
        grade: "2nd Grade",
        question: "On a class field trip, there are 4 buses taking a total of 36 students to the zoo. Each bus has the same number of student. How many students are on each bus?",
        answers: ["36", "9",  "12", "6"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "109",
        category: "Mathematics",
        grade: "2nd Grade",
        question: "2 dozen kittens and 3 dozen puppies get adopted from the shelter. How many animals were adopted?",
        answers: ["12", "50",  "60", "It doesn't matter, that's a great day!"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "110",
        category: "Mathematics",
        grade: "2nd Grade",
        question: "What number is the Roman numeral XVI?",
        answers: ["21", "14",  "8", "16"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "111",
        category: "Mathematics",
        grade: "3rd Grade",
        question: "When writing out a fraction, the numbers above and below the vinculum are called the…",
        answers: ["numerator and denominator", "dominant and subordinate",  "alpha and omega", "upper and lower"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "112",
        category: "Mathematics",
        grade: "3rd Grade",
        question: "To the nearest multiple of 10, how many kilograms of cheese are in 110 pounds of cheese… ",
        answers: ["2", "50",  "20", "100"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "113",
        category: "Mathematics",
        grade: "3rd Grade",
        question: "If a shopping cart contains 1 apple, 2 bananas, 3 oranges, 4 hot dogs, what percent of the cart’s total contents is fruit?",
        answers: ["100%",  "40%", "60%", "50%"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "114",
        category: "Mathematics",
        grade: "3rd Grade",
        question: "If the first person takes 25% of the cake and the second person takes 20% of the remainder, how much of the original cake remains?",
        answers: ["55%", "15%",  "75%", "60%"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "115",
        category: "Mathematics",
        grade: "3rd Grade",
        question: "How many grams are in a thousand kilograms? ",
        answers: ["one million", "one thousand",  "one hundred", "one gigabyte"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "116",
        category: "Mathematics",
        grade: "4th Grade",
        question: "The interior angles of a triangle always sum to… ",
        answers: ["90 degrees", "180 degrees",  "360 degrees", "the sum of its sides"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "117",
        category: "Mathematics",
        grade: "4th Grade",
        question: "A farmer notices that every day for the past 10 days, the number of pigeons in his field has doubled. There are 1024 pigeons in the field today, and there were 2 pigeons there the first day. How many pigeons were there yesterday? ",
        answers: ["128", "2048",  "512", "64"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "118",
        category: "Mathematics",
        grade: "4th Grade",
        question: "You have 20 pairs of shoes, but there is only room in your closet for 8 shoes. How many *shoes* do you have to get rid of? ",
        answers: ["16", "24",  "12", "32"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "119",
        category: "Mathematics",
        grade: "4th Grade",
        question: "Solve the following equation: 5 + 3 * 4 / 2 - 1 = …",
        answers: ["10", "17",  "16", "15"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "120",
        category: "Mathematics",
        grade: "4th Grade",
        question: "If a train leaves the station and travels at 60 miles per hour, how much time will have passed when it arrives at a station 300 miles away? ",
        answers: ["4 hours",  "5 hours",  "6 hours", "10 hours"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "121",
        category: "Mathematics",
        grade: "5th Grade",
        question: "A hexagon has how many sides? ",
        answers: ["8", "10", "6",  "5"],
        answer: 2,
        splash: "assets/images/math.webp"
    },

    {
        id: "122",
        category: "Mathematics",
        grade: "5th Grade",
        question: "A father has 7 daughters and 100 dollars. If he wants to give each daughter an equal amount of money, rounding to the nearest dollar, how much much does each daughter get? ",
        answers: ["15 dollars", "10 dollars", "100 dollars",  "14 dollars"],
        answer: 3,
        splash: "assets/images/math.webp"
    },

    {
        id: "123",
        category: "Mathematics",
        grade: "5th Grade",
        question: "If a football field is 100 yards long, how many feet long is the football field?",
        answers: ["300 feet", "200 feet", "50 feet",  "never too long! Go Pats!"],
        answer: 0,
        splash: "assets/images/math.webp"
    },

    {
        id: "124",
        category: "Mathematics",
        grade: "5th Grade",
        question: "You collect 48 pieces of Halloween candy. Your parents say you can eat 2 pieces per day, plus an extra piece on Saturdays and Sundays. How many weeks will it take to finish all of your candy? ",
        answers: ["12 weeks", "3 weeks", "6 weeks",  "1 day, sneaky Pete!"],
        answer: 1,
        splash: "assets/images/math.webp"
    },

    {
        id: "125",
        category: "Mathematics",
        grade: "5th Grade",
        question: "Solve the following equation: (2 * 4)/(5 + 3 - 1)^0… ",
        answers: ["1 1/7th", "0", "8",  "16"],
        answer: 2,
        splash: "assets/images/math.webp"
    }
];

/*

Potpourri
An insect has 6 legs. How many legs does a spider have? 8

The red-shelled insect often known as a “ladybug” or “ladybird” is in fact a type of… Beetle

Other than water, the most consumed beverage in the world is… Tea

Although it is acceptable to refer to a peanut as a nut, it is more accurately described as a… Legume

What is the primary difference between ocean water and tap water? Salt

Which of the Earth’s 4 layers is liquid… The outer core

The most famous fault in California is the… San Andreas

A pound cake traditionally contains a pound of which 4 ingredients? Flour, butter, eggs, and sugar

The most important article in a newspaper is usually found above the… Fold

How many months in the calendar year have exactly 30 days? 4

Opposite angles in a parallelogram are called… Complementary

When an item’s copyright expires, the right to reproduce it passes into the… Public Domain

The deepest part of the world’s oceans are found in… The Mariana Trench

A2 + B2 = C2 is known as the… Pythagorean Theorem

What is the minimum age for a U.S. President? 35

Mary has to walk 1 mile north to school and 1 mile south back from school. One day, instead of walking home after school, Mary walks 2 miles east and 1 mile south to the store. In which direction does Mary have to walk to get home from the store? West

How do you abbreviate pound and pounds? lb. and lbs.

What sorts of measurements can be found on a standard American ruler? Feet, inches, centimeters, and millimeters.

Bricks used as building materials are traditionally made of… Clay

The energy of a moving object is also called… Kinetic energy

A gallon of water weighs how many pounds? 8 pounds

A machine that could work indefinitely without an energy source would also be known as a… Perpetual Motion Machine

Bronze is formed by combining two other metals, copper, and tin. Another word for a compound like bronze is… Alloy

This positively charged subatomic particle appears in the nucleus of all atoms… Proton

In Einstein’s famous E = MC2, what do any of the letters stand for? E: Energy; M: Mass; C: Speed of Light

*/