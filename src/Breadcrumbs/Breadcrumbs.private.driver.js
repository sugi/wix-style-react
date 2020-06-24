export default driverInterface => ({
  isItemFullWidthAt: () => driverInterface.element.childElementCount === 1,
});
