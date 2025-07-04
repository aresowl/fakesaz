// 1. Data Arrays: All predefined data needed for generation
const maleNames = ["علی", "محمد", "حسین", "رضا", "امیر", "مهدی", "سید", "جواد", "مصطفی", "حسن", "محمدرضا", "ابوالفضل", "محمود", "پارسا", "کیان", "آرش", "بهنام", "پویا", "داریوش", "رامین", "سروش", "فرهاد", "کوروش", "مانی", "نادر", "هومن", "یوسف", "شهرام", "کامران", "افشین", "مجید", "بهزاد", "سامان", "فرید", "بهرام", "مجتبی", "کاوه", "اردلان", "آرمان", "پرهام", "دانیال", "زانیار", "میلاد", "سپهر", "پژمان", "کیارش", "مازیار", "کیوان", "افشین", "بردیا", "پارسا"];
const femaleNames = ["فاطمه", "زهرا", "مریم", "زینب", "نازنین", "سارا", "آزاده", "لیلا", "نیره", "شقایق", "مهسا", "زینب", "هانیه", "کوثر", "یکتا", "آتنا", "بهاره", "پریا", "دینا", "رها", "سحر", "فرناز", "کیمیا", "مهناز", "نگار", "هدیه", "یاسمن", "شیدا", "گلناز", "افسون", "مژگان", "بهناز", "آرزو", "پگاه", "ترانه", "ژاله", "رویا", "سپیده", "شادی", "مهتاب", "نیلوفر", "هستی", "آیدا", "پروانه", "جواهر", "خاطره", "دلناز", "زیبا", "ستاره", "شهرزاد", "غزل", "فرشته", "نرگس", "ویدا", "پریسا"];
const lastNames = ["کریمی", "محمدی", "حسینی", "رضایی", "مرادی", "بهرامی", "اکبری", "اسدی", "عزیزی", "احمدی", "فراهانی", "قاسمی", "نوروزی", "هاشمی", "سلیمانی", "شریفی", "زمانی", "یوسفی", "موسوی", "رحمتی", "یزدانی", "مقدم", "عابدی", "دانشور", "صادقی", "بخشی", "جعفری", "خسروی", "درویشی", "زارعی", "شجاعی", "طاهری", "عظیمی", "غفاری", "فدایی", "قادری", "کمالی", "لطفی", "ناصری", "وکیلی", "هادیان", "یاراحمدی", "پناهی", "چگینی", "صفری", "گلستانی", "میراحمدی", "نظری", "واحدی", "بیگدلی", "دهقان", "روشن", "زرین‌کوب", "سعیدی", "فریدونی", "محمودی", "نادری", "یادگاری", "پاکدل", "جباری", "حسن‌زاده", "رستمی", "شیروانی", "طیبی", "علیزاده", "فخاری", "قربانی", "کوهی", "مرتضوی", "نیک‌خواه", "هوشمند", "یعقوبی"];

