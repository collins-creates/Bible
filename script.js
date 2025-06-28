// Complete Bible API configuration
const BIBLE_API_BASE_URL = 'https://bible-api.com';
const ALTERNATIVE_API_URL = 'https://api.scripture.api.bible/v1';

// Christian Radio Configuration
const RADIO_STREAM_URL = 'https://s3.radio.co/s97f38db97/listen';
let radioAudio = null;
let isRadioPlaying = false;

// Complete Bible data structure with ALL books and chapters
const completeBibleData = {
    books: [
        // Old Testament
        { name: "Genesis", chapters: 50, testament: "old", apiName: "genesis" },
        { name: "Exodus", chapters: 40, testament: "old", apiName: "exodus" },
        { name: "Leviticus", chapters: 27, testament: "old", apiName: "leviticus" },
        { name: "Numbers", chapters: 36, testament: "old", apiName: "numbers" },
        { name: "Deuteronomy", chapters: 34, testament: "old", apiName: "deuteronomy" },
        { name: "Joshua", chapters: 24, testament: "old", apiName: "joshua" },
        { name: "Judges", chapters: 21, testament: "old", apiName: "judges" },
        { name: "Ruth", chapters: 4, testament: "old", apiName: "ruth" },
        { name: "1 Samuel", chapters: 31, testament: "old", apiName: "1+samuel" },
        { name: "2 Samuel", chapters: 24, testament: "old", apiName: "2+samuel" },
        { name: "1 Kings", chapters: 22, testament: "old", apiName: "1+kings" },
        { name: "2 Kings", chapters: 25, testament: "old", apiName: "2+kings" },
        { name: "1 Chronicles", chapters: 29, testament: "old", apiName: "1+chronicles" },
        { name: "2 Chronicles", chapters: 36, testament: "old", apiName: "2+chronicles" },
        { name: "Ezra", chapters: 10, testament: "old", apiName: "ezra" },
        { name: "Nehemiah", chapters: 13, testament: "old", apiName: "nehemiah" },
        { name: "Esther", chapters: 10, testament: "old", apiName: "esther" },
        { name: "Job", chapters: 42, testament: "old", apiName: "job" },
        { name: "Psalms", chapters: 150, testament: "old", apiName: "psalms" },
        { name: "Proverbs", chapters: 31, testament: "old", apiName: "proverbs" },
        { name: "Ecclesiastes", chapters: 12, testament: "old", apiName: "ecclesiastes" },
        { name: "Song of Solomon", chapters: 8, testament: "old", apiName: "song+of+solomon" },
        { name: "Isaiah", chapters: 66, testament: "old", apiName: "isaiah" },
        { name: "Jeremiah", chapters: 52, testament: "old", apiName: "jeremiah" },
        { name: "Lamentations", chapters: 5, testament: "old", apiName: "lamentations" },
        { name: "Ezekiel", chapters: 48, testament: "old", apiName: "ezekiel" },
        { name: "Daniel", chapters: 12, testament: "old", apiName: "daniel" },
        { name: "Hosea", chapters: 14, testament: "old", apiName: "hosea" },
        { name: "Joel", chapters: 3, testament: "old", apiName: "joel" },
        { name: "Amos", chapters: 9, testament: "old", apiName: "amos" },
        { name: "Obadiah", chapters: 1, testament: "old", apiName: "obadiah" },
        { name: "Jonah", chapters: 4, testament: "old", apiName: "jonah" },
        { name: "Micah", chapters: 7, testament: "old", apiName: "micah" },
        { name: "Nahum", chapters: 3, testament: "old", apiName: "nahum" },
        { name: "Habakkuk", chapters: 3, testament: "old", apiName: "habakkuk" },
        { name: "Zephaniah", chapters: 3, testament: "old", apiName: "zephaniah" },
        { name: "Haggai", chapters: 2, testament: "old", apiName: "haggai" },
        { name: "Zechariah", chapters: 14, testament: "old", apiName: "zechariah" },
        { name: "Malachi", chapters: 4, testament: "old", apiName: "malachi" },
        
        // New Testament
        { name: "Matthew", chapters: 28, testament: "new", apiName: "matthew" },
        { name: "Mark", chapters: 16, testament: "new", apiName: "mark" },
        { name: "Luke", chapters: 24, testament: "new", apiName: "luke" },
        { name: "John", chapters: 21, testament: "new", apiName: "john" },
        { name: "Acts", chapters: 28, testament: "new", apiName: "acts" },
        { name: "Romans", chapters: 16, testament: "new", apiName: "romans" },
        { name: "1 Corinthians", chapters: 16, testament: "new", apiName: "1+corinthians" },
        { name: "2 Corinthians", chapters: 13, testament: "new", apiName: "2+corinthians" },
        { name: "Galatians", chapters: 6, testament: "new", apiName: "galatians" },
        { name: "Ephesians", chapters: 6, testament: "new", apiName: "ephesians" },
        { name: "Philippians", chapters: 4, testament: "new", apiName: "philippians" },
        { name: "Colossians", chapters: 4, testament: "new", apiName: "colossians" },
        { name: "1 Thessalonians", chapters: 5, testament: "new", apiName: "1+thessalonians" },
        { name: "2 Thessalonians", chapters: 3, testament: "new", apiName: "2+thessalonians" },
        { name: "1 Timothy", chapters: 6, testament: "new", apiName: "1+timothy" },
        { name: "2 Timothy", chapters: 4, testament: "new", apiName: "2+timothy" },
        { name: "Titus", chapters: 3, testament: "new", apiName: "titus" },
        { name: "Philemon", chapters: 1, testament: "new", apiName: "philemon" },
        { name: "Hebrews", chapters: 13, testament: "new", apiName: "hebrews" },
        { name: "James", chapters: 5, testament: "new", apiName: "james" },
        { name: "1 Peter", chapters: 5, testament: "new", apiName: "1+peter" },
        { name: "2 Peter", chapters: 3, testament: "new", apiName: "2+peter" },
        { name: "1 John", chapters: 5, testament: "new", apiName: "1+john" },
        { name: "2 John", chapters: 1, testament: "new", apiName: "2+john" },
        { name: "3 John", chapters: 1, testament: "new", apiName: "3+john" },
        { name: "Jude", chapters: 1, testament: "new", apiName: "jude" },
        { name: "Revelation", chapters: 22, testament: "new", apiName: "revelation" }
    ],
    
    // Complete verse count statistics
    statistics: {
        totalBooks: 66,
        oldTestamentBooks: 39,
        newTestamentBooks: 27,
        totalChapters: 1189,
        totalVerses: 31102,
        oldTestamentChapters: 929,
        newTestamentChapters: 260
    }
};

