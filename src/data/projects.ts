// Single source of truth for every project on the site (home grid, /projects, modal).
// Facts and numbers come from the showcase repos on github.com/baotrq — keep them in sync.

const asset = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;

export type Media = (
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string }
) & {
  /** Letterbox instead of crop on cards (for images with text near the edges). */
  fit?: "contain";
  /** Background behind a letterboxed image. */
  bg?: string;
};

export type ProjectKind = "Hardware" | "Mobile" | "Web";

export interface Project {
  slug: string;
  kind: ProjectKind;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  tags: string[];
  year: string;
  role: string;
  status: string;
  /** Shown on cards. Omit to fall back to `gradient` + `monogram`. */
  cover?: Media;
  /** Shown in the modal, in order. */
  media: Media[];
  gradient: string;
  monogram: string;
  links: { live?: string; code?: string; codeLabel?: string };
  /** Competition result, shown as a trophy badge on cards and a banner in the modal. */
  award?: { place: string; title: string; event: string };
  note?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "pillars",
    kind: "Hardware",
    title: "P.I.L.L.A.R.S",
    tagline: "AIoT homecare for Parkinson's.",
    description:
      "A wristband that flags a possible fall or freeze on-device, a home hub that dispenses the right pills to the right person, and a caregiver app that sees both — and keeps working when the house loses its Internet.",
    highlights: [
      "I built the dispenser's hardware and firmware: eight 3D-printed pill feeders across two ESP32 motor layers, each turning a disc cut to one pill, with a forward-back jog so pills don't jam.",
      "Moved pill counting from the ESP32s to the Pi: nine IR beams on GPIO with debounce and jam timeouts, so tuning became a config change instead of reflashing two boards.",
      "A pickup-cup sensor confirms the dose was actually taken, or raises a missed-dose alert to the caregiver.",
      "Collected the fall-detection dataset and built the Station's kiosk UI: big type, one thing per tab, readable from across the room.",
      "Team-wide: fall and freezing-of-gait models run INT8 on Silicon Labs EFR32xG26 wrist MCUs, 1.23× faster with the MVP accelerator.",
    ],
    stats: [
      { value: "2nd", label: "place · FPT IoT 2026" },
      { value: "8", label: "pill cups" },
      { value: "6", label: "boards" },
      { value: "4", label: "team members" },
    ],
    tags: ["ESP32", "Raspberry Pi 5", "Edge AI", "Next.js"],
    year: "May – Sep 2026",
    role: "Dispenser hardware & firmware, fall dataset, kiosk UI",
    status: "First Runner-Up · FPT IoT Challenge 2026",
    award: { place: "2nd place", title: "First Runner-Up", event: "FPT IoT Challenge 2026" },
    cover: { kind: "image", src: asset("pillars-cover.jpg"), alt: "The P-Station at the Grand Final: a two-layer pill dispenser with a tablet kiosk on top" },
    media: [
      { kind: "video", src: asset("pillars-station.mp4"), poster: asset("pillars-station.jpg"), alt: "The P-Station in its lit display case at the venue" },
      { kind: "image", src: asset("pillars-cover.jpg"), alt: "The P-Station at the Grand Final" },
      { kind: "image", src: asset("pillars-kiosk.jpg"), alt: "The Station kiosk home screen: weather, today's pills, the time and a family photo" },
      { kind: "image", src: asset("pillars-wearable.jpg"), alt: "The wristband prototypes on their straps" },
      { kind: "image", src: asset("pillars-award.jpg"), alt: "The team on stage receiving the First Runner-Up award" },
    ],
    gradient: "linear-gradient(135deg, #04122A 0%, #0D3474 55%, #2F7BE0 100%)",
    monogram: "P",
    links: { code: "https://github.com/baotrq/pillars-showcase", codeLabel: "Showcase" },
    note: "Team MLIoT – Edgelectronix, with Đặng Như Phước, Huỳnh Trọng Khiêm and Hồ Minh Thao. Monitoring data only; it doesn't diagnose or change medication.",
    featured: true,
  },
  {
    slug: "scent",
    kind: "Hardware",
    title: "S.C.E.N.T",
    tagline: "A perfume shelf with AI inside.",
    description:
      "An Edge AIoT perfume shelf that recommends a fragrance on a microcontroller, tracks stock with load cells and IR beams, and hears a bottle break — all over a Thread mesh.",
    highlights: [
      "I built the recommendation model on the EFR32xG24: from the dataset and features to INT8 deployment and the UART link to the Pi.",
      "The first try was a 50-way classifier (10.4 KB, 98% ROC AUC) that ranked well but picked one answer badly, with 11 perfumes never predicted.",
      "What shipped is a 260 → 64 embedding fine-tuned with a contrastive loss; the MCU ranks every bottle by cosine similarity and lights the best match.",
      "Adding a perfume is one more catalogue row, not a retrained model.",
      "Team-wide: an on-device sound model hears a bottle break, and an OpenThread border router on a Pi ties the shelf together.",
    ],
    stats: [
      { value: "2nd", label: "place · FPT IoT 2025" },
      { value: "260→64", label: "embedding" },
      { value: "10.4 KB", label: "first model" },
      { value: "4", label: "EFR32 boards" },
    ],
    tags: ["Edge AI · TFLite Micro", "Silicon Labs EFR32", "Thread"],
    year: "May – Sep 2025",
    role: "On-device recommendation model",
    status: "Second Prize · FPT IoT Challenge 2025",
    award: { place: "2nd place", title: "Second Prize", event: "FPT IoT Challenge 2025" },
    cover: {
      kind: "image",
      src: asset("scent-cover.jpg"),
      alt: "S.C.E.N.T System banner: a hand reaching for a green perfume bottle",
      fit: "contain",
      bg: "linear-gradient(#A4CDCC, #ADD1DB)",
    },
    media: [
      { kind: "image", src: asset("scent-overview.jpg"), alt: "The S.C.E.N.T shelf with its boards and its six ideas" },
      { kind: "image", src: asset("scent-modules.jpg"), alt: "The five hardware modules on the Thread mesh" },
      { kind: "image", src: asset("scent-award.jpg"), alt: "Team Edgelectronix on stage with the Second Prize board" },
    ],
    gradient: "linear-gradient(135deg, #0E2423 0%, #2C5E5B 55%, #A4CDCC 100%)",
    monogram: "S",
    links: { code: "https://github.com/baotrq/scent-showcase", codeLabel: "Showcase" },
    note: "Team Edgelectronix, with Đặng Như Phước, Huỳnh Trọng Khiêm and Hồ Minh Thao.",
    featured: true,
  },
  {
    slug: "roll",
    kind: "Mobile",
    title: "Roll",
    tagline: "Money habits, with a cat.",
    description:
      "A cat-themed expense tracker where logging takes seconds: snap a photo, say it out loud, or let a bank notification fill it in. Offline-first with sync between devices, a Wear OS companion and a native iOS + watchOS port.",
    highlights: [
      "Reads supported bank payment notifications on-device and turns each one into a one-tap entry.",
      "Voice logging in English and Vietnamese (“Breakfast 40k”), with a Gemini classifier behind a rate-limited Supabase Edge Function.",
      "Offline-first sync: negative local ids are remapped on first push, and deletes travel as trigger-written tombstones.",
      "Row-level security on every table; session tokens sealed with AES-GCM under an Android Keystore key.",
      "Six weeks from an empty scaffold to store-ready on Android, Wear OS, iOS, watchOS and web.",
    ],
    stats: [
      { value: "6 wks", label: "to store-ready" },
      { value: "162", label: "commits" },
      { value: "22", label: "pull requests" },
      { value: "5", label: "platforms" },
    ],
    tags: ["Kotlin", "Jetpack Compose", "SwiftUI", "Supabase", "Gemini"],
    year: "Sep – Oct 2026",
    role: "Solo · design & engineering",
    status: "Pre-release",
    cover: { kind: "image", src: asset("roll-cover.jpg"), alt: "Roll: a black cat holding a banknote in a garden of coins" },
    media: [
      { kind: "image", src: asset("roll-gallery.jpg"), alt: "Five store screenshots of Roll" },
    ],
    gradient: "linear-gradient(135deg, #1E1410 0%, #4A2A1A 55%, #E14A2B 100%)",
    monogram: "R",
    links: { live: "https://roll-finance.vercel.app", code: "https://github.com/baotrq/roll-showcase", codeLabel: "Showcase" },
    featured: true,
  },
  {
    slug: "onbooth",
    kind: "Web",
    title: "ONBOOTH",
    tagline: "Far apart, same strip.",
    description:
      "A virtual photobooth for friends in different places. Up to eight people join over live video, one synced countdown takes everyone's photo at once, and every browser composites the identical strip — no server ever touches an image.",
    highlights: [
      "One countdown on every device: the host sends a countdown length rather than a wall-clock time, so drifting phone clocks can't desync the shot.",
      "Each device captures its own 960×720 still and sends it in chunks over the LiveKit data channel; a deterministic compositor makes every download pixel-identical.",
      "Duo mode builds the shared frame locally for an instant preview, then silently upgrades each round to full quality after the roll.",
      "Stays up on free tiers by round-robining rooms across several LiveKit accounts in Redis, with the account encoded in the room code.",
      "Face-aware beauty mode with MediaPipe Face Landmarker; filters run as 3×4 colour matrices because iOS Safari ignores canvas filters.",
    ],
    stats: [
      { value: "10,367", label: "users" },
      { value: "4 wks", label: "to launch" },
      { value: "130", label: "commits" },
      { value: "8", label: "per booth" },
    ],
    tags: ["Next.js", "WebRTC · LiveKit", "MediaPipe", "Redis"],
    year: "Jul 2026",
    role: "Solo · design & engineering",
    status: "Live · EN / VI",
    cover: { kind: "image", src: asset("onbooth-cover.jpg"), alt: "The ONBOOTH landing page: a cream ticket on a red booth curtain" },
    media: [
      { kind: "image", src: asset("onbooth-strips.jpg"), alt: "Four real photo strips made with ONBOOTH" },
      { kind: "image", src: asset("onbooth-cover.jpg"), alt: "The ONBOOTH landing page with Solo, Duo and Group modes" },
    ],
    gradient: "linear-gradient(135deg, #2A0703 0%, #7A170C 55%, #C93A2B 100%)",
    monogram: "OB",
    links: { live: "https://www.onboothvn.com", code: "https://github.com/baotrq/onbooth-showcase", codeLabel: "Showcase" },
    featured: true,
  },
  {
    slug: "egg-gripper",
    kind: "Hardware",
    title: "Egg Gripper",
    tagline: "Lift a raw egg 90 cm. Don't break it.",
    description:
      "A force-controlled two-finger gripper. ESP32 firmware closes until the fingertip load cell reads the target force, re-tightens if the grip sags and backs off on over-force, with a live 3D dashboard over Wi-Fi or USB.",
    highlights: [
      "Force budget before code: ~2.25 N per finger to hold the egg, ~27 N to crack it — so the firmware targets 4 N and faults at 12 N.",
      "A 100 Hz control loop around one state machine, from IR egg detection through countdown, close, hold and release.",
      "Egg-shaped PETG fingertip “socks” with ribbed TPU pads; the minimum closed gap went from 43.8 mm to 23.8 mm.",
      "A three.js dashboard with live pose, force graph, calibration and a built-in simulator.",
    ],
    stats: [
      { value: "97/100", label: "demo score" },
      { value: "100 Hz", label: "control loop" },
      { value: "4 N", label: "target grip" },
      { value: "2", label: "team members" },
    ],
    tags: ["ESP32", "C++", "CAD · 3D printing", "three.js"],
    year: "Sep 2026",
    role: "CAD, electronics, firmware & dashboard",
    status: "MIET2561 · RMIT",
    cover: { kind: "image", src: asset("egg-cover.jpg"), alt: "The final gripper build: linkage, egg-shaped TPU fingertips, ESP32 and HX711" },
    media: [
      { kind: "video", src: asset("egg-dashboard.mp4"), poster: asset("egg-dashboard.jpg"), alt: "The dashboard running a full grip cycle in its simulator" },
      { kind: "image", src: asset("egg-build.jpg"), alt: "Build photos from the first prototype to the final assembly" },
    ],
    gradient: "linear-gradient(135deg, #04201D 0%, #0D4F47 55%, #1A9D92 100%)",
    monogram: "EG",
    links: { code: "https://github.com/baotrq/egg-gripper-showcase", codeLabel: "Showcase" },
  },
  {
    slug: "simpmusic",
    kind: "Mobile",
    title: "SimpMusic (Bao)",
    tagline: "A car that lights up to the album art.",
    description:
      "My fork of the open-source YouTube Music client. A car LED strip follows each song's album art over a Bluetooth protocol I reverse-engineered from HCI snoop logs; playback and encrypted sign-ins follow me between phones; the player is rebuilt for Samsung DeX.",
    highlights: [
      "Reverse-engineered the strip controller's undocumented BLE protocol from Android's Bluetooth HCI snoop log.",
      "Picks the dominant hue from the artwork's saturated pixels, then walks the colour wheel 2.5° every 33 ms so song changes glide instead of jump.",
      "“Continue on the other phone”, with end-to-end-encrypted sign-in sync through my own Cloudflare Worker + D1.",
      "Romanized lyrics that light up word by word, and AI translations written to stay singable.",
      "A layout for Samsung DeX and wide screens, plus a car mode with a self-filling offline library.",
    ],
    stats: [
      { value: "26", label: "commits" },
      { value: "6 days", label: "Oct 12–17" },
      { value: "33 ms", label: "colour step" },
      { value: "GPL-3", label: "open source" },
    ],
    tags: ["Kotlin Multiplatform", "Bluetooth LE", "Cloudflare Workers"],
    year: "Oct 2026",
    role: "Fork · features on top of upstream",
    status: "Daily driver",
    cover: { kind: "video", src: asset("simp-led.mp4"), poster: asset("simp-cover.jpg"), alt: "A car's LED strip changing colour to match each song's album art" },
    media: [
      { kind: "video", src: asset("simp-led.mp4"), poster: asset("simp-cover.jpg"), alt: "Real footage: the dash strip changes colour as the covers change" },
    ],
    gradient: "linear-gradient(135deg, #12081F 0%, #3A1458 55%, #FF3B5C 100%)",
    monogram: "SM",
    links: { code: "https://github.com/baotrq/simpmusic-bao-showcase", codeLabel: "Showcase" },
    note: "SimpMusic is a FOSS client by maxrave-dev and contributors; this project covers only what I added in my fork.",
  },
  {
    slug: "ecyce",
    kind: "Hardware",
    title: "Ecyce MediLink",
    tagline: "The pillbox that sorts, reminds and checks.",
    description:
      "A smart pill dispenser that knows who's in front of it, reads a paper prescription, drops exactly one pill at a time, and confirms that it actually fell.",
    highlights: [
      "I built the web dashboard and app flow: FaceID onboarding, prescription scan, schedule, a 7-day adherence report and an AI health chat.",
      "ArcFace recognises the user and switches profiles in under 1.5 s, so the machine gives my pills, not my mum's.",
      "Tesseract OCR reads the prescription and Gemma turns it into a structured JSON schedule to confirm.",
      "An ESP32 turns a singulation disc for one pill; a piezo sensor confirms the drop over a local MQTT broker.",
      "Stress-testing showed the Pi 4 running out of RAM, so the AI moved into the app and the dispenser only turns motors.",
    ],
    stats: [
      { value: "2nd", label: "place · NEO League" },
      { value: "< 1.5 s", label: "face switch" },
      { value: "1", label: "pill per drop" },
      { value: "4", label: "team members" },
    ],
    tags: ["ESP32", "Raspberry Pi", "OCR · LLM", "MQTT"],
    year: "May 2026",
    role: "Web dashboard & app flow",
    status: "First Runner-Up · NEO League Season 2",
    award: { place: "2nd place", title: "First Runner-Up", event: "NEO League Season 2" },
    cover: { kind: "image", src: asset("ecyce-cover.jpg"), alt: "Ecyce MediLink: the web dashboard's health overview and the phone sign-up screen" },
    media: [
      { kind: "image", src: asset("ecyce-cover.jpg"), alt: "The web dashboard's health overview next to the phone sign-up screen" },
      { kind: "image", src: asset("ecyce-flow.jpg"), alt: "The five-step closed loop from face recognition to drop verification" },
      { kind: "image", src: asset("ecyce-award.jpg"), alt: "Team Ecyce with the First Runner-Up prize board" },
    ],
    gradient: "linear-gradient(135deg, #061A2E 0%, #0F4C81 55%, #3FA7E0 100%)",
    monogram: "EM",
    links: { code: "https://github.com/baotrq/ecyce-showcase", codeLabel: "Showcase" },
    note: "Team Ecyce, with Khiêm, Ngân and Nghĩa, at RMIT University Vietnam. An early working prototype; it never changes a medication or a dose.",
  },
  {
    slug: "age-in-motion",
    kind: "Mobile",
    title: "Age in Motion",
    tagline: "Your age, live on your home screen.",
    description:
      "A minimal age counter whose Android home-screen widget counts up live to eight decimal places — by handing the fast digits to the launcher's own ViewFlippers instead of redrawing.",
    highlights: [
      "Splits the number by speed: a bitmap redrawn about every 5.3 minutes, plus ViewFlippers the launcher flips on its own timer.",
      "One 100-frame flipper for the 7th and 8th decimals, so the carry can't drift when the launcher restarts timers.",
      "Three widgets and three digit styles, including an original 5×7 dot-matrix face.",
      "An iOS WidgetKit timeline that turns over exactly on your birthday. No account, no server, no analytics.",
    ],
    stats: [
      { value: "8", label: "live decimals" },
      { value: "0.32 s", label: "per tick" },
      { value: "3", label: "widgets" },
      { value: "0", label: "servers" },
    ],
    tags: ["Flutter", "Kotlin", "WidgetKit"],
    year: "Oct 2026",
    role: "Solo",
    status: "Android 8+ · iOS 17+",
    cover: { kind: "image", src: asset("age-cover.gif"), alt: "A dot-matrix age counter ticking up to eight decimal places", fit: "contain", bg: "#2A2927" },
    media: [
      { kind: "image", src: asset("age-cover.gif"), alt: "The dot-matrix age counter ticking up" },
      { kind: "image", src: asset("age-styles.jpg"), alt: "The Age widget in Dot, Mono and Soft styles" },
    ],
    gradient: "linear-gradient(135deg, #141412 0%, #2A2927 55%, #BAC6A2 100%)",
    monogram: "AM",
    links: { code: "https://github.com/baotrq/age-in-motion-showcase", codeLabel: "Showcase" },
  },
  {
    slug: "clawd-mochi",
    kind: "Hardware",
    title: "Clawd Mochi",
    tagline: "A desk companion with a pixel-crab face.",
    description:
      "A 3D-printed desk buddy built around Clawd, the Claude Code mascot. An ESP32-C3 drives a 1.54\" TFT with animated expressions, a clock, a background Pomodoro, a terminal and a live Claude-usage meter — all controlled from a pixel-art web room over Web Serial.",
    highlights: [
      "Five on-device modes instead of one, plus a usage meter that nudges you as you near each 10% of your limit.",
      "A web controller that's a room, not a form: click the painting, fan or sleeping cat to switch modes over Web Serial.",
      "Live football and NBA scores fetched straight over Wi-Fi, pinning matches for your favourite teams.",
      "A sprite pipeline that cuts the mascot out of video and builds looping transparent GIFs.",
    ],
    stats: [
      { value: "5", label: "modes" },
      { value: "~$8", label: "in parts" },
      { value: "0", label: "apps to install" },
      { value: "C3", label: "ESP32" },
    ],
    tags: ["ESP32-C3", "C++", "React", "Web Serial"],
    year: "Jun – Oct 2026",
    role: "Extended firmware & web controller",
    status: "Live controller",
    cover: { kind: "image", src: asset("clawd-cover.jpg"), alt: "The 3D-printed Clawd Mochi on a desk" },
    media: [
      { kind: "image", src: asset("clawd-pomodoro.jpg"), alt: "Clawd Mochi running the Pomodoro focus timer" },
      { kind: "image", src: asset("clawd-room.jpg"), alt: "The pixel-art web controller room" },
    ],
    gradient: "linear-gradient(135deg, #1F0D06 0%, #6B2A10 55%, #D97757 100%)",
    monogram: "CM",
    links: { live: "https://baotrq.github.io/clawd-mochi/", code: "https://github.com/baotrq/clawd-mochi", codeLabel: "GitHub" },
    note: "Builds on the original Clawd Mochi by @yousifamanuel. Independent fan project, not affiliated with Anthropic.",
  },
  {
    slug: "loop-widget",
    kind: "Mobile",
    title: "Loop Widget",
    tagline: "Looping videos on the iOS home screen.",
    description:
      "An iOS app whose home-screen widgets play a looping video or GIF. WidgetKit only draws still snapshots, so the widget stacks every frame and reveals one at a time with masks spun by WidgetKit's clock-hand rotation effect.",
    highlights: [
      "Import from Photos and trim in a CapCut-style editor, up to 15 seconds.",
      "Automatic frame rate from 30 fps down to 12 fps, within a 180-frame budget.",
      "Each widget picks its own clip; tap to pause, and widgets pause in Low Power Mode or on a night schedule.",
      "Frame reveal built on ClockHandKit; it leans on undocumented WidgetKit behaviour, so it's an experiment that a future iOS release could break.",
    ],
    stats: [
      { value: "30", label: "fps max" },
      { value: "15 s", label: "per clip" },
      { value: "4", label: "widget sizes" },
    ],
    tags: ["Swift", "SwiftUI", "WidgetKit"],
    year: "Oct 2026",
    role: "Solo",
    status: "In development",
    media: [],
    gradient: "linear-gradient(135deg, #050B1A 0%, #13305E 55%, #4F8DF7 100%)",
    monogram: "LW",
    links: {},
  },
  {
    slug: "lomostudio",
    kind: "Web",
    title: "LomoStudio",
    tagline: "Instant 3D-print quotes for RMIT students.",
    description:
      "A commission 3D-printing service. Upload a model and the site slices it on the spot with OrcaSlicer and shows a real price estimate; orders are confirmed by phone and paid by bank transfer.",
    highlights: [
      "Quotes come from OrcaSlicer itself with my own printer profiles, so infill, walls and supports are priced correctly.",
      "The slicer runs as a separate Docker service, since a real slicer binary can't run in a serverless function.",
      "Models upload straight from the browser to Supabase Storage, so a 50 MB STL never hits a request limit.",
      "Admin dashboard for pricing and orders, with row-level security on every table.",
    ],
    stats: [
      { value: "15%", label: "quote infill" },
      { value: "50 MB", label: "max upload" },
      { value: "2", label: "services" },
    ],
    tags: ["Next.js", "Supabase", "OrcaSlicer", "Docker"],
    year: "Jul – Aug 2026",
    role: "Solo",
    status: "Live",
    media: [],
    gradient: "linear-gradient(135deg, #0B0B0B 0%, #2B2B2B 55%, #8A8F98 100%)",
    monogram: "LS",
    links: { live: "https://lomostudio.vercel.app" },
  },
];

export const projectKinds: ProjectKind[] = ["Hardware", "Mobile", "Web"];

export const featuredProjects = projects.filter((p) => p.featured);