const cities = [
    { name: "تهران", code: "001", province: "تهران" }, { name: "مشهد", code: "002", province: "خراسان رضوی" }, { name: "اصفهان", code: "003", province: "اصفهان" },
    { name: "تبریز", code: "004", province: "آذربایجان شرقی" }, { name: "شیراز", code: "116", province: "فارس" }, { name: "اهواز", code: "174", province: "خوزستان" },
    { name: "قم", code: "006", province: "قم" }, { name: "کرج", code: "005", province: "البرز" }, { name: "رشت", code: "188", province: "گیلان" },
    { name: "کرمان", code: "299", province: "کرمان" }, { name: "یزد", code: "362", province: "یزد" }, { name: "ارومیه", code: "276", province: "آذربایجان غربی" },
    { name: "کرمانشاه", code: "323", province: "کرمانشاه" }, { name: "همدان", code: "386", province: "همدان" }, { name: "زاهدان", code: "361", province: "سیستان و بلوچستان" },
    { name: "اردبیل", code: "146", province: "اردبیل" }, { name: "بندرعباس", code: "339", province: "هرمزگان" }, { name: "ساری", code: "209", province: "مازندران" },
    { name: "گرگان", code: "215", province: "گلستان" }, { name: "سنندج", code: "374", province: "کردستان" }, { name: "خرم‌آباد", code: "396", province: "لرستان" },
    { name: "اراک", code: "052", province: "مرکزی" }, { name: "قزوین", code: "444", province: "قزوین" }, { name: "بیرجند", code: "084", province: "خراسان جنوبی" },
    { name: "بجنورد", code: "085", province: "خراسان شمالی" }, { name: "ایلام", code: "591", province: "ایلام" }, { name: "بوشهر", code: "351", province: "بوشهر" },
    { name: "شهرکرد", code: "491", province: "چهارمحال و بختیاری" }, { name: "یاسوج", code: "531", province: "کهگیلویه و بویراحمد" }, { name: "سمنان", code: "451", province: "سمنان" },
    { name: "زنجان", code: "421", province: "زنجان" }, { name: "سیرجان", code: "298", province: "کرمان" }, { name: "کاشان", code: "007", province: "اصفهان" },
    { name: "دزفول", code: "175", province: "خوزستان" }, { name: "نیشابور", code: "008", province: "خراسان رضوی" }, { name: "سبزوار", code: "009", province: "خراسان رضوی" },
    { name: "آمل", code: "210", province: "مازندران" }, { name: "بابل", code: "211", province: "مازندران" }, { name: "قائم‌شهر", code: "212", province: "مازندران" },
    { name: "کاشمر", code: "010", province: "خراسان رضوی" }, { name: "جهرم", code: "117", province: "فارس" }, { name: "بندر انزلی", code: "189", province: "گیلان" },
    { name: "بروجرد", code: "397", province: "لرستان" }, { name: "تربت حیدریه", code: "011", province: "خراسان رضوی" }, { name: "قوچان", code: "012", province: "خراسان رضوی" },
    { name: "ساوه", code: "053", province: "مرکزی" }, { name: "خوی", code: "277", province: "آذربایجان غربی" }, { name: "نقده", code: "278", province: "آذربایجان غربی" },
    { name: "میاندوآب", code: "279", province: "آذربایجان غربی" }, { name: "بانه", code: "375", province: "کردستان" }, { name: "سقز", code: "376", province: "کردستان" }
];

const mobilePrefixes = ["0910", "0911", "0912", "0913", "0914", "0915", "0916", "0917", "0918", "0919", "0930", "0933", "0935", "0936", "0937", "0938", "0939", "0990", "0991", "0992", "0993", "0994", "0901", "0902", "0903", "0904", "0905", "0920", "0921", "0922", "0931", "0932", "0934", "0998", "0999"];

const jobTitles = ["معلم", "مهندس نرم‌افزار", "پزشک", "پرستار", "کارمند اداری", "فروشنده", "طراح گرافیک", "حسابدار", "آشپز", "برنامه‌نویس وب", "وکیل", "دانشجو", "استاد دانشگاه", "کشاورز", "راننده", "بازاریاب", "مدیر پروژه", "هنرمند", "ورزشکار", "خبرنگار", "خانه‌دار", "کارگر", "صنعتگر", "معمار", "دندانپزشک", "داروساز", "روانشناس", "فیزیوتراپیست", "مکانیک", "برقکار", "نجار", "آرایشگر", "خیاط", "طراح لباس", "عکاس", "فیلمبردار", "موسیقیدان", "خواننده", "بازیگر", "نویسنده", "شاعر", "روزنامه‌نگار", "کارآفرین", "سرمایه‌گذار", "تحلیلگر داده", "متخصص امنیت شبکه", "مدیر شبکه", "طراح محصول", "مدیر منابع انسانی", "مشاور مالی", "کارشناس بیمه", "فناوری اطلاعات", "وب‌مستر", "کپی‌رایتر", "مدیر محتوا", "متخصص سئو", "مدیر بازاریابی", "معامله‌گر", "بانکدار", "حسابرس", "دامپزشک", "ارتوپد", "بینایی سنج", "شنوایی سنج", "کارشناس تغذیه", "مربی ورزشی", "نیروی انتظامی", "آتش‌نشان", "کارمند بانک"];

