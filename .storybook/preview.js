/** @type { import('@storybook/react').Preview } */
import '../src/index.css';

// Add global styles to reset Storybook styles
const customViewPortStyles = `
  .sb-show-main.sb-main-padded {
    padding: 0 !important;
  }
`;

const style = document.createElement('style');
style.innerHTML = customViewPortStyles;
document.head.appendChild(style);

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
