import React, { useMemo } from 'react';
import { withEllipsedTooltip } from './EllipsedTooltip';
import { ZIndex } from '../../ZIndex';

export default React.forwardRef(({ Component, props }, ref) => {
  const {
    flip,
    fixed,
    placement,
    timeout,
    appendTo = 'window',
    maxWidth = 204,
    zIndex = ZIndex('Tooltip'),
    hideDelay,
    showDelay,
    ellipsis,
    showTooltip = true,
    children,
    ...rest
  } = props;

  const tooltipProps = {
    appendTo,
    flip,
    fixed,
    placement,
    timeout,
    maxWidth,
    zIndex,
    hideDelay,
    showDelay,
    children,
  };

  const EllipsedComponent = useMemo(
    () =>
      withEllipsedTooltip({
        showTooltip,
        tooltipProps,
      })(Component),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...Object.values(tooltipProps), Component, showTooltip],
  );

  return <EllipsedComponent ref={ref} children={children} {...rest} />;
});
