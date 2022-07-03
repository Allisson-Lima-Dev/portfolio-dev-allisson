import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';


export interface IInputProps extends ChakraInputProps {
  name: string;
  bgHover?: string;
  bgFocus?: string;
  widthDefault?: any;
  bgPlaceholder?: string;
  label?: string;
  colorLabel?: string;
  error?: FieldError;
  labelFontSize?:string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, as, bgHover, labelFontSize, colorLabel, widthDefault, bgFocus, bgPlaceholder, label, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error} w={ widthDefault || 'full' }>
      {!!label && (
        <FormLabel htmlFor={name} color={ colorLabel || "#000" } fontWeight="600" fontSize={labelFontSize} mr="0">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        fontSize="14px"
        size="lg"
        variant="filled"
        _hover={{
          bg: bgHover,
        }}
        _focus={{
          bg: bgFocus,
        }}
        _placeholder={{
          color: bgPlaceholder,
        }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage mt="-10px" mb="10px">{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);