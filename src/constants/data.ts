export type Song = {
  name: string;
  artist: string;
  emoji: string;
  color: string;
};

export type Pin = {
  id: number;
  x: number;
  y: number;
  name: string;
  title: string;
  msg: string;
  song: Song;
  emoji: string;
  avatar: string;
  isPublic: boolean;
  isAnon: boolean;
  location: string;
};

export type CapsuleMonth = {
  month: string;
  count: number;
  emoji: string;
  highlight: string;
};

export const SONGS: Song[] = [
  { name: 'Golden Hour', artist: 'JVKE', emoji: '🌇', color: 'linear-gradient(135deg,#f7971e,#ffd200)' },
  { name: 'Lover', artist: 'Taylor Swift', emoji: '💕', color: 'linear-gradient(135deg,#f8a5c2,#f5576c)' },
  { name: 'Die With A Smile', artist: 'Lady Gaga & Bruno Mars', emoji: '🌹', color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' },
  { name: 'Espresso', artist: 'Sabrina Carpenter', emoji: '☕', color: 'linear-gradient(135deg,#c79081,#dfa579)' },
  { name: 'Blinding Lights', artist: 'The Weeknd', emoji: '🌃', color: 'linear-gradient(135deg,#4776e6,#8e54e9)' },
  { name: 'As It Was', artist: 'Harry Styles', emoji: '🌊', color: 'linear-gradient(135deg,#11998e,#38ef7d)' },
  { name: 'About Damn Time', artist: 'Lizzo', emoji: '✨', color: 'linear-gradient(135deg,#f953c6,#b91d73)' },
  { name: 'Heat Waves', artist: 'Glass Animals', emoji: '🔥', color: 'linear-gradient(135deg,#f7971e,#f55c7a)' },
  { name: 'Cruel Summer', artist: 'Taylor Swift', emoji: '☀️', color: 'linear-gradient(135deg,#FDDB92,#D1FDFF)' },
  { name: 'Levitating', artist: 'Dua Lipa', emoji: '🪐', color: 'linear-gradient(135deg,#7F7FD5,#91EAE4)' },
];

export const SEED_PINS: Pin[] = [
  {
    id: 1, x: 38, y: 22, name: 'Sarah M.', title: 'Our First Anniversary 💕',
    msg: 'We came here on our first anniversary. The sunset view was absolutely breathtaking. This place will always hold a special place in my heart.',
    song: SONGS[0], emoji: '🌅', avatar: 'linear-gradient(135deg,#f093fb,#f5576c)', isPublic: true, isAnon: false, location: 'Centennial Park',
  },
  {
    id: 2, x: 65, y: 48, name: 'Jake T.', title: 'Best Brunch Spot 🍳',
    msg: 'Found this hidden gem while exploring. The eggs benedict here changed my life. The owner plays vinyl records all morning.',
    song: SONGS[3], emoji: '☕', avatar: 'linear-gradient(135deg,#4facfe,#00f2fe)', isPublic: true, isAnon: false, location: 'Surry Hills',
  },
  {
    id: 3, x: 20, y: 62, name: 'Anonymous', title: 'Concert Memories 🎸',
    msg: 'Saw my favourite band here for the third time. Cried during the encore — no regrets. Some places just hold a kind of magic.',
    song: SONGS[4], emoji: '🎵', avatar: 'linear-gradient(135deg,#43e97b,#38f9d7)', isPublic: true, isAnon: true, location: 'Enmore Theatre',
  },
  {
    id: 4, x: 72, y: 70, name: 'Alex W.', title: 'Proposal Spot 💍',
    msg: 'I proposed to my partner right here under the oak tree. She said yes! We come back every year on the same day.',
    song: SONGS[1], emoji: '💍', avatar: 'linear-gradient(135deg,#667eea,#764ba2)', isPublic: true, isAnon: false, location: 'Royal Botanic Garden',
  },
  {
    id: 5, x: 50, y: 35, name: 'Maya R.', title: 'First solo trip ✈️',
    msg: 'Sat here alone with a coffee and realised I was completely happy. Just me, the city below, and this song on loop.',
    song: SONGS[5], emoji: '🌿', avatar: 'linear-gradient(135deg,#f6d365,#fda085)', isPublic: false, isAnon: false, location: 'Observatory Hill',
  },
];

export const CAPSULE_MONTHS: CapsuleMonth[] = [
  { month: 'Jan', count: 3,  emoji: '❄️', highlight: 'First hike of the year at Blue Mountains' },
  { month: 'Feb', count: 5,  emoji: '💕', highlight: "Valentine's dinner at Bennelong" },
  { month: 'Mar', count: 2,  emoji: '🌧️', highlight: 'Rainy bookshop afternoon in Newtown' },
  { month: 'Apr', count: 7,  emoji: '🌸', highlight: 'Cherry blossoms in Hyde Park' },
  { month: 'May', count: 4,  emoji: '🎶', highlight: 'Laneway Festival memories' },
  { month: 'Jun', count: 6,  emoji: '🌙', highlight: 'Winter solstice walk at Bondi' },
  { month: 'Jul', count: 8,  emoji: '🎬', highlight: 'Film festival season — 6 films!' },
  { month: 'Aug', count: 5,  emoji: '☕', highlight: 'New favourite café discovered' },
  { month: 'Sep', count: 9,  emoji: '🌻', highlight: 'Spring feels: Centennial Park picnics' },
  { month: 'Oct', count: 11, emoji: '🎃', highlight: 'Halloween block party' },
  { month: 'Nov', count: 6,  emoji: '🍂', highlight: 'Anniversary trip to Melbourne' },
  { month: 'Dec', count: 0,  emoji: '⏳', highlight: 'Still writing this chapter…' },
];

export const RANDOM_EMOJIS = ['🌅', '☕', '🎵', '🌿', '💕', '🏙️', '🌊', '✨'] as const;
