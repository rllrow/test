import React, { FC, ReactNode, RefObject, useMemo } from 'react';
import './Button.style.scss';

interface BtnPropsType {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: () => void;
  block?: boolean;
  min?: boolean;
  large?: boolean;
  outlined?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

const colors = {
  danger: '#c94a4a',
  success: '#299b29',
  warning: '#eade2f',
  primary: '#f5f5f5',
};

export const Button: FC<BtnPropsType> = ({
  children,
  disabled,
  block,
  loading,
  min,
  large,
  type = 'primary',
  onClick,
  ref,
  outlined,
}) => {
  const styles = useMemo(() => {
    const isBlock = block ? 'block' : '';
    const size = (large && 'large') || (min && 'min') || 'default';
    const bgColor = type;

    return `btn size-${size} type-${bgColor} ${isBlock} `;
  }, [block, large, min, type]);
  return (
    <button
      ref={ref}
      className={styles}
      disabled={disabled}
      onClick={onClick}
      style={outlined ? { background: 'transparent', border: `3px solid ${colors[type]}` } : {}}
    >
      <div className="content-wrapper" style={loading ? { visibility: 'hidden' } : {}}>
        {children}
      </div>
      <svg className="spinner" style={!loading ? { visibility: 'hidden' } : {}}>
        <circle cx="10" cy="10" r="9"></circle>
      </svg>
    </button>
  );
};
