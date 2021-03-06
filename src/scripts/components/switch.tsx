import { JSX, h } from 'preact';
import { forwardRef } from 'preact/compat';
import { Ref, useMemo } from 'preact/hooks';
import { SWITCH_Z_INDEX } from './constants';
import { FocusCircle, applyClass } from './helpers';
import { useCSS } from './styles';
import { useTheme } from './theme';

export type SwitchProps = JSX.IntrinsicElements['input'];

export const Switch = forwardRef((props: SwitchProps, ref: Ref<HTMLInputElement>) => {
  const css = useCSS();
  const theme = useTheme();
  const wrapperClass = useMemo(
    () =>
      css({
        height: '16px',
        position: 'relative',
        width: '34px',
      }),
    [css],
  );
  const inputClass = useMemo(
    () =>
      css({
        cursor: 'pointer',
        height: '100%',
        margin: 0,
        opacity: 0,
        position: 'absolute',
        width: '100%',
        zIndex: SWITCH_Z_INDEX,
        '&:disabled': {
          cursor: 'default',
        },
      }),
    [css],
  );
  const backgroundClass = useMemo(
    () =>
      css({
        ':disabled + &': {
          opacity: 0.38,
        },
      }),
    [css],
  );
  const barClass = useMemo(
    () =>
      css({
        background: theme.switch.bar,
        borderRadius: '8px',
        height: '12px',
        left: '3px',
        position: 'absolute',
        top: '2px',
        transition: 'background-color linear 80ms',
        width: '28px',
        ':checked + * > &': {
          background: theme.switch.barChecked,
        },
      }),
    [css, theme],
  );
  const knobMoverClass = useMemo(
    () =>
      css({
        left: 0,
        position: 'absolute',
        top: 0,
        transition: 'left linear 80ms',
        ':checked + * > &': {
          left: '18px',
        },
      }),
    [css],
  );
  const knobClass = useMemo(
    () =>
      css({
        background: theme.switch.knob,
        border: theme.switch.knobBorder != null ? `solid 1px ${theme.switch.knobBorder}` : 'none',
        borderRadius: '50%',
        height: '16px',
        transition: 'background linear 80ms, border linear 80ms',
        width: '16px',
        ':checked + * > * > &': {
          background: theme.switch.knobChecked,
          border: 'none',
        },
      }),
    [css, theme],
  );
  return (
    <div class={wrapperClass}>
      <input {...applyClass(props, inputClass)} ref={ref} type="checkbox" />
      <div class={backgroundClass}>
        <div class={barClass} />
        <div class={knobMoverClass}>
          <div class={knobClass} />
          <FocusCircle depth={2} />
        </div>
      </div>
    </div>
  );
});
