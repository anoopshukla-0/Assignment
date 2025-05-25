const birthdateInput = document.getElementById('birthdate');
const sleepHoursInput = document.getElementById('sleepHours');
const calculateBtn = document.getElementById('calculateBtn');
const modal = document.getElementById('resultModal');
const closeBtn = document.querySelector('.close');
const yearsOld = document.getElementById('yearsOld');
const daysOld = document.getElementById('daysOld');
const daysLived = document.getElementById('daysLived');
const minutesLived = document.getElementById('minutesLived');
const leapYears = document.getElementById('leapYears');
const sleepDays = document.getElementById('sleepDays');
const sleepYears = document.getElementById('sleepYears');
const sleepPercentage = document.getElementById('sleepPercentage');
const progress = document.getElementById('progress');
const funFact = document.getElementById('funFact');
const motivationalQuote = document.getElementById('motivationalQuote');
const darkModeToggle = document.getElementById('darkMode');
const alertModal = document.getElementById('alertModal');
const alertMessage = document.getElementById('alertMessage');
const alertCloseBtn = document.getElementById('alertCloseBtn');


const funFacts = [
    "You've blinked approximately 5 million times in your life!",
    "Your heart has beaten over 2.5 billion times!",
    "You've spent about 1/3 of your life sleeping.",
    "You've grown over 25 feet of hair in your lifetime!",
    "You've walked enough steps to circle the Earth multiple times!",
    "The human body contains enough iron to make a small nail.",
    "Your brain generates about 20 watts of power, enough to power a light bulb.",
    "You shed about 600,000 particles of skin every hour.",
    "Your DNA, if stretched out, would reach to the moon and back 6000 times.",
    "The average person will spend 6 months of their life waiting for red lights to turn green.",
    "Your stomach produces a new lining every 3 to 4 days to avoid digesting itself.",
    "You are taller in the morning than in the evening due to the compression of your spine.",
    "The human eye can distinguish about 10 million different colors.",
    "Your bones are 4 times stronger than concrete.",
    "You lose about 50 to 100 hairs per day."
];

const motivationalQuotes = [
    // Bhagavad Gita Quotes
    "You have the right to work, but never to the fruit of work. – Bhagavad Gita",
    "Set your heart upon your work, but never its reward. – Bhagavad Gita",
    "The soul is neither born, nor does it ever die. – Bhagavad Gita",
    "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good. – Bhagavad Gita",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. – Bhagavad Gita",
    "The mind is restless and difficult to restrain, but it is subdued by practice. – Bhagavad Gita",
    "Perform your obligatory duty, because action is indeed better than inaction. – Bhagavad Gita",
    "One who has control over the mind is tranquil in heat and cold, in pleasure and pain, and in honor and dishonor. – Bhagavad Gita",
    "The soul is neither born, and nor does it die. – Bhagavad Gita",
    "There is neither this world, nor the world beyond. Nor happiness for the one who doubts. – Bhagavad Gita",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. – Bhagavad Gita",
    "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace. – Bhagavad Gita",
    "The wise see knowledge and action as one. – Bhagavad Gita",
    "The soul is neither born, and nor does it die. – Bhagavad Gita",
    "The mind is restless and difficult to restrain, but it is subdued by practice. – Bhagavad Gita",

    // Quotes from Other Holy Books and Famous Personalities
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Bible (Philippians 4:6)",
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. – Bible (John 3:16)",
    "The best of you are those who are best to their families. – Prophet Muhammad (Hadith)",
    "Indeed, with hardship comes ease. – Quran (94:5)",
    "The journey of a thousand miles begins with a single step. – Lao Tzu",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best revenge is massive success. – Frank Sinatra"
];

calculateBtn.addEventListener('click', () => {
    const birthdate = birthdateInput.value;
    const sleepHours = parseFloat(sleepHoursInput.value);

    // Validate birthdate
    if (!birthdate) {
        showAlert("Please enter your birthdate.");
        return;
    }

    // Validate sleep hours
    if (isNaN(sleepHours)) {
        showAlert("Please enter a valid number for sleep hours.");
        return;
    }
    if (sleepHours <= 0 || sleepHours > 24) {
        showAlert("Please enter a number between 1 and 24 for sleep hours.");
        return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthdate);
    const timeDiff = today - birthDateObj;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const leapYearCount = countLeapYears(birthDateObj, today);

    const ageInYears = Math.floor(days / 365);
    const ageInDays = days % 365;

    const sleepDaysTotal = (days * sleepHours) / 24;
    const sleepYearsTotal = (sleepDaysTotal / 365).toFixed(2);
    const sleepPercentageTotal = ((sleepDaysTotal / days) * 100).toFixed(2);

    yearsOld.textContent = ageInYears;
    daysOld.textContent = ageInDays;
    daysLived.textContent = days;
    minutesLived.textContent = minutes;
    leapYears.textContent = leapYearCount;
    sleepDays.textContent = sleepDaysTotal.toFixed(2);
    sleepYears.textContent = sleepYearsTotal;
    sleepPercentage.textContent = `${sleepPercentageTotal}%`;

    progress.style.width = `${sleepPercentageTotal}%`;

    funFact.textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
    motivationalQuote.textContent = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    // Change background color when modal opens
    document.body.classList.add('modal-open');
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    // Reset background color when modal closes
    document.body.classList.remove('modal-open');
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        document.body.classList.remove('modal-open');
        modal.style.display = "none";
    }
});

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.style.display = "flex";
}

alertCloseBtn.addEventListener('click', () => {
    alertModal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === alertModal) {
        alertModal.style.display = "none";
    }
});

function countLeapYears(startDate, endDate) {
    let count = 0;
    for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            count++;
        }
    }
    return count;
}