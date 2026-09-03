export type FestivalDay = {
  date: Date;
  weekday: string;
  label: string; // e.g. "Thu 3 Sep"
};

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Formatted by hand rather than with toLocaleDateString: ICU output for the
// same locale can differ between server (Node) and browser, which breaks
// hydration when this string is rendered directly.
function formatDay(date: Date): { weekday: string; label: string } {
  const weekday = WEEKDAYS[date.getDay()];
  const label = `${weekday.slice(0, 3)} ${date.getDate()} ${MONTHS[date.getMonth()]}`;
  return { weekday, label };
}

/** Festival runs from today through the coming Sunday. */
export function getFestivalDays(today: Date = new Date()): FestivalDay[] {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysUntilSunday = (7 - start.getDay()) % 7;
  const days: FestivalDay[] = [];
  for (let i = 0; i <= daysUntilSunday; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    days.push({ date, ...formatDay(date) });
  }
  return days;
}

export const FESTIVAL_HOURS = "5:00 PM – 1:00 AM";

export type Stage = {
  slug: string;
  name: string;
  blurb: string;
};

export const STAGES: Stage[] = [
  {
    slug: "the-hearth",
    name: "The Hearth",
    blurb: "The main stage, wrapped in a canopy of string lights around a big central bonfire.",
  },
  {
    slug: "hay-barn-stage",
    name: "Hay Barn Stage",
    blurb: "Tucked inside and spilling out of an old hay barn — warm, wooden, intimate.",
  },
  {
    slug: "firepit-stage",
    name: "Firepit Stage",
    blurb: "A ring of firepits with a low stage at the centre — the late-night home of the blues.",
  },
  {
    slug: "meadow-stage",
    name: "Meadow Stage",
    blurb: "Out in the open meadow, fairy lights strung tree to tree overhead.",
  },
  {
    slug: "lantern-stage",
    name: "Lantern Stage",
    blurb: "A lantern-lit stage tucked away in the orchard, for the ones who like to wander and find it.",
  },
];

export type Genre = "rock" | "country" | "blues";

type Artist = { name: string; genre: Genre };

const ARTISTS: Artist[] = [
  { name: "Nathaniel Rateliff & The Night Sweats", genre: "rock" },
  { name: "Chris Stapleton", genre: "country" },
  { name: "Gary Clark Jr.", genre: "blues" },
  { name: "The Black Keys", genre: "rock" },
  { name: "Tyler Childers", genre: "country" },
  { name: "Tedeschi Trucks Band", genre: "blues" },
  { name: "My Morning Jacket", genre: "rock" },
  { name: "Sturgill Simpson", genre: "country" },
  { name: "Marcus King", genre: "blues" },
  { name: "The War on Drugs", genre: "rock" },
  { name: "Zach Bryan", genre: "country" },
  { name: "Christone “Kingfish” Ingram", genre: "blues" },
  { name: "The Head and the Heart", genre: "rock" },
  { name: "The Highwomen", genre: "country" },
  { name: "Susan Tedeschi", genre: "blues" },
  { name: "Fleet Foxes", genre: "rock" },
  { name: "Jason Isbell and the 400 Unit", genre: "country" },
  { name: "Larkin Poe", genre: "blues" },
  { name: "The Lumineers", genre: "rock" },
  { name: "Kacey Musgraves", genre: "country" },
  { name: "Joe Bonamassa", genre: "blues" },
  { name: "Kaleo", genre: "rock" },
  { name: "Colter Wall", genre: "country" },
  { name: "Fantastic Negrito", genre: "blues" },
  { name: "Judah & the Lion", genre: "rock" },
  { name: "Whiskey Myers", genre: "country" },
  { name: "Southern Avenue", genre: "blues" },
  { name: "The Avett Brothers", genre: "rock" },
  { name: "Turnpike Troubadours", genre: "country" },
  { name: "Jontavious Willis", genre: "blues" },
  { name: "Rainbow Kitten Surprise", genre: "rock" },
  { name: "Vincent Neil Emerson", genre: "country" },
  { name: "North Mississippi Allstars", genre: "blues" },
  { name: "Band of Horses", genre: "rock" },
  { name: "Charley Crockett", genre: "country" },
  { name: "Ruthie Foster", genre: "blues" },
  { name: "Israel Nash", genre: "rock" },
  { name: "Billy Strings", genre: "country" },
  { name: "Shemekia Copeland", genre: "blues" },
  { name: "The Black Crowes", genre: "rock" },
  { name: "Molly Tuttle", genre: "country" },
  { name: "Robert Randolph and the Family Band", genre: "blues" },
];

export type LineupSlot = {
  time: string;
  label: string;
  artist: string;
  genre: Genre;
};

