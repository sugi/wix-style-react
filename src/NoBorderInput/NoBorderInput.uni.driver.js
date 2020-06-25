import inputUniDriverFactory from '../Input/Input.uni.driver';
import DataHooks from './dataHooks';

const noBorderInputUniDriverFactory = ({ base, body }) => {
  const inputDriver = inputUniDriverFactory({
    base,
    body,
  });

  return {
    ...inputDriver,
    getLabel: async () =>
      await base.$$(`[data-hook="${DataHooks.label}"]`).textContent,
    getStatusMessage: async () =>
      await base.$$(`[data-hook="${DataHooks.statusMessage}"]`).textContent,
  };
};

export default noBorderInputUniDriverFactory;