// Common street and alley names for address generation
const streetNames = ["خیابان ولیعصر", "خیابان انقلاب", "خیابان آزادی", "بلوار کشاورز", "خیابان شریعتی", "خیابان جمهوری", "خیابان مطهری", "خیابان سهروردی", "میدان آزادی", "میدان انقلاب", "بلوار فردوسی", "خیابان حافظ", "خیابان سعدی", "خیابان ملاصدرا", "خیابان شهید بهشتی", "خیابان فاطمی", "خیابان گاندی", "خیابان وزرا", "بلوار میرداماد", "خیابان آفریقا", "خیابان ولیعصر شمالی", "خیابان ولیعصر جنوبی", "خیابان طالقانی", "خیابان فردوسی", "خیابان لاله زار", "خیابان جمهوری اسلامی", "خیابان کارگر شمالی", "خیابان کارگر جنوبی", "خیابان دماوند", "خیابان پیروزی", "خیابان آیت الله کاشانی", "بلوار آیت الله کاشانی", "خیابان ستارخان", "بلوار مرزداران", "خیابان گیشا", "خیابان ونک", "خیابان ملاصدرا", "خیابان شیخ بهایی", "خیابان ملاصدرا", "خیابان فرشته", "خیابان کامرانیه", "خیابان نیاوران", "خیابان پاسداران", "خیابان شریعتی شمالی", "خیابان سمیه", "خیابان استاد نجات‌اللهی", "خیابان سپهبد قرنی", "خیابان مفتح", "خیابان بهار شیراز", "خیابان بهار جنوبی", "خیابان کریمخان زند", "خیابان قائم مقام فراهانی"];
const alleyNames = ["کوچه اول", "کوچه دوم", "کوچه لاله", "کوچه نرگس", "کوچه اقاقیا", "کوچه بن‌بست", "کوچه رز", "کوچه نسترن", "کوچه مهر", "کوچه آفتاب", "کوچه شبنم", "کوچه یاس", "کوچه ارکیده", "کوچه گلستان", "کوچه بهار", "کوچه پاییز", "کوچه زمستان", "کوچه تابستان", "کوچه دانش", "کوچه امید", "کوچه صلح", "کوچه دوستی", "کوچه آزادی", "کوچه استقلال", "کوچه آذر", "کوچه دی", "کوچه بهمن", "کوچه اسفند", "کوچه فروردین", "کوچه اردیبهشت", "کوچه خرداد", "کوچه تیر", "کوچه مرداد", "کوچه شهریور", "کوچه مهر", "کوچه آبان", "کوچه آذر", "کوچه نوبهار", "کوچه دلگشا", "کوچه پرستو", "کوچه آفتابگردان", "کوچه ستاره", "کوچه شقایق"];


// 2. Utility Functions: Helper functions for random selections and number generation
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. National Code Generation (with checksum validation)
function generateNationalCode(cityCode) {
    let nationalCodeBase = cityCode; // First 3 digits (city code)
    for (let i = 0; i < 6; i++) {
        nationalCodeBase += getRandomNumber(0, 9).toString(); // Next 6 random digits
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

// 4. Luhn Algorithm for Card Number Generation
function generateLuhnCardNumber() {
    let tempDigits = [];
    tempDigits.push(getRandomItem([4, 5, 6])); // First digit (e.g., 4 for Visa, 5 for MasterCard, 6 for Discover)
    for (let i = 0; i < 14; i++) { // Next 14 digits to make it 15 digits total
        tempDigits.push(getRandomNumber(0, 9));
    }

    // Calculate the checksum for these 15 digits
    let luhnSum = 0;
    let shouldDouble = true; // Flag to double every second digit from the right

    for (let i = tempDigits.length - 1; i >= 0; i--) {
        let digit = tempDigits[i];
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // If doubled digit is > 9, subtract 9 (e.g., 14 -> 5)
            }
        }
        luhnSum += digit;
        shouldDouble = !shouldDouble; // Toggle for the next digit
    }

    let lastDigit = (10 - (luhnSum % 10)) % 10; // The checksum digit
    
    return tempDigits.join('') + lastDigit.toString();
}

// 5. Persian Date Generation (simplified for random valid dates)
function generateRandomPersianDate(startYear, endYear) {
    const year = getRandomNumber(startYear, endYear);
    let month = getRandomNumber(1, 12);
    let day;

    if (month <= 6) { // Farvardin to Shahrivar (31 days)
        day = getRandomNumber(1, 31);
    } else if (month <= 11) { // Mehr to Bahman (30 days)
        day = getRandomNumber(1, 30);
    } else { // Esfand (29 or 30 days, simplified to 29 for random)
        day = getRandomNumber(1, 29); // To simplify, not considering leap years for 30th Esfand
    }
    // Format day and month with leading zeros if less than 10
    return `${String(day).padStart(2, '0')} / ${String(month).padStart(2, '0')} / ${year}`;
}

