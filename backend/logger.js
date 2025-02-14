import chalk from 'chalk';

export const success = (message) => {
  console.log('🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶 Success Start 🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶');
  console.log('');
  console.log(chalk.bold.bgHex('#e50fae')(message));
  console.log('');
  console.log('🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶 Success End 🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶');
};

export const error = (message) => {
  console.log('😡😡😡😡😡😡😡😡😡😡 Error Start 😡😡😡😡😡😡😡😡😡');
  console.log('');
  console.log(chalk.bold.bgRed(message));
  console.log('');
  console.log('😡😡😡😡😡😡😡😡😡 Error End 😡😡😡😡😡😡😡😡😡');
};

export const pending = (message) => {
  console.log('🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢 Pending Start 🤢🤢🤢🤢🤢🤢🤢🤢🤢');
  console.log('');
  console.log(chalk.bold.bgGreen(message));
  console.log('');
  console.log('🤢🤢🤢🤢🤢🤢🤢🤢🤢 Pending Error 🤢🤢🤢🤢🤢🤢🤢🤢🤢');
};
export const warning = (message) => {
  console.log('🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵 Success Start 🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵');
  console.log('');
  console.log(chalk.bold.bgHex('#FFA500')(message));
  console.log('');
  console.log('🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵 Success End 🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵');
  console.log(chalk.bold.bgRed(message));
};
