import { weapons, items } from "./item-create";
import { npcs } from "./npc-create";
import {
  Wizard,
  Ninja,
  Elf,
  Dwarf,
  Human,
  Orc,
  Player,
} from "../player-create";
import { enemies } from "./enemy-create";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const moods = [{ happy: +5 }, { sad: -5 }, { angry: -5 }];

const attributes = [{ happy: +5 }, { sad: -5 }, { angry: -5 }];

var qty = 0;

let matches = {
  id: Math.floor(Math.random() * 10000000000),
  soundtype: "light_thin_wood_sound",
  use_sound: "/assets/sounds/match.mp3",
  value: "matches",
  name: "Matches",
  type: "scenario",
  limit: true,
  qty: 3,
  description: `Used to light places.`,
  icon: "match",
};

const orc_knife = weapons.basic_weapons[0];

import { enemies } from "./enemy-create";

const events = {
  make_a_plan: {
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "Planning An Escape",
    description:
      'Thomas looks down at his feet and thinks. He mutters to himself, "Brandybuck might have the key at his place. That is your best bet CHARNAME . Make a run for it with this potion...". Thomas hands you a vial.',
    inspects: [
      {
        guard: false,
        name: "Healing Potion",
        influence_event: null,
        object: items.potion_of_healing,
        event: "take",
        description: `A healing potion from dear gaffer.`,
      },
    ],
    access_directions_state: false,
    directions: [
      {
        name: "Back To Road",
        description: "Maybe there are other options? Like weapons?",
        room: "outside2",
      },
      {
        name: "To The Armory",
        description:
          "A whole swarm of orcs patrol the skirts of the amrory building",
        room: "armory",
      },
      {
        name: "Sprint to Brandybuck Home",
        description: "Follow Thomas and his plan",
        room: "brandybuck_home",
      },
    ],
    audio: null,
  },
  dead_mother: {
    update_message: null,
    event_state: true,
    name: "A Life Deferred...",
    influence_event: null,

    description:
      "Your mother lays sound asleep beneath the covers. You race to her side, shaking her to consciousness. Shaking and shaking to no avail, you turn her limp body over to see a bowing blade, jutting right from her chest. A craftsmenship like you have never seen in these lands. A cackle sinks from behind the window, and you see the flickering flames beyond, the shattered glass. ",
    inspects: [
      {
        guard: false,
        name: "Unlodge Knife",
        object: orc_knife,
        event: "take",
        description:
          "A jagged knife lays lodged in her chest, you must rip it out to get it.",
      },
      {
        guard: false,
        name: "Look in Drawer",
        object: matches,
        event: "take",
        description: `You see a red box and some candles.`,
      },
    ],
    access_directions_state: false,
    directions: [
      {
        name: "Outside",
        description:
          "Brave the outside and risk death? At least you have another weapon now.",
        room: "outside2",
      },
      {
        name: "Careful Window Exit",
        description:
          "You wait until the sound of pillaging orcs pass. You hear them, huffing and shouting an incoherent chant. The top of their torches and banners wave out of view. It may be safe to move",
        room: "window_ledge",
      },
      {
        karma_impact: ["positive", 1],
        name: "Storage Room",
        description: "Now that you have those matches...",
        room: "storage_room",
      },
    ],
    audio: null,
  },

  kitchen_safebox: {
    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "Rummage",
    description:
      "The kitchen is quiet. There is a lantern lit by the stove. You crawl below the window and see a bonfire throught the glass",
    inspects: [
      {
        guard: false,
        name: "cheese",
        influence_event: null,
        object: items.cheese,
        event: "take",
        description: `You have no idea what this is but it's glowing bright green.`,
      },
    ],
    directions: [
      {
        room: "outside2",
        name: "Outside",
        description: "...",
      },
      {
        room: "gaffers_room",
        name: "Gaffers Room",
        description: "...",
      },
    ],
    audio: null,
  },
  local_storage: {
    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "A light in dark places",
    description:
      "You illuminate the storage closet to see supplies. A a few vials and a book. You dont have time to think, just take them.",
    inspects: [
      {
        guard: false,
        name: "Mysterious Vial",
        influence_event: null,

        object: items.potion_of_luck,
        event: "take",
        description: `You have no idea what this is but it's glowing bright green.`,
      },
      {
        guard: false,
        name: "Grab Book",
        influence_event: null,

        object: items.book_of_fire_spell,
        event: "take",
        description: `You have no idea what this is, and honestly, why would you grab a book at a time like this?`,
      },
    ],
    access_directions_state: false,
    directions: [
      {
        name: "Outside",
        description:
          "With your mother dead and your spirits down, what else is there to lose? Head outside.",
        room: "outside2",
      },
      {
        name: "Careful Window Exit",
        description:
          "You wait until the sound of pillaging orcs pass. You hear them, huffing and shouting an incoherent chant. The top of their torches and banners wave out of view. It may be safe to move",
        room: "window_ledge",
      },
    ],
    audio: null,
  },

  ransack_halfing: {
    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "Ransack Halfling",
    description: "Hurry, by the chest, gather what you need.",
    inspects: [
      {
        guard: false,
        name: "Bread",
        influence_event: null,

        object: items.bread,
        event: "take",
        description: `${items.bread.description}`,
      },
      {
        guard: false,
        name: "More Bread",
        influence_event: null,

        object: items.bread,
        event: "take",
        description: `${items.bread.description}`,
      },
      {
        guard: false,
        name: "Cheese",
        influence_event: null,

        object: items.cheese,
        event: "take",
        description: ` ${items.cheese.description}`,
      },
      {
        guard: false,
        name: "Stables Key",
        influence_event: null,
        object: items.stables_key,
        event: "take",
        description: ` ${items.stables_key.description}`,
      },
    ],
    access_directions_state: false,
    directions: [
      {
        name: "Outside",
        description:
          "With your mother dead and your spirits down, what else is there to lose? Head outside.",
        room: "outside2",
      },
      {
        name: "Careful Window Exit",
        description:
          "You wait until the sound of pillaging orcs pass. You hear them, huffing and shouting an incoherent chant. The top of their torches and banners wave out of view. It may be safe to move",
        room: "window_ledge",
      },
    ],
    audio: null,
  },

  gaffers_room_bedside: {
    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "A Confession of an Old Friend",
    description:
      "There on his desk you light a candle. You move it carefully away from the window, duck below his bed, and see fallen under his bed two items: Parchment (Still wet with ink) and a Healing Vial.",
    inspects: [
      {
        guard: false,
        name: "Potion of Healing",
        object: items.potion_of_healing,
        event: "take",
        description: `It glows bright, bright red!`,
      },
      {
        guard: false,
        name: `Gaffer's Letter`,
        object: items.gaffers_letter,
        event: "take",
        description: `Gaffer's handwriting looks rushed? It reads with a worried hand.`,
      },
    ],
    access_directions_state: false,
    directions: [
      {
        name: `Back Main Room`,
        description:
          "Well this was a little dramatic. You read over is letter and are shocked.",
        room: "gaffer_thomas_house",
      },
    ],
    audio: null,
  },
  light_storage_hurt: {
    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
    update_message: null,
    event_state: true,
    name: `A Dark Stumble`,
    influence_event: {
      impact_chance: 4,
      impact: ["negative", "health", 10],
      description: `Hurt yourself on something you could not see... -10HP`,
      description2: `You almost tripped and hurt yourself on a broom! Lucky for you your karma must have been in your favor.`,
    },
    description: "You feel around the room, this could be dangerous.",
    access_directions_state: true,
    directions: [
      {
        karma_impact: ["positive", 1],
        name: "Mother?",
        description: "You should really check up on her.",
        room: "mothers_room_revisited",
      },
      {
        karma_impact: ["negative", 3],

        name: "Outside",
        description: "This was a stupid idea",
        room: "outside2",
      },
    ],
    audio: null,
  },
  firstspawn: {
    enemy: enemies.baravder, // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
    update_message: null,
    event_state: true,
    influence_event: null,
    name: "First Encounter...",
    description: `Enemy Appears, a massive drooling Orc named '${enemies.baravder.name}'. He Carries a ${enemies.baravder.weapon.name} he swings by his belt. He stares you down and says "${enemies.baravder.opening_line}". You have two options to Run or Fight.`,
    description_replace: `You walk past the now defeated ${enemies.baravder.name}. His body is limp. Happy to gaze upon his corpse, you sneer. You have avenged your mother well.`,
    enemy_object: null,
    inspects: [
      {
        guard: false,
        needsweapon: true,
        name: "Fight",
        event: "fight",
        subevent_onevent: "",
        description: "You may have to battle this big boy",
      },
      {
        guard: false,
        needsweapon: true,
        name: "Run",
        event: "run",
        description: `Running away is often risky. You have very little chance of fleeing.`,
      },
    ],
    access_directions_state: false,
    directions: [
      // {
      //     'karma_impact': ['negative', 2],

      //     'name': 'Run Away into High Brush',
      //     'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
      //     'room' : 'high_brush'
      // },
      {
        room: "stables1",
        name: "Parents Stables",
        description: "A horse would be the perfect way to outrun the orcs.",
        // "color" : 'red'
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        karma_impact: ["positive", 1],
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: null,
  },
  orcs_in_road: {
    description: `Darting out the door, you realize you've made a huge mistake. A whole horde of Orcs take turns poking you with their blades. Way to go.`,
    name: "Orc Horde Slaughter",
    event_state: true,
    restart: true,
    influence_event: null,
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
  },
  mordorian_runt: {
    enemy: enemies.mordorian_runt, // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
    update_message: null,
    event_state: true,
    influence_event: {
      impact_chance: 4,
      impact: ["negative", "health", 5],
      description: `You pant, looking at your shoulder you realize a large splinter bleeds from it.-5HP. Your karma decreases by 1 point as well. DON'T BASH AGAIN.`,
      description2: `Luckily the slam of your body into the wall  does not hurt you, but you don't make it in! Do not attempt this again.`,
    },
    name: "Halt There",
    description: `Pulling on your shoulder and throwing you to the ground is none other than '${enemies.mordorian_runt.name}'. He holds a ${enemies.mordorian_runt.weapon.name} up to your neck. Thomas throws him off you, who carries no weapon at all. He's shaking at what he's just done. Caleth spits, "${enemies.mordorian_runt.opening_line}". You have two options to Run or Fight.`,
    description_replace: `You defeated ${enemies.mordorian_runt.name}. It appears you can not bash your way in.`,
    enemy_object: null,
    inspects: [
      {
        karma_impact: ["positive", 2],
        guard: false,
        needsweapon: true,
        name: "Fight",
        event: "fight",
        subevent_onevent: "",
        description: "You may have to battle this big boy",
      },
      {
        karma_impact: ["negative", 2],
        guard: false,
        needsweapon: true,
        name: "Run",
        event: "run",
        description: `Running away is often risky. You have very little chance of fleeing.`,
      },
    ],
    access_directions_state: false,
    directions: [
      // {
      //     'karma_impact': ['negative', 2],

      //     'name': 'Run Away into High Brush',
      //     'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
      //     'room' : 'high_brush'
      // },
      {
        room: "stables1",
        name: "Keep Searching",
        description: "A horse would be the perfect way to outrun the orcs.",

        color: "orange",
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        karma_impact: ["positive", 1],
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: null,
  },

  yikmar_attack: {
    enemy: enemies.yikmar, // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
    update_message: null,
    event_state: true,
    influence_event: {
      impact_chance: 10,
      impact: ["negative", "health", 20],
      description: `${enemies.yikmar.name} Slashes your leg without warning. -20HP`,
      description2: ``,
    },
    name: "Gut You Like A Pig",
    description: `---''Not so fast CHARNAME of CHARHOMETOWN, The dark wizard knows you well and wants your blood...'' utters '${enemies.yikmar.name}'. He holds a ${enemies.yikmar.weapon.name}.`,
    description_replace: `You defeated ${enemies.yikmar.name}. You may attract attention from other Orcs now if you do not not leave the scene!`,
    enemy_object: null,
    inspects: [
      {
        karma_impact: ["positive", 2],
        guard: false,
        needsweapon: true,
        name: "Fight",
        event: "fight",
        description: "You may have to battle this little turd",
      },
      {
        karma_impact: ["negative", 1],
        guard: false,
        needsweapon: true,
        name: "Run",
        event: "run",
        description: `You may be able to run...?`,
      },
    ],
    access_directions_state: false,
    directions: [
      // {
      //     'karma_impact': ['negative', 2],

      //     'name': 'Run Away into High Brush',
      //     'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
      //     'room' : 'high_brush'
      // },
      {
        room: "stables1",
        name: "Keep Searching",
        description: "A horse would be the perfect way to outrun the orcs.",

        color: "orange",
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        karma_impact: ["positive", 1],
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: null,
  },
  gaffer_confrontation: {
    stall_state: true,
    enemy: enemies.gaffer, // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
    update_message: null,
    event_state: true,

    name: "New Enemy",
    description: `"I am so sorry," Thomas mutters, unsheathing his weapon, 
            "I am going to have to do this." '${enemies.gaffer.name}'. He holds a ${enemies.gaffer.weapon.name} he picked off an orc's corpse. from him horse pointed at you. Hands shaking he mutters, 
            "Dear God...${enemies.gaffer.opening_line}". You have one option: Fight.`,
    description_replace: `You defeated ${enemies.gaffer.name}. You stand over your beloved friend. He now cries. He bleeds out slowly. Your ultimate revenge. Congrats! You have finished chapter 1!`,
    // 'enemy_object': items.mendels_key,

    access_directions_state: false,
    inspects: [
      {
        karma_impact: ["positive", 2],
        guard: false,
        needsweapon: true,
        name: "Fight",
        event: "fight",
        subevent_onevent: "",
        description: "You may have to battle this big boy",
      },
    ],
    directions: [
      {
        room: "wizards_hut",
        name: "Leave Your Hometown",
        world1_end: "end",
        description: "The next chapter begins",
      },
    ],
    audio: null,
  },

  fight_the_rider: {
    enemy: enemies.the_rider, // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
    update_message: null,
    event_state: true,

    name: "Black Rider",
    description: `The rider sniffs the air and looks down upon you. He is '${enemies.the_rider.name}'. He holds a ${enemies.mordorian_runt.weapon.name} from him horse pointed at you. He looks away fom Mendel and hisses, "${enemies.the_rider.opening_line}". You have one option: Fight.`,
    description_replace: `You defeated ${enemies.the_rider.name}. He falls from atop his horse, now a corpse beside Mendel. Mendel whimpers 'take what you need' whilst holding out his homes key. You take it. He is shaking, eyes vacant. He lays there, staring at the dead cloaked figure, motionless.`,
    enemy_object: items.mendels_key,
    inspects: [
      {
        karma_impact: ["positive", 2],
        guard: false,
        needsweapon: true,
        name: "Fight",
        event: "fight",
        subevent_onevent: "",
        description: "You may have to battle this big boy",
      },
    ],
    access_directions_state: false,
    directions: [
      // {
      //     'karma_impact': ['negative', 2],

      //     'name': 'Run Away into High Brush',
      //     'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
      //     'room' : 'high_brush'
      // },
      {
        room: "stables1",
        name: "Keep Searching",
        description: "A horse would be the perfect way to outrun the orcs.",

        color: "orange",
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        karma_impact: ["positive", 1],
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: null,
  },
  end_game: {
    description: `Your karma fell too low. So low your luck ran out and a Orc came down with his battle axe on your back as you were running away.`,
    name: "Dead.",
    event_state: true,
    use_sound: "/assets/sounds/loss_laugh.mp3",
    restart: true,
    influence_event: null,
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
    audio: null,
  },
  enemy_end: {
    description: `Your enemy defeated you. What a shame.`,
    name: "enemy_end",
    event_state: true,
    use_sound: "/assets/sounds/loss_laugh.mp3",
    restart: true,
    influence_event: null,
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
    audio: null,
  },
  hide_in_armory_dead: {
    description: `Shaking in the darkness, the Orcs who saw you enter, tally in a line. At the forefront an Orcs teeth gleams as he triumphantly calls to his rally, '' I found the CHARRACE ! ''`,
    name: "enemy_end",
    event_state: true,
    restart: true,
    influence_event: null,
    use_sound: "/assets/sounds/loss_laugh.mp3",
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
    audio: null,
  },
  hide_in_armory_peek_dead: {
    description: `You gingerly creak the door open. You slowly stick out a trepid foot, until you see a blade come down before you. Pointing at your neck, an Orcs gleams it's teeth as he triumphantly calls to his rally, '' I found the CHARRACE ! ''. He slashes at your throat, watching you bleed out as the others gather around.`,
    name: "Orc Peek-A-Boo ",
    event_state: true,
    use_sound: "/assets/sounds/loss_laugh.mp3",

    restart: true,
    influence_event: null,
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
    audio: null,
  },
  gaffer_dead: {
    description: `Gaffer and you exclaim with joy as you enter the shed and approach your horse. You hear a muttering, "I'm sorry--" and a knife move passed your chin. Gaffer slits your throat, "I'm sorry! The dark wizard said he needed the blood 50 innocent souls... He said he'd spare me if I but gave him yours" You missed something. Try Again.`,
    name: "Betrayal",
    event_state: true,
    use_sound: "/assets/sounds/loss_laugh.mp3",
    restart: true,
    influence_event: null,
    access_directions_state: true,
    enemy_object: null,
    inspects: null,
    audio: null,
  },
};

// "mordorian_runt

let HumanWorldStart = {
  name: "CHARHOMETOWN",
  world_description: "You are in your hometown of CHARHOMETOWN.",
  imageUrl: "/assets/world-background/town.jpg",

  home: {
    update_message: null,
    name: "Home Main Room",
    influence_event: null,

    description:
      "You are CHARNAME 'CHARRACE of CHARHOMETOWN'. You've awoken from a nap. Loud sounds ensue outside your home, unfamliar. It is dark, but through the slits of your wooden home you can see a wavering glow. You hear some cries of a woman outside. Banter and chaos. The crackling of fire. There are two rooms before you, the east and the west. There is also the exit outside. Your whole body shakes with fear",
    directions: [
      {
        name: "Mother's Room",
        room: "mothers_room",
        description:
          "there are footsteps rustling behind the door, sound of moaning and a window shutting.",
      },
      {
        name: "Storage Room",
        room: "storage_room",
        description:
          "there could be supplies inside... It might be useful to inspect.",
      },
      {
        name: "Outside",
        room: "outside",
        description: "I have to see what is happening out there.",
      },
    ],
    inspects: [
      // {
      //     'guard' : false,
      //     'update_message': null,
      //     "name":"Trigger Fight",
      //     "event":"firstspawn",
      //     "description": "The intervals of breathing, chest rising and falling, seem slow...",
      // },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  home_return: {
    update_message: null,
    influence_event: null,
    name: "Home Main Room",
    description: `You return to the Main Room, panicked and scared... You feel you need a weapon. You hear glass break somewhere in the house. A muffled yelp. `,
    directions: [
      {
        name: "Mother's Room",
        room: "mothers_room_revisited",
        description:
          "there are footsteps rustling behind the door, sound of moaning and a window shutting.",
      },
      {
        name: "Storage Room",
        room: "storage_room",
        description:
          "there could be supplies inside... Something strange is going on outside.",
      },
    ],

    inspects: [
      {
        guard: false,
        name: `Pick up A Help Book`,
        object: items.helpbook,
        event: "take",
        description: `You see the embroidery catch your eye. "READ THIS BOOK TO NOT SUCK AT THIS GAME". But maybe you're a hardcore player.`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  window_ledge: {
    update_message: null,
    influence_event: null,

    name: "Back of The House",
    description: `You stretch your CHARRACE legs over the edge of the window. The crackling of fire sounds all around you. You see Gaffer Thomas running toward the stables and a barrel of mead beside you.`,
    directions: [
      {
        name: "To the Stables",
        room: "stables1",
        description: `That's where Thomas is heading. Safety in numbers.`,
      },
      {
        name: "Brandybuck Home",
        room: "brandybuck_home",
        description: `Go to Brandybuck Home. Merridock is in trouble. Two rider's tower over him.`,
      },

      {
        karma_impact: ["negative", 3],

        name: "Leave Thomas, Go to Armory",
        room: "middle_of_town",
        description: `You're feeling rather gallant are'nt you? Maybe some liquid courage? Or is it too risky?`,
      },
    ],
    inspects: [
      {
        guard: false,
        name: "Mead",
        object: items.liquid_courage,
        event: "take",
        description: `Enemies are all around you is this really the time to drink???`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  middle_of_town: {
    update_message: null,
    name: "Through The Town!",
    influence_event: null,

    description:
      "You hear your friend Thomas Gaffer calling your name, 'CHARNAME! What are you doing!? '  There is an ORC right at your front door!",
    directions: [
      {
        name: "Keep going, you see the armory ahead.",
        room: "armory",
        description: `It's not far away, but there is alot of pillaging in your way. An Mordorian Orc eyes you wearily.`,
      },
      {
        name: "To Stables",
        room: "stables1",
        description: `It would be an easy sprint backward to the horses.`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  middle_of_town2: {
    eventtriggerchance: 5,
    event: "yikmar_attack",
    update_message: null,
    name: "The Fool's Path",
    influence_event: null,

    description:
      "You now stand in the middle of town once again. All the Orcs are too busy rummaging through the townskeep to notice you but not if you stay here long!",
    directions: [
      {
        name: "Back to Main Road",
        room: "outside2",
        description: `Easy access to every possible part of town`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  armory: {
    update_message: null,
    name: "armory",
    influence_event: null,

    description:
      "To your surprise the armory door is ajar. There's the road behind you and the dark room before you.  You see the flicker a lantern, a dull glow.",
    directions: [
      {
        name: "Go Inside",
        room: "armory_inside",
        description: `Too late to turn back now...?`,
      },
      {
        name: "Turn Back",
        room: "middle_of_town2",
        description: `Maybe this wasnt a good idea. It's dark inside the armory.`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  mothers_room: {
    update_message: null,
    name: "Mother's room",
    influence_event: null,

    description:
      "Your mother is asleep in her bed after a greuling day in the fields. You'd ask her if the village parade was going on outside, but you don't wish to disturb her.",
    directions: [
      {
        room: "home",
        name: "Home Bedroom",
        description: "Return the main room? Might be smart.",
      },
      {
        room: "storage_room",
        name: "Storage Room",
        description:
          "It'd be way to dark to see in there without a candle or match",
      },
      {
        room: "outside",
        name: "Outside",
        description: "The window beside the door is veiled in a black smoke.",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  mothers_room_revisited: {
    update_message: null,
    influence_event: null,

    name: "Mother's Room",
    description:
      "Amidst the commotion, your mother is laying unconscious in her bed. The room is slightly chilled. What should you do?",
    directions: [
      {
        karma_impact: ["negative", 4],
        room: "window_ledge",
        name: "Forget her. Window escape",
        description:
          "TIP: Actions like this have a negative impact on your Karma. Karma influences your fate.",
      },
      {
        room: "storage_room",
        name: "Storage Room?",
        description:
          "Something doesnt feel right... maybe I can arm myself there?",
      },
    ],
    inspects: [
      {
        update_message: null,
        name: "Inspect Mother",
        event: "dead_mother",
        description:
          "The intervals of breathing, chest rising and falling, seem slow...",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  gaffers_room: {
    update_message: null,
    influence_event: null,

    name: `Gaffer's Room`,
    description:
      "It's dimly lit. You do not see any of Gaffer's fam, nor little sister. ",
    directions: [
      {
        room: "outside2",
        name: "Outside",
        description: "As you twist the knob you hear a scream.",
      },
    ],
    inspects: [
      {
        karma_impact: ["positive", 3],
        guard: true,
        name: "Light Candle",
        needs: "matches",
        needsIconClue: "match",
        event: "gaffers_room_bedside",
        description:
          "You should light the candle at the his bedside to see whats on his table.",
      },
    ],
    audio: "../../../assets/sounds/rpg_main_theme.mp3",
  },
  storage_room: {
    update_message: null,
    influence_event: null,

    name: "Storage Room",
    description: "The Storage room is quite dusty you can barely see a thing",
    directions: [
      {
        room: "mothers_room",
        name: "Mother's Room",
        description:
          "Your heart is beating fast as your hand hovers over the your mother's door handle",
      },
      {
        karma_impact: ["negative", 3],
        room: "outside",
        name: "Don't Inspect Mother, Go Outside",
        description: "As you twist the knob you hear a scream.",
      },
    ],
    inspects: [
      {
        guard: false,
        name: "Feel Around Room",
        eradicate: "matches",
        event: "light_storage_hurt",
        description: "Oh boy, hope you don't get hurt!",
      },
      {
        karma_impact: ["positive", 3],
        guard: true,
        name: "Light the way",
        needs: "matches",
        needsIconClue: "match",
        event: "local_storage",
        description: "You have Matches in your Inventory!",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  stables1: {
    name: "Stables",
    influence_event: null,
    description: `Keeping your head low beneath the tall grass you come up to the stables gate. Thomas waits beside it. He is shaking. To your dismay 
        there is a lock! You both look at eachother in solem silence... you can see through the planks your favorite horse melody neighing. 
        'It's okay' you whisper, 'I'll be in there soon.' You sigh deeply. You can either find another way or find a key.`,
    directions: [
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas's House",
        description:
          "Your heart is beating fast as your hand hovers over the your mother's door handle",
      },

      {
        room: "outside2",
        name: "Back To Road",
        // 'event' : 'jarl_slay',
        description: "Head back out where two Orcs are slaying the town Jarl.",
      },
    ],
    inspects: [
      {
        guard: false,
        name: "Make a Plan",
        event: "make_a_plan",
        needs: "stables_key",
        needsIconClue: "key",
        needs2: "gaffers_letter",
        needsIconClue2: "book",
        eradicate: `stables_key`,
        event: "make_a_plan",
        description: "Work with gaffer to figure out a solution.",
      },
      {
        karma_impact: ["positive", 3],
        guard: true,
        name: `'I found your letter, Gaffer.`,
        needs: "gaffers_letter",
        needs2: "stables_key",
        event: "gaffer_confrontation",
        description: "Confront Gaffer about his letter.",
      },
      {
        karma_impact: ["negative", 1],
        guard: false,
        name: "Try To Bash Your Way In",
        eradicate: `gaffers_letter`,
        eradicate2: `stables_key`,
        event: "mordorian_runt",
        description: `You're strong, why not push your way in?`,
      },
      {
        karma_impact: ["positive", 3],
        guard: true,
        name: `Use the Key`,
        needs: "stables_key",
        event: "gaffer_dead",
        description: "Open the stables and get your horse. ",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  outside: {
    visits: 0,
    name: "Outside",
    influence_event: null,

    description:
      "You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land.",
    directions: [
      {
        room: "home_return",
        name: "Back Inside",
        description:
          "You need to wake your mother, grab a weapon, and gather your things. This might be the smartest choice.",
        color: "green",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  gaffer_thomas_house: {
    character: "Thomas",
    influence_event: null,

    update_message: null,
    name: "Gaffer Thomas Home",
    description: `You sneak towards your lifelong friends home, staying towards the town's fences. In the shadow of the Barracks and through the tall grass.
            You get closer to his back porch. And head into the house. You call out for his family, but there is no answer. You see two rooms as you enter. The kitchen and Gaffer's room.`,
    directions: [
      {
        name: "Gaffer's Room",
        description: `Vaguely lit by a lantern and quiet inside.`,
        room: "gaffers_room",
      },
      {
        name: "Back Outside",
        description: `It's too quiet here and youre getting nervous`,
        room: "outside2",
      },
    ],
    inspects: [
      {
        karma_impact: ["negative", 1],
        update_message: null,
        name: "Inspect Kitchen",
        event: "kitchen_safebox",
        description: "You could take some things from his kitchen",
      },
    ],
    audio: "../../../assets/sounds/rpg_main_theme.mp3",
  },
  brandybuck_home: {
    character: "Mendel",
    update_message: null,
    influence_event: null,
    name: "BrandyBuck Home",
    description:
      "Scurrying around the front yard is Mendal, Mendal Brandybuck. he is being chased around his yard by an Orc Rider tugging his reins in circles. He hisses to an adjacent comrade who points down in disdain 'The Great Wizard of Barandtuk has orders to burn it to the ground. Not harrass halflings! ",
    description2:
      "Mendal lay's still on the grass. The dead rider beside him. ",
    directions: [
      {
        name: "Back to Road",
        description: "Towards Stables",
        room: "outside2",
      },

      {
        name: "House Backdoor",
        description: "Towards Stables",
        room: "brandybuck_backdoor",
      },
    ],
    inspects: [
      {
        karma_impact: ["positive", 2],
        update_message: null,
        name: "Approach Mendal",
        event: "fight_the_rider",
        description: "You must check up on him.",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  brandybuck_backdoor: {
    influence_event: null,
    name: "Backdoor",
    description: `You sneak up to the back of the brandybuck home. The door is locked but you see a window. `,
    directions: [
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        room: "brandybuck_home",
        name: "Back to Mendel",
        description: "Go back to the front of the home.",
        // "color" : 'orange'
      },
    ],
    inspects: [
      {
        karma_impact: ["negative", 4],
        guard: true,
        name: `Pry Open Window with Knife`,
        eradicate: "mendels_key",
        needs: "Orc Shiving Knife",
        needsIconClue: "dripping-knife",
        needsIconClue2: "key",
        event: "ransack_halfing",
        description: "Steal from the Halfling",
      },
      {
        karma_impact: ["negative", 0],
        guard: false,
        name: `Look in Window`,
        eradicate: "Orc Shiving Knife",
        event: "window_fail",
        description: "You need some sort of knife to pry it Open.",
      },

      {
        karma_impact: ["positive", 3],
        guard: true,
        name: `Use the Mendels Key`,
        needs: "mendels_key",
        needsIconClue: "three-keys",
        event: "ransack_halfing",
        description: "His last dying words were 'take what you need'",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },

  // OUTSIDE HOME REALMS  // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS
  armory_back_door: {
    influence_event: null,
    name: "Armory Back Door",
    description: `You feel safe, but there's a screaming coming from your neighbor's place. You slam the armory door shut, your hands are sweaty.`,
    directions: [
      {
        room: "stables1",
        name: "Stables",
        description: "A horse would be the perfect way to outrun the orcs.",
        // "color" : 'red'
      },
      {
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  outside2: {
    eventtriggerchance: 3, //fifty fifty chance
    event: "firstspawn",
    influence_event: null,
    name: "Outside",
    description: `You stumble out the door nearly bashing into Thomas shouting CHARNAME! Bless your little CHARRACE heart. I'm gonna make for the stables. I'll meet you there.`,
    directions: [
      {
        room: "stables1",
        name: "Stables",
        description: "A horse would be the perfect way to outrun the orcs.",
        // "color" : 'red'
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
      {
        room: "mothers_room_revisited",
        name: "Back To Home",
        description: "Maybe you missed some supplies in your home?",
        // "color" : 'orange'
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  orcs_in_road: {
    eventtriggerchance: null, //for sure chance
    event: "orcs_in_road",
    influence_event: null,
    name: "Out The Way You Came",
    description: `You run into a new hoard of Orcs. Undiscernable arcasses are scattered around you. The hoard corners you. A light from the sky shines upon you. Your karma is ridiculously high. Time freezes and grants you time to escape`,
    directions: [
      {
        room: "stables1",
        name: "Stables",
        description: "A horse would be the perfect way to outrun the orcs.",
        // "color" : 'red'
      },
      {
        room: "gaffer_thomas_house",
        name: "Gaffer Thomas House",
        description:
          "A possible chance for you to steal some goods. There may not be enough time.",
        // "color" : 'brown'
      },
      {
        room: "brandybuck_home",
        name: "BrandyBuck Home",
        description:
          "The Brandy Bucks are the little folk in town. They are most at risk.",
        // "color" : 'orange'
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  hide_in_armory_direction: {
    influence_event: null,
    name: "Hidden Coward",
    description: `You hear roars outside and flicker or torches. A whole rally of Orcs seem to be making their way past you.`,
    directions: null,
    inspects: [
      {
        name: `Peek Out`,
        event: "hide_in_armory_peek_dead",
        description: "You have a feeling you should just wait a bit longer.",
      },

      {
        name: `Stay Put`,
        event: "hide_in_armory_dead",
        description: "The coast could be clear",
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
  armory_inside: {
    // 'influence_event': {
    //     'impact_chance': 4,
    //     'impact' : ['positive','karma', 5],
    //     'description' :  `You pant, looking at your shoulder you realize a large splinter bleeds from it.-5HP`,
    //     'description2' :  `Luckily the slam of your body into the wall  does not hurt you, but you don't make it in! Do not attempt this again.`,
    // },
    name: "Armory Inside",
    description: `You mumble to yourself, '' CHARNAME , this has got to be your stupidest idea yet. '' You have a terrible sinking feeling in your stomach. You see a whole array of weapons mounted upon plaques. What will you take?`,
    directions: [
      {
        room: "armory_back_door",
        name: "Armory Back Door",
        description:
          "The backdoor seems the safest. What if someone saw you come in here? You hear the sounds of steal boots outside trudging closer.",
        // "color" : 'red'
      },
      {
        karma_impact: ["negative", 1],
        room: "hide_in_armory_direction",
        name: "Hide in Corner Awaiting Death",
        description: "Seems logical..?",
        // "color" : 'brown'
      },
      {
        room: "orcs_in_road",
        name: "Back The Way You Came",
        description: "Lemme at'em!",
        // "color" : 'orange'
      },
    ],
    inspects: [
      {
        guard: false,
        name: "Fresh Mead",
        object: items.liquid_courage,
        event: "take",
        description: `Enemies are all around you is this really the time to drink???`,
      },
      {
        guard: false,
        name: weapons.basic_weapons[4].name, //Mordorian sword
        object: weapons.basic_weapons[4],
        event: "take",
        description: weapons.basic_weapons[4].description,
      },
      {
        guard: false,
        name: "Mead",
        object: items.liquid_courage,
        event: "take",
        description: `Enemies are all around you is this really the time to drink???`,
      },
    ],
    audio: "../../../assets/sounds/town_on_fire.mp3",
  },
};

export { HumanWorldStart, events, orc_knife, WorldPlayer, player };
