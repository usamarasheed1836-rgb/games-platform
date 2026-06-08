// ============================================
//  GAMES DATA - Edit this file to update games
//  playLink and downloadLink are same per game
// ============================================

const SITE_CONFIG = {
  siteName: "Games Platform",
  tagline: "USA's #1 Gaming Destination",
  socialLinks: {
    facebook: "https://facebook.com/gamesplatform",
    instagram: "https://instagram.com/gamesplatform",
    twitter: "https://twitter.com/gamesplatform",
    whatsapp: "https://wa.me/1234567890"
  }
};

const GAMES = [
  {
    id: 1,
    name: "Yolo 777",
    category: "slots",
    image: "images/Yolo 777.jfif",
    description: "Spin your way to massive wins with Yolo 777! One of USA's most loved slot experiences.",
    playLink: "https://h5.yolo777.top/YOLO/",
    downloadLink: "https://h5.yolo777.top/YOLO/",
    hot: true, featured: true, badge: "🔥 HOT", rating: 4.9
  },
  {
    id: 2,
    name: "Game Vault",
    category: "casino",
    image: "images/Game Vault.jfif",
    description: "Open the vault of unlimited gaming! Hundreds of games, one platform, infinite winnings.",
    playLink: "https://download.gamevault999.com",
    downloadLink: "https://download.gamevault999.com",
    hot: true, featured: true, badge: "🏆 MEGA", rating: 4.8
  },
  {
    id: 3,
    name: "Milky Way",
    category: "arcade",
    image: "images/Milkyway.jfif",
    description: "Swim through the galaxy and catch cosmic fish for stellar prizes! A unique space adventure.",
    playLink: "https://milkywayapp.xyz/",
    downloadLink: "https://milkywayapp.xyz/",
    hot: true, featured: true, badge: "🌌 EPIC", rating: 4.7
  },
  {
    id: 4,
    name: "Panda Master",
    category: "slots",
    image: "images/Panda Master.jfif",
    description: "The luckiest panda in the casino! Spin and let the panda master bring you fortune.",
    playLink: "https://pandamaster.vip:8888/index.html",
    downloadLink: "https://pandamaster.vip:8888/index.html",
    hot: true, featured: true, badge: "🐼 WILD", rating: 4.8
  },
  {
    id: 5,
    name: "Orion Star",
    category: "slots",
    image: "images/Orion Star.jfif",
    description: "Blast off into a galaxy of winnings! Cosmic slots with out-of-this-world jackpots await.",
    playLink: "http://start.orionstars.vip:8580/",
    downloadLink: "http://start.orionstars.vip:8580/",
    hot: true, featured: true, badge: "⭐ TOP", rating: 4.9
  },
  {
    id: 6,
    name: "Juwa 2.0",
    category: "slots",
    image: "images/Juwa 2.0.jfif",
    description: "The next generation of Juwa is here! Diamond-level jackpots and luxury rewards await.",
    playLink: "https://m.juwa2.com",
    downloadLink: "https://m.juwa2.com",
    hot: true, featured: true, badge: "💎 VIP", rating: 4.9
  },
  {
    id: 7,
    name: "Golden Eagle",
    category: "slots",
    image: "images/Golden Eagel.png",
    description: "Soar like a Golden Eagle to massive winnings! Premium slots with legendary jackpots.",
    playLink: "https://invite.goldeneagle777.com/channel_10/index.html",
    downloadLink: "https://invite.goldeneagle777.com/channel_10/index.html",
    hot: false, featured: false, badge: "🦅 EAGLE", rating: 4.7
  },
  {
    id: 8,
    name: "Fire Kirin",
    category: "arcade",
    image: "images/Fire Kirin.jfif",
    description: "Unleash the fire kirin and burn through the reels for blazing hot prizes and multipliers!",
    playLink: "http://start.firekirin.xyz:8580/index.html",
    downloadLink: "http://start.firekirin.xyz:8580/index.html",
    hot: true, featured: false, badge: "🔥 FIRE", rating: 4.8
  },
  {
    id: 9,
    name: "Vegas Sweeps",
    category: "casino",
    image: "images/Vegas Sweeps.jfif",
    description: "Experience the thrill of Las Vegas from your home! Classic casino sweepstakes gaming.",
    playLink: "https://m.lasvegassweeps.com/",
    downloadLink: "https://m.lasvegassweeps.com/",
    hot: false, featured: false, badge: "🎰 VEGAS", rating: 4.6
  },
  {
    id: 10,
    name: "Big Winner",
    category: "slots",
    image: "images/Big Winner.jfif",
    description: "Be the Big Winner today! Massive jackpots, daily bonuses, and non-stop action.",
    playLink: "https://h5.bigwplay.com/BigWinner/",
    downloadLink: "https://h5.bigwplay.com/BigWinner/",
    hot: true, featured: false, badge: "💰 BIG", rating: 4.7
  },
  {
    id: 11,
    name: "Juwa",
    category: "slots",
    image: "images/Juwa.jfif",
    description: "The original Juwa — premium sweepstakes gaming with diamond-level jackpots.",
    playLink: "https://dl.juwa777.com/",
    downloadLink: "https://dl.juwa777.com/",
    hot: false, featured: false, badge: "💎 CLASSIC", rating: 4.8
  },
  {
    id: 12,
    name: "Mafia",
    category: "casino",
    image: "images/Mafia.jfif",
    description: "Join the Mafia and control the casino! Dark theme, massive wins, unlimited action.",
    playLink: "https://www.mafia77777.com",
    downloadLink: "https://www.mafia77777.com",
    hot: false, featured: false, badge: "🤵 MAFIA", rating: 4.6
  },
  {
    id: 13,
    name: "Cash Machine",
    category: "slots",
    image: "images/Cash Machine.jfif",
    description: "Turn on the Cash Machine and watch the money flow! Non-stop payouts guaranteed.",
    playLink: "https://www.cashmachine777.com/",
    downloadLink: "https://www.cashmachine777.com/",
    hot: true, featured: false, badge: "💵 CASH", rating: 4.7
  },
  {
    id: 14,
    name: "MR. All In One",
    category: "casino",
    image: "images/MR. All In One.jfif",
    description: "All your favorite games in one place! MR. All In One has everything you need.",
    playLink: "http://www.mrallinone777.com",
    downloadLink: "http://www.mrallinone777.com",
    hot: false, featured: false, badge: "🎯 ALL-IN", rating: 4.5
  },
  {
    id: 15,
    name: "HighStake",
    category: "casino",
    image: "images/HighStake.jfif",
    description: "Play at the highest stakes and win the biggest rewards! For the bold and the fearless.",
    playLink: "https://dl.highstakesweeps.com/",
    downloadLink: "https://dl.highstakesweeps.com/",
    hot: false, featured: false, badge: "🏆 HIGH", rating: 4.6
  },
  {
    id: 16,
    name: "Ultra Panda",
    category: "slots",
    image: "images/Ultra Panda.jfif",
    description: "Ultra Panda brings ultra wins! Bamboo slots with neon lights and monster jackpots.",
    playLink: "https://www.ultrapanda.mobi/",
    downloadLink: "https://www.ultrapanda.mobi/",
    hot: true, featured: false, badge: "🐼 ULTRA", rating: 4.8
  },
  {
    id: 17,
    name: "Billion Balls",
    category: "arcade",
    image: "images/Billion Balls.jfif",
    description: "Shoot for a billion! Billion Balls is the ultimate ball-shooting prize game in the USA.",
    playLink: "https://billionballs.win/",
    downloadLink: "https://billionballs.win/",
    hot: false, featured: false, badge: "🎱 BALLS", rating: 4.5
  },
  {
    id: 18,
    name: "GameRoom",
    category: "casino",
    image: "images/GameRoom.jfif",
    description: "Welcome to the ultimate GameRoom! Every game you love under one premium roof.",
    playLink: "https://www.gameroom777.com/",
    downloadLink: "https://www.gameroom777.com/",
    hot: false, featured: false, badge: "🕹️ ROOM", rating: 4.5
  },
  {
    id: 19,
    name: "Vegas Luck",
    category: "casino",
    image: "images/Vegas Luck.jfif",
    description: "Let Vegas Luck guide you to fortune! Premium sweepstakes with Vegas-style glamour.",
    playLink: "https://start.vegasluck777.com/",
    downloadLink: "https://start.vegasluck777.com/",
    hot: false, featured: false, badge: "🍀 LUCK", rating: 4.6
  },
  {
    id: 20,
    name: "Vblink",
    category: "slots",
    image: "images/VBlink.jfif",
    description: "Blink and you win! VBlink is lightning-fast slots with instant payouts and bonuses.",
    playLink: "https://www.vblink777.club/",
    downloadLink: "https://www.vblink777.club/",
    hot: false, featured: false, badge: "⚡ BLINK", rating: 4.6
  },
  {
    id: 21,
    name: "Noble",
    category: "casino",
    image: "images/Noble.jfif",
    description: "Play like royalty at Noble! Elegant casino experience with noble prizes and bonuses.",
    playLink: "http://web.noble777.com:8008/",
    downloadLink: "http://web.noble777.com:8008/",
    hot: false, featured: false, badge: "👑 NOBLE", rating: 4.5
  },
  {
    id: 22,
    name: "Moolah",
    category: "slots",
    image: "images/Moolah.jfif",
    description: "It's all about the Moolah! Hit the jackpot and bag the biggest cash prizes in the game.",
    playLink: "https://moolah.vip:8888/",
    downloadLink: "https://moolah.vip:8888/",
    hot: true, featured: false, badge: "💸 MOOLAH", rating: 4.7
  }
];


// Export for use in other files
if (typeof module !== 'undefined') {
  module.exports = { GAMES, SITE_CONFIG };
}
