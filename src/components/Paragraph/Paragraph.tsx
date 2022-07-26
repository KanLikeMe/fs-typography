import tw from 'twin.macro';
import styled from '@emotion/styled';
export interface IParagraph {
  level: 1 | 2 | 3 | 4;
}
export interface IParagraphTH {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Paragraph = styled.p<IParagraph>(({ level }) => {
  return [
    `font-weight: 400`,
    level === 1 && `font-size: 1.5rem; line-height: 125%;`,
    level === 2 && `font-size: 1rem; line-height: 135%;`,
    level === 3 && `font-size: 0.875rem; line-height: 140%;`,
    level === 4 && `font-size: 0.75rem; line-height: 150%;`,
  ];
});

export default Paragraph;

export const ParagraphTH = styled.p<IParagraphTH>(({ level }) => {
  return [
    `font-weight: 400`,
    level === 1 && `font-size: 1.5rem; line-height: 125%;`,
    level === 2 && `font-size: 1.25rem; line-height: 150%;`,
    level === 3 && `font-size: 1.125rem; line-height: 150%;`,
    level === 4 && `font-size: 1rem; line-height: 150%;`,
    level === 5 && `font-size: 0.875rem; line-height: 140%;`,
    level === 6 && `font-size: 0.75rem; line-height: 150%;`,
  ];
});

export const ParagraphTest = styled.p<IParagraph>(({ level }) => {
  return [
    level === 1 && tw`text-2xl leading-150`,
    level === 2 && tw`text-base leading-140`,
    level === 3 && tw`text-sm leading-135`,
    level === 4 && tw`text-xs leading-125`,
  ];
});

export const ParagraphTHTest = styled.p<IParagraphTH>(({ level }) => {
  return [
    level === 1 && tw`text-2xl leading-125`,
    level === 2 && tw`text-xl leading-150`,
    level === 3 && tw`text-lg leading-150`,
    level === 4 && tw`text-sm lg:text-base leading-150`,
    level === 5 && tw`text-sm leading-140`,
    level === 6 && tw`text-xs leading-150`,
  ];
});
