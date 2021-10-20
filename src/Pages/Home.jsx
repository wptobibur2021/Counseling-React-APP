import React from 'react'
import Banner from '../Components/Banner/Banner'
import BannerButtom from '../Components/BannerButtom/BannerButtom'
import Counselor from '../Components/Counselor/Counselor'
import Services from '../Components/Services/Services'

export default function Home() {
    return (
        <div className="main-area">
            <Banner></Banner>
            <BannerButtom></BannerButtom>
            <Services></Services>
            <Counselor></Counselor>
        </div>
    )
}
