import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { DATA_HOOKS, DATA_ACTIVE } from './constnats';

export const breadcrumbsUniDriverFactory = base => {
  const optionAt = async position =>
    base.$(`[data-hook="${DATA_HOOKS.ITEM_WRAPPER}-${position}"]`);

  return {
    ...baseUniDriverFactory(base),
    /** return the number of the items in the breadcrumbs */
    breadcrumbsLength: async () =>
      await base.$$(`[data-hook^="${DATA_HOOKS.ITEM_WRAPPER}-"]`).count(),

    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: async position =>
      await (await optionAt(position)).text(),

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: async position =>
      base
        .$(`[data-hook^="${DATA_HOOKS.BREADCRUMB_CLICKABLE}-${position}"]`)
        .click(),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: async () => {
      const activeItem = await base.$$(`[${DATA_ACTIVE}="true"]`);
      return (await activeItem.count()) === 1
        ? parseInt(await activeItem.get(0).attr('data-position-id'))
        : null;
    },

    /** fulfilled if breadcrumbs component is large */
    isLarge: async () => (await base.attr('data-size')) === 'large',

    /** fulfilled if breadcrumbs component is medium */
    isMedium: async () => (await base.attr('data-size')) === 'medium',

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: async () =>
      (await base.attr('data-theme')) === 'onWhiteBackground',

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: async () =>
      (await base.attr('data-theme')) === 'onGrayBackground',

    /** fulfilled if breadcrumbs component is on dark background */
    isOnDarkBackground: async () =>
      (await base.attr('data-theme')) === 'onDarkBackground',

    /** returns breadcrumbs component classes */
    getLabelClassList: async position => {
      const breadcrumbAt = await optionAt(position);
      const breadcrumbItem = breadcrumbAt.$(
        `[data-hook="${DATA_HOOKS.BREADCRUMBS_ITEM}"]`,
      );
      const classList = await ReactBase(
        breadcrumbItem,
      )._DEPRECATED_getClassList();
      return Array.from(classList).join(' ');
    },

    /** returns true if the item is a link */
    isActiveLinkAt: async index =>
      await (await optionAt(index)).$('a').exists(),
  };
};
