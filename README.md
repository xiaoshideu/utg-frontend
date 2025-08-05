# UTG Frontend - UBS Frontend System

A modern, responsive web application for the UTG (UBS) system. This frontend provides a clean, professional interface with dashboard functionality, reporting capabilities, and system management features.

## Features

### 🎯 Core Functionality
- **Interactive Dashboard** - Real-time system status and quick actions
- **Reports Section** - Generate and view system reports
- **Settings Panel** - Customize theme and notification preferences
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### 🎨 User Interface
- Modern, clean design with professional styling
- Dark/Light theme switching with persistent storage
- Smooth animations and hover effects
- Intuitive navigation between sections

### ⚡ Technical Features
- Pure HTML5, CSS3, and vanilla JavaScript (no external dependencies)
- Responsive CSS Grid and Flexbox layouts
- Local storage for user preferences
- Real-time status updates and notifications
- Action counter and interaction tracking

## Quick Start

### Option 1: Direct File Access
1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start using the application immediately

### Option 2: Local Server (Recommended)
1. Ensure you have Python installed on your system
2. Navigate to the project directory
3. Run the development server:
   ```bash
   npm start
   # or alternatively
   python3 -m http.server 8000
   ```
4. Open your browser and visit `http://localhost:8000`

## Project Structure

```
utg-frontend/
├── index.html          # Main application entry point
├── style.css           # All styling and responsive design
├── script.js           # JavaScript functionality and interactions
├── package.json        # Project configuration and scripts
├── README.md           # This documentation file
└── .gitignore          # Git ignore rules
```

## Usage Guide

### Navigation
- Click on **Dashboard**, **Reports**, or **Settings** in the top navigation
- Each section provides different functionality and views

### Dashboard Features
- **System Status**: Shows real-time online status with animated indicator
- **Quick Actions**: 
  - "Generate Report" - Simulates report generation
  - "Refresh Data" - Updates timestamps and refreshes system data
- **Statistics**: Tracks total number of actions performed

### Reports Section
- View available report types
- Generate system and performance reports
- Future expansion point for additional report types

### Settings
- **Theme**: Switch between Light and Dark themes
- **Notifications**: Toggle notification preferences
- Settings are automatically saved to browser local storage

## Customization

### Themes
The application supports light and dark themes. Theme preference is saved automatically and persists between sessions.

### Styling
Modify `style.css` to customize:
- Color schemes
- Layout and spacing
- Typography
- Animation effects

### Functionality
Extend `script.js` to add:
- New interactive features
- API integrations
- Additional dashboard widgets
- Enhanced reporting capabilities

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Development

### Available Scripts
- `npm start` - Start local development server
- `npm run build` - Prepare for production deployment
- `npm test` - Run tests (to be implemented)
- `npm run lint` - Code linting (to be implemented)

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Technical Details

### Performance
- Lightweight vanilla JavaScript implementation
- No external dependencies or frameworks
- Optimized CSS with efficient selectors
- Minimal DOM manipulation for better performance

### Accessibility
- Semantic HTML5 structure
- Keyboard navigation support
- ARIA labels where appropriate
- High contrast color schemes

### Security
- No external API calls or data transmission
- Local storage only for user preferences
- Client-side only implementation

## Future Enhancements

### Planned Features
- [ ] Real API integration
- [ ] Advanced reporting dashboard
- [ ] User authentication system
- [ ] Data visualization charts
- [ ] Export functionality
- [ ] Multi-language support

### Technical Improvements
- [ ] Unit test implementation
- [ ] Build process optimization
- [ ] Progressive Web App (PWA) features
- [ ] Enhanced accessibility features

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/xiaoshideu/utg-frontend).