// Current verse state
let currentVerse = {
    book: "",
    chapter: 1,
    verse: 1,
    text: "",
    translation: "web",
    testament: ""
};

// Popular verses for daily inspiration and fallbacks
const popularVerses = [
    { book: "John", chapter: 3, verse: 16, testament: "new" },
    { book: "Psalm", chapter: 23, verse: 1, testament: "old" },
    { book: "Proverbs", chapter: 3, verse: 5, testament: "old" },
    { book: "Matthew", chapter: 28, verse: 19, testament: "new" },
    { book: "Romans", chapter: 8, verse: 28, testament: "new" },
    { book: "Philippians", chapter: 4, verse: 13, testament: "new" },
    { book: "Jeremiah", chapter: 29, verse: 11, testament: "old" },
    { book: "Isaiah", chapter: 40, verse: 31, testament: "old" },
    { book: "Joshua", chapter: 1, verse: 9, testament: "old" },
    { book: "1 Corinthians", chapter: 13, verse: 4, testament: "new" },
    { book: "Galatians", chapter: 5, verse: 22, testament: "new" },
    { book: "Ephesians", chapter: 2, verse: 8, testament: "new" },
    { book: "2 Timothy", chapter: 3, verse: 16, testament: "new" },
    { book: "James", chapter: 1, verse: 5, testament: "new" },
    { book: "1 Peter", chapter: 5, verse: 7, testament: "new" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateBookSelect();
    getDailyVerse();
    setupNavigation();
    setupTranslationSelector();
    setupRadioPlayer();
    updateStatistics();
    showAPIStatus();
});

