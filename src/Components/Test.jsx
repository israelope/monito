import React from 'react';
import Button from './Button';
import Search from '../assets/icons/Search.png'

// A simple SVG icon to use in the examples.
// You can replace this with your own <img> or icon components.
const ArrowRightIcon = () => (
  <img src={Search} alt="" />
);

const App = () => {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Reusable Button Examples</h1>

      {/* Example 1: Primary Button (custom background and text color) */}
      <Button
        onClick={handlePrimaryClick}
        className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      >
        Primary Action
      </Button>

      {/* Example 2: Secondary/Outline Button */}
      <Button
        onClick={() => console.log('Secondary clicked')}
        className="bg-transparent border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white focus:ring-slate-500"
      >
        Secondary Action
      </Button>

      {/* Example 3: Button with Icon on the left */}
      <Button
        onClick={() => console.log('Icon button clicked')}
        className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
        icon={<ArrowRightIcon />}
      >
        Proceed
      </Button>

      {/* Example 4: Button with Icon on the right */}
      <Button
        onClick={() => console.log('Icon right clicked')}
        className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500"
        icon={<ArrowRightIcon />}
        iconPosition="right"
      >
        Learn More
      </Button>

      {/* Example 5: Disabled Button */}
      <Button
        onClick={() => console.log('This will not fire')}
        className="bg-gray-400 text-white"
        disabled
      >
        Disabled Button
      </Button>
    </div>
  );
};

export default App;
