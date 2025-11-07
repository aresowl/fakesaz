const maleNames = ["علی", "محمد", "حسین", "رضا", "امیر", "مهدی", "سید", "جواد", "مصطفی", "حسن", "محمدرضا", "ابوالفضل", "محمود", "پارسا", "کیان", "آرش", "بهنام", "پویا", "داریوش", "رامین", "سروش", "فرهاد", "کوروش", "مانی", "نادر", "هومن", "یوسف", "شهرام", "کامران", "افشین", "مجید", "بهزاد", "سامان", "فرید", "بهرام", "مجتبی", "کاوه", "اردلان", "آرمان", "پرهام", "دانیال", "زانیار", "میلاد", "سپهر", "پژمان", "کیارش", "مازیار", "کیوان", "افشین", "بردیا", "پارسا"];
const femaleNames = ["فاطمه", "زهرا", "مریم", "زینب", "نازنین", "سارا", "آزاده", "لیلا", "نیره", "شقایق", "مهسا", "زینب", "هانیه", "کوثر", "یکتا", "آتنا", "بهاره", "پریا", "دینا", "رها", "سحر", "فرناز", "کیمیا", "مهناز", "نگار", "هدیه", "یاسمن", "شیدا", "گلناز", "افسون", "مژگان", "بهناز", "آرزو", "پگاه", "ترانه", "ژاله", "رویا", "سپیده", "شادی", "مهتاب", "نیلوفر", "هستی", "آیدا", "پروانه", "جواهر", "خاطره", "دلناز", "زیبا", "ستاره", "شهرزاد", "غزل", "فرشته", "نرگس", "ویدا", "پریسا"];
const lastNames = ["کریمی", "محمدی", "حسینی", "رضایی", "مرادی", "بهرامی", "اکبری", "اسدی", "عزیزی", "احمدی", "فراهانی", "قاسمی", "نوروزی", "هاشمی", "سلیمانی", "شریفی", "زمانی", "یوسفی", "موسوی", "رحمتی", "یزدانی", "مقدم", "عابدی", "دانشور", "صادقی", "بخشی", "جعفری", "خسروی", "درویشی", "زارعی", "شجاعی", "طاهری", "عظیمی", "غفاری", "فدایی", "قادری", "کمالی", "لطفی", "ناصری", "وکیلی", "هادیان", "یاراحمدی", "پناهی", "چگینی", "صفری", "گلستانی", "میراحمدی", "نظری", "واحدی", "بیگدلی", "دهقان", "روشن", "زرین‌کوب", "سعیدی", "فریدونی", "محمودی", "نادری", "یادگاری", "پاکدل", "جباری", "حسن‌زاده", "رستمی", "شیروانی", "طیبی", "علیزاده", "فخاری", "قربانی", "کوهی", "مرتضوی", "نیک‌خواه", "هوشمند", "یعقوبی"];

