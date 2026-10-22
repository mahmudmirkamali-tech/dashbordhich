export const SUPPLY = 10_000_000;
export const MARK = 0.1;
export const LP_TOKENS = 50_000;
export const LP_USD = 5_000;
export const CHAIN_NAME = "DotOne Smart Chain";
export const CHAIN_ID = 505;

export const TIERS = [
  { name: "پله ۱", tokens: 20_000, milli: 70 },
  { name: "پله ۲", tokens: 30_000, milli: 85 },
  { name: "پله ۳", tokens: 50_000, milli: 100 },
] as const;

export const BUCKETS = [
  { id: "ico", name: "فروش عمومی", tokens: 100_000, lock: "آزاد در شروع، سه پله قیمت" },
  { id: "lp", name: "نقدینگی", tokens: 50_000, lock: "قفل حداقلی ۶ ماه" },
  { id: "team", name: "تیم و توسعه", tokens: 1_500_000, lock: "۱۲ تا ۲۴ ماه + وستینگ" },
  { id: "mkt", name: "بازاریابی و رشد", tokens: 1_000_000, lock: "قفلی اعلام نشده" },
  { id: "treasury", name: "خزانه / اکوسیستم", tokens: 2_000_000, lock: "مالتی‌سیگ، برنامه آزادسازی ندارد" },
  { id: "stake", name: "پاداش جامعه و استیکینگ", tokens: 2_500_000, lock: "منحنی انتشار اعلام نشده" },
  { id: "partners", name: "شرکا و مشاوران", tokens: 500_000, lock: "۶ تا ۱۲ ماه" },
  { id: "reserve", name: "رزرو آینده", tokens: 2_350_000, lock: "قفلی اعلام نشده" },
] as const;

