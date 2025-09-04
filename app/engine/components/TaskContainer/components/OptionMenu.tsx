"use client";

import React, { useEffect, useRef, useState } from 'react';
import { OptionMenu, Dropdown, DropdownItem } from './OptionMenu.styles';

interface OptionsMenuProps {
  removeTask: () => void;
  editTask: () => void;
}

const OptionsMenu = ({ removeTask, editTask }: OptionsMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !e.composedPath().includes(ref.current)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ marginLeft: "auto" }}>
      <OptionMenu ref={ref} onClick={() => setOpen(!open)}>
        ⋮
        {open && (
          <Dropdown>
            <DropdownItem onClick={editTask}>Edit</DropdownItem>
            <DropdownItem operation='delete' onClick={removeTask}>Delete</DropdownItem>
          </Dropdown>
        )}
      </OptionMenu>
    </div>
  );
};

export default OptionsMenu;