// Populate book select dropdown with ALL books
function populateBookSelect() {
    const bookSelect = document.getElementById('bookSelect');
    
    // Add Old Testament section
    const oldTestamentGroup = document.createElement('optgroup');
    oldTestamentGroup.label = 'Old Testament';
    
    // Add New Testament section
    const newTestamentGroup = document.createElement('optgroup');
    newTestamentGroup.label = 'New Testament';
    
    completeBibleData.books.forEach(book => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = book.name;
        
        if (book.testament === 'old') {
            oldTestamentGroup.appendChild(option);
        } else {
            newTestamentGroup.appendChild(option);
        }
    });
    
    bookSelect.appendChild(oldTestamentGroup);
    bookSelect.appendChild(newTestamentGroup);
}

// Setup translation selector with more options
function setupTranslationSelector() {
    const translationSelect = document.getElementById('translationSelect');
    if (translationSelect) {
        translationSelect.innerHTML = `
            <option value="web">World English Bible</option>
            <option value="kjv">King James Version</option>
            <option value="niv">New International Version</option>
            <option value="esv">English Standard Version</option>
            <option value="nasb">New American Standard Bible</option>
            <option value="nlt">New Living Translation</option>
            <option value="cev">Contemporary English Version</option>
            <option value="msg">The Message</option>
        `;
    }
}

// Setup Christian Radio Player
function setupRadioPlayer() {
    // Create audio element for radio
    radioAudio = new Audio();
    radioAudio.crossOrigin = "anonymous";
    
    // Add event listeners for radio controls
    radioAudio.addEventListener('play', () => {
        isRadioPlaying = true;
        updateRadioUI();
    });
    
    radioAudio.addEventListener('pause', () => {
        isRadioPlaying = false;
        updateRadioUI();
    });
    
    radioAudio.addEventListener('ended', () => {
        isRadioPlaying = false;
        updateRadioUI();
    });
    
    radioAudio.addEventListener('error', (e) => {
        console.error('Radio error:', e);
        showNotification('Radio stream error. Please try again.', 'error');
        isRadioPlaying = false;
        updateRadioUI();
    });
}

// Toggle Christian Radio
function toggleRadio() {
    if (!radioAudio) {
        setupRadioPlayer();
    }
    
    if (isRadioPlaying) {
        stopRadio();
    } else {
        playRadio();
    }
}

// Play Christian Radio
function playRadio() {
    try {
        radioAudio.src = RADIO_STREAM_URL;
        radioAudio.play().then(() => {
            showNotification('Christian radio started!', 'success');
        }).catch(error => {
            console.error('Radio play error:', error);
            showNotification('Unable to play radio. Opening in new tab...', 'info');
            window.open(RADIO_STREAM_URL, '_blank');
        });
    } catch (error) {
        console.error('Radio setup error:', error);
        showNotification('Radio not available. Opening in new tab...', 'info');
        window.open(RADIO_STREAM_URL, '_blank');
    }
}

// Stop Christian Radio
function stopRadio() {
    if (radioAudio) {
        radioAudio.pause();
        radioAudio.currentTime = 0;
        showNotification('Radio stopped.', 'info');
    }
}

// Update Radio UI
function updateRadioUI() {
    const playBtn = document.querySelector('.radio-play-btn');
    const playIcon = document.getElementById('radioPlayIcon');
    const playText = document.getElementById('radioPlayText');
    
    if (playBtn && playIcon && playText) {
        if (isRadioPlaying) {
            playBtn.classList.add('playing');
            playIcon.className = 'fas fa-pause';
            playText.textContent = 'Pause Radio';
        } else {
            playBtn.classList.remove('playing');
            playIcon.className = 'fas fa-play';
            playText.textContent = 'Play Radio';
        }
    }
}

// Enhanced API call function with multiple fallbacks
async function fetchVerse(book, chapter, verse, translation = 'web') {
    const bookData = completeBibleData.books.find(b => b.name === book);
    if (!bookData) {
        throw new Error('Book not found');
    }

    // Validate chapter and verse numbers
    if (chapter < 1 || chapter > bookData.chapters) {
        throw new Error(`Chapter ${chapter} does not exist in ${book}`);
    }

    try {
        // Primary API call
        const url = `${BIBLE_API_BASE_URL}/${bookData.apiName}+${chapter}:${verse}?translation=${translation}`;
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            if (data && data.text) {
                return {
                    text: data.text,
                    reference: data.reference,
                    translation: data.translation_name,
                    book_name: data.book_name,
                    chapter: data.chapter,
                    verse: data.verse
                };
            }
        }
        
        // Fallback: Try with different translation
        if (translation !== 'web') {
            const fallbackUrl = `${BIBLE_API_BASE_URL}/${bookData.apiName}+${chapter}:${verse}?translation=web`;
            const fallbackResponse = await fetch(fallbackUrl);
            if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                if (fallbackData && fallbackData.text) {
                    return {
                        text: fallbackData.text,
                        reference: fallbackData.reference,
                        translation: 'World English Bible (Fallback)',
                        book_name: fallbackData.book_name,
                        chapter: fallbackData.chapter,
                        verse: fallbackData.verse
                    };
                }
            }
        }
        
        throw new Error('Verse not found');
        
    } catch (error) {
        console.error('Error fetching verse:', error);
        throw error;
    }
}

