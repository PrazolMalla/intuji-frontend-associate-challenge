# Responsive Modern Finance Web Application

## Overview

This is a responsive and modern finance web application built using HTML, CSS, SASS, and JavaScript with the Chart.js library. The project follows the BEM (Block Element Modifier) naming convention for maintainable and scalable CSS.

## Technologies Used

- **HTML**: Structure of the web application
- **CSS & SASS**: Styling with variables, mixins, and modular SCSS
- **JavaScript**: Interactivity and dynamic elements
- **Chart.js**: Data visualization

## Folder Structure

```
finance-app/
│── assets/
│   └── img/                # Image assets
│── styles/
│   ├── utils/
│   │   └── _mixins.scss    # Mixins for reusable styles
│   ├── base/
│   │   ├── _variables.scss # Global variables
│   │   ├── _reset.scss     # CSS reset
│   │   ├── _typography.scss# Typography styles
│   ├── layout/
│   │   ├── _layout.scss    # Main layout styles
│   │   ├── _sidebar.scss   # Sidebar styles
│   │   ├── _header.scss    # Header styles
│   ├── components/
│   │   ├── _buttons.scss   # Button styles
│   │   ├── _overview.scss  # Overview section styles
│   │   ├── _savings.scss   # Savings section styles
│   │   ├── _transaction.scss # Transactions section styles
│   │   ├── _analytics.scss # Analytics section styles
│   ├── main.scss           # Main SCSS file importing all partials
│── index.html              # Main HTML file
│── script.js               # JavaScript file for interactivity
│── README.md               # Project documentation
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finance-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd finance-app
   ```
3. Install dependencies (if using a package manager like npm for SASS compilation):
   ```bash
   npm install
   ```
4. Compile SASS to CSS (if applicable):
   ```bash
   npm run sass
   ```
5. Open `index.html` in your browser or use a live server extension.

## Usage

- Modify SCSS files to customize the UI.
- Update `script.js` to add more interactive features.
- Use `Chart.js` to customize graphs and analytics.

## Contributing

Feel free to fork this project and submit a pull request with improvements!

## License

This project is open-source and available under the MIT License.