export const TABS = [
  { id: "verdict", label: "حکم" },
  { id: "economy", label: "اقتصاد" },
  { id: "wall", label: "دیوار" },
  { id: "mizan", label: "میزان" },
  { id: "chambers", label: "چمبرز" },
  { id: "scores", label: "نمره‌ها" },
  { id: "crm", label: "CRM" },
  { id: "report", label: "گزارش" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

export type Assumptions = {
  marketingLiquid: boolean;
  reserveLiquid: boolean;
  treasurySameSigners: boolean;
  emissionMonths: 0 | 36 | 48;
  burnMonthly: number;
  lpFromRaise: boolean;
};

export const DIMENSIONS = [
  {
    id: "token",
    label: "توکنومیکس",
    score: 3,
    why: "جمع درصدها می‌خواند. منطق نه: یک درصد فروش عمومی، ۲۳٫۵٪ رزرو بی‌قفل، ۲۵٪ انتشار بی‌منحنی.",
  },
  {
    id: "liq",
    label: "نقدینگی",
    score: 1,
    why: "پنج هزار دلار در استخر. حدود ۵۰ دلار قیمت علامت را ۲٪ تکان می‌دهد.",
  },
  {
    id: "dump",
    label: "مقاومت در برابر dump",
    score: 2,
    why: "در خوانش پیش‌فرض، ۳٫۴۵ میلیون توکن روز اول قابل فروش است. استخر این حجم را ندارد.",
  },
  {
    id: "stage",
    label: "تناسب مرحله",
    score: 2,
    why: "شاخص حل اختلاف برای وقتی است که پرونده، seat و نیمکت داشته باشی. توکن قبل از هر سه آمده.",
  },
  {
    id: "potential",
    label: "پتانسیل واقعی",
    score: 5,
    why: "تنها لبه غیرداستانی، امتیازدهی بی‌رحم به کیفیت رأی است. اگر «هیچ» محصول شود، همین لبه می‌میرد.",
  },
  {
    id: "tech",
    label: "آمادگی فنی",
    score: 2,
    why: "یک شناسه زنجیره اعلام شده. نه قرارداد، نه فهرست امضا، نه قفل قابل راستی‌آزمایی.",
  },
  {
    id: "legal",
    label: "کیفیت حقوقی و حل اختلاف",
    score: 3,
    why: "نام ICC و SIAC و HKIAC بدون بند، seat و scrutiny فقط واژه‌ی قرضی است.",
  },
] as const;

export const CHAMBERS = [
  { id: "ability", label: "کیفیت فنی و تخصص", score: 3, why: "قرارداد عمومی، شرایط خدمت، و بند حل اختلاف دیده نشد." },
  { id: "service", label: "کیفیت خدمات و پاسخ‌گویی", score: 2, why: "سابقه‌ی پاسخ به موکل وجود ندارد. سرعت را از سکوت اندازه نمی‌گیرند." },
  { id: "bench", label: "عمق تیم", score: 2, why: "پانزده درصد تیم یک سطل است، نه نیمکت. معلوم نیست یک نفر است یا ده نفر." },
  { id: "commercial", label: "آگاهی تجاری", score: 4, why: "قفل تیم نشان می‌دهد کسی به ریسک فکر کرده. رزرو بی‌قفل نشان می‌دهد فکر نصفه مانده." },
  { id: "neutrality", label: "استقلال و بی‌طرفی", score: 2, why: "این دفتر بک‌اند میزان است. بی‌طرفی با کنترل مشترک جمع نمی‌شود." },
  { id: "enforce", label: "قابلیت اجرا", score: 2, why: "seat ندارد، نهاد داوری ندارد، رأی قابل اجرا تعریف نشده." },
  { id: "speed", label: "سرعت و کارایی", score: 3, why: "رویه اضطراری اعلام نشده. نمره بالا به چیزی که نیست، دروغ است." },
  { id: "award", label: "کیفیت و ثبات خروجی", score: 2, why: "scrutiny قبل از نهایی شدن رأی وجود ندارد." },
  { id: "transparency", label: "شفافیت و گزارش‌دهی", score: 5, why: "جدول تخصیص گفته شده. حجم، هولدر، سوخت و منحنی انتشار نه." },
  { id: "innovation", label: "نوآوری رویه‌ای", score: 3, why: "جلسه مجازی بدون رویه، تزئین است نه نوآوری." },
] as const;

export const TESTS = [
  {
    id: "entity",
    kind: "block",
    title: "شخص حقوقی دوم، با نام و شماره ثبت قابل‌چک",
    detail: "تا وقتی میزان و «هیچ» یک تیم و یک تصمیم‌اند، طرفدار وجود ندارد. دو تابلو با یک در.",
    defaultOn: false,
  },
  {
    id: "directors",
    kind: "block",
    title: "هیچ مدیر، امضاکننده یا ذی‌نفع کنترلی مشترک",
    detail: "مالتی‌سیگ بدون فهرست اسامی استقلال نیست. همپوشانی یعنی یک شخص.",
    defaultOn: false,
  },
  {
    id: "noSale",
    kind: "block",
    title: "میزان توکن نمی‌فروشد و قیمت وعده نمی‌دهد",
    detail: "پله ۰٫۰۷ / ۰٫۰۸۵ / ۰٫۱۰ اگر از سمت میزان باشد، همان نقش ناشر در پرونده Gram است.",
    defaultOn: false,
  },
  {
    id: "proceeds",
    kind: "block",
    title: "عواید فروش، حتی یک دلار، به حساب میزان نمی‌رود",
    detail: "بودجه عملیاتی میزان باید فاکتور خدمت باشد. عواید توکن دو شخص را به هم می‌چسباند.",
    defaultOn: false,
  },
  {
    id: "noYield",
    kind: "block",
    title: "دارنده «هیچ» سهمی از کارمزد یا سود میزان ندارد",
    detail: "پاداش سوددار یعنی انتظار سود از کار دیگران. گرنت یک‌طرفه این نیست.",
    defaultOn: false,
  },
  {
    id: "noMarketing",
    kind: "block",
    title: "سطل بازاریابی، بودجه میزان نیست",
    detail: "اگر ده درصد عرضه برای رشد محصول خرج شود، میزان ناشر است حتی اگر نامش روی جلد نباشد.",
    defaultOn: false,
  },
  {
    id: "treasury",
    kind: "block",
    title: "خزانه «هیچ» با اکثریت امضای بیرون از میزان",
    detail: "سه از پنج که سه تایش تیم محصول باشد خزانه نیست. جیب است.",
    defaultOn: false,
  },
  {
    id: "spinout",
    kind: "block",
    title: "خروج مکتوب میزان از نقش ناشر، قبل از هر انتقال",
    detail: "TON بعد از خروج اپ ماند. Gram را خود اپ با فروش متوقف کرد. ترتیب را عوض نکن.",
    defaultOn: false,
  },
  {
    id: "related",
    kind: "disclose",
    title: "رابطه به‌عنوان طرف مرتبط افشا شده، نه پنهان",
    detail: "همین دفتر این کار را می‌کند. پنهان کردن رابطه دیوار را نازک‌تر می‌کند.",
    defaultOn: true,
  },
  {
    id: "lookthrough",
    kind: "honesty",
    title: "پذیرفته شده که نهاد ناظر هنوز می‌تواند یکی ببیند",
    detail: "روشن بودن این بند امتیاز استقلال نیست. خاموش کردنش خودفریبی است و ریسک را بالا می‌برد.",
    defaultOn: true,
  },
] as const;

export const PROPOSALS = [
  {
    n: "۱",
    title: "اول خروج، بعد حتی یک انتقال",
    leverage: "اهرم بالا",
    body: "تلگرام را متوقف کردند چون اپ و فروش یک ناشر بود. شبکه بعدی ماند چون اپ از نقش ناشر خارج شد، نه چون برچسب جامعه به همان فروش چسبید. ریپل هم جایی باخت که مستقیم فروخت. قبل از پله اول: شخص دوم، امضای ناهمپوشان، و عهدنامه منفی که میزان نه می‌فروشد، نه قیمت وعده می‌دهد، نه عواید را لمس می‌کند، نه از کارمزد به دارنده سهم می‌دهد. تا این هشت قفل روشن نشود، این دفتر می‌نویسد ناشر پوشیده، نه حامی.",
  },
  {
    n: "۲",
    title: "شناور بی‌صاحب را خفه کن",
    leverage: "فوری",
    body: "رزرو ۲۳٫۵٪ و بازاریابی ۱۰٪ بدون قفل یعنی ۳٫۳۵ میلیون توکن روبه‌روی استخری که با حدود ۵۰ دلار دو درصد می‌جنبد. این برنامه عرضه نیست. تقویم سقوط است. هر دو سطل را به قفل دوازده‌تا‌بیست‌وچهارماهه ببر، فقط پرداخت به وندور نه کیف تیم. خزانه ۳ از ۵ با دو امضای بیرون. قفل نقدینگی را از قول شش‌ماهه به قفل دوازده‌ماهه داخل خود قرارداد برسان.",
  },
  {
    n: "۳",
    title: "سود را از توکن ببر",
    leverage: "اهرم بالا",
    body: "سه پله روی هم ۸٬۹۵۰ دلار را زیر تابلوی ارزش کاملاً رقیق‌شده یک میلیون می‌فروشد. هم نازک است، هم شکل عرضه به عموم. استیکینگ ۲۵٪ بدون منحنی همان جمله را تکرار می‌کند: نگه دار تا از کار ما منتفع شوی. کارمزد پرونده باید برای میزان بماند. اگر توکن ماند، فقط حق رأی روی بودجه گرنت یک بنیاد جداست. بدون سود، بدون بازخرید، بدون وعده قیمت. فروش اگر روزی لازم شد حراج هلندی همان بنیاد است و عوایدش فقط قفل نقدینگی. فعل معکوس این نام این است: هیچ نفروش.",
  },
] as const;

export const PRECEDENTS = [
  {
    case: "Gram / Telegram، ۲۰۲۰",
    fact: "اپ و فروش، یک ناشر",
    result: "دادگاه آمریکا فروش را متوقف کرد",
    lesson: "اگر میزان بفروشد یا عواید را بگیرد، همین الگوست.",
  },
  {
    case: "TON پس از توقف",
    fact: "ادامه جامعه بعد از خروج اپ از نقش ناشر",
    result: "شبکه بدون آن فروش اولیه ماند",
    lesson: "تنها شکل قابل‌دفاع «جدا». مجوز تکرار فروش تلگرام نیست.",
  },
  {
    case: "Ripple / XRP، ۲۰۲۳",
    fact: "شرکت هم فروشنده مستقیم بود هم طرفدار دارایی",
    result: "فروش مستقیم نهادی قرارداد سرمایه‌گذاری شد",
    lesson: "جدا خواندن دارایی، فروش پله‌ای را نجات نداد.",
  },
] as const;

export const REFUSES = [
  "مدیر صوری و امضای استعفا در کشو",
  "انتقال نمایشی به کیف «بنیاد» که کلیدش پیش تیم است",
  "بند محرمانگی روی اینکه واقعاً کی کنترل می‌کند",
  "فروش با واسطه که عواید را به میزان برگرداند",
  "جمله «سازمان بورس این دو را یکی نمی‌بیند» — این دفتر این جمله را تولید نمی‌کند",
] as const;

export const ACCEPTS = [
  "اسناد ثبت عمومی دو شخص، قابل‌چک برای غریبه",
  "فهرست زنده امضاکنندگان، بدون همپوشانی",
  "عهدنامه منفی: میزان نه می‌فروشد، نه بازارگردانی می‌کند، نه سود می‌دهد",
  "عواید فروش داخل قفل نقدینگی، نه هزینه جاری میزان",
  "گرنت یک‌طرفه بنیاد به ابزار متن‌باز، بدون کرسی در هیئت میزان",
] as const;

export const DISCLAIMER =
  "این دفتر تشخیص حقوقی، مجوز، یا مصونیت در برابر سازمان بورس و اوراق بهادار یا هر نهاد دیگر نیست. جدایی دو شخص یک واقعیت قابل‌حسابرسی است، نه یک برچسب. اگر کنترل، عواید یا بازاریابی مشترک بماند، نگاه ماهوی همچنان هر دو را یکی می‌بیند.";

export type Snapshot = {
  id: string;
  at: string;
  label: string;
  note: string;
  dimensions: Record<string, number>;
  chambers: Record<string, number>;
  tests: Record<string, boolean>;
  assumptions: Assumptions;
  health: number;
  risk: number;
  passedBlocks: number;
  floatTokens: number;
  dependence: number;
};

export function defaultAssumptions(): Assumptions {
  return {
    marketingLiquid: true,
    reserveLiquid: true,
    treasurySameSigners: true,
    emissionMonths: 0,
    burnMonthly: 12_000,
    lpFromRaise: true,
  };
}

export function defaultDimensions(): Record<string, number> {
  return Object.fromEntries(DIMENSIONS.map((d) => [d.id, d.score]));
}

export function defaultChambers(): Record<string, number> {
  return Object.fromEntries(CHAMBERS.map((d) => [d.id, d.score]));
}

export function defaultTests(): Record<string, boolean> {
  return Object.fromEntries(TESTS.map((t) => [t.id, t.defaultOn]));
}

export function num(n: number, digits = 0): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function usd(n: number, digits = 0): string {
  const sign = n < 0 ? "-" : "";
  return sign + "$" + num(Math.abs(n), digits);
}

export function px(milli: number): string {
  return usd(milli / 1000, milli % 10 === 0 ? 2 : 3);
}

export function one(n: number): string {
  return num(Math.round(n * 10) / 10, 1);
}

export function when(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Tehran",
  }).format(d);
}

