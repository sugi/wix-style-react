import popoverDriverFactory from '../../Popover/Popover.driver';

export const closablePopoverDriverFactory = ({ element, eventTrigger }) => {
  const popoverDriver = popoverDriverFactory({ element, eventTrigger });

  return {
    ...popoverDriver,
    /** Checks if the popover's content is open */
    isOpened: () => popoverDriver.isContentElementExists(),
  };
};
