import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Searchbar from './Searchbar';

// MobX
import { Provider } from 'mobx-react'; 
import RootStore from '../../../store/index';
const root = new RootStore();

describe('<Searchbar />', () => {
  it('셀렉트박스 확인', () => {
    const utils = render(<Provider {...root}><Searchbar /></Provider>);
    utils.getAllByText('유저');
  });
});
