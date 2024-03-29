import React, {Fragment} from 'react';
import TopBanner from "../Components/TopBanner";
import AboutSection from "../Components/AboutSection";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";
import Alumni1 from "../Components/Alumni1";
import AboutNcpc from "../OthersComponents/AboutNcpc";
import Strategy from '../OthersComponents/Strategy';
import TopMenu from "../Components/TopMenu";
import Dates from "../Components/DatesFolder/Dates";

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <TopBanner/>
            <Dates/>
            <AboutSection/>
            
            <AboutNcpc/>
            <Alumni1/>
            <Strategy/>  
            <Support/>
            <Sponsor/>
        </Fragment>
    );
}

export default Home;