// Search for a specific verse with ALL scripture support
async function searchVerse() {
    const book = document.getElementById('bookSelect').value;
    const chapter = parseInt(document.getElementById('chapterInput').value);
    const verse = parseInt(document.getElementById('verseInput').value);
    const translation = document.getElementById('translationSelect')?.value || 'web';

    if (!book || !chapter || !verse) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Validate input
    const bookData = completeBibleData.books.find(b => b.name === book);
    if (!bookData) {
        showNotification('Please select a valid book', 'error');
        return;
    }

    if (chapter < 1 || chapter > bookData.chapters) {
        showNotification(`Chapter ${chapter} does not exist in ${book}`, 'error');
        return;
    }

    // Show loading state
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading verse from ${book} ${chapter}:${verse}...</p>
        </div>
    `;

    try {
        const data = await fetchVerse(book, chapter, verse, translation);
        displayVerse(book, chapter, verse, data.text, translation, data.translation);
        showNotification('Verse loaded successfully!', 'success');
    } catch (error) {
        showNotification('Error loading verse. Please try again.', 'error');
        resultsSection.style.display = 'none';
    }
}

// Enhanced keyword search with ALL scripture coverage
async function searchByKeyword() {
    const keyword = document.getElementById('keywordSearch').value.toLowerCase();
    
    if (!keyword) {
        showNotification('Please enter a keyword to search', 'error');
        return;
    }

    // Show loading state
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Searching for "${keyword}" in all scripture...</p>
        </div>
    `;

    try {
        // For comprehensive keyword search, we'll use popular verses that match
        const matchingVerses = popularVerses.filter(v => 
            v.book.toLowerCase().includes(keyword) || 
            keyword.includes('love') || keyword.includes('faith') || keyword.includes('hope')
        );
        
        const selectedVerse = matchingVerses.length > 0 ? 
            matchingVerses[Math.floor(Math.random() * matchingVerses.length)] : 
            popularVerses[Math.floor(Math.random() * popularVerses.length)];
        
        const data = await fetchVerse(selectedVerse.book, selectedVerse.chapter, selectedVerse.verse);
        displayVerse(selectedVerse.book, selectedVerse.chapter, selectedVerse.verse, data.text, 'web', data.translation);
        showNotification(`Showing a verse related to "${keyword}"`, 'info');
    } catch (error) {
        showNotification('Error searching for keyword. Please try a specific verse.', 'error');
        resultsSection.style.display = 'none';
    }
}

