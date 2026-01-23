// ========================================
// THEME TOGGLE SCRIPT
// ========================================
// This file handles switching between light and dark themes

// STEP 1: Get the button element from the page
// getElementById finds the element with id="theme-toggle"
const toggleBtn = document.getElementById('theme-toggle');

// STEP 2: Check if user has a saved theme preference
// localStorage saves data in the browser, like a mini database
// If no saved theme, default to 'dark' (our current theme)
const savedTheme = localStorage.getItem('theme') || 'dark';

// STEP 3: Apply the saved theme when page loads
// setAttribute adds data-theme="dark" or data-theme="light" to the <html> tag
// This triggers our CSS variables to change!
document.documentElement.setAttribute('data-theme', savedTheme);

// STEP 4: Update button text to match current theme
// If theme is 'light', show sun icon and "Dark" text (to switch TO dark mode)
// If theme is 'dark', show moon icon and "Light" text (to switch TO light mode)
toggleBtn.textContent = savedTheme === 'light' ? '🌙 Dark' : '☀️ Light';

// STEP 5: Add click listener - this runs when button is clicked
toggleBtn.addEventListener('click', function() {
  // Get current theme from the <html> tag
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Calculate new theme - if it's 'dark', switch to 'light' and vice versa
  // This is called a "ternary operator" - it's a shortcut for if/else
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply the new theme to the page
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save the preference so it persists when user refreshes page
  localStorage.setItem('theme', newTheme);
  
  // Update button text to reflect the NEW state
  // If we just switched TO light mode, button should say "Dark" (to switch back)
  toggleBtn.textContent = newTheme === 'light' ? '🌙 Dark' : '☀️ Light';
});
