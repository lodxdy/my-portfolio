export type Piece = {
  id: string;
  title: string;
  kind: string; // "Essay", "Notes", "Fragment"...
  date: string;
  /** spine look */
  color: string;
  ink: string;
  height: number; // px
  width: number; // px
  /** each string is one paragraph in the notebook */
  body: string[];
};

export const pieces: Piece[] = [
  {
    id: "watch-without-defending",
    title: "Watch without defending",
    kind: "Philosophy",
    date: "September 2026",
    color: "#2f4a3c",
    ink: "#d9e4d2",
    height: 340,
    width: 64,
    body: [
      "Most of the time, we are not experiencing an opinion. We are protecting one.",
      "Someone says something we disagree with and, almost instantly, the mind prepares a defence. We stop listening and start building a case.",
      "There is another possibility: notice the reaction without immediately becoming it.",
      "You do not have to keep every view you have. You do not even have to replace it. Sometimes it is enough to watch it arise, change, and disappear.",
      "Maybe freedom begins at the moment you stop needing to defend what you think.",
    ],
  },

  {
    id: "do-the-thing",
    title: "Do the thing",
    kind: "Practice",
    date: "September 2026",
    color: "#6b2d2d",
    ink: "#f0d9cf",
    height: 300,
    width: 52,
    body: [
      "Fear becomes larger when you negotiate with it.",
      "Ask the question. Publish the idea. Speak to the stranger. Make the thing badly.",
      "The goal is not to become fearless. The goal is to teach your body that fear is not an instruction.",
      "Do the thing you are most afraid to do. Then repeat.",
    ],
  },

  {
    id: "technology-is-a-medium",
    title: "Technology is a medium",
    kind: "Technology",
    date: "September 2026",
    color: "#22344f",
    ink: "#d3deee",
    height: 320,
    width: 58,
    body: [
      "Technology is not only about what a machine can do. It is about what becomes possible because the machine exists.",
      "A website is not a website because it uses React. An application is not interesting because it has an API.",
      "The interesting question is always: what does this allow a human to do that was difficult, expensive, or impossible before?",
      "Learn the technology, but keep asking what it is for.",
    ],
  },

  {
    id: "behind-the-screen",
    title: "Behind the screen",
    kind: "Notes",
    date: "September 2026",
    color: "#a7782d",
    ink: "#2a1c08",
    height: 270,
    width: 46,
    body: [
      "You type a URL. Somewhere, a chain of systems wakes up.",
      "DNS finds an address. A request travels across networks. A server receives it, processes it, talks to databases or services, and sends something back.",
      "Then the browser turns packets into pixels.",
      "The interface feels simple because thousands of complicated things are hidden underneath it.",
      "Good technology often looks obvious after someone has solved the complexity.",
    ],
  },

  {
    id: "identity-before-advertising",
    title: "Identity before advertising",
    kind: "Branding",
    date: "September 2026",
    color: "#3b3f4a",
    ink: "#e2e4ea",
    height: 355,
    width: 70,
    body: [
      "People do not always join a product because of what it does. Sometimes they join because of what using it says about them.",
      "That is why identity can be more powerful than advertising.",
      "A brand should give people something to recognise themselves in: a taste, a belief, a behaviour, a way of seeing the world.",
      "The product gives them utility. The community gives them belonging.",
      "The strongest brands do not only ask, 'What do we sell?' They ask, 'Who does someone become by being here?'",
    ],
  },

  {
    id: "logo-is-not-the-brand",
    title: "A logo is not a brand",
    kind: "Branding",
    date: "September 2026",
    color: "#5a4a63",
    ink: "#eadff0",
    height: 295,
    width: 50,
    body: [
      "A logo is a signature. A brand is the feeling that remains after the signature is gone.",
      "Colour, typography, motion, language, sound, product behaviour and even restraint all participate.",
      "A clever symbol cannot rescue a confusing identity.",
      "Design becomes powerful when every small decision feels like it came from the same mind.",
      "Recognition is built through consistency, not decoration.",
    ],
  },

  {
    id: "the-five-poisons",
    title: "The five poisons",
    kind: "Philosophy",
    date: "August 2026",
    color: "#7a4a2a",
    ink: "#f3e0cc",
    height: 325,
    width: 60,
    body: [
      "Attachment. Aversion. Ignorance. Pride. Envy.",
      "They are interesting because they do not always look ugly from the outside.",
      "Attachment can look like ambition. Pride can look like confidence. Aversion can look like certainty.",
      "The practice is not to hate these states. It is to recognise them while they are happening.",
      "You cannot let go of something you refuse to see.",
    ],
  },

  {
    id: "mara-is-not-a-demon",
    title: "Māra is not a monster",
    kind: "Philosophy",
    date: "August 2026",
    color: "#252525",
    ink: "#e8e8e8",
    height: 315,
    width: 55,
    body: [
      "Māra is more interesting as a pattern than as a creature.",
      "The voice that says, 'Tomorrow.' The desire to be admired. The need to prove yourself. The fear of being seen failing.",
      "The obstacle does not always arrive as something obviously evil.",
      "Sometimes it arrives wearing your own voice.",
      "The practice is noticing the moment you start believing it.",
    ],
  },

  {
    id: "attention-is-life",
    title: "Attention is life",
    kind: "Psychology",
    date: "August 2026",
    color: "#40515a",
    ink: "#dce7eb",
    height: 300,
    width: 52,
    body: [
      "Whatever receives your attention receives a piece of your life.",
      "The strange thing is that attention often feels passive. We scroll, click, check, refresh. It feels like nothing happened.",
      "Something did happen. Your attention went somewhere.",
      "If you repeatedly give your attention away, eventually your life starts to resemble the things that captured it.",
      "Protecting attention is not productivity. It is choosing what kind of person you are becoming.",
    ],
  },

  {
    id: "memory-is-a-place",
    title: "Memory is a place",
    kind: "Learning",
    date: "September 2026",
    color: "#4a463d",
    ink: "#eee8d8",
    height: 330,
    width: 62,
    body: [
      "Information becomes easier to remember when it has somewhere to live.",
      "A name can live beside a face. A philosophy can live in a room. A speech can live along a familiar hallway.",
      "The mind already works through images, places and relationships. Memory techniques simply give that machinery somewhere to go.",
      "Do not try to remember everything as text.",
      "Give important things a location, an image and a connection.",
    ],
  },

  {
    id: "build-before-polish",
    title: "Build before polish",
    kind: "Creative",
    date: "September 2026",
    color: "#394739",
    ink: "#dce6d8",
    height: 285,
    width: 48,
    body: [
      "A beautiful idea that never becomes real is still only an idea.",
      "The first version should be allowed to be awkward.",
      "Put it in front of one real person. Watch what they do instead of what they say.",
      "Then change it.",
      "Polish is useful after reality has given you something worth polishing.",
    ],
  },

  {
    id: "many-projects-one-direction",
    title: "Many projects, one direction",
    kind: "Notes",
    date: "September 2026",
    color: "#59606b",
    ink: "#e2e5e9",
    height: 310,
    width: 57,
    body: [
      "Having many interests does not automatically mean having no direction.",
      "Philosophy can change how you design. Design can change how you build technology. Technology can change how you think about business.",
      "The projects may look unrelated from the outside.",
      "Underneath, they can be different expressions of the same curiosity.",
      "The important question is not 'Which interest should I kill?' but 'What connects them?'",
    ],
  },

  {
    id: "slow-interfaces",
    title: "In defence of slow interfaces",
    kind: "Design",
    date: "September 2026",
    color: "#31453d",
    ink: "#d9e4d2",
    height: 340,
    width: 64,
    body: [
      "Speed is useful, but speed is not the only measure of good software.",
      "Sometimes a small pause gives an action meaning. A transition tells you that something changed. A deliberate interaction makes the interface feel less mechanical.",
      "The best interfaces disappear without becoming lifeless.",
      "Technology should not only reduce friction. Sometimes it should create a moment of attention.",
    ],
  },

  {
    id: "minimalism-is-not-empty",
    title: "Minimalism is not empty",
    kind: "Design",
    date: "August 2026",
    color: "#454545",
    ink: "#eeeeee",
    height: 290,
    width: 50,
    body: [
      "Minimalism is often mistaken for having less.",
      "It is really about making less compete.",
      "One strong shape can be louder than ten details. One colour can become more recognisable than a palette of twenty.",
      "White space is not unused space.",
      "It gives the important thing somewhere to breathe.",
    ],
  },

  {
    id: "the-question-before-the-feature",
    title: "The question before the feature",
    kind: "Product",
    date: "September 2026",
    color: "#384b58",
    ink: "#dbe8ee",
    height: 305,
    width: 54,
    body: [
      "Before adding a feature, ask what problem it removes.",
      "A hotel does not need an AI chatbot just because chatbots are popular. A simple QR page can solve Wi-Fi, room service, hotel information and local recommendations.",
      "Technology should follow the problem, not the other way around.",
      "The smartest system may sometimes be the one with fewer moving parts.",
    ],
  },

  {
    id: "make-it-recognisable",
    title: "Make it recognisable",
    kind: "Marketing",
    date: "September 2026",
    color: "#6a4738",
    ink: "#f0dfd5",
    height: 315,
    width: 58,
    body: [
      "Marketing is partly a battle for memory.",
      "People see hundreds of messages every day. Being good is not enough if you are indistinguishable.",
      "A distinctive visual language, phrase, behaviour or point of view gives the mind something to hold onto.",
      "Do not try to look professional by looking like everyone else.",
      "Professional can mean being unmistakably yourself.",
    ],
  },

  {
    id: "the-third-day-edit",
    title: "The third-day edit",
    kind: "Fragments",
    date: "Ongoing",
    color: "#8b6d32",
    ink: "#2a1c08",
    height: 275,
    width: 46,
    body: [
      "An idea feels brilliant when it is still inside your head.",
      "Give it three days.",
      "What survives the distance is usually more interesting than the excitement that created it.",
      "Do not kill the idea. Just stop worshipping it.",
    ],
  },

  {
    id: "comfort-is-a-good-place-to-leave",
    title: "Leave the comfortable place",
    kind: "Journal",
    date: "September 2026",
    color: "#533d35",
    ink: "#f0dfd5",
    height: 325,
    width: 60,
    body: [
      "Comfort is not evil. It is simply very convincing.",
      "It tells you that tomorrow is a better time to start. That you should wait until you feel confident. That someone else might judge you.",
      "Confidence often arrives after the action, not before it.",
      "Move first. Let confidence catch up.",
    ],
  },
];