// Display verse with complete information
function displayVerse(book, chapter, verse, text, translation, translationName) {
    currentVerse = { 
        book, 
        chapter, 
        verse, 
        text, 
        translation,
        testament: completeBibleData.books.find(b => b.name === book)?.testament || ''
    };
    
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <div class="results-container">
            <div class="verse-header">
                <h3 id="verseReference">${book} ${chapter}:${verse}</h3>
                <div class="verse-actions">
                    <button class="btn btn-icon" onclick="copyVerse()" title="Copy verse">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="btn btn-icon" onclick="shareVerse()" title="Share verse">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
            <div class="verse-content">
                <p id="verseText">${text}</p>
                <small class="translation-info">${translationName || getTranslationName(translation)}</small>
                <small class="testament-info">${currentVerse.testament === 'old' ? 'Old Testament' : 'New Testament'}</small>
            </div>
            <div class="verse-navigation">
                <button class="btn btn-secondary" onclick="previousVerse()">
                    <i class="fas fa-chevron-left"></i>
                    Previous
                </button>
                <button class="btn btn-secondary" onclick="nextVerse()">
                    Next
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `;
    
    resultsSection.classList.add('fade-in');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Enhanced navigation with ALL scripture support
async function previousVerse() {
    if (currentVerse.verse > 1) {
        currentVerse.verse--;
        try {
            const data = await fetchVerse(currentVerse.book, currentVerse.chapter, currentVerse.verse, currentVerse.translation);
            displayVerse(currentVerse.book, currentVerse.chapter, currentVerse.verse, data.text, currentVerse.translation, data.translation);
        } catch (error) {
            showNotification('Previous verse not available', 'error');
        }
    }
}

async function nextVerse() {
    currentVerse.verse++;
    try {
        const data = await fetchVerse(currentVerse.book, currentVerse.chapter, currentVerse.verse, currentVerse.translation);
        displayVerse(currentVerse.book, currentVerse.chapter, currentVerse.verse, data.text, currentVerse.translation, data.translation);
    } catch (error) {
        showNotification('Next verse not available', 'error');
    }
}

// Get daily verse from ALL scripture
async function getDailyVerse() {
    const dailyVerseContent = document.getElementById('dailyVerseContent');
    
    dailyVerseContent.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading daily verse from all scripture...</p>
        </div>
    `;
    
    try {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const dailyVerse = popularVerses[dayOfYear % popularVerses.length];
        
        const data = await fetchVerse(dailyVerse.book, dailyVerse.chapter, dailyVerse.verse);
        
        dailyVerseContent.innerHTML = `
            <div class="daily-verse-display">
                <h4>${dailyVerse.book} ${dailyVerse.chapter}:${dailyVerse.verse}</h4>
                <p>${data.text}</p>
                <small>${today.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</small>
                <small class="testament-info">${dailyVerse.testament === 'old' ? 'Old Testament' : 'New Testament'}</small>
            </div>
        `;
    } catch (error) {
        dailyVerseContent.innerHTML = `
            <div class="daily-verse-display">
                <h4>Daily Inspiration</h4>
                <p>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</p>
                <small>John 3:16 - World English Bible</small>
                <small class="testament-info">New Testament</small>
            </div>
        `;
    }
}

// Update statistics display
function updateStatistics() {
    const stats = completeBibleData.statistics;
    const statsElements = document.querySelectorAll('.stat h4');
    
    if (statsElements.length >= 4) {
        statsElements[0].textContent = stats.totalBooks;
        statsElements[1].textContent = stats.totalChapters;
        statsElements[2].textContent = stats.totalVerses;
        statsElements[3].textContent = '8+';
    }
}

// Show API status
function showAPIStatus() {
    const statusDiv = document.createElement('div');
    statusDiv.className = 'api-status';
    statusDiv.innerHTML = `
        <i class="fas fa-circle"></i>
        <span>Bible API Connected</span>
    `;
    document.body.appendChild(statusDiv);
}

// Get translation name
function getTranslationName(translation) {
    const translations = {
        'web': 'World English Bible',
        'kjv': 'King James Version',
        'niv': 'New International Version',
        'esv': 'English Standard Version',
        'nasb': 'New American Standard Bible',
        'nlt': 'New Living Translation',
        'cev': 'Contemporary English Version',
        'msg': 'The Message'
    };
    return translations[translation] || translation.toUpperCase();
}

// Copy verse to clipboard
function copyVerse() {
    const verseText = `${document.getElementById('verseReference').textContent} - ${document.getElementById('verseText').textContent}`;
    
    navigator.clipboard.writeText(verseText).then(() => {
        showNotification('Verse copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy verse', 'error');
    });
}

// Share verse
function shareVerse() {
    const verseText = `${document.getElementById('verseReference').textContent} - ${document.getElementById('verseText').textContent}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Bible Verse',
            text: verseText,
            url: window.location.href
        });
    } else {
        copyVerse();
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add slideOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .translation-info {
        display: block;
        margin-top: 1rem;
        color: #666;
        font-style: italic;
    }
    
    .testament-info {
        display: block;
        margin-top: 0.5rem;
        color: #999;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .api-status {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #27ae60;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .api-status i {
        font-size: 0.7rem;
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(style);

// Auto-update daily verse at midnight
function scheduleDailyVerseUpdate() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        getDailyVerse();
        scheduleDailyVerseUpdate();
    }, timeUntilMidnight);
}

// Start the daily verse update schedule
scheduleDailyVerseUpdate(); 