export function icoProceeds(): number {
  return TIERS.reduce((sum, tier) => sum + (tier.tokens * tier.milli) / 1000, 0);
}

export function catchup(month: number, cliff: number, full: number, amount: number): number {
  if (month < cliff || full <= cliff) return 0;
  if (month >= full) return amount;
  const atCliff = (amount * cliff) / full;
  const rest = amount - atCliff;
  const f = (month - cliff) / (full - cliff);
  return atCliff + rest * f;
}

export type FloatParts = {
  ico: number;
  marketing: number;
  reserve: number;
  team: number;
  partners: number;
  staking: number;
  lpWithdrawable: number;
  insiderLiquid: number;
  float: number;
};

export function floatAt(month: number, a: Assumptions): FloatParts {
  const ico = 100_000;
  const marketing = a.marketingLiquid ? 1_000_000 : catchup(month, 12, 24, 1_000_000);
  const reserve = a.reserveLiquid ? 2_350_000 : catchup(month, 12, 24, 2_350_000);
  const team = catchup(month, 12, 24, 1_500_000);
  const partners = catchup(month, 6, 12, 500_000);
  const staking =
    a.emissionMonths === 0 ? 0 : Math.min(2_500_000, (2_500_000 * month) / a.emissionMonths);
  const lpWithdrawable = month >= 6 ? LP_TOKENS : 0;
  const insiderLiquid = marketing + reserve + team + partners + staking;
  return {
    ico,
    marketing,
    reserve,
    team,
    partners,
    staking,
    lpWithdrawable,
    insiderLiquid,
    float: ico + insiderLiquid,
  };
}

