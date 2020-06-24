import ReactTestUtils from 'react-dom/test-utils';

const breadcrumbsDriverFactory = ({ element }) => {
  const optionAt = position => element.childNodes[position];

  return {
    exists: () => !!element,

    /** return the number of the items in the breadcrumbs */
    breadcrumbsLength: () => element.childNodes.length,

    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: position => optionAt(position).textContent,

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: position =>
      ReactTestUtils.Simulate.click(
        optionAt(position).querySelector('[data-hook^="breadcrumb-clickable"]'),
      ),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: () => {
      const activeItem = element.querySelector('[data-active="true"]');

      if (!activeItem) {
        return null;
      }

      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },

    /** fulfilled if breadcrumbs component is large */
    isLarge: () => element.getAttribute('data-size') === 'large',

    /** fulfilled if breadcrumbs component is medium */
    isMedium: () => element.getAttribute('data-size') === 'medium',

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: () =>
      element.getAttribute('data-theme') === 'onWhiteBackground',

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: () =>
      element.getAttribute('data-theme') === 'onGrayBackground',

    /** fulfilled if breadcrumbs component is on dark background */
    isOnDarkBackground: () =>
      element.getAttribute('data-theme') === 'onDarkBackground',

    /** returns breadcrumbs component classes */
    getLabelClassList: position =>
      optionAt(position).querySelector('[data-hook="breadcrumbs-item"]')
        .className,

    /** returns true if the item is a link */
    isActiveLinkAt: index => !!optionAt(index).querySelector('a'),
  };
};

export default breadcrumbsDriverFactory;