function generateCardExpiryDate() {
    // As of July 2025 (current Gregorian year), current Persian year is approximately 1404.
    // We'll use 1404 as the base for generating future expiry years.
    const currentPersianYear = 1404; 
    // Card should expire between 2 to 7 years from now (e.g., 1406 to 1411)
    const expiryYear = getRandomNumber(currentPersianYear + 2, currentPersianYear + 7); 
    const expiryMonth = getRandomNumber(1, 12); // Any month is valid
    // Format month with leading zero if less than 10
    return `${String(expiryMonth).padStart(2, '0')} / ${expiryYear}`;
}

// 6. Main Generation Function: Orchestrates all data generation and UI updates
function generateFakeData() {
    // 6.1. Gender and Name
    const isMale = Math.random() < 0.5; // Randomly select gender
    const firstName = isMale ? getRandomItem(maleNames) : getRandomItem(femaleNames);
    const lastName = getRandomItem(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const gender = isMale ? "مرد" : "زن";

    // 6.2. Birth City and National Code
    const selectedCity = getRandomItem(cities); // Select a random city
    const nationalCode = generateNationalCode(selectedCity.code); // Generate national code based on city code

    // 6.3. Phone Number
    const mobilePrefix = getRandomItem(mobilePrefixes); // Select a random mobile prefix
    let phoneNumber = mobilePrefix;
    for (let i = 0; i < 7; i++) {
        phoneNumber += getRandomNumber(0, 9).toString(); // Append 7 random digits
    }

    // 6.4. Card Number, CVV2, Expiry Date
    const cardNumber = generateLuhnCardNumber(); // Generate Luhn-valid card number
    const cvv2 = getRandomNumber(100, 999).toString(); // Generate 3-digit CVV2
    const cardExpiry = generateCardExpiryDate(); // Generate card expiry date

    // 6.5. Address (aligned with selected city's province for consistency)
    const province = selectedCity.province; // Use the province of the selected city
    const streetName = getRandomItem(streetNames); // Select random street name
    const alleyName = getRandomItem(alleyNames); // Select random alley name
    const plaque = getRandomNumber(1, 200); // Random plaque number
    const address = `${province}، ${selectedCity.name}، ${streetName}، ${alleyName}، پلاک ${plaque}`;

    // 6.6. Postal Code (10 digits, random for simplicity as no specific algorithm provided)
    let postalCode = "";
    for (let i = 0; i < 10; i++) {
        postalCode += getRandomNumber(0, 9).toString(); // Generate 10 random digits
    }

    // 6.7. Job
    const job = getRandomItem(jobTitles); // Select a random job title

    // 6.8. Birth Date (Persian)
    // Years between 1370 to 1400 as per common age range for fake data.
    const birthDate = generateRandomPersianDate(1370, 1400); 

    // 7. Update UI: Populate the HTML elements with the generated data
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('gender').textContent = gender;
    document.getElementById('birthCity').textContent = `${selectedCity.name} (کد: ${selectedCity.code})`;
    document.getElementById('nationalCode').textContent = nationalCode;
    document.getElementById('phoneNumber').textContent = phoneNumber;
    document.getElementById('cardNumber').textContent = cardNumber.replace(/(.{4})/g, '$1 ').trim(); // Format card number with spaces
    document.getElementById('cvv2').textContent = cvv2;
    document.getElementById('cardExpiry').textContent = cardExpiry;
    document.getElementById('address').textContent = address;
    document.getElementById('postalCode').textContent = postalCode;
    document.getElementById('job').textContent = job;
    document.getElementById('birthDate').textContent = birthDate;

    // 8. Optional: Animate card appearance for a smoother UI experience
    const outputCard = document.getElementById('outputCard');
    // Reset styles for re-animation if already visible
    outputCard.style.transition = 'none'; // Disable transition temporarily
    outputCard.style.opacity = '0';
    outputCard.style.transform = 'translateY(20px)';
    
    // Re-enable transition and animate after a small delay
    setTimeout(() => {
        outputCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        outputCard.style.opacity = '1';
        outputCard.style.transform = 'translateY(0)';
    }, 50); // Small delay to allow style reset to register
}

// 9. Event Listener: Trigger data generation when the button is clicked and on initial load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateButton').addEventListener('click', generateFakeData);
    // Generate data on initial page load for immediate content display
    generateFakeData();
});