export function controlPct(a: Assumptions): number {
  let pct = 15 + 5 + 10 + 23.5 + 0.5;
  if (a.treasurySameSigners) pct += 20;
  return pct;
}

export function sellImpact(dx: number, x = LP_TOKENS, y = LP_USD) {
  const spot = y / x;
  const dy = (y * dx) / (x + dx);
  const newPrice = (y - dy) / (x + dx);
  return { usdOut: dy, newPrice, drop: 1 - newPrice / spot };
}

export function spotMove(drop: number, x = LP_TOKENS, y = LP_USD) {
  const s = Math.sqrt(1 - drop);
  const tokens = x * (1 / s - 1);
  const hit = sellImpact(tokens, x, y);
  return { tokens, usd: hit.usdOut, newPrice: hit.newPrice, drop: hit.drop };
}

export type ScheduleRow = {
  month: number;
  float: number;
  added: number;
  insider: number;
  staking: number;
  lpOpen: boolean;
  notional: number;
};

export type BarPart = { id: string; label: string; pct: number; tone: "stamp" | "brass" | "faint" };

export function barParts(a: Assumptions): BarPart[] {
  return [
    { id: "ico", label: "عموم", pct: 1, tone: "stamp" },
    { id: "lp", label: "استخر", pct: 0.5, tone: "brass" },
    { id: "team", label: "تیم", pct: 15, tone: "faint" },
    { id: "partners", label: "شرکا", pct: 5, tone: "faint" },
    { id: "treasury", label: "خزانه", pct: 20, tone: "faint" },
    { id: "stake", label: "استیکینگ", pct: 25, tone: "faint" },
    { id: "mkt", label: "بازاریابی", pct: 10, tone: a.marketingLiquid ? "stamp" : "faint" },
    { id: "reserve", label: "رزرو", pct: 23.5, tone: a.reserveLiquid ? "stamp" : "faint" },
  ];
}

