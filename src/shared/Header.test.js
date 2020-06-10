import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header';

describe('<Header />', () => {
  it('프롭스 확인', () => {
    const utils = render(<Header menu1="검색" menu2="랭킹" menu3="카트" menu4="트랙" />);
    utils.getByText('검색');
    utils.getByText('랭킹');
    utils.getByText('카트');
    utils.getByText('트랙');
  });
});
