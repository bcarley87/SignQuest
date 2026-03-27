const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
  id: `alpha-${letter}`,
  word: letter,
  hint: `Letter ${letter}`,
  category: 'alphabet',
  imageUrl: `https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/${letter.toLowerCase()}.gif`,
}));

const LP  = 'https://www.lifeprint.com/asl101';
const V   = (f) => `${LP}/videos/${f}.mp4`;
const GA  = (f) => `${LP}/gifs-animated/${f}.gif`;

const COMMON_WORDS = [
  // --- greetings & basics ---
  { word: 'Hello',      hint: 'A greeting',                mediaUrl: V('hello') },
  { word: 'Thank You',  hint: 'Express gratitude',         mediaUrl: V('thankyou') },
  { word: 'Please',     hint: 'Polite request',            mediaUrl: V('please') },
  { word: 'Sorry',      hint: 'Apologize',                 mediaUrl: GA('sorry') },
  { word: 'Yes',        hint: 'Affirmative',               mediaUrl: V('yes') },
  { word: 'No',         hint: 'Negative',                  mediaUrl: V('no') },
  { word: 'Help',       hint: 'Ask for assistance',        mediaUrl: `${LP}/gifs/h/help.gif` },
  { word: 'Now',        hint: 'At this moment',            mediaUrl: V('now') },
  { word: 'Stop',       hint: 'Cease an action',           mediaUrl: V('stop') },
  { word: 'More',       hint: 'Additional amount',         mediaUrl: V('more') },
  // --- people & family ---
  { word: 'Family',     hint: 'Related people',            mediaUrl: `${LP}/gifs/f/family.gif` },
  { word: 'Brother',    hint: 'Male sibling',              mediaUrl: V('brother') },
  { word: 'Sister',     hint: 'Female sibling',            mediaUrl: V('sister') },
  { word: 'Baby',       hint: 'Infant',                    mediaUrl: V('baby') },
  { word: 'Boy',        hint: 'Young male',                mediaUrl: V('boy') },
  { word: 'Girl',       hint: 'Young female',              mediaUrl: V('girl') },
  { word: 'Woman',      hint: 'Adult female',              mediaUrl: GA('woman') },
  { word: 'Friend',     hint: 'A companion',               mediaUrl: V('friend') },
  { word: 'Doctor',     hint: 'Medical professional',      mediaUrl: V('doctor') },
  // --- places ---
  { word: 'Home',       hint: 'Where you live',            mediaUrl: V('home') },
  { word: 'School',     hint: 'Place of learning',         mediaUrl: V('school') },
  { word: 'Work',       hint: 'Employment or effort',      mediaUrl: V('work') },
  { word: 'Hospital',   hint: 'Place for medical care',    mediaUrl: V('hospital') },
  { word: 'Bathroom',   hint: 'Room with toilet',          mediaUrl: V('bathroom') },
  { word: 'Outside',    hint: 'Exterior',                  mediaUrl: V('outside') },
  { word: 'Inside',     hint: 'Interior',                  mediaUrl: V('inside') },
  { word: 'Here',       hint: 'This location',             mediaUrl: V('here') },
  // --- food & drink ---
  { word: 'Water',      hint: 'A drink',                   mediaUrl: V('water') },
  { word: 'Food',       hint: 'Something to eat',          mediaUrl: V('food') },
  { word: 'Apple',      hint: 'A common fruit',            mediaUrl: V('apple') },
  { word: 'Eat',        hint: 'Consume food',              mediaUrl: V('eat') },
  { word: 'Drink',      hint: 'Consume liquid',            mediaUrl: V('drink') },
  // --- time ---
  { word: 'Day',        hint: 'A 24-hour period',          mediaUrl: 'https://lifeprint.com/asl101/gifs/d/day-all.gif' },
  { word: 'Night',      hint: 'After sunset',              mediaUrl: V('night') },
  { word: 'Tomorrow',   hint: 'The next day',              mediaUrl: V('tomorrow') },
  { word: 'Yesterday',  hint: 'The previous day',          mediaUrl: V('yesterday') },
  { word: 'Year',       hint: '365 days',                  mediaUrl: V('year') },
  // --- feelings & states ---
  { word: 'Love',       hint: 'Deep affection',            mediaUrl: V('love') },
  { word: 'Good',       hint: 'Positive quality',          mediaUrl: V('good') },
  { word: 'Bad',        hint: 'Negative quality',          mediaUrl: V('bad') },
  { word: 'Hot',        hint: 'High temperature',          mediaUrl: V('hot') },
  { word: 'Sad',        hint: 'Feeling unhappy',           mediaUrl: V('sad') },
  { word: 'Feel',       hint: 'Sense an emotion',          mediaUrl: V('feel') },
  { word: 'Like',       hint: 'Enjoy something',           mediaUrl: V('like') },
  { word: 'Small',      hint: 'Little in size',            mediaUrl: GA('small') },
  { word: 'Old',        hint: 'Advanced in age',           mediaUrl: GA('old') },
  { word: 'New',        hint: 'Recently made',             mediaUrl: V('new') },
  { word: 'Easy',       hint: 'Not difficult',             mediaUrl: V('easy') },
  { word: 'Hard',       hint: 'Difficult',                 mediaUrl: V('hard') },
  { word: 'Slow',       hint: 'Not fast',                  mediaUrl: V('slow') },
  { word: 'Different',  hint: 'Not the same',              mediaUrl: GA('different') },
  { word: 'Hurt',       hint: 'Feel pain',                 mediaUrl: GA('hurt') },
  // --- actions ---
  { word: 'Sleep',      hint: 'Rest with eyes closed',     mediaUrl: V('sleep') },
  { word: 'Walk',       hint: 'Move on foot',              mediaUrl: V('walk') },
  { word: 'Run',        hint: 'Move quickly on foot',      mediaUrl: GA('run') },
  { word: 'Jump',       hint: 'Leap into the air',         mediaUrl: GA('jump') },
  { word: 'Sit',        hint: 'Rest on a seat',            mediaUrl: V('sit') },
  { word: 'Play',       hint: 'Engage in fun',             mediaUrl: V('play') },
  { word: 'Dance',      hint: 'Move to music',             mediaUrl: V('dance') },
  { word: 'Want',       hint: 'Desire something',          mediaUrl: V('want') },
  { word: 'Need',       hint: 'Require something',         mediaUrl: V('need') },
  { word: 'Give',       hint: 'Hand something over',       mediaUrl: V('give') },
  { word: 'Take',       hint: 'Receive or grab',           mediaUrl: GA('take') },
  { word: 'Go',         hint: 'Move toward a place',       mediaUrl: V('go') },
  { word: 'Come',       hint: 'Move toward here',          mediaUrl: V('come') },
  { word: 'See',        hint: 'Perceive with eyes',        mediaUrl: V('see') },
  { word: 'Know',       hint: 'Have knowledge',            mediaUrl: GA('know') },
  { word: 'Talk',       hint: 'Speak or communicate',      mediaUrl: GA('talk') },
  { word: 'Learn',      hint: 'Gain knowledge',            mediaUrl: V('learn') },
  { word: 'Understand', hint: 'Comprehend',                mediaUrl: V('understand') },
  { word: 'Practice',   hint: 'Repeat to improve',         mediaUrl: V('practice') },
  // --- questions ---
  { word: 'What',       hint: 'Asking about a thing',      mediaUrl: V('what') },
  { word: 'Where',      hint: 'Asking about a place',      mediaUrl: V('where') },
  { word: 'Who',        hint: 'Asking about a person',     mediaUrl: V('who') },
  { word: 'Why',        hint: 'Asking for a reason',       mediaUrl: V('why') },
  { word: 'How',        hint: 'Asking about a method',     mediaUrl: V('how') },
  // --- objects ---
  { word: 'Car',        hint: 'A vehicle',                 mediaUrl: V('car') },
  { word: 'Book',       hint: 'Reading material',          mediaUrl: V('book') },
  { word: 'Phone',      hint: 'Communication device',      mediaUrl: V('phone') },
  { word: 'Door',       hint: 'Entry or exit point',       mediaUrl: V('door') },
  { word: 'Table',      hint: 'Flat surface for objects',  mediaUrl: V('table') },
  { word: 'Chair',      hint: 'Seat with a back',          mediaUrl: V('chair') },
  // --- colors ---
  { word: 'Red',        hint: 'Color of fire',             mediaUrl: GA('red') },
  { word: 'Green',      hint: 'Color of grass',            mediaUrl: GA('green') },
  { word: 'Black',      hint: 'Darkest color',             mediaUrl: V('black') },
  { word: 'Two',        hint: 'The number 2',              mediaUrl: GA('two') },
  { word: 'Three',      hint: 'The number 3',              mediaUrl: GA('three') },
  // --- nature & animals ---
  { word: 'Dog',        hint: 'Common pet, barks',         mediaUrl: V('dog') },
  { word: 'Cat',        hint: 'Common pet, meows',         mediaUrl: V('cat') },
  { word: 'Bird',       hint: 'Animal with feathers',      mediaUrl: V('bird') },
  { word: 'Fish',       hint: 'Animal that swims',         mediaUrl: V('fish') },
  { word: 'Tree',       hint: 'Tall woody plant',          mediaUrl: V('tree') },
  { word: 'Flower',     hint: 'Blooming plant',            mediaUrl: V('flower') },
  // --- ASL / Deaf culture ---
  { word: 'Deaf',       hint: 'Unable to hear',            mediaUrl: V('deaf') },
  { word: 'Hearing',    hint: 'Able to hear',              mediaUrl: V('hearing') },
  { word: 'Color',      hint: 'A visual property',         mediaUrl: V('color') },
  { word: 'Name',       hint: 'What you are called',       mediaUrl: V('name') },
  { word: 'Head',       hint: 'Top of the body',           mediaUrl: V('head') },
  // --- emergency / community ---
  { word: 'Fire',       hint: 'Burning flame',             mediaUrl: GA('fire') },
  { word: 'Police',     hint: 'Law enforcement',           mediaUrl: GA('police') },
  { word: 'Music',      hint: 'Organized sound',           mediaUrl: GA('music') },
].map(({ word, hint, mediaUrl }) => ({
  id: `w-${word.toLowerCase().replace(/\s+/g, '-')}`,
  word,
  hint,
  category: 'words',
  imageUrl: mediaUrl,
}));

export { ALPHABET, COMMON_WORDS };

export function getSigns(category) {
  if (category === 'alphabet') return ALPHABET;
  if (category === 'words') return COMMON_WORDS;
  return [...ALPHABET, ...COMMON_WORDS];
}

export function sampleN(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function buildQuiz(signs, total = 10) {
  const questions = sampleN(signs, Math.min(total, signs.length));
  return questions.map((correct) => {
    const others = signs.filter((s) => s.id !== correct.id);
    const wrong = sampleN(others, 3);
    const choices = [...wrong, correct].sort(() => Math.random() - 0.5);
    return { correct, choices };
  });
}