export type Derived = {
  health: number;
  chambersAvg: number;
  risk: number;
  passedBlocks: number;
  blockTotal: number;
  dependence: number;
  floatTokens: number;
  insiderLiquid: number;
  publicFloat: number;
  lockedContract: number;
  mcapFloat: number;
  mcapPublic: number;
  fdv: number;
  fdvToMcap: number;
  tvl: number;
  mcapToTvl: number;
  fdvToTvl: number;
  control: number;
  depth2: ReturnType<typeof spotMove>;
  depth10: ReturnType<typeof spotMove>;
  depth20: ReturnType<typeof spotMove>;
  sellPublic: ReturnType<typeof sellImpact>;
  sellReserveSlice: ReturnType<typeof sellImpact>;
  raise: number;
  cash: number;
  runwayMonths: number;
  runwayDays: number;
  burned: number;
  inflationAnnual: number;
  schedule: ScheduleRow[];
  bars: BarPart[];
  ps: number | null;
  pe: number | null;
  hints: Record<string, number>;
  assumptions: Assumptions;
};

function avg(map: Record<string, number>, ids: readonly string[]): number {
  const total = ids.reduce((sum, id) => sum + (map[id] ?? 0), 0);
  return total / ids.length;
}

export function hints(a: Assumptions): Record<string, number> {
  const float = floatAt(0, a).float;
  const cash = a.lpFromRaise ? icoProceeds() - LP_USD : icoProceeds();
  const months = cash / a.burnMonthly;
  let dump = 2;
  if (float <= 150_000) dump = 7;
  else if (float <= 400_000) dump = 5;
  else if (float <= 1_000_000) dump = 3;
  const token = !a.marketingLiquid && !a.reserveLiquid ? 5 : 3;
  const stage = months < 1 ? 2 : 3;
  return { dump, token, stage };
}

