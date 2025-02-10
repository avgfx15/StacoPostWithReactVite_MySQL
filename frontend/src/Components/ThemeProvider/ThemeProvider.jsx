import { useSelector } from 'react-redux';
import { themeChangeState } from '../../Redeux/Theme/ThemeSlice';

import PropTypes from 'prop-types'; // Import PropTypes

export const ThemeProvider = ({ children }) => {
  const themeChange = useSelector(themeChangeState);
  console.log(themeChange);

  return (
    <div className={themeChange}>
      <div className='bg-whitetext-sky-950 dark:bg-sky-950 dark:text-gray-800'>
        {children}
      </div>
    </div>
  );
};

// ✅ Add prop validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is passed
};