export type DayLineup = {
  day: FestivalDay;
  stages: { stage: Stage; slots: LineupSlot[] }[];
};

const SLOT_TIMES: { time: string; label: string }[] = [
  { time: "5:00 PM", label: "Golden Hour Set" },
  { time: "9:30 PM", label: "Firelight Headline Set" },
];

export function getLineup(days: FestivalDay[]): DayLineup[] {
  return days.map((day, d) => ({
    day,
    stages: STAGES.map((stage, s) => ({
      stage,
      slots: SLOT_TIMES.map((slot, t) => {
        const artist = ARTISTS[(d * STAGES.length * SLOT_TIMES.length + s * SLOT_TIMES.length + t) % ARTISTS.length];
        return { ...slot, artist: artist.name, genre: artist.genre };
      }),
    })),
  }));
}

export type FoodStall = {
  name: string;
  description: string;
  tags: string[];
  near: string;
};

export const FOOD_STALLS: FoodStall[] = [
  {
    name: "Wood-Fired Sourdough Wagon",
    description: "Stone-baked flatbreads topped with organic veg straight from the farm's own beds.",
    tags: ["Vegetarian", "Vegan option"],
    near: "The Hearth",
  },
  {
    name: "Smokehouse Stew Cart",
    description: "Slow-cooked stews, simmered all afternoon over the coals — proper stick-to-your-ribs stuff.",
    tags: ["Gluten-free option"],
    near: "Firepit Stage",
  },
  {
    name: "The Bramble Juice & Cider Bar",
    description: "Cold-pressed juices, local cider, and hedgerow cordials picked from the surrounding lanes.",
    tags: ["Vegan"],
    near: "Meadow Stage",
  },
  {
    name: "Hay Barn Bakery",
    description: "Cinnamon buns, pies, and fresh bread baked each morning right there in the barn.",
    tags: ["Vegetarian"],
    near: "Hay Barn Stage",
  },
  {
    name: "Roots & Char Veg Grill",
    description: "Fire-charred seasonal vegetables and halloumi, all organic, all a bit smoky.",
    tags: ["Vegetarian", "Vegan option"],
    near: "Lantern Stage",
  },
  {
    name: "The Milk Churn Dairy Stand",
    description: "Local cheese boards, hot chocolate, and proper cream teas for the chilly hours.",
    tags: ["Vegetarian"],
    near: "Tea & blanket bonfire points",
  },
  {
    name: "Morning Dew Coffee Cart",
    description: "Organic coffee and chai, rolling slowly through the campsite each morning.",
    tags: ["Vegan option"],
    near: "Roaming the campsite",
  },
  {
    name: "The Ploughman's Table",
    description: "Organic cold cuts, pickles, and farmhouse cheese boards — a proper countryside spread.",
    tags: ["Gluten-free option"],
    near: "The Hearth",
  },
];

export type TicketType = {
  name: string;
  description: string;
  features: string[];
  price: string;
};

export const TICKETS: TicketType[] = [
  {
    name: "Weekend Pass",
    description: "Full run of the festival, sunset to sunrise, every stage, every bonfire.",
    features: ["Access Thu – Sun", "All 5 stages", "All bonfire & tea points"],
    price: "The Many Kisses",
  },
  {
    name: "Day Pass",
    description: "One day, one night. Pick your favourite and settle in by the fire.",
    features: ["Single day access", "All 5 stages that day", "All bonfire & tea points"],
    price: "The Many Kisses",
  },
  {
    name: "Camping Add-on",
    description: "A generously spaced pitch for the weekend, close enough to stroll to the music.",
    features: ["Meadow or orchard pitch", "Shared eco showers", "Kindling on request"],
    price: "The Many Kisses",
  },
];

export const CAMPSITE = {
  zones: [
    {
      name: "Meadow Pitches",
      description: "Standard pitches with generous 4-metre spacing between tents — room to breathe.",
    },
    {
      name: "Quiet Orchard Camping",
      description: "Further from the stages, under the apple trees, for an earlier night's sleep.",
    },
    {
      name: "Trailside Pitches",
      description: "A short stroll from the stages, still spaced out, for the ones who don't want to walk far home.",
    },
  ],
  amenities: [
    "Fire pits dotted roughly every 30 metres across the field",
    "Bigger tea & blanket bonfire points, always with a kettle on",
    "Hay bale seating rings around every fire",
    "Shared eco showers and compost loos",
    "An on-site general store for candles, wool socks, and kindling",
  ],
  whatToBring: [
    "A proper warm jumper (think lumberjack, not festival glitter)",
    "Wellies — it's a farm, after all",
    "A sleeping bag rated for cold countryside nights",
    "A torch or lantern for finding your tent in the dark",
    "A mug of your own for the tea points",
  ],
};