export function derive(input: {
  dimensions: Record<string, number>;
  chambers: Record<string, number>;
  tests: Record<string, boolean>;
  assumptions: Assumptions;
  revenue: number;
  earnings: number;
}): Derived {
  const { assumptions: a } = input;
  const health = avg(
    input.dimensions,
    DIMENSIONS.map((d) => d.id),
  );
  const chambersAvg = avg(
    input.chambers,
    CHAMBERS.map((d) => d.id),
  );
  const blocking = TESTS.filter((t) => t.kind === "block");
  const passedBlocks = blocking.filter((t) => input.tests[t.id]).length;
  const independence = passedBlocks / blocking.length;
  const honesty = input.tests.lookthrough ? 0 : 1.2;
  const risk = Math.min(
    10,
    Math.max(
      0,
      (10 - health) * 0.55 + (1 - independence) * 10 * 0.35 + (10 - chambersAvg) * 0.1 + honesty,
    ),
  );
  const now = floatAt(0, a);
  const fdv = SUPPLY * MARK;
  const mcapFloat = now.float * MARK;
  const mcapPublic = now.ico * MARK;
  const tvl = LP_USD * 2;
  const raise = icoProceeds();
  const cash = a.lpFromRaise ? raise - LP_USD : raise;
  const runwayMonths = cash / a.burnMonthly;
  const months = [0, 3, 6, 12, 18, 24];
  let prev = 0;
  const schedule: ScheduleRow[] = months.map((month) => {
    const parts = floatAt(month, a);
    const row = {
      month,
      float: parts.float,
      added: month === 0 ? parts.float : parts.float - prev,
      insider: parts.insiderLiquid,
      staking: parts.staking,
      lpOpen: parts.lpWithdrawable > 0,
      notional: parts.float * MARK,
    };
    prev = parts.float;
    return row;
  });
  const inflationAnnual =
    a.emissionMonths === 0 ? 0 : ((2_500_000 * 12) / a.emissionMonths / SUPPLY) * 100;
  const lockedAsideTreasury = SUPPLY - now.float - 2_000_000;

  return {
    health: Math.round(health * 10) / 10,
    chambersAvg: Math.round(chambersAvg * 10) / 10,
    risk: Math.round(risk * 10) / 10,
    passedBlocks,
    blockTotal: blocking.length,
    dependence: Math.round((9 - passedBlocks * (7 / 8)) * 10) / 10,
    floatTokens: now.float,
    insiderLiquid: now.insiderLiquid,
    publicFloat: now.ico,
    lockedContract: lockedAsideTreasury,
    mcapFloat,
    mcapPublic,
    fdv,
    fdvToMcap: mcapFloat > 0 ? fdv / mcapFloat : 0,
    tvl,
    mcapToTvl: mcapFloat / tvl,
    fdvToTvl: fdv / tvl,
    control: controlPct(a),
    depth2: spotMove(0.02),
    depth10: spotMove(0.1),
    depth20: spotMove(0.2),
    sellPublic: sellImpact(100_000),
    sellReserveSlice: sellImpact(235_000),
    raise,
    cash,
    runwayMonths,
    runwayDays: Math.max(0, Math.round(runwayMonths * 30)),
    burned: 0,
    inflationAnnual,
    schedule,
    bars: barParts(a),
    ps: input.revenue > 0 ? mcapFloat / input.revenue : null,
    pe: input.earnings > 0 ? mcapFloat / input.earnings : null,
    hints: hints(a),
    assumptions: a,
  };
}

