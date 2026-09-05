import React from 'react';
import HomeHero from '../../components/Sections/Home/Hero';
import ProofSection from '../../components/Sections/Home/Proof';
import BrandStory from '../../components/Sections/Home/BrandStory';
import Featured from '../../components/Sections/Home/Featured';
import HighlightSection from '../../components/Sections/Home/Highlight';

import styles from './Home.module.scss';


const Home = () => {
        
    return (
    
    <div className={styles.Home}>
        <h1 className="sr-only">Fizz Fix</h1>
        <HomeHero />
       <ProofSection />
       <BrandStory />
       <Featured />
       <HighlightSection />
    </div>
    )
}

export default Home
