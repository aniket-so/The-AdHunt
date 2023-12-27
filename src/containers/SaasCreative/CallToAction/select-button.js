import React from 'react';
import * as Select from '@radix-ui/react-select';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { TriangleDownIcon } from '@radix-ui/react-icons';

export const SelectButton = () => (
  <Select.Root>
    <SelectTrigger aria-label="Food">
      <Select.Value placeholder="Download for MacOS" />
      <SelectIcon>
        <TriangleDownIcon width={16} height={16} />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent position="popper" sideOffset={5}>
      <SelectViewport>
        <SelectItem value="MacOS">Download for MacOS</SelectItem>
        <SelectItem value="Windows">Download for Windows x64</SelectItem>
      </SelectViewport>
    </SelectContent>
  </Select.Root>
);

const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  padding: '0 40px',
  fontSize: '1rem',
  lineHeight: 1,
  gap: 2,
  backgroundColor: '#2C6FEE',
  color: 'white',
  cursor: 'pointer',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: '#2C6FEE' },
  '&:focus': { boxShadow: `none` },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    minHeight: '55px',
    padding: '0 25px',
  },
  '@media (max-width: 768px)': {
    minHeight: '50px',
    padding: '0 20px'
  },
  '@media (max-width: 480px)': {
    padding: '0 30px !important'
  },
});

const SelectIcon = styled(Select.SelectIcon, {
  color: 'white',
});

const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 10,
  boxShadow: '0px 3px 8px 0px rgb(43 83 135 / 8%)',
  fontSize: '1rem',
  padding: '10px',
  width: 'var(--radix-select-trigger-width)',
  cursor: 'pointer',
});

const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </StyledItem>
  );
});

const StyledItem = styled(Select.Item, {
  fontSize: "var(--nextui-fontSizes-base)",
  lineHeight: "var(--nextui-lineHeights-lg)",
  fontWeight: "var(--nextui-fontWeights-bold)",
  color: '#000',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0.08)',
    color: 'black',
  },
});

export default SelectButton;