export function verdictCopy(d: Derived): string {
  const wall =
    d.passedBlocks === d.blockTotal
      ? "هر هشت قفل ساختاری روشن است. نقش قابل‌نوشتن «حامی افشاشده» است. این مصونیت نیست."
      : d.passedBlocks === 0
        ? "دیوار صفر از هشت است. میزان و «هیچ» امروز یک شخص‌اند. برچسب حامی جمله است، ساختار نیست."
        : `دیوار ${d.passedBlocks} از ${d.blockTotal} روشن است. تا هر هشت قفل واقعی شود، خوانش ماهوی همچنان یک شخص است.`;
  return `سلامت ${one(d.health)} از ۱۰. ریسک ${one(d.risk)} از ۱۰. ${wall} شناور روز اول تحت همین فرض‌ها ${num(d.floatTokens)} توکن است، روبه‌روی عمقی که با حدود ${usd(d.depth2.usd)} دو درصد جابه‌جا می‌شود. بازاری وجود ندارد. این‌ها مدل تخصیص است، نه تیکر.`;
}

export function riskLines(d: Derived): string[] {
  const lines: string[] = [];
  if (d.assumptions.marketingLiquid || d.assumptions.reserveLiquid) {
    lines.push(
      `شناور داخلی بی‌قفل ${num(d.insiderLiquid)} توکن است. استخر با حدود ${usd(Math.round(d.depth2.usd))} دو درصد حرکت می‌کند.`,
    );
  }
  if (d.passedBlocks < d.blockTotal) {
    lines.push(
      "کنترل، فروش و دفتر عملیاتی هنوز جدا نشده‌اند. سازمان بورس می‌تواند میزان و «هیچ» را یک عرضه ببیند. گفتن «طرفدار» این خوانش را عوض نمی‌کند.",
    );
  }
  lines.push(
    `سقف جمع‌آوری ${usd(d.raise)} است و نقد عملیاتی، اگر استخر از همین محل پر شود، ${usd(d.cash)} — حدود ${num(d.runwayDays)} روز با هزینه ماهانه ${usd(d.assumptions.burnMonthly)}.`,
  );
  lines.push("ماه ۶ قفل استخر تمام می‌شود. برای این عمق، شش ماه تعارف است نه دفاع.");
  if (d.assumptions.emissionMonths === 0) {
    lines.push("بیست‌وپنج درصد استیکینگ منحنی ندارد. چک سفید تورمی است، حتی اگر امروز خاموش فرض شود.");
  } else {
    lines.push(
      `انتشار فرضی، تورم سالانه حدود ${one(d.inflationAnnual)}٪ عرضه کل است. روی شناور نازک، اثرش تندتر است.`,
    );
  }
  lines.push("ضریب سود و فروش تعریف نمی‌شود تا درآمد خدمت ثبت شود، نه انتشار توکن.");
  return lines;
}

export function personLabel(d: Derived): string {
  return d.passedBlocks === d.blockTotal ? "حامی افشاشده" : "یک شخص";
}

export function seedSnapshot(): Snapshot {
  const assumptions = defaultAssumptions();
  const dimensions = defaultDimensions();
  const chambers = defaultChambers();
  const tests = defaultTests();
  const d = derive({ dimensions, chambers, tests, assumptions, revenue: 0, earnings: 0 });
  return {
    id: "seed-zero",
    at: "2026-10-22T00:00:00.000Z",
    label: "حکم صفر",
    note: "پیش از هر قفل و پیش از هر فروش. مبدأ روند.",
    dimensions,
    chambers,
    tests,
    assumptions,
    health: d.health,
    risk: d.risk,
    passedBlocks: d.passedBlocks,
    floatTokens: d.floatTokens,
    dependence: d.dependence,
  };
}

