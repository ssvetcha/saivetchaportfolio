import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Tank Game',
        link: 'https://docs.google.com/document/d/1_udBcOWeVUR4a_Zw1cZV6AA2RPTNop8x0gKVO7XElzs/edit?usp=sharing',
        thumbnail: '/projects/Tank.png'
    },
    {
        title: 'DeGloves',
        link: 'https://docs.google.com/document/d/1M_d4QILZKQtYu-xbdfRX2BDuEGKXVA5qZ-E8V178hus/edit?usp=sharing',
        thumbnail: '/projects/Degloves.png'
    },
    {
        title: 'Bridge Initiative',
        link: 'https://docs.google.com/document/d/12IzkCjJdNUYAOW1_jVPcmaiKgoSkCwRt6aFa5QZSv2I/edit?usp=sharing',
        thumbnail: '/projects/mit-solve.png'
    },

    {
        title: 'Snow Cover & Temperature Trends in the Colorado Rockies',
        link: 'https://code.earthengine.google.com/4aa88a3a11b39389c18df64faca285bd ',
        thumbnail: '/projects/Colorado Rocky.png'
    },
    {
        title: 'Mathematically Applying Poseuilles Law to Optimize Blood Vessel Branching',
        link: 'https://docs.google.com/document/d/1d6bNRSuecMlVhxW1j_3APhBaHcW2zJm_UF4AA5PLuV0/edit?usp=sharing',
        thumbnail: '/projects/Vessel.png'
    },
    {
        title: 'Investigating the Rate of Reaction of Sodium Thiosulphate and Hydrochloric Acid in relation to Concentration',
        link: 'https://docs.google.com/document/d/16UnopDC4PTkNrxSJ9Ko2VUAN97BoaXbNv1DUeswJSqc/edit?usp=sharing',
        thumbnail: '/projects/Bonds.png'
    },

    {
        title: 'Volatility Forecasting using Machine Learning',
        link: '',
        thumbnail: '/projects/ml.png'
    },
    {
        title: 'Monte Carlo Option Pricer',
        link: '',
        thumbnail: '/projects/montecarlo.png'
    },
    {
        title: 'Portfolio Risk Sumulation',
        link: '',
        thumbnail: '/projects/risk.png'
    }
];
