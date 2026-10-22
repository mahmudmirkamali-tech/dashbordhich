import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as create, n as createJSONStorage, r as persist, t as useShallow } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJ6bkBGI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUPPLY = 1e7;
var MARK = .1;
var LP_TOKENS = 5e4;
var LP_USD = 5e3;
var CHAIN_NAME = "DotOne Smart Chain";
var TIERS = [
	{
		name: "پله ۱",
		tokens: 2e4,
		milli: 70
	},
	{
		name: "پله ۲",
		tokens: 3e4,
		milli: 85
	},
	{
		name: "پله ۳",
		tokens: 5e4,
		milli: 100
	}
];
var BUCKETS = [
	{
		id: "ico",
		name: "فروش عمومی",
		tokens: 1e5,
		lock: "آزاد در شروع، سه پله قیمت"
	},
	{
		id: "lp",
		name: "نقدینگی",
		tokens: 5e4,
		lock: "قفل حداقلی ۶ ماه"
	},
	{
		id: "team",
		name: "تیم و توسعه",
		tokens: 15e5,
		lock: "۱۲ تا ۲۴ ماه + وستینگ"
	},
	{
		id: "mkt",
		name: "بازاریابی و رشد",
		tokens: 1e6,
		lock: "قفلی اعلام نشده"
	},
	{
		id: "treasury",
		name: "خزانه / اکوسیستم",
		tokens: 2e6,
		lock: "مالتی‌سیگ، برنامه آزادسازی ندارد"
	},
	{
		id: "stake",
		name: "پاداش جامعه و استیکینگ",
		tokens: 25e5,
		lock: "منحنی انتشار اعلام نشده"
	},
	{
		id: "partners",
		name: "شرکا و مشاوران",
		tokens: 5e5,
		lock: "۶ تا ۱۲ ماه"
	},
	{
		id: "reserve",
		name: "رزرو آینده",
		tokens: 235e4,
		lock: "قفلی اعلام نشده"
	}
];
var TABS = [
	{
		id: "verdict",
		label: "حکم"
	},
	{
		id: "economy",
		label: "اقتصاد"
	},
	{
		id: "wall",
		label: "دیوار"
	},
	{
		id: "mizan",
		label: "میزان"
	},
	{
		id: "chambers",
		label: "چمبرز"
	},
	{
		id: "scores",
		label: "نمره‌ها"
	},
	{
		id: "crm",
		label: "CRM"
	},
	{
		id: "report",
		label: "گزارش"
	}
];
var DIMENSIONS = [
	{
		id: "token",
		label: "توکنومیکس",
		score: 3,
		why: "جمع درصدها می‌خواند. منطق نه: یک درصد فروش عمومی، ۲۳٫۵٪ رزرو بی‌قفل، ۲۵٪ انتشار بی‌منحنی."
	},
	{
		id: "liq",
		label: "نقدینگی",
		score: 1,
		why: "پنج هزار دلار در استخر. حدود ۵۰ دلار قیمت علامت را ۲٪ تکان می‌دهد."
	},
	{
		id: "dump",
		label: "مقاومت در برابر dump",
		score: 2,
		why: "در خوانش پیش‌فرض، ۳٫۴۵ میلیون توکن روز اول قابل فروش است. استخر این حجم را ندارد."
	},
	{
		id: "stage",
		label: "تناسب مرحله",
		score: 2,
		why: "شاخص حل اختلاف برای وقتی است که پرونده، seat و نیمکت داشته باشی. توکن قبل از هر سه آمده."
	},
	{
		id: "potential",
		label: "پتانسیل واقعی",
		score: 5,
		why: "تنها لبه غیرداستانی، امتیازدهی بی‌رحم به کیفیت رأی است. اگر «هیچ» محصول شود، همین لبه می‌میرد."
	},
	{
		id: "tech",
		label: "آمادگی فنی",
		score: 2,
		why: "یک شناسه زنجیره اعلام شده. نه قرارداد، نه فهرست امضا، نه قفل قابل راستی‌آزمایی."
	},
	{
		id: "legal",
		label: "کیفیت حقوقی و حل اختلاف",
		score: 3,
		why: "نام ICC و SIAC و HKIAC بدون بند، seat و scrutiny فقط واژه‌ی قرضی است."
	}
];
var CHAMBERS = [
	{
		id: "ability",
		label: "کیفیت فنی و تخصص",
		score: 3,
		why: "قرارداد عمومی، شرایط خدمت، و بند حل اختلاف دیده نشد."
	},
	{
		id: "service",
		label: "کیفیت خدمات و پاسخ‌گویی",
		score: 2,
		why: "سابقه‌ی پاسخ به موکل وجود ندارد. سرعت را از سکوت اندازه نمی‌گیرند."
	},
	{
		id: "bench",
		label: "عمق تیم",
		score: 2,
		why: "پانزده درصد تیم یک سطل است، نه نیمکت. معلوم نیست یک نفر است یا ده نفر."
	},
	{
		id: "commercial",
		label: "آگاهی تجاری",
		score: 4,
		why: "قفل تیم نشان می‌دهد کسی به ریسک فکر کرده. رزرو بی‌قفل نشان می‌دهد فکر نصفه مانده."
	},
	{
		id: "neutrality",
		label: "استقلال و بی‌طرفی",
		score: 2,
		why: "این دفتر بک‌اند میزان است. بی‌طرفی با کنترل مشترک جمع نمی‌شود."
	},
	{
		id: "enforce",
		label: "قابلیت اجرا",
		score: 2,
		why: "seat ندارد، نهاد داوری ندارد، رأی قابل اجرا تعریف نشده."
	},
	{
		id: "speed",
		label: "سرعت و کارایی",
		score: 3,
		why: "رویه اضطراری اعلام نشده. نمره بالا به چیزی که نیست، دروغ است."
	},
	{
		id: "award",
		label: "کیفیت و ثبات خروجی",
		score: 2,
		why: "scrutiny قبل از نهایی شدن رأی وجود ندارد."
	},
	{
		id: "transparency",
		label: "شفافیت و گزارش‌دهی",
		score: 5,
		why: "جدول تخصیص گفته شده. حجم، هولدر، سوخت و منحنی انتشار نه."
	},
	{
		id: "innovation",
		label: "نوآوری رویه‌ای",
		score: 3,
		why: "جلسه مجازی بدون رویه، تزئین است نه نوآوری."
	}
];
var TESTS = [
	{
		id: "entity",
		kind: "block",
		title: "شخص حقوقی دوم، با نام و شماره ثبت قابل‌چک",
		detail: "تا وقتی میزان و «هیچ» یک تیم و یک تصمیم‌اند، طرفدار وجود ندارد. دو تابلو با یک در.",
		defaultOn: false
	},
	{
		id: "directors",
		kind: "block",
		title: "هیچ مدیر، امضاکننده یا ذی‌نفع کنترلی مشترک",
		detail: "مالتی‌سیگ بدون فهرست اسامی استقلال نیست. همپوشانی یعنی یک شخص.",
		defaultOn: false
	},
	{
		id: "noSale",
		kind: "block",
		title: "میزان توکن نمی‌فروشد و قیمت وعده نمی‌دهد",
		detail: "پله ۰٫۰۷ / ۰٫۰۸۵ / ۰٫۱۰ اگر از سمت میزان باشد، همان نقش ناشر در پرونده Gram است.",
		defaultOn: false
	},
	{
		id: "proceeds",
		kind: "block",
		title: "عواید فروش، حتی یک دلار، به حساب میزان نمی‌رود",
		detail: "بودجه عملیاتی میزان باید فاکتور خدمت باشد. عواید توکن دو شخص را به هم می‌چسباند.",
		defaultOn: false
	},
	{
		id: "noYield",
		kind: "block",
		title: "دارنده «هیچ» سهمی از کارمزد یا سود میزان ندارد",
		detail: "پاداش سوددار یعنی انتظار سود از کار دیگران. گرنت یک‌طرفه این نیست.",
		defaultOn: false
	},
	{
		id: "noMarketing",
		kind: "block",
		title: "سطل بازاریابی، بودجه میزان نیست",
		detail: "اگر ده درصد عرضه برای رشد محصول خرج شود، میزان ناشر است حتی اگر نامش روی جلد نباشد.",
		defaultOn: false
	},
	{
		id: "treasury",
		kind: "block",
		title: "خزانه «هیچ» با اکثریت امضای بیرون از میزان",
		detail: "سه از پنج که سه تایش تیم محصول باشد خزانه نیست. جیب است.",
		defaultOn: false
	},
	{
		id: "spinout",
		kind: "block",
		title: "خروج مکتوب میزان از نقش ناشر، قبل از هر انتقال",
		detail: "TON بعد از خروج اپ ماند. Gram را خود اپ با فروش متوقف کرد. ترتیب را عوض نکن.",
		defaultOn: false
	},
	{
		id: "related",
		kind: "disclose",
		title: "رابطه به‌عنوان طرف مرتبط افشا شده، نه پنهان",
		detail: "همین دفتر این کار را می‌کند. پنهان کردن رابطه دیوار را نازک‌تر می‌کند.",
		defaultOn: true
	},
	{
		id: "lookthrough",
		kind: "honesty",
		title: "پذیرفته شده که نهاد ناظر هنوز می‌تواند یکی ببیند",
		detail: "روشن بودن این بند امتیاز استقلال نیست. خاموش کردنش خودفریبی است و ریسک را بالا می‌برد.",
		defaultOn: true
	}
];
var PROPOSALS = [
	{
		n: "۱",
		title: "اول خروج، بعد حتی یک انتقال",
		leverage: "اهرم بالا",
		body: "تلگرام را متوقف کردند چون اپ و فروش یک ناشر بود. شبکه بعدی ماند چون اپ از نقش ناشر خارج شد، نه چون برچسب جامعه به همان فروش چسبید. ریپل هم جایی باخت که مستقیم فروخت. قبل از پله اول: شخص دوم، امضای ناهمپوشان، و عهدنامه منفی که میزان نه می‌فروشد، نه قیمت وعده می‌دهد، نه عواید را لمس می‌کند، نه از کارمزد به دارنده سهم می‌دهد. تا این هشت قفل روشن نشود، این دفتر می‌نویسد ناشر پوشیده، نه حامی."
	},
	{
		n: "۲",
		title: "شناور بی‌صاحب را خفه کن",
		leverage: "فوری",
		body: "رزرو ۲۳٫۵٪ و بازاریابی ۱۰٪ بدون قفل یعنی ۳٫۳۵ میلیون توکن روبه‌روی استخری که با حدود ۵۰ دلار دو درصد می‌جنبد. این برنامه عرضه نیست. تقویم سقوط است. هر دو سطل را به قفل دوازده‌تا‌بیست‌وچهارماهه ببر، فقط پرداخت به وندور نه کیف تیم. خزانه ۳ از ۵ با دو امضای بیرون. قفل نقدینگی را از قول شش‌ماهه به قفل دوازده‌ماهه داخل خود قرارداد برسان."
	},
	{
		n: "۳",
		title: "سود را از توکن ببر",
		leverage: "اهرم بالا",
		body: "سه پله روی هم ۸٬۹۵۰ دلار را زیر تابلوی ارزش کاملاً رقیق‌شده یک میلیون می‌فروشد. هم نازک است، هم شکل عرضه به عموم. استیکینگ ۲۵٪ بدون منحنی همان جمله را تکرار می‌کند: نگه دار تا از کار ما منتفع شوی. کارمزد پرونده باید برای میزان بماند. اگر توکن ماند، فقط حق رأی روی بودجه گرنت یک بنیاد جداست. بدون سود، بدون بازخرید، بدون وعده قیمت. فروش اگر روزی لازم شد حراج هلندی همان بنیاد است و عوایدش فقط قفل نقدینگی. فعل معکوس این نام این است: هیچ نفروش."
	}
];
var PRECEDENTS = [
	{
		case: "Gram / Telegram، ۲۰۲۰",
		fact: "اپ و فروش، یک ناشر",
		result: "دادگاه آمریکا فروش را متوقف کرد",
		lesson: "اگر میزان بفروشد یا عواید را بگیرد، همین الگوست."
	},
	{
		case: "TON پس از توقف",
		fact: "ادامه جامعه بعد از خروج اپ از نقش ناشر",
		result: "شبکه بدون آن فروش اولیه ماند",
		lesson: "تنها شکل قابل‌دفاع «جدا». مجوز تکرار فروش تلگرام نیست."
	},
	{
		case: "Ripple / XRP، ۲۰۲۳",
		fact: "شرکت هم فروشنده مستقیم بود هم طرفدار دارایی",
		result: "فروش مستقیم نهادی قرارداد سرمایه‌گذاری شد",
		lesson: "جدا خواندن دارایی، فروش پله‌ای را نجات نداد."
	}
];
var REFUSES = [
	"مدیر صوری و امضای استعفا در کشو",
	"انتقال نمایشی به کیف «بنیاد» که کلیدش پیش تیم است",
	"بند محرمانگی روی اینکه واقعاً کی کنترل می‌کند",
	"فروش با واسطه که عواید را به میزان برگرداند",
	"جمله «سازمان بورس این دو را یکی نمی‌بیند» — این دفتر این جمله را تولید نمی‌کند"
];
var ACCEPTS = [
	"اسناد ثبت عمومی دو شخص، قابل‌چک برای غریبه",
	"فهرست زنده امضاکنندگان، بدون همپوشانی",
	"عهدنامه منفی: میزان نه می‌فروشد، نه بازارگردانی می‌کند، نه سود می‌دهد",
	"عواید فروش داخل قفل نقدینگی، نه هزینه جاری میزان",
	"گرنت یک‌طرفه بنیاد به ابزار متن‌باز، بدون کرسی در هیئت میزان"
];
var DISCLAIMER = "این دفتر تشخیص حقوقی، مجوز، یا مصونیت در برابر سازمان بورس و اوراق بهادار یا هر نهاد دیگر نیست. جدایی دو شخص یک واقعیت قابل‌حسابرسی است، نه یک برچسب. اگر کنترل، عواید یا بازاریابی مشترک بماند، نگاه ماهوی همچنان هر دو را یکی می‌بیند.";
function defaultAssumptions() {
	return {
		marketingLiquid: true,
		reserveLiquid: true,
		treasurySameSigners: true,
		emissionMonths: 0,
		burnMonthly: 12e3,
		lpFromRaise: true
	};
}
function defaultDimensions() {
	return Object.fromEntries(DIMENSIONS.map((d) => [d.id, d.score]));
}
function defaultChambers() {
	return Object.fromEntries(CHAMBERS.map((d) => [d.id, d.score]));
}
function defaultTests() {
	return Object.fromEntries(TESTS.map((t) => [t.id, t.defaultOn]));
}
function num(n, digits = 0) {
	return n.toLocaleString("en-US", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
}
function usd(n, digits = 0) {
	return (n < 0 ? "-" : "") + "$" + num(Math.abs(n), digits);
}
function px(milli) {
	return usd(milli / 1e3, milli % 10 === 0 ? 2 : 3);
}
function one(n) {
	return num(Math.round(n * 10) / 10, 1);
}
function when(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23",
		timeZone: "Asia/Tehran"
	}).format(d);
}
function icoProceeds() {
	return TIERS.reduce((sum, tier) => sum + tier.tokens * tier.milli / 1e3, 0);
}
function catchup(month, cliff, full, amount) {
	if (month < cliff || full <= cliff) return 0;
	if (month >= full) return amount;
	const atCliff = amount * cliff / full;
	return atCliff + (amount - atCliff) * ((month - cliff) / (full - cliff));
}
function floatAt(month, a) {
	const ico = 1e5;
	const marketing = a.marketingLiquid ? 1e6 : catchup(month, 12, 24, 1e6);
	const reserve = a.reserveLiquid ? 235e4 : catchup(month, 12, 24, 235e4);
	const team = catchup(month, 12, 24, 15e5);
	const partners = catchup(month, 6, 12, 5e5);
	const staking = a.emissionMonths === 0 ? 0 : Math.min(25e5, 25e5 * month / a.emissionMonths);
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
		float: ico + insiderLiquid
	};
}
function controlPct(a) {
	let pct = 54;
	if (a.treasurySameSigners) pct += 20;
	return pct;
}
function sellImpact(dx, x = LP_TOKENS, y = LP_USD) {
	const spot = y / x;
	const dy = y * dx / (x + dx);
	const newPrice = (y - dy) / (x + dx);
	return {
		usdOut: dy,
		newPrice,
		drop: 1 - newPrice / spot
	};
}
function spotMove(drop, x = LP_TOKENS, y = LP_USD) {
	const tokens = x * (1 / Math.sqrt(1 - drop) - 1);
	const hit = sellImpact(tokens, x, y);
	return {
		tokens,
		usd: hit.usdOut,
		newPrice: hit.newPrice,
		drop: hit.drop
	};
}
function barParts(a) {
	return [
		{
			id: "ico",
			label: "عموم",
			pct: 1,
			tone: "stamp"
		},
		{
			id: "lp",
			label: "استخر",
			pct: .5,
			tone: "brass"
		},
		{
			id: "team",
			label: "تیم",
			pct: 15,
			tone: "faint"
		},
		{
			id: "partners",
			label: "شرکا",
			pct: 5,
			tone: "faint"
		},
		{
			id: "treasury",
			label: "خزانه",
			pct: 20,
			tone: "faint"
		},
		{
			id: "stake",
			label: "استیکینگ",
			pct: 25,
			tone: "faint"
		},
		{
			id: "mkt",
			label: "بازاریابی",
			pct: 10,
			tone: a.marketingLiquid ? "stamp" : "faint"
		},
		{
			id: "reserve",
			label: "رزرو",
			pct: 23.5,
			tone: a.reserveLiquid ? "stamp" : "faint"
		}
	];
}
function avg(map, ids) {
	return ids.reduce((sum, id) => sum + (map[id] ?? 0), 0) / ids.length;
}
function hints(a) {
	const float = floatAt(0, a).float;
	const months = (a.lpFromRaise ? icoProceeds() - LP_USD : icoProceeds()) / a.burnMonthly;
	let dump = 2;
	if (float <= 15e4) dump = 7;
	else if (float <= 4e5) dump = 5;
	else if (float <= 1e6) dump = 3;
	const token = !a.marketingLiquid && !a.reserveLiquid ? 5 : 3;
	return {
		dump,
		token,
		stage: months < 1 ? 2 : 3
	};
}
function derive(input) {
	const { assumptions: a } = input;
	const health = avg(input.dimensions, DIMENSIONS.map((d) => d.id));
	const chambersAvg = avg(input.chambers, CHAMBERS.map((d) => d.id));
	const blocking = TESTS.filter((t) => t.kind === "block");
	const passedBlocks = blocking.filter((t) => input.tests[t.id]).length;
	const independence = passedBlocks / blocking.length;
	const honesty = input.tests.lookthrough ? 0 : 1.2;
	const risk = Math.min(10, Math.max(0, (10 - health) * .55 + (1 - independence) * 10 * .35 + (10 - chambersAvg) * .1 + honesty));
	const now = floatAt(0, a);
	const fdv = SUPPLY * MARK;
	const mcapFloat = now.float * MARK;
	const mcapPublic = now.ico * MARK;
	const tvl = LP_USD * 2;
	const raise = icoProceeds();
	const cash = a.lpFromRaise ? raise - LP_USD : raise;
	const runwayMonths = cash / a.burnMonthly;
	const months = [
		0,
		3,
		6,
		12,
		18,
		24
	];
	let prev = 0;
	const schedule = months.map((month) => {
		const parts = floatAt(month, a);
		const row = {
			month,
			float: parts.float,
			added: month === 0 ? parts.float : parts.float - prev,
			insider: parts.insiderLiquid,
			staking: parts.staking,
			lpOpen: parts.lpWithdrawable > 0,
			notional: parts.float * MARK
		};
		prev = parts.float;
		return row;
	});
	const inflationAnnual = a.emissionMonths === 0 ? 0 : 3e7 / a.emissionMonths / SUPPLY * 100;
	const lockedAsideTreasury = SUPPLY - now.float - 2e6;
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
		depth2: spotMove(.02),
		depth10: spotMove(.1),
		depth20: spotMove(.2),
		sellPublic: sellImpact(1e5),
		sellReserveSlice: sellImpact(235e3),
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
		assumptions: a
	};
}
function verdictCopy(d) {
	const wall = d.passedBlocks === d.blockTotal ? "هر هشت قفل ساختاری روشن است. نقش قابل‌نوشتن «حامی افشاشده» است. این مصونیت نیست." : d.passedBlocks === 0 ? "دیوار صفر از هشت است. میزان و «هیچ» امروز یک شخص‌اند. برچسب حامی جمله است، ساختار نیست." : `دیوار ${d.passedBlocks} از ${d.blockTotal} روشن است. تا هر هشت قفل واقعی شود، خوانش ماهوی همچنان یک شخص است.`;
	return `سلامت ${one(d.health)} از ۱۰. ریسک ${one(d.risk)} از ۱۰. ${wall} شناور روز اول تحت همین فرض‌ها ${num(d.floatTokens)} توکن است، روبه‌روی عمقی که با حدود ${usd(d.depth2.usd)} دو درصد جابه‌جا می‌شود. بازاری وجود ندارد. این‌ها مدل تخصیص است، نه تیکر.`;
}
function riskLines(d) {
	const lines = [];
	if (d.assumptions.marketingLiquid || d.assumptions.reserveLiquid) lines.push(`شناور داخلی بی‌قفل ${num(d.insiderLiquid)} توکن است. استخر با حدود ${usd(Math.round(d.depth2.usd))} دو درصد حرکت می‌کند.`);
	if (d.passedBlocks < d.blockTotal) lines.push("کنترل، فروش و دفتر عملیاتی هنوز جدا نشده‌اند. سازمان بورس می‌تواند میزان و «هیچ» را یک عرضه ببیند. گفتن «طرفدار» این خوانش را عوض نمی‌کند.");
	lines.push(`سقف جمع‌آوری ${usd(d.raise)} است و نقد عملیاتی، اگر استخر از همین محل پر شود، ${usd(d.cash)} — حدود ${num(d.runwayDays)} روز با هزینه ماهانه ${usd(d.assumptions.burnMonthly)}.`);
	lines.push("ماه ۶ قفل استخر تمام می‌شود. برای این عمق، شش ماه تعارف است نه دفاع.");
	if (d.assumptions.emissionMonths === 0) lines.push("بیست‌وپنج درصد استیکینگ منحنی ندارد. چک سفید تورمی است، حتی اگر امروز خاموش فرض شود.");
	else lines.push(`انتشار فرضی، تورم سالانه حدود ${one(d.inflationAnnual)}٪ عرضه کل است. روی شناور نازک، اثرش تندتر است.`);
	lines.push("ضریب سود و فروش تعریف نمی‌شود تا درآمد خدمت ثبت شود، نه انتشار توکن.");
	return lines;
}
function personLabel(d) {
	return d.passedBlocks === d.blockTotal ? "حامی افشاشده" : "یک شخص";
}
function seedSnapshot() {
	const assumptions = defaultAssumptions();
	const dimensions = defaultDimensions();
	const chambers = defaultChambers();
	const tests = defaultTests();
	const d = derive({
		dimensions,
		chambers,
		tests,
		assumptions,
		revenue: 0,
		earnings: 0
	});
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
		dependence: d.dependence
	};
}
function reportText(input) {
	const d = derive(input);
	const lines = [];
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
	for (const item of DIMENSIONS) lines.push(`${item.label}: ${input.dimensions[item.id] ?? "—"} / 10`);
	lines.push(`میانگین سلامت: ${one(d.health)} | ریسک ترکیبی: ${one(d.risk)}`);
	lines.push("");
	lines.push("شاخص الگوی نهادهای حل اختلاف");
	for (const item of CHAMBERS) lines.push(`${item.label}: ${input.chambers[item.id] ?? "—"} / 10`);
	lines.push(`میانگین: ${one(d.chambersAvg)}`);
	lines.push("");
	lines.push("دیوار میزان / هیچ");
	for (const test of TESTS) lines.push(`${input.tests[test.id] ? "روشن" : "خاموش"} — ${test.title}`);
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
var memory = /* @__PURE__ */ new Map();
function storage() {
	if (typeof window === "undefined") return {
		getItem: (name) => memory.get(name) ?? null,
		setItem: (name, value) => {
			memory.set(name, value);
		},
		removeItem: (name) => {
			memory.delete(name);
		}
	};
	return localStorage;
}
function clampScore(n) {
	return Math.min(10, Math.max(1, Math.round(n)));
}
var useAether = create()(persist((set, get) => ({
	tab: "verdict",
	setTab: (tab) => set({ tab }),
	tests: defaultTests(),
	toggleTest: (id) => set((s) => ({ tests: {
		...s.tests,
		[id]: !s.tests[id]
	} })),
	dimensions: defaultDimensions(),
	setDimension: (id, value) => set((s) => ({ dimensions: {
		...s.dimensions,
		[id]: clampScore(value)
	} })),
	chambers: defaultChambers(),
	setChamber: (id, value) => set((s) => ({ chambers: {
		...s.chambers,
		[id]: clampScore(value)
	} })),
	assumptions: defaultAssumptions(),
	patchAssumptions: (patch) => set((s) => ({ assumptions: {
		...s.assumptions,
		...patch
	} })),
	revenue: 0,
	earnings: 0,
	setRevenue: (n) => set({ revenue: Number.isFinite(n) ? Math.max(0, n) : 0 }),
	setEarnings: (n) => set({ earnings: Number.isFinite(n) ? n : 0 }),
	snapshots: [seedSnapshot()],
	draftLabel: "",
	draftNote: "",
	setDraftLabel: (v) => set({ draftLabel: v }),
	setDraftNote: (v) => set({ draftNote: v }),
	saveSnapshot: () => {
		const s = get();
		const d = derive({
			dimensions: s.dimensions,
			chambers: s.chambers,
			tests: s.tests,
			assumptions: s.assumptions,
			revenue: s.revenue,
			earnings: s.earnings
		});
		const snap = {
			id: `snap-${Date.now()}`,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			label: s.draftLabel.trim() || "حکم بدون عنوان",
			note: s.draftNote.trim(),
			dimensions: { ...s.dimensions },
			chambers: { ...s.chambers },
			tests: { ...s.tests },
			assumptions: { ...s.assumptions },
			health: d.health,
			risk: d.risk,
			passedBlocks: d.passedBlocks,
			floatTokens: d.floatTokens,
			dependence: d.dependence
		};
		set({
			snapshots: [...s.snapshots, snap].slice(-30),
			draftLabel: "",
			draftNote: ""
		});
	},
	deleteSnapshot: (id) => set((s) => ({ snapshots: id === "seed-zero" ? s.snapshots : s.snapshots.filter((item) => item.id !== id) })),
	applyHints: () => {
		const next = hints(get().assumptions);
		set((s) => ({ dimensions: {
			...s.dimensions,
			...next
		} }));
	},
	resetScores: () => set({
		tests: defaultTests(),
		dimensions: defaultDimensions(),
		chambers: defaultChambers(),
		assumptions: defaultAssumptions(),
		revenue: 0,
		earnings: 0
	})
}), {
	name: "mizan-aether-crm-v1",
	skipHydration: true,
	storage: createJSONStorage(storage),
	partialize: (s) => ({
		tab: s.tab,
		tests: s.tests,
		dimensions: s.dimensions,
		chambers: s.chambers,
		assumptions: s.assumptions,
		revenue: s.revenue,
		earnings: s.earnings,
		snapshots: s.snapshots
	})
}));
function useDerived() {
	const input = useAether(useShallow((s) => ({
		dimensions: s.dimensions,
		chambers: s.chambers,
		tests: s.tests,
		assumptions: s.assumptions,
		revenue: s.revenue,
		earnings: s.earnings
	})));
	return (0, import_react.useMemo)(() => derive(input), [input]);
}
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Block({ kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-line py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-brass",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-xl font-semibold text-bone",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children
			})
		]
	});
}
function Metric({ label, value, note, tone = "bone" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-panel px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-mute",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				dir: "ltr",
				className: cx("mt-1 text-right font-mono text-xl text-bone tabular-nums", tone === "brass" ? "text-brass" : tone === "stamp" ? "text-stamp" : "text-bone"),
				children: value
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-5 text-faint",
				children: note
			}) : null
		]
	});
}
function Table({ headers, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[40rem] border-collapse text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-line text-xs text-mute",
				children: headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					scope: "col",
					className: "px-2 py-2 text-right font-medium",
					children: header
				}, header))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-line",
				children: row.cells.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					dir: index === 0 ? "rtl" : "ltr",
					className: cx("px-2 py-2 text-right align-top text-bone", index === 0 ? "" : "font-mono tabular-nums"),
					children: cell
				}, `${row.key}-${index}`))
			}, row.key)) })]
		})
	});
}
function Note({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-s-2 border-brass ps-3 text-sm leading-6 text-mute",
		children
	});
}
function Toggle({ on, label, detail, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: cx("flex min-h-11 w-full flex-col gap-1 border px-3 py-3 text-right transition-colors duration-150", on ? "border-brass bg-panel" : "border-line bg-panel"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-bone",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cx("shrink-0 font-mono text-xs", on ? "text-brass" : "text-stamp"),
				children: on ? "روشن" : "خاموش"
			})]
		}), detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs leading-5 text-mute",
			children: detail
		}) : null]
	});
}
function ScoreSlider({ label, value, why, hint, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block border-b border-line py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-bone",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					dir: "ltr",
					className: "font-mono text-lg text-brass tabular-nums",
					children: value
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 1,
				max: 10,
				step: 1,
				value,
				"aria-label": label,
				onChange: (event) => onChange(Number(event.target.value)),
				className: "mt-2 w-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-xs leading-5 text-mute",
				children: why
			}),
			hint !== void 0 && hint !== value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-1 block font-mono text-xs text-faint",
				children: ["مدل با فرض‌های فعلی: ", hint]
			}) : null
		]
	});
}
function StackBar({ parts }) {
	const toneClass = {
		stamp: "bg-stamp",
		brass: "bg-brass",
		faint: "bg-faint"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir: "ltr",
		className: "flex h-3 w-full",
		"aria-hidden": "true",
		children: parts.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: toneClass[part.tone],
			style: { width: `${part.pct}%` }
		}, part.id))
	});
}
function VBars({ rows, max }) {
	const peak = max ?? Math.max(...rows.map((row) => row.value), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir: "ltr",
		className: "flex h-40 items-end gap-2",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full min-w-0 flex-1 flex-col justify-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-brass",
				style: { height: `${Math.max(2, row.value / peak * 100)}%` }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pt-2 text-center font-mono text-xs text-mute",
				children: row.label
			})]
		}, row.label))
	});
}
function Proposals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-3",
		children: PROPOSALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border border-line bg-panel px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-base font-semibold text-bone",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-brass",
						children: [item.n, ". "]
					}), item.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-stamp",
					children: item.leverage
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-mute",
				children: item.body
			})]
		}, item.n))
	});
}
function MoneyField({ label, value, onChange, allowNegative = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-mute",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			inputMode: "decimal",
			value: value === 0 ? "" : String(value),
			placeholder: "خالی = صفر",
			onChange: (event) => {
				const raw = event.target.value.replace(/,/g, "").replace(/[^0-9.-]/g, "");
				if (raw === "" || raw === "-" || raw === ".") {
					onChange(0);
					return;
				}
				const n = Number(raw);
				if (!Number.isFinite(n)) return;
				onChange(allowNegative ? n : Math.max(0, n));
			},
			className: "mt-1 min-h-11 w-full border border-line bg-canvas px-3 font-mono text-sm text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
			dir: "ltr"
		})]
	});
}
function Chambers({ d }) {
	const chambers = useAether((s) => s.chambers);
	const setChamber = useAether((s) => s.setChamber);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
		kicker: "شاخص",
		title: "همان سؤال‌هایی که نهاد جدی می‌پرسد",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Chambers، ICC، LCIA، SIAC و HKIAC این‌جا لوگو نیستند. این فهرست چیزهایی است که قبل از سپردن اختلاف باید جواب داشته باشد. نمره پیش‌فرض یعنی مدرک ندیده‌ام. مدرک آمد، نمره را عوض کن و در CRM ذخیره کن." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-sm text-brass",
				children: [
					"میانگین ",
					one(d.chambersAvg),
					" از ۱۰"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: CHAMBERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreSlider, {
				label: item.label,
				value: chambers[item.id] ?? item.score,
				why: item.why,
				onChange: (value) => setChamber(item.id, value)
			}, item.id)) })
		]
	}) });
}
function Crm() {
	const snapshots = useAether((s) => s.snapshots);
	const draftLabel = useAether((s) => s.draftLabel);
	const draftNote = useAether((s) => s.draftNote);
	const setDraftLabel = useAether((s) => s.setDraftLabel);
	const setDraftNote = useAether((s) => s.setDraftNote);
	const saveSnapshot = useAether((s) => s.saveSnapshot);
	const deleteSnapshot = useAether((s) => s.deleteSnapshot);
	const resetScores = useAether((s) => s.resetScores);
	const [open, setOpen] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
		kicker: "CRM",
		title: "روند حکم‌ها",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "هر ذخیره، نمره‌ها، قفل‌های دیوار، فرض‌ها و ریسک همان لحظه را نگه می‌دارد. داده روی همین مرورگر می‌ماند. ارزیابی حقوقی را جهان‌نویس نمی‌کنم." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-mute",
						children: "عنوان حکم"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draftLabel,
						onChange: (event) => setDraftLabel(event.target.value),
						placeholder: "مثلاً بعد از قفل رزرو",
						className: "mt-1 min-h-11 w-full border border-line bg-panel px-3 text-sm text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-mute",
						children: "یادداشت تغییر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: draftNote,
						onChange: (event) => setDraftNote(event.target.value),
						rows: 3,
						placeholder: "چه چیزی نسبت به حکم قبلی عوض شد؟",
						className: "mt-1 w-full border border-line bg-panel px-3 py-3 text-sm leading-6 text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: saveSnapshot,
						className: "min-h-11 bg-brass px-4 text-sm font-medium text-canvas",
						children: "ذخیره حکم"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: resetScores,
						className: "min-h-11 border border-line px-4 text-sm text-bone",
						children: "برگرداندن نمره‌ها به صفر"
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
		kicker: "روند",
		title: "سلامت در گذر حکم‌ها",
		children: [
			snapshots.length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mute",
				children: "یک مبدأ هست. حکم بعدی که ذخیره شود، شیب دیده می‌شود."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VBars, {
					max: 10,
					rows: snapshots.map((snap, index) => ({
						label: String(index),
						value: snap.health
					}))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "border-b border-line text-xs text-mute",
						children: [
							"زمان",
							"عنوان",
							"سلامت",
							"ریسک",
							"دیوار",
							"شناور",
							"عمل"
						].map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "px-2 py-2 text-right font-medium",
							children: header
						}, header))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: snapshots.map((snap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 font-mono text-xs text-faint",
								dir: "ltr",
								children: when(snap.at)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 text-right text-bone",
										"aria-expanded": open === snap.id,
										onClick: () => setOpen(open === snap.id ? "" : snap.id),
										children: snap.label
									}),
									snap.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-5 text-mute",
										children: snap.note
									}) : null,
									open === snap.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-3 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "grid gap-1 text-xs text-mute",
											children: DIMENSIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-bone",
													children: snap.dimensions[item.id]
												})]
											}, item.id))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "grid gap-1 text-xs text-mute",
											children: CHAMBERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-bone",
													children: snap.chambers[item.id]
												})]
											}, item.id))
										})]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 font-mono tabular-nums",
								dir: "ltr",
								children: one(snap.health)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 font-mono text-stamp tabular-nums",
								dir: "ltr",
								children: one(snap.risk)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-3 font-mono tabular-nums",
								dir: "ltr",
								children: [snap.passedBlocks, "/8"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 font-mono tabular-nums",
								dir: "ltr",
								children: num(Math.round(snap.floatTokens))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: snap.id === "seed-zero",
									onClick: () => deleteSnapshot(snap.id),
									className: "min-h-11 px-2 text-xs text-faint disabled:cursor-not-allowed disabled:opacity-40",
									children: snap.id === "seed-zero" ? "مبدأ" : "حذف"
								})
							})
						]
					}, snap.id)) })]
				})
			})
		]
	})] });
}
function Economy({ d }) {
	const patch = useAether((s) => s.patchAssumptions);
	const revenue = useAether((s) => s.revenue);
	const earnings = useAether((s) => s.earnings);
	const setRevenue = useAether((s) => s.setRevenue);
	const setEarnings = useAether((s) => s.setEarnings);
	const a = d.assumptions;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۱",
			title: "فرض‌هایی که عدد را عوض می‌کنند",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: a.marketingLiquid,
							label: "بازاریابی روز اول آزاد است",
							detail: "خاموش = همان قفل استرس تیم، ۱۲ تا ۲۴ ماه",
							onClick: () => patch({ marketingLiquid: !a.marketingLiquid })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: a.reserveLiquid,
							label: "رزرو روز اول آزاد است",
							detail: "خاموش = قفل ۱۲ تا ۲۴ ماه. پیش‌فرض طرح، خاموش نیست.",
							onClick: () => patch({ reserveLiquid: !a.reserveLiquid })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: a.treasurySameSigners,
							label: "خزانه هم‌امضا با تیم میزان است",
							detail: "روی کنترل ساختاری اثر دارد، روی شناور روز اول نه.",
							onClick: () => patch({ treasurySameSigners: !a.treasurySameSigners })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: a.lpFromRaise,
							label: "پنج هزار دلار استخر از محل فروش می‌آید",
							detail: "روشن یعنی نقد عملیاتی ۸٬۹۵۰ منهای ۵٬۰۰۰ است.",
							onClick: () => patch({ lpFromRaise: !a.lpFromRaise })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-mute",
						children: "منحنی استیکینگ — در طرح اعلام نشده"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							{
								id: 0,
								label: "خاموش"
							},
							{
								id: 36,
								label: "۳۶ ماه"
							},
							{
								id: 48,
								label: "۴۸ ماه"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": a.emissionMonths === item.id,
							onClick: () => patch({ emissionMonths: item.id }),
							className: a.emissionMonths === item.id ? "min-h-11 border border-brass bg-brass px-3 text-sm text-canvas" : "min-h-11 border border-line px-3 text-sm text-bone",
							children: item.label
						}, item.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-mute",
								children: "هزینه ماهانه فرضی عملیات"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 2e3,
								max: 4e4,
								step: 1e3,
								value: a.burnMonthly,
								"aria-label": "هزینه ماهانه",
								onChange: (event) => patch({ burnMonthly: Number(event.target.value) }),
								className: "mt-2 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "ltr",
								className: "mt-1 block text-right font-mono text-sm text-brass",
								children: usd(a.burnMonthly)
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-5 text-faint",
					children: "مدل استرس تیم: تا ماه ۱۲ صفر، در ماه ۱۲ نیمی، در ماه ۲۴ همه. شرکا: ماه ۶ نیمی، ماه ۱۲ همه. این بدبینانه است چون عبارت «۱۲ تا ۲۴ ماه» مبهم است."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۲",
			title: "عرضه",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"قلم",
						"توکن",
						"سهم"
					],
					rows: [
						{
							key: "supply",
							cells: [
								"عرضه کل",
								num(SUPPLY),
								"100%"
							]
						},
						{
							key: "public",
							cells: [
								"در گردش عمومی (فقط فروش)",
								num(d.publicFloat),
								`${one(d.publicFloat / SUPPLY * 100)}%`
							]
						},
						{
							key: "insider",
							cells: [
								"در گردش داخلی بی‌قفل",
								num(d.insiderLiquid),
								`${one(d.insiderLiquid / SUPPLY * 100)}%`
							]
						},
						{
							key: "lock",
							cells: [
								"قفل‌شده، به‌جز خزانه",
								num(d.lockedContract),
								`${one(d.lockedContract / SUPPLY * 100)}%`
							]
						},
						{
							key: "treasury",
							cells: [
								"خزانه، خارج از برنامه آزادسازی",
								num(2e6),
								"20%"
							]
						},
						{
							key: "burn",
							cells: [
								"سوخته",
								num(d.burned),
								"0%"
							]
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"سطل",
							"توکن",
							"درصد",
							"قفل اعلام‌شده",
							"نهنگ؟"
						],
						rows: BUCKETS.map((bucket) => ({
							key: bucket.id,
							cells: [
								bucket.name,
								num(bucket.tokens),
								`${one(bucket.tokens / SUPPLY * 100)}%`,
								bucket.lock,
								bucket.tokens > 1e5 ? "بله، بیش از ۱٪" : "نه"
							]
						}))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs leading-5 text-faint",
					children: [
						"شش سطل بالای آستانه یک درصدند. اگر کلید انتشار استیکینگ هم دست همان تیم باشد، کنترل عملی به نزدیک کل عرضه می‌رسد. آن را داخل ",
						one(d.control),
						"٪ نیاوردم چون کلیدی افشا نشده."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۳",
			title: "قیمت، ارزش، حجم",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"قلم",
					"مقدار",
					"معنی"
				],
				rows: [
					{
						key: "mark",
						cells: [
							"قیمت علامت",
							usd(MARK, 2),
							`${usd(LP_USD)} در برابر ${num(LP_TOKENS)} توکن استخر`
						]
					},
					{
						key: "ath",
						cells: [
							"ATH",
							"—",
							"معامله‌ای ثبت نشده"
						]
					},
					{
						key: "atl",
						cells: [
							"ATL",
							"—",
							"معامله‌ای ثبت نشده"
						]
					},
					{
						key: "v24",
						cells: [
							"حجم ۲۴ ساعت",
							"—",
							"بازار وجود ندارد"
						]
					},
					{
						key: "v7",
						cells: [
							"حجم ۷ روز",
							"—",
							"بازار وجود ندارد"
						]
					},
					{
						key: "mcapf",
						cells: [
							"ارزش شناور بدترین حالت",
							usd(d.mcapFloat),
							"شناور روز اول ضربدر ۰٫۱۰"
						]
					},
					{
						key: "mcapp",
						cells: [
							"ارزش شناور عمومی",
							usd(d.mcapPublic),
							"فقط ۱۰۰٬۰۰۰ توکن فروش"
						]
					},
					{
						key: "fdv",
						cells: [
							"FDV",
							usd(d.fdv),
							"برچسب. بازار هنوز رأی نداده"
						]
					},
					{
						key: "ratio",
						cells: [
							"FDV / ارزش شناور",
							one(d.fdvToMcap),
							"قفل کردن رزرو این نسبت را بزرگ‌تر و dump را کوچک‌تر می‌کند"
						]
					}
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "نسبت FDV به ارزش بازار را پرستش نکن. قفل داخلی‌ها صورت کسر را ثابت و مخرج را کوچک می‌کند. عدد زشت‌تر می‌شود و خطر فروش کمتر. عمق و شناور قابل‌فروش را ببین." })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "۰۴",
			title: "فروش عمومی",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"پله",
					"توکن",
					"قیمت",
					"جمع"
				],
				rows: [...TIERS.map((tier) => ({
					key: tier.name,
					cells: [
						tier.name,
						num(tier.tokens),
						px(tier.milli),
						usd(tier.tokens * tier.milli / 1e3)
					]
				})), {
					key: "sum",
					cells: [
						"سقف",
						num(1e5),
						"—",
						usd(d.raise)
					]
				}]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۵",
			title: "TVL و ضریب‌ها",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["قلم", "مقدار"],
					rows: [
						{
							key: "tvl",
							cells: ["TVL استخر (دو طرف)", usd(d.tvl)]
						},
						{
							key: "mt",
							cells: ["ارزش شناور / TVL", one(d.mcapToTvl)]
						},
						{
							key: "ft",
							cells: ["FDV / TVL", one(d.fdvToTvl)]
						},
						{
							key: "ps",
							cells: ["P/S روی ارزش شناور", d.ps === null ? "تعریف‌نشده — درآمد صفر" : one(d.ps)]
						},
						{
							key: "pe",
							cells: ["P/E روی ارزش شناور", d.pe === null ? "تعریف‌نشده — سود افشا نشده" : one(d.pe)]
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyField, {
						label: "درآمد سالانه خدمت، دلار",
						value: revenue,
						onChange: setRevenue
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyField, {
						label: "سود سالانه، دلار",
						value: earnings,
						onChange: setEarnings,
						allowNegative: true
					})]
				}),
				earnings < 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-stamp",
					children: "زیان ثبت شده. ضریب سود عمداً ساخته نمی‌شود."
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۶",
			title: "عمق واقعی",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"سناریو",
					"توکن",
					"دلار خارج‌شده",
					"قیمت بعد",
					"افت"
				],
				rows: [
					{
						key: "2",
						cells: [
							"تا افت ۲٪ قیمت علامت",
							num(Math.round(d.depth2.tokens)),
							usd(d.depth2.usd, 0),
							usd(d.depth2.newPrice, 3),
							`${one(d.depth2.drop * 100)}%`
						]
					},
					{
						key: "10",
						cells: [
							"تا افت ۱۰٪",
							num(Math.round(d.depth10.tokens)),
							usd(d.depth10.usd, 0),
							usd(d.depth10.newPrice, 3),
							`${one(d.depth10.drop * 100)}%`
						]
					},
					{
						key: "20",
						cells: [
							"تا افت ۲۰٪",
							num(Math.round(d.depth20.tokens)),
							usd(d.depth20.usd, 0),
							usd(d.depth20.newPrice, 3),
							`${one(d.depth20.drop * 100)}%`
						]
					},
					{
						key: "ico",
						cells: [
							"فروش کل عرضه عمومی",
							num(1e5),
							usd(d.sellPublic.usdOut, 0),
							usd(d.sellPublic.newPrice, 3),
							`${one(d.sellPublic.drop * 100)}%`
						]
					},
					{
						key: "res",
						cells: [
							"فروش ۱۰٪ رزرو",
							num(235e3),
							usd(d.sellReserveSlice.usdOut, 0),
							usd(d.sellReserveSlice.newPrice, 4),
							`${one(d.sellReserveSlice.drop * 100)}%`
						]
					},
					{
						key: "lp",
						cells: [
							"برداشت کامل استخر در ماه ۶",
							num(LP_TOKENS),
							usd(LP_USD),
							"بازار تمام",
							"—"
						]
					}
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-5 text-faint",
				children: "مدل، استخر حاصل‌ضرب ثابت است با ۵۰٬۰۰۰ توکن و ۵٬۰۰۰ دلار. کارمزد و مسیر چنداستخره را ندارم چون وجود ندارند. Chain ID 505 ایندکسر قابل اتکایی در این دفتر ندارد؛ قیمت ساختگی نمی‌سازم."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "۰۷",
			title: "فشار فروش — ماه ۰ تا ۲۴",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VBars, { rows: d.schedule.map((row) => ({
					label: String(row.month),
					value: row.float
				})) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"ماه",
							"شناور تجمعی",
							"جدید",
							"داخلی",
							"استیکینگ آزادشده",
							"استخر",
							"ارزش اسمی روی ۰٫۱۰"
						],
						rows: d.schedule.map((row) => ({
							key: String(row.month),
							cells: [
								String(row.month),
								num(Math.round(row.float)),
								num(Math.round(row.added)),
								num(Math.round(row.insider)),
								num(Math.round(row.staking)),
								row.lpOpen ? "قابل تخلیه" : "قفل",
								usd(Math.round(row.notional))
							]
						}))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs leading-5 text-faint",
					children: [
						"ارزش اسمی در ماه‌های بعد دروغ راحت است. همان فروش عمومی، قیمت علامت را حدود ",
						one(d.sellPublic.drop * 100),
						"٪ پایین می‌آورد. ستون دلار را به‌عنوان سقف خیالی بخوان، نه پیش‌بینی."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "۰۸",
			title: "تورم، سوخت، سرعت، باند فرود",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"قلم",
					"مقدار",
					"خوانش"
				],
				rows: [
					{
						key: "burn",
						cells: [
							"نرخ سوزاندن توکن",
							"۰",
							"مکانیزمی اعلام نشده"
						]
					},
					{
						key: "inf",
						cells: [
							"تورم سالانه عرضه",
							d.inflationAnnual === 0 ? "۰٪ اعلام‌شده" : `${one(d.inflationAnnual)}%`,
							d.assumptions.emissionMonths === 0 ? "منحنی خاموش فرض شده چون وجود ندارد" : "فقط اگر انتشار خطی واقعاً تصویب شود"
						]
					},
					{
						key: "vel",
						cells: [
							"Velocity",
							"—",
							"حجم تقسیم بر ارزش. حجم صفر است"
						]
					},
					{
						key: "cash",
						cells: [
							"نقد بعد از استخر",
							usd(d.cash),
							a.lpFromRaise ? "فروش منهای ۵٬۰۰۰ دلار" : "استخر از جیب جدا فرض شد"
						]
					},
					{
						key: "run",
						cells: [
							"باند فرود",
							`${num(d.runwayDays)} روز`,
							`هزینه ماهانه ${usd(a.burnMonthly)}`
						]
					}
				]
			})
		})
	] });
}
function Mizan({ d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "شخص اول",
			title: "میزان چه هست و چه نیست",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-brass",
						children: "هست"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-2 text-sm leading-6 text-mute",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "دفتر عملیات کیفیت رأی: تخصص، پاسخ، نیمکت، آگاهی تجاری، بی‌طرفی، اجرا، سرعت، ثبات خروجی، شفافیت، رویه." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "فروشنده خدمت. واحد پول رابطه‌اش با مشتری فاکتور است، نه شمع قیمت." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "اگر دیوار واقعی شود، می‌تواند گیرنده گرنت ابزار متن‌باز باشد. گیرنده گرنت مالک گرنت‌دهنده نیست." })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-stamp",
						children: "نیست"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-2 text-sm leading-6 text-mute",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ناشر «هیچ»، بازارگردان «هیچ»، یا قول‌دهنده قیمت «هیچ»." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "شریکی که سود پرونده را به دارنده توکن پاس بدهد. آن پاس، دیوار را برمی‌دارد." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "یک شخص با دو نام. امروز، تا قفل‌ها سند شود، دقیقاً همین است." })
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "وابستگی به «هیچ»",
					value: `${one(d.dependence)} / 10`,
					note: "هدف مدل: زیر ۳، یعنی فاکتور بدون توکن",
					tone: "stamp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "دیوار",
					value: `${d.passedBlocks} / ${d.blockTotal}`,
					note: "زیر ۸، سازمان بورس حق دارد یکی ببیند",
					tone: "stamp"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "خوانش",
			title: "طرفدار، نه دوقلو",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "خوانشی که این دفتر حاضر است بنویسد: میزان خدمات می‌فروشد. «هیچ» فقط اگر شخص، امضا، عواید و سودش جدا باشد می‌تواند حامی مالی ابزار متن‌باز باشد. خوانشی که این دفتر نمی‌نویسد: چون دو اسم دارید، سازمان بورس و اوراق بهادار یکی نمی‌بیند." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-6 text-mute",
				children: "تلگرام و TON را مردم به هم می‌شناسند، ولی نقطه‌ای که شبکه ماند بعد از این بود که اپ دیگر ناشر نبود. ریپل و XRP را هم کنار هم می‌خوانند، و همان نزدیکی در فروش مستقیم نهادی به نفع شرکت تمام نشد. نزدیکی برند مشکل نیست. یکی بودنِ فروش، کنترل و عواید مشکل است. این دفتر بک‌اند میزان است و جدول «هیچ» را همان‌جا نشان می‌دهد دقیقاً تا این نزدیکی پنهان نشود. پنهان‌کاری، دفاع نیست."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "پرونده‌های علنی",
			title: "سه الگو، بدون افسانه",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"پرونده",
					"ساختار",
					"نتیجه",
					"برای این دو"
				],
				rows: PRECEDENTS.map((row) => ({
					key: row.case,
					cells: [
						row.case,
						row.fact,
						row.result,
						row.lesson
					]
				}))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-5 text-faint",
				children: "این‌ها درس پرونده‌های علنی‌اند، نه پیش‌بینی رأی سازمان بورس. قانون ایران را این جدول عوض نمی‌کند."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "محصول",
			title: "لبه، اگر توکن غایب بماند",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-6 text-mute",
				children: "شاخص‌های الگوی Chambers، ICC، LCIA، SIAC و HKIAC برای میزان محصول‌اند: موکل جدی قبل از سپردن پرونده همین‌ها را می‌پرسد. امروز شواهدشان نیست، برای همین نمره‌ها پایین است. اگر میزان همان پرسش‌نامه را روی پرونده واقعی، با نیمکت واقعی و scrutiny واقعی بفروشد، دلیل وجود دارد. اگر دلیل وجود، نمودار قیمت باشد، میزان یک پوسته برای عرضه است و دفتر همین را خواهد نوشت."
			})
		})
	] });
}
function Report({ d }) {
	const dimensions = useAether((s) => s.dimensions);
	const chambers = useAether((s) => s.chambers);
	const tests = useAether((s) => s.tests);
	const assumptions = useAether((s) => s.assumptions);
	const revenue = useAether((s) => s.revenue);
	const earnings = useAether((s) => s.earnings);
	const [at, setAt] = (0, import_react.useState)("2026-10-22T00:00:00.000Z");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAt((/* @__PURE__ */ new Date()).toISOString());
	}, []);
	const text = reportText({
		dimensions,
		chambers,
		tests,
		assumptions,
		revenue,
		earnings,
		at
	});
	const verdict = d.passedBlocks === d.blockTotal ? "قفل‌ها روشن است. نقش «هیچ» نسبت به میزان: حامی افشاشده. مصونیت ادعا نمی‌شود." : "جدایی ادعا شده، اثبات نشده.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl bg-paper px-5 py-8 text-ink md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						navigator.clipboard.writeText(text).then(() => {
							setCopied(true);
							window.setTimeout(() => setCopied(false), 1600);
						}, () => setCopied(false));
					},
					className: "min-h-11 border border-brass-ink px-3 text-sm text-brass-ink",
					children: copied ? "کپی شد" : "کپی متن"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => window.print(),
					className: "min-h-11 border border-rule px-3 text-sm text-ink",
					children: "چاپ"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6 border-b border-rule pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-brass-ink",
						children: "MIZAN / AETHER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold",
						children: "گزارش قابل ارسال"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: "پرونده مرتبط: هیچ · طرف جدا، نه خود شرکت"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base font-semibold text-stamp-ink",
						children: verdict
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "خلاصه اجرایی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6",
					children: verdictCopy(d)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "اعداد کلیدی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperTable, { rows: [
					["عرضه کل / سوخته", `${num(SUPPLY)} / ${num(d.burned)}`],
					["شناور عمومی / داخلی بی‌قفل", `${num(d.publicFloat)} / ${num(d.insiderLiquid)}`],
					["FDV / ارزش شناور بدترین", `${usd(d.fdv)} / ${usd(d.mcapFloat)}`],
					["FDV به ارزش شناور", one(d.fdvToMcap)],
					["TVL / FDV به TVL", `${usd(d.tvl)} / ${one(d.fdvToTvl)}`],
					["عمق ۲٪", usd(Math.round(d.depth2.usd))],
					["سقف فروش / نقد عملیاتی", `${usd(d.raise)} / ${usd(d.cash)}`],
					["باند فرود", `${num(d.runwayDays)} روز`],
					["کنترل ساختاری", `${one(d.control)}%`],
					["P/S / P/E", `${d.ps === null ? "—" : one(d.ps)} / ${d.pe === null ? "—" : one(d.pe)}`]
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "نمره‌ها · ۱۰ یعنی سالم"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperTable, { rows: [
					...DIMENSIONS.map((item) => [item.label, `${dimensions[item.id] ?? "—"} / 10`]),
					["میانگین سلامت", one(d.health)],
					["ریسک ترکیبی", one(d.risk)]
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "شاخص حل اختلاف"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperTable, { rows: [...CHAMBERS.map((item) => [item.label, `${chambers[item.id] ?? "—"} / 10`]), ["میانگین", one(d.chambersAvg)]] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "دیوار"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperTable, { rows: TESTS.map((test) => [test.title, tests[test.id] ? "روشن" : "خاموش"]) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "ریسک‌ها"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-2",
					children: riskLines(d).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-s-2 border-stamp-ink ps-3 text-sm leading-6",
						children: line
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-brass-ink",
					children: "سه پیشنهاد"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-2 grid gap-4",
					children: PROPOSALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							item.n,
							". ",
							item.title,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ms-2 font-mono text-xs font-normal text-stamp-ink",
								children: item.leverage
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-6 text-ink-soft",
						children: item.body
					})] }, item.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border-t border-rule pt-4 text-xs leading-5 text-ink-soft",
				children: DISCLAIMER
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "min-h-11 cursor-pointer text-sm text-brass-ink",
					children: "متن خام برای فوروارد"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-2 overflow-x-auto font-mono text-xs leading-5 whitespace-pre-wrap text-ink",
					children: text
				})]
			})
		]
	});
}
function PaperTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		className: "mt-2 w-full border-collapse text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "border-b border-rule",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				scope: "row",
				className: "py-2 pe-3 text-right font-normal text-ink-soft",
				children: row[0]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				dir: "ltr",
				className: "py-2 text-left font-mono text-ink tabular-nums",
				children: row[1]
			})]
		}, row[0])) })
	});
}
function Scores({ d }) {
	const dimensions = useAether((s) => s.dimensions);
	const setDimension = useAether((s) => s.setDimension);
	const applyHints = useAether((s) => s.applyHints);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
		kicker: "بی‌رحم",
		title: "هفت بُعد، از ۱ تا ۱۰",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "۱۰ یعنی سالم، نه یعنی «ریسک زیاد». مقاومت در برابر dump اگر ۲ باشد یعنی dump آسان است. نمره مال تحلیل است. مدل فقط سه تایش را با فرض قفل عوض می‌کند و تا خودت نخواهی روی نمره دست نمی‌گذارد." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-brass",
					children: [
						"سلامت ",
						one(d.health),
						" · ریسک ",
						one(d.risk)
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: applyHints,
					className: "min-h-11 border border-brass px-3 text-sm text-brass transition-colors duration-150 hover:bg-brass hover:text-canvas",
					children: "سه نمره حساس را با مدل هم‌تراز کن"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: DIMENSIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreSlider, {
				label: item.label,
				value: dimensions[item.id] ?? item.score,
				why: item.why,
				hint: d.hints[item.id],
				onChange: (value) => setDimension(item.id, value)
			}, item.id)) })
		]
	}) });
}
function Verdict({ d }) {
	const setTab = useAether((s) => s.setTab);
	const tone = d.passedBlocks === d.blockTotal ? "brass" : "stamp";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: tone === "stamp" ? "font-mono text-xs text-stamp" : "font-mono text-xs text-brass",
					children: [
						personLabel(d),
						" · دیوار ",
						d.passedBlocks,
						"/",
						d.blockTotal
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold text-bone",
					children: "حکم صفر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-6 text-mute",
					children: verdictCopy(d)
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-brass",
								children: "میزان"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-semibold",
								children: "اپ عملیات"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "درآمد مجاز"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "کارمزد خدمت، scrutiny، اداره seat" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "ممنوع"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "فروش «هیچ»، بازارگردانی، وعده قیمت، سهم سود" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "واقعیت امروز"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "همین دفتر بک‌اند اوست. کنترل مشترک است." })] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center md:flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border border-stamp px-3 py-2 text-center font-mono text-xs text-stamp",
							children: d.passedBlocks === d.blockTotal ? "دیوار روشن" : "دیوار رد شد"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-brass",
								children: "هیچ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-semibold",
								children: "دارایی مرتبط"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "نقش ادعا"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "حامی افشاشده، نه مالک و نه ناشر" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "نقش امروز"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "ابزار همان کنترل، تا قفل‌ها سند شود" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "زنجیره اعلامی"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
										CHAIN_NAME,
										" · ",
										505,
										" · در این دفتر تأیید نشده"
									] })] })
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "سلامت",
						value: `${one(d.health)} / 10`,
						note: "میانگین هفت بُعد",
						tone: d.health >= 7 ? "brass" : "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "ریسک ترکیبی",
						value: `${one(d.risk)} / 10`,
						note: "سلامت، دیوار، چمبرز",
						tone: "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "وابستگی عملیاتی",
						value: `${one(d.dependence)} / 10`,
						note: "۱۰ یعنی میزان بدون توکن نمی‌ایستد",
						tone: "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "کنترل ساختاری",
						value: `${one(d.control)}%`,
						note: d.assumptions.treasurySameSigners ? "با خزانه هم‌امضا" : "بدون خزانه",
						tone: "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "شناور روز اول",
						value: num(d.floatTokens),
						note: `عمومی ${num(d.publicFloat)} · داخلی ${num(d.insiderLiquid)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "عمق واقعی ۲٪",
						value: usd(Math.round(d.depth2.usd)),
						note: "دلار لازم برای تکان ۲٪ قیمت علامت",
						tone: "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "باند فرود",
						value: `${num(d.runwayDays)} روز`,
						note: `نقد ${usd(d.cash)} از سقف ${usd(d.raise)}`,
						tone: "stamp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "FDV اسمی",
						value: usd(d.fdv),
						note: `علامت ${usd(MARK, 2)} × ${num(SUPPLY)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackBar, { parts: d.bars }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-faint",
				children: "سرخ = قابل فروش امروز. برنج = داخل استخر. خاکستری = خارج از دکمه فروش، نه لزوماً امن."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "الگوی قابل‌دفاع، TON بعد از خروج اپ است نه Gram سال ۲۰۲۰، و نه این تصور که ریپل با برچسب «مستقل» فروش مستقیم را سفید کرد. این دفتر تا سندها روشن نشود نقش حامی را امضا نمی‌کند." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "سه اهرم"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("report"),
					className: "min-h-11 border border-brass px-3 text-sm text-brass transition-colors duration-150 hover:bg-brass hover:text-canvas",
					children: "گزارش بساز"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proposals, {})] })
		]
	});
}
function Wall({ d }) {
	const tests = useAether((s) => s.tests);
	const toggle = useAether((s) => s.toggleTest);
	const blocks = TESTS.filter((test) => test.kind === "block");
	const rest = TESTS.filter((test) => test.kind !== "block");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "دیوار",
			title: `${d.passedBlocks} از ${d.blockTotal} قفل ساختاری`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "حامی یعنی شخص دوم که می‌تواند به ابزار متن‌باز میزان گرنت بدهد، بدون کرسی، بدون سهم سود، بدون دست در فروش. این نقش با روشن کردن دکمه‌ها ساخته نمی‌شود. دکمه فقط یعنی سند قابل‌چک را داری و این دفتر حق دارد فرض را عوض کند." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: blocks.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					on: Boolean(tests[test.id]),
					label: test.title,
					detail: test.detail,
					onClick: () => toggle(test.id)
				}, test.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
			kicker: "صداقت",
			title: "دو بند که استقلال نیستند",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: rest.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					on: Boolean(tests[test.id]),
					label: test.title,
					detail: test.detail,
					onClick: () => toggle(test.id)
				}, test.id))
			}), !tests.lookthrough ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-stamp",
				children: "نگاه‌ازپشت خاموش است. ریسک ترکیبی عمداً بالا رفته. انکار صلاحیت نهاد ناظر، دیوار نمی‌سازد."
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "خط قرمز",
			title: "کارهایی که این دفتر قبول نمی‌کند",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: REFUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-s-2 border-stamp ps-3 text-sm leading-6 text-mute",
					children: item
				}, item))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "قابل امضا",
			title: "چه چیزی نقش حامی را خوانا می‌کند",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: ACCEPTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-s-2 border-brass ps-3 text-sm leading-6 text-mute",
					children: item
				}, item))
			})
		})
	] });
}
function Shell() {
	const tab = useAether((s) => s.tab);
	const setTab = useAether((s) => s.setTab);
	const d = useDerived();
	const [cmd, setCmd] = (0, import_react.useState)("");
	const [hint, setHint] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		useAether.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-bone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-widest text-brass",
										children: "MIZAN / AETHER"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-1 text-2xl font-semibold",
										children: "دفتر میزان"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-xl text-sm leading-6 text-mute",
										children: "پرونده مرتبط: «هیچ». طرف جدا، نه خود شرکت. زنجیره اعلامی DotOne، شناسه ۵۰۵."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cx("border px-3 py-2", d.passedBlocks === d.blockTotal ? "border-brass text-brass" : "border-stamp text-stamp"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs",
									children: "حکم جاری"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: personLabel(d)
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "flex border border-line bg-panel",
							onSubmit: (event) => {
								event.preventDefault();
								if (cmd.includes("گزارش")) {
									setTab("report");
									setHint("");
									setCmd("");
									return;
								}
								setHint("یک دستور: گزارش بساز");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: cmd,
								onChange: (event) => setCmd(event.target.value),
								placeholder: "بنویس: گزارش بساز",
								"aria-label": "دستور",
								className: "min-h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-bone outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 px-4 text-sm text-brass",
								children: "اجرا"
							})]
						}),
						hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-stamp",
							children: hint
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex gap-2 overflow-x-auto",
							"aria-label": "بخش‌ها",
							children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTab(item.id),
								className: cx("min-h-11 shrink-0 px-3 text-sm transition-colors duration-150", tab === item.id ? "bg-brass text-canvas" : "border border-line text-mute"),
								children: item.label
							}, item.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cx("no-print border-b border-line px-4 py-3 text-sm md:px-6", d.passedBlocks === d.blockTotal ? "text-brass" : "text-stamp"),
				children: d.passedBlocks === d.blockTotal ? "قفل‌ها روشن است. نقش قابل‌نوشتن: حامی افشاشده. این هنوز مصونیت نظارتی نیست." : "نگاه‌ازپشت باز است. تا هشت قفل سند نشود، سازمان بورس می‌تواند میزان و «هیچ» را یک عرضه ببیند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-6 md:px-6",
				children: [
					tab === "verdict" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verdict, { d }) : null,
					tab === "economy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Economy, { d }) : null,
					tab === "wall" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, { d }) : null,
					tab === "mizan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mizan, { d }) : null,
					tab === "chambers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chambers, { d }) : null,
					tab === "scores" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scores, { d }) : null,
					tab === "crm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crm, {}) : null,
					tab === "report" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Report, { d }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print mx-auto w-full max-w-6xl px-4 pb-10 text-xs leading-5 text-faint md:px-6",
				children: DISCLAIMER
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
//#endregion
export { Home as component };