export function reportText(input: {
  dimensions: Record<string, number>;
  chambers: Record<string, number>;
  tests: Record<string, boolean>;
  assumptions: Assumptions;
  revenue: number;
  earnings: number;
  at: string;
}): string {
  const d = derive(input);
  const lines: string[] = [];
  lines.push("میزان — دفتر Aether");
  lines.push("پرونده مرتبط: هیچ");
  lines.push(`تاریخ: ${when(input.at)} (تهران)`);
  lines.push(`نتیجه: ${d.passedBlocks === d.blockTotal ? "قفل‌ها روشن. نقش: حامی افشاشده. مصونیت ادعا نمی‌شود." : "جدایی ادعا شده، اثبات نشده."}`);
  lines.push("");
  lines.push("خلاصه اجرایی");
  lines.push(verdictCopy(d));
  lines.push("");
  lines.push("اعداد کلیدی");
  lines.push(`عرضه کل: ${num(SUPPLY)}`);
  lines.push(`سوخته: ${num(d.burned)}`);
  lines.push(`شناور عمومی: ${num(d.publicFloat)}`);
  lines.push(`شناور داخلی بی‌قفل: ${num(d.insiderLiquid)}`);
  lines.push(`قفل‌شده به‌جز خزانه: ${num(d.lockedContract)}`);
  lines.push(`قیمت علامت: ${usd(MARK, 2)} | ATH / ATL / حجم: بازار وجود ندارد`);
  lines.push(`FDV اسمی: ${usd(d.fdv)} | ارزش شناور بدترین حالت: ${usd(d.mcapFloat)} | ارزش شناور عمومی: ${usd(d.mcapPublic)}`);
  lines.push(`FDV / ارزش شناور: ${one(d.fdvToMcap)}`);
  lines.push(`TVL استخر: ${usd(d.tvl)} | ارزش شناور / TVL: ${one(d.mcapToTvl)} | FDV / TVL: ${one(d.fdvToTvl)}`);
  lines.push(`عمق ۲٪: حدود ${usd(Math.round(d.depth2.usd))} (${num(Math.round(d.depth2.tokens))} توکن)`);
  lines.push(`سقف فروش عمومی: ${usd(d.raise)} | نقد عملیاتی: ${usd(d.cash)} | باند فرود: ${num(d.runwayDays)} روز`);
  lines.push(`کنترل ساختاری: ${one(d.control)}٪ | دیوار: ${d.passedBlocks}/${d.blockTotal} | وابستگی: ${one(d.dependence)}/10`);
  lines.push(`P/S: ${d.ps === null ? "تعریف‌نشده" : one(d.ps)} | P/E: ${d.pe === null ? "تعریف‌نشده" : one(d.pe)}`);
  lines.push("");
  lines.push("نمره‌های سلامت (۱۰ = سالم)");
  for (const item of DIMENSIONS) {
    lines.push(`${item.label}: ${input.dimensions[item.id] ?? "—"} / 10`);
  }
  lines.push(`میانگین سلامت: ${one(d.health)} | ریسک ترکیبی: ${one(d.risk)}`);
  lines.push("");
  lines.push("شاخص الگوی نهادهای حل اختلاف");
  for (const item of CHAMBERS) {
    lines.push(`${item.label}: ${input.chambers[item.id] ?? "—"} / 10`);
  }
  lines.push(`میانگین: ${one(d.chambersAvg)}`);
  lines.push("");
  lines.push("دیوار میزان / هیچ");
  for (const test of TESTS) {
    lines.push(`${input.tests[test.id] ? "روشن" : "خاموش"} — ${test.title}`);
  }
  lines.push("");
  lines.push("ریسک‌ها");
  for (const line of riskLines(d)) lines.push(`- ${line}`);
  lines.push("");
  lines.push("سه پیشنهاد");
  for (const item of PROPOSALS) {
    lines.push(`${item.n}. ${item.title} (${item.leverage})`);
    lines.push(item.body);
  }
  lines.push("");
  lines.push(DISCLAIMER);
  return lines.join("\n");
}
