import { buttonNextDriverFactory } from 'wix-ui-core/drivers/unidriver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const toggleButtonDriverFactory = (base, body) => {
  const tooltipDriver = tooltipDriverFactory(base, body);

  const buttonBaseElement = body.$('[data-hook="togglebutton-trigger"]');
  const buttonDriver = buttonNextDriverFactory(buttonBaseElement);

  function getLabelPlacement() {
    return body
      .$$('[data-placement]')
      .get(0)
      .attr('data-placement');
  }

  function getTooltipText() {
    return tooltipDriver.getTooltipText();
  }

  // Not using Omit so that AutoDocs will generate properly
  return {
    /** returns true if component exists */
    exists: buttonDriver.exists,
    /** returns the component element */
    element: buttonDriver.element,
    /** click on the element */
    click: buttonDriver.click,
    /** returns true if button is disabled */
    isButtonDisabled: buttonDriver.isButtonDisabled,
    /** returns skin value, applied to a button */
    getSkin: async () => await buttonBaseElement.attr('data-skin'),
    /** returns true if button is selected */
    isButtonSelected: async () =>
      (await buttonBaseElement.attr('data-selected')) === 'true',
    /** @deprecated use `getLabelValue` instead */
    getTooltipText,
    /** returns label placement value */
    getLabelPlacement,
    /** returns label value */
    getLabelValue: async () => {
      const placement = await getLabelPlacement();

      if (placement === 'tooltip') {
        return getTooltipText();
      }

      return base.$('[data-hook="togglebutton-label"]').text();
    },
  };
};
