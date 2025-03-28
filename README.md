# Poem Selector

## Overview
The Poem Selector is a simple web-based application that allows users to choose and view different poems from a selection panel. The project dynamically updates the displayed poem based on the user's selection.

## Features
- Dropdown selection for choosing a poem
- Dynamic poem display with title, content, and author
- Smooth UI updates when switching poems
- Scroll resets when selecting a new poem
- Default empty state message when no poem is selected

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
```
/poem-selector
│── index.html  # Main HTML file
│── styles.css  # Styling for the page
│── script.js   # JavaScript logic for poem selection
```

## How It Works
1. **HTML Structure**: The webpage contains a dropdown (`<select>`) for poem selection and a `<div>` to display the chosen poem.
2. **CSS Styling**: Styles enhance readability and presentation.
3. **JavaScript Functionality**:
   - Listens for changes in the dropdown selection.
   - Retrieves the corresponding poem from a predefined dataset.
   - Updates the display dynamically.
   - Ensures smooth transitions when switching between poems.

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/poem-selector.git
   ```
2. Navigate to the project directory:
   ```sh
   cd poem-selector
   ```
3. Open `index.html` in a web browser to use the application.

## Contribution
Feel free to fork the repository and submit pull requests for improvements or additional features.

## License
This project is licensed under the MIT License.

