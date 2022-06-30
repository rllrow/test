import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import './DropDown.style.scss';

export interface INode {
  title: string;
  onClick?: () => void;
}

interface IDropDownPros {
  children: ReactNode;
  trigger: 'click' | 'hover';
  content: INode[];
}

export const DropDown: FC<IDropDownPros> = ({ children, trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = dropDownRef.current;

    if (node) {
      if (trigger === 'hover') {
        const handleMouseOver = () => setIsHover(true);
        const handleMouseOut = () => setIsHover(false);

        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
      if (trigger === 'click') {
        const clickHandler = (event: MouseEvent) => {
          if (!dropDownRef.current || dropDownRef.current.contains(event.target as Node)) {
            setIsOpen((v) => !v);
            return;
          }
          setIsOpen(false);
        };
        document.addEventListener('click', clickHandler);

        return () => {
          document.removeEventListener('click', clickHandler);
        };
      }
    }
  }, [trigger]);

  const isOnFocus = useMemo(() => {
    return isHover || isOpen || false;
  }, [isHover, isOpen]);

  return (
    <div className="dropDown-container">
      <div className="children-wrapper" ref={dropDownRef}>
        {children}
        <div className={!isOnFocus ? 'dropDown-content' : 'dropDown-content active'}>
          {content.map((node, index) => {
            return (
              <div key={index} onClick={node.onClick} className="content-item">
                {node.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
