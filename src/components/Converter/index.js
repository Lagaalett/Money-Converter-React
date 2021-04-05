// == Import npm
import React from 'react';

// == Import locaux
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';

import './converter.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies currencies={currenciesData} />
    <Amount amount={1.10} currency="United States Dollar" />
  </div>
);

// == Export
export default Converter;
