# Bible Study Website

A modern, responsive Bible study platform built with HTML, CSS, and JavaScript, powered by real Bible APIs. This website provides an intuitive interface for exploring scripture, searching verses, and accessing daily inspiration with authentic Bible content.

## 🌟 Features

### Core Functionality
- **Real Bible API Integration**: Authentic scripture from multiple translations
- **Multiple Translations**: WEB, KJV, NIV, ESV, NASB
- **Verse Search**: Look up specific verses by book, chapter, and verse number
- **Keyword Search**: Search through scripture using keywords
- **Daily Verse**: Get a new inspirational verse each day
- **Verse Navigation**: Browse through previous and next verses
- **Copy & Share**: Copy verses to clipboard or share them

### User Experience
- **Modern Design**: Clean, beautiful interface with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Intuitive Navigation**: Easy-to-use search and navigation system
- **Real-time Loading**: Live API calls with loading states

### Technical Features
- **Bible API Integration**: Uses bible-api.com for authentic scripture
- **Multiple Translations**: Support for 5 popular Bible translations
- **Error Handling**: Graceful fallbacks when API is unavailable
- **Progressive Enhancement**: Works even with JavaScript disabled
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)
- No additional software installation required

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start exploring the Bible with real API data!

### File Structure
```
bible-website/
├── index.html          # Main HTML file with API integration
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript with Bible API integration
└── README.md           # This file
```

## 📖 How to Use

### Searching for Verses
1. **Select Translation**: Choose from 5 available Bible translations
2. **Specific Verse**: Select a book from the dropdown, enter chapter and verse numbers, then click "Find"
3. **Keyword Search**: Enter a keyword in the search box and click "Search"

### Available Translations
- **World English Bible (WEB)**: Modern, readable translation
- **King James Version (KJV)**: Classic, traditional translation
- **New International Version (NIV)**: Popular, contemporary translation
- **English Standard Version (ESV)**: Accurate, readable translation
- **New American Standard Bible (NASB)**: Literal, precise translation

### Daily Verse
- The daily verse automatically updates at midnight
- Click the "Daily Verse" button to refresh manually
- Verses are fetched from the Bible API in real-time

### Navigation
- Use the navigation menu to jump between sections
- Use "Previous" and "Next" buttons to browse through verses
- Copy or share verses using the action buttons

## 🔌 API Integration

### Bible API (bible-api.com)
This website integrates with the Bible API to provide authentic scripture content:

- **Base URL**: `https://bible-api.com`
- **Authentication**: No API key required for basic usage
- **Rate Limits**: Generous limits for personal use
- **Translations**: Multiple Bible translations available
- **Format**: JSON responses with verse text and metadata

### API Endpoints Used
- `GET /{book}+{chapter}:{verse}?translation={translation}`
- Example: `https://bible-api.com/john+3:16?translation=web`

### Error Handling
- Graceful fallbacks when API is unavailable
- User-friendly error messages
- Loading states for better UX
- Offline detection and status indicators

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Dark blue (#2c3e50)
- **Accent**: Red (#e74c3c)
- **Background**: Clean white with subtle shadows

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- Smooth hover effects on buttons and links
- Fade-in animations for content
- Loading spinners for API calls
- Slide-in notifications

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with side-by-side layouts
- **Tablet**: Adjusted spacing and touch-friendly buttons
- **Mobile**: Stacked layouts and simplified navigation

## 🔧 Customization

### Adding More Translations
To add more Bible translations, edit the `translationSelect` in `index.html` and update the `getTranslationName` function in `script.js`:

```javascript
function getTranslationName(translation) {
    const translations = {
        'web': 'World English Bible',
        'kjv': 'King James Version',
        // Add more translations...
    };
    return translations[translation] || translation.toUpperCase();
}
```

### Changing API Source
To use a different Bible API, update the `BIBLE_API_BASE_URL` and `fetchVerse` function in `script.js`:

```javascript
const BIBLE_API_BASE_URL = 'https://your-api-endpoint.com';
```

### Adding Features
The modular JavaScript structure makes it easy to add new features:
- Add new search functions
- Implement verse bookmarking
- Add audio playback
- Integrate with additional Bible APIs

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with API calls
5. Submit a pull request

## 📞 Support

If you have any questions or need help with the Bible website, please:
1. Check the documentation above
2. Look for existing issues
3. Create a new issue with details about your problem

## 🙏 Acknowledgments

- **Bible API**: Scripture content provided by [bible-api.com](https://bible-api.com)
- **Icons**: Provided by Font Awesome
- **Fonts**: Provided by Google Fonts
- **Design**: Inspired by modern web applications

## ⚠️ Important Notes

- **API Usage**: This website uses the Bible API for educational and spiritual purposes
- **Rate Limits**: Be mindful of API rate limits for production use
- **Content**: All scripture content is fetched from the Bible API in real-time
- **Offline**: The website includes fallbacks for when the API is unavailable

---

**Note**: This website integrates with the Bible API to provide authentic scripture content. For production use, consider implementing caching and rate limiting strategies. 