const cities = [
    { name: "تهران", province: "تهران", nationalCodePrefixes: ["001", "002", "003", "004", "005", "006", "007", "008", "011", "020", "025"], postcodeRange: [11111, 19999] },
    { name: "مشهد", province: "خراسان رضوی", nationalCodePrefixes: ["092", "093", "094"], postcodeRange: [91331, 93781] },
    { name: "اصفهان", province: "اصفهان", nationalCodePrefixes: ["127", "128", "129"], postcodeRange: [81331, 83791] },
    { name: "تبریز", province: "آذربایجان شرقی", nationalCodePrefixes: ["136", "137", "138"], postcodeRange: [51331, 51999] },
    { name: "شیراز", province: "فارس", nationalCodePrefixes: ["228", "229", "230"], postcodeRange: [71331, 73491] },
    { name: "اهواز", province: "خوزستان", nationalCodePrefixes: ["174", "175"], postcodeRange: [61331, 61791] },
    { name: "قم", province: "قم", nationalCodePrefixes: ["037", "038"], postcodeRange: [37131, 37491] },
    { name: "کرج", province: "البرز", nationalCodePrefixes: ["031", "032"], postcodeRange: [31331, 31999] },
    { name: "رشت", province: "گیلان", nationalCodePrefixes: ["258", "259"], postcodeRange: [41331, 41999] },
    { name: "کرمان", province: "کرمان", nationalCodePrefixes: ["298", "299"], postcodeRange: [76131, 77951] },
    { name: "یزد", province: "یزد", nationalCodePrefixes: ["442", "443"], postcodeRange: [89131, 89493] },
    { name: "ارومیه", province: "آذربایجان غربی", nationalCodePrefixes: ["274", "275"], postcodeRange: [57131, 57591] },
    { name: "کرمانشاه", province: "کرمانشاه", nationalCodePrefixes: ["324", "325"], postcodeRange: [67131, 67851] },
    { name: "همدان", province: "همدان", nationalCodePrefixes: ["386", "387"], postcodeRange: [65131, 65651] },
    { name: "زاهدان", province: "سیستان و بلوچستان", nationalCodePrefixes: ["361", "362"], postcodeRange: [98131, 98491] },
    { name: "اردبیل", province: "اردبیل", nationalCodePrefixes: ["145", "146"], postcodeRange: [56131, 56491] },
    { name: "بندرعباس", province: "هرمزگان", nationalCodePrefixes: ["338", "339"], postcodeRange: [79131, 79661] },
    { name: "ساری", province: "مازندران", nationalCodePrefixes: ["208", "209"], postcodeRange: [48131, 48491] },
    { name: "گرگان", province: "گلستان", nationalCodePrefixes: ["211", "212"], postcodeRange: [49131, 49371] },
    { name: "سنندج", province: "کردستان", nationalCodePrefixes: ["372", "373"], postcodeRange: [66131, 66199] },
    { name: "خرم‌آباد", province: "لرستان", nationalCodePrefixes: ["406", "407"], postcodeRange: [68131, 68891] },
    { name: "اراک", province: "مرکزی", nationalCodePrefixes: ["052", "053"], postcodeRange: [38131, 38571] },
    { name: "قزوین", province: "قزوین", nationalCodePrefixes: ["431", "432"], postcodeRange: [34131, 34981] },
    { name: "بیرجند", province: "خراسان جنوبی", nationalCodePrefixes: ["064", "065"], postcodeRange: [97131, 97481] },
    { name: "بجنورد", province: "خراسان شمالی", nationalCodePrefixes: ["067", "068"], postcodeRange: [94131, 94591] },
    { name: "ایلام", province: "ایلام", nationalCodePrefixes: ["449", "450"], postcodeRange: [69311, 69391] },
    { name: "بوشهر", province: "بوشهر", nationalCodePrefixes: ["349", "350"], postcodeRange: [75131, 75461] },
    { name: "شهرکرد", province: "چهارمحال و بختیاری", nationalCodePrefixes: ["461", "462"], postcodeRange: [88131, 88591] },
    { name: "یاسوج", province: "کهگیلویه و بویراحمد", nationalCodePrefixes: ["422", "423"], postcodeRange: [75911, 75981] },
    { name: "سمنان", province: "سمنان", nationalCodePrefixes: ["351", "357"], postcodeRange: [35131, 35791] },
    { name: "زنجان", province: "زنجان", nationalCodePrefixes: ["451", "452", "453", "454", "455"], postcodeRange: [45131, 45541] },
    { name: "سیرجان", province: "کرمان", nationalCodePrefixes: ["306", "307"], postcodeRange: [78131, 78391] },
    { name: "کاشان", province: "اصفهان", nationalCodePrefixes: ["125", "126"], postcodeRange: [87131, 87591] },
    { name: "دزفول", province: "خوزستان", nationalCodePrefixes: ["199", "200"], postcodeRange: [64611, 64691] },
    { name: "نیشابور", province: "خراسان رضوی", nationalCodePrefixes: ["105", "106"], postcodeRange: [93131, 93491] },
    { name: "سبزوار", province: "خراسان رضوی", nationalCodePrefixes: ["078", "079"], postcodeRange: [96131, 96591] },
    { name: "آمل", province: "مازندران", nationalCodePrefixes: ["461", "462", "463"], postcodeRange: [46131, 46391] },
    { name: "بابل", province: "مازندران", nationalCodePrefixes: ["471", "472", "473", "474", "475"], postcodeRange: [47131, 47591] },
    { name: "قائم‌شهر", province: "مازندران", nationalCodePrefixes: ["476", "477"], postcodeRange: [47611, 47791] },
    { name: "کاشمر", province: "خراسان رضوی", nationalCodePrefixes: ["089", "090"], postcodeRange: [96711, 96791] },
    { name: "جهرم", province: "فارس", nationalCodePrefixes: ["246", "247"], postcodeRange: [74131, 74591] },
    { name: "بندر انزلی", province: "گیلان", nationalCodePrefixes: ["264"], postcodeRange: [43131, 43191] },
    { name: "بروجرد", province: "لرستان", nationalCodePrefixes: ["412", "413"], postcodeRange: [68971, 69199] },
    { name: "تربت حیدریه", province: "خراسان رضوی", nationalCodePrefixes: ["069", "070"], postcodeRange: [95131, 95591] },
    { name: "قوچان", province: "خراسان رضوی", nationalCodePrefixes: ["086", "087"], postcodeRange: [94711, 94861] },
    { name: "ساوه", province: "مرکزی", nationalCodePrefixes: ["059", "060"], postcodeRange: [39131, 39491] },
    { name: "خوی", province: "آذربایجان غربی", nationalCodePrefixes: ["279", "280"], postcodeRange: [58131, 58591] },
    { name: "نقده", province: "آذربایجان غربی", nationalCodePrefixes: ["290"], postcodeRange: [57611, 57691] },
    { name: "میاندوآب", province: "آذربایجان غربی", nationalCodePrefixes: ["296", "297"], postcodeRange: [59351, 59361] },
    { name: "بانه", province: "کردستان", nationalCodePrefixes: ["384"], postcodeRange: [66911, 66991] },
    { name: "سقز", province: "کردستان", nationalCodePrefixes: ["375", "376"], postcodeRange: [66811, 66891] }
];

