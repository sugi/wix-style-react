import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getScrollPositionY } from './scrollPositionLogic';

const ScrollableContainer = ({
  dataHook,
  className,
  style,
  children,
  onScrollPositionChanged,
  onScrollChanged,
  scrollThrottleWait,
}) => {
  const scrollContainerElement = useRef(null);
  const scrollPositionY = useRef('');

  const handleScrollPositionChanged = useCallback(
    throttle(
      ({ target }) => {
        const newScrollPositionY = getScrollPositionY(target);
        if (scrollPositionY.current !== newScrollPositionY) {
          scrollPositionY.current = newScrollPositionY;
          onScrollPositionChanged({
            target,
            position: { y: newScrollPositionY },
          });
        }
      },
      scrollThrottleWait,
      { trailing: true },
    ),
    [onScrollPositionChanged, scrollThrottleWait],
  );

  const handleScrollChanged = useCallback(
    throttle(e => onScrollChanged(e), scrollThrottleWait, { trailing: true }),
    [onScrollChanged, scrollThrottleWait],
  );

  useEffect(() => {
    // Registering to the scroll event only if the relevant handlers were provided
    const scrollableElement = scrollContainerElement.current;
    if (onScrollPositionChanged) {
      scrollableElement.addEventListener('scroll', handleScrollPositionChanged);
      // We trigger a call to this handler to expose the initial position state to registering consumers
      handleScrollPositionChanged({ target: scrollableElement });
    }
    if (onScrollChanged) {
      scrollableElement.addEventListener('scroll', handleScrollChanged);
    }
    return () => {
      // Unregistering from relevant events on component unmount
      if (onScrollPositionChanged) {
        handleScrollPositionChanged.cancel();
        scrollableElement.removeEventListener(
          'scroll',
          handleScrollPositionChanged,
        );
      }
      if (onScrollChanged) {
        handleScrollChanged.cancel();
        scrollableElement.removeEventListener('scroll', handleScrollChanged);
      }
    };
  }, [
    handleScrollChanged,
    handleScrollPositionChanged,
    onScrollChanged,
    onScrollPositionChanged,
  ]);

  const stl = {
    height: 'inherit',
    width: 'inherit',
    ...style,
    overflowY: 'auto',
  };

  return (
    <div
      data-hook={dataHook}
      className={className}
      style={stl}
      ref={scrollContainerElement}
    >
      {children}
    </div>
  );
};

ScrollableContainer.propTypes = {
  /* The wait time value the scroll event will be throttled by */
  scrollThrottleWait: PropTypes.number,
  /** A Handler for scroll position changes
   * ##### Signature:
   * function({position: {x: positionX, y: positionY}, target: HTMLElement}) => void
   * * `positionX`: start | middle | end | none (not implemented yet)
   * * `positionY`: top | middle | bottom | none
   */
  onScrollPositionChanged: PropTypes.func,
  /** A Generic Handler for scroll changes with throttling
   * ##### Signature:
   * function({target: HTMLElement}) => void
   */
  onScrollChanged: PropTypes.func,
};

ScrollableContainer.defaultProps = {
  scrollThrottleWait: 100,
};

export default ScrollableContainer;
