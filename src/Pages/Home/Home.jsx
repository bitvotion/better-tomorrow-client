import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Feature from '../../Components/Feature/Feature';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import NewsletterSection from '../../Components/NewsletterSection/NewsletterSection';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <GallerySlider></GallerySlider>
            <Feature></Feature>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;