const mobilePrefixes = ["0910", "0911", "0912", "0913", "0914", "0915", "0916", "0917", "0918", "0919", "0930", "0933", "0935", "0936", "0937", "0938", "0939", "0990", "0991", "0992", "0993", "0994", "0901", "0902", "0903", "0904", "0905", "0920", "0921", "0922", "0931", "0932", "0934", "0998", "0999"];

const jobTitles = [
    "معلم", "مهندس نرم‌افزار", "پزشک", "پرستار", "کارمند اداری", "فروشنده", "طراح گرافیک", "حسابدار",
    "آشپز", "برنامه‌نویس وب", "وکیل", "دانشجو", "استاد دانشگاه", "کشاورز", "راننده", "بازاریاب",
    "مدیر پروژه", "هنرمند", "ورزشکار", "خبرنگار", "خانه‌دار", "کارگر", "صنعتگر", "معمار",
    "دندانپزشک", "داروساز", "روانشناس", "فیزیوتراپیست", "مکانیک", "برقکار", "نجار", "آرایشگر",
    "خیاط", "طراح لباس", "عکاس", "فیلمبردار", "موسیقیدان", "خواننده", "بازیگر", "نویسنده",
    "شاعر", "روزنامه‌نگار", "کارآفرین", "سرمایه‌گذار", "تحلیلگر داده", "متخصص امنیت شبکه", "مدیر شبکه", "طراح محصول",
    "مدیر منابع انسانی", "مشاور مالی", "کارشناس بیمه", "فناوری اطلاعات", "وب‌مستر", "کپی‌رایتر", "مدیر محتوا", "متخصص سئو",
    "مدیر بازاریابی", "معامله‌گر", "بانکدار", "حسابرس", "دامپزشک", "ارتوپد", "بینایی سنج", "شنوایی سنج",
    "کارشناس تغذیه", "مربی ورزشی", "نیروی انتظامی", "آتش‌نشان", "کارمند بانک"
];

const streetNames = ["خیابان ولیعصر", "خیابان انقلاب", "خیابان آزادی", "بلوار کشاورز", "خیابان شریعتی", "خیابان جمهوری", "خیابان مطهری", "خیابان سهروردی", "میدان آزادی", "میدان انقلاب", "بلوار فردوسی", "خیابان حافظ", "خیابان سعدی", "خیابان ملاصدرا", "خیابان شهید بهشتی", "خیابان فاطمی", "خیابان گاندی", "خیابان وزرا", "بلوار میرداماد", "خیابان آفریقا", "خیابان ولیعصر شمالی", "خیابان ولیعصر جنوبی", "خیابان طالقانی", "خیابان فردوسی", "خیابان لاله زار", "خیابان جمهوری اسلامی", "خیابان کارگر شمالی", "خیابان کارگر جنوبی", "خیابان دماوند", "خیابان پیروزی", "خیابان آیت الله کاشانی", "بلوار آیت الله کاشانی", "خیابان ستارخان", "بلوار مرزداران", "خیابان گیشا", "خیابان ونک", "خیابان ملاصدرا", "خیابان شیخ بهایی", "خیابان ملاصدرا", "خیابان فرشته", "خیابان کامرانیه", "خیابان نیاوران", "خیابان پاسداران", "خیابان شریعتی شمالی", "خیابان سمیه", "خیابان استاد نجات‌اللهی", "خیابان سپهبد قرنی", "خیابان مفتح", "خیابان بهار شیراز", "خیابان بهار جنوبی", "خیابان کریمخان زند", "خیابان قائم مقام فراهانی"];
const alleyNames = ["کوچه اول", "کوچه دوم", "کوچه لاله", "کوچه نرگس", "کوچه اقاقیا", "کوچه بن‌بست", "کوچه رز", "کوچه نسترن", "کوچه مهر", "کوچه آفتاب", "کوچه شبنم", "کوچه یاس", "کوچه ارکیده", "کوچه گلستان", "کوچه بهار", "کوچه پاییز", "کوچه زمستان", "کوچه تابستان", "کوچه دانش", "کوچه امید", "کوچه صلح", "کوچه دوستی", "کوچه آزادی", "کوچه استقلال", "کوچه آذر", "کوچه دی", "کوچه بهمن", "کوچه اسفند", "کوچه فروردین", "کوچه اردیبهشت", "کوچه خرداد", "کوچه تیر", "کوچه مرداد", "کوچه شهریور", "کوچه مهر", "کوچه آبان", "کوچه آذر", "کوچه نوبهار", "کوچه دلگشا", "کوچه پرستو", "کوچه آفتابگردان", "کوچه ستاره", "کوچه شقایق"];


let lastGeneratedData = null;

const PERSIAN_STRINGS = {
    gender_male: "مرد",
    gender_female: "زن",
    address_plaque: "پلاک",
    footer_text: 'لطفاً به <a href="https://github.com/aresowl/fakesaz" target="_blank" rel="noopener noreferrer">ریپازیتوری گیت‌هاب ما</a> ستاره بدهید.',
};

function displayData(data) {
    const gender = data.isMale ? PERSIAN_STRINGS.gender_male : PERSIAN_STRINGS.gender_female;
    const cityDisplay = `${data.selectedCity.name} (${data.selectedCity.province})`;

    document.getElementById('fullName').textContent = data.fullName;
    document.getElementById('gender').textContent = gender;
    document.getElementById('birthCity').textContent = cityDisplay;
    document.getElementById('nationalCode').textContent = data.nationalCode;
    document.getElementById('phoneNumber').textContent = data.phoneNumber;
    document.getElementById('cardNumber').textContent = data.cardNumber.replace(/(.{4})/g, '$1 ').trim();
    document.getElementById('cvv2').textContent = data.cvv2;
    document.getElementById('cardExpiry').textContent = data.cardExpiry;
    document.getElementById('address').textContent = data.address;
    document.getElementById('postalCode').textContent = data.postalCode;
    document.getElementById('job').textContent = data.jobTitle;
    document.getElementById('birthDate').textContent = data.birthDate;

    const outputCard = document.getElementById('outputCard');
    outputCard.style.transition = 'none';
    outputCard.style.opacity = '0';
    outputCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        outputCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        outputCard.style.opacity = '1';
        outputCard.style.transform = 'translateY(0)';
    }, 50);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNationalCode(cityCodePrefix) {
    let nationalCodeBase = cityCodePrefix;
    for (let i = 0; i < 6; i++) {
        nationalCodeBase += getRandomNumber(0, 9).toString();
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalCodeBase[i]) * (10 - i);
    }

    let remainder = sum % 11;
    let controlDigit;
    if (remainder < 2) {
        controlDigit = remainder;
    } else {
        controlDigit = 11 - remainder;
    }

    return nationalCodeBase + controlDigit.toString();
}

function generateLuhnCardNumber() {
    let tempDigits = [];
    tempDigits.push(getRandomItem([4, 5, 6]));
    for (let i = 0; i < 14; i++) {
        tempDigits.push(getRandomNumber(0, 9));
    }

    let luhnSum = 0;
    let shouldDouble = false;

    for (let i = tempDigits.length - 1; i >= 0; i--) {
        let digit = tempDigits[i];
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        luhnSum += digit;
        shouldDouble = !shouldDouble;
    }

    let lastDigit = (10 - (luhnSum % 10)) % 10;
    
    return tempDigits.join('') + lastDigit.toString();
}

function generateRandomPersianDate(minAge) {
    const currentPersianYear = 1404;
    const maxBirthYear = currentPersianYear - minAge; 
    const year = getRandomNumber(1350, maxBirthYear); 
    let month = getRandomNumber(1, 12);
    let day;

    if (month <= 6) {
        day = getRandomNumber(1, 31);
    } else if (month <= 11) {
        day = getRandomNumber(1, 30);
    } else {
        day = getRandomNumber(1, 29);
    }
    return `${String(day).padStart(2, '0')} / ${String(month).padStart(2, '0')} / ${year}`;
}

function generateCardExpiryDate() {
    const currentPersianYear = 1404;
    const expiryYear = getRandomNumber(currentPersianYear + 2, currentPersianYear + 7);
    const expiryMonth = getRandomNumber(1, 12);
    return `${String(expiryMonth).padStart(2, '0')} / ${expiryYear}`;
}

function generatePostalCode(range) {
    const [min, max] = range;
    const basePostalCode = getRandomNumber(min, max);
    let fullPostalCode = basePostalCode.toString();
    for (let i = 0; i < 5; i++) {
        fullPostalCode += getRandomNumber(0, 9).toString();
    }
    return fullPostalCode;
}

function formatPhoneNumber(prefix) {
    // فرمت دهی به +98 (طبق درخواست‌های قبلی)
    return '+98' + prefix.substring(1);
}

function generateFakeData() {
    const isMale = Math.random() < 0.5;

    const firstName = isMale ? getRandomItem(maleNames) : getRandomItem(femaleNames);
    const lastName = getRandomItem(lastNames);
    const fullName = `${firstName} ${lastName}`;

    const selectedCity = getRandomItem(cities);
    const nationalCodePrefix = getRandomItem(selectedCity.nationalCodePrefixes);
    
    const streetName = getRandomItem(streetNames);
    const alleyName = getRandomItem(alleyNames);
    const plaque = getRandomNumber(1, 200);
    const address = `${selectedCity.province}، ${selectedCity.name}، ${streetName}، ${alleyName}، ${PERSIAN_STRINGS.address_plaque} ${plaque}`;

    const jobTitle = getRandomItem(jobTitles);

    const rawData = {
        isMale,
        fullName,
        selectedCity,
        nationalCode: generateNationalCode(nationalCodePrefix),
        phoneNumber: formatPhoneNumber(getRandomItem(mobilePrefixes) + Array.from({length: 7}, () => getRandomNumber(0, 9)).join('')),
        cardNumber: generateLuhnCardNumber(),
        cvv2: getRandomNumber(100, 999).toString(),
        cardExpiry: generateCardExpiryDate(),
        jobTitle,
        postalCode: generatePostalCode(selectedCity.postcodeRange),
        birthDate: generateRandomPersianDate(18),
        address
    };

    lastGeneratedData = rawData;
    displayData(rawData);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateButton').addEventListener('click', generateFakeData);
    
    // اجرای تولید اطلاعات برای بار اول
    generateFakeData();
});
