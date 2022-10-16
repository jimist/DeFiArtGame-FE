import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../lib/constants";

// import styles
import "./style.scss";
import meter from "../../assets/meter.jpg";
import img from "../../assets/img.PNG";
import footer from "../../assets/footter.svg";
import footer1 from "../../assets/footer1.svg";
import footer2 from "../../assets/footer2.svg";
import footer3 from "../../assets/footer3.svg";


const Home = () => {
    const [parkedNFTs, setParkedNFTs] = useState([]);
    useEffect(() => {
        const homePageData = async() => {
            const { data } = await axios.get(`${API_URL}/nfts/get`);
            const nftData = data.data;
            setParkedNFTs(nftData);
            nftData.forEach(async(nft) => {
                axios.get(`https://api.opensea.io/api/v1/asset/${nft.reference.contractAddress}/${nft.reference.tokenId}?format=json`).then((resp) => {
                    setParkedNFTs([]);
                    let newNftData = nftData;
                    const idx = newNftData.findIndex((n) => n.id === nft.id);
                    newNftData[idx] = {...nft, image: resp.data.image_url, name: resp.data.name, description: resp.data.description }
                    setParkedNFTs(newNftData)
                })
            });
        };

        homePageData();
    }, []);
    return ( < div >

        <
        div className = "row align-items-center justify-content-center px-2" > {
            parkedNFTs && parkedNFTs.map((nft) => {
                return ( <
                    div key = { nft.tokenId }
                    className = "col col-12 col-md-6 col-lg-4 mb-4 mh-30 h-auto" >
                    <
                    div className = "card h-75" >
                    <
                    div className = "card-top text-center" >
                    <
                    h3 > { nft.name } < /h3> <
                    img src = { nft.image }
                    alt = "nft"
                    className = "img-fluid w-100 px-1" /
                    >
                    <
                    /div>

                    <
                    div className = "card-body mb-4" >
                    <
                    div className = "mb-4" >
                    <
                    p > Date Parked: { new Date(nft.created).toDateString() } < /p> <
                    p > Garage Deposit: $ { nft.deposit } < /p> <
                    p > Garage Yield: { nft.yield } % < /p> < /
                    div >

                    <
                    div className = "mb-4 w-100" >
                    <
                    img src = { meter }
                    className = "img-thumbnail"
                    alt = "parking meter" /
                    >
                    <
                    /div> < /
                    div > <
                    /div> < /
                    div >
                );
            })
        } <
        /div>

        <
        section className = "main_first" >
        <
        div className = "site_container" >
        <
        div className = "row" >
        <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        h3 > Replicating Value Flow in The Next Distributed Internet < /h3> <
        p >
        Merit based work commons
        for builders and communities Building a Culture of Reputation Wealth and The Next Working Commons <
        /p> <
        a href = "/" > VISIT THE DEVELOPER DOCS < /a> < /
        div > <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        img src = { img }
        alt = "img" /
        >
        <
        /div> < /
        div > <
        /div> < /
        section >

        <
        section className = "main_second" >
        <
        div className = "site_container" >
        <
        div className = "row" >
        <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        img src = { img }
        alt = "img" /
        >
        <
        /div> <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        h3 > Rewards system that incentivizes coders to make small shifts in already proven code < /h3> <
        p >
        Easily adapt applications quickly to new communities Allowing coders to earn reputation
        for their contributions <
        /p> <
        a href = "/" > VISIT THE DEVELOPER DOCS < /a> < /
        div > <
        /div> < /
        div > <
        /section>


        <
        section className = "main_third" >
        <
        div className = "site_container" >
        <
        div className = "row" >
        <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        h3 > Driving down the time and cost of app development < /h3> <
        p >
        Providing coders and builders the opportunity to construct their professional reputation and earn scalable wealth. <
        /p> <
        a href = "/" > VISIT THE DEVELOPER DOCS < /a> < /
        div > <
        div className = "col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <
        img src = { img }
        alt = "img" /
        >
        <
        /div> < /
        div > <
        /div> < /
        section >

        <
        footer >
        <
        div className = "container" >
        <
        div className = "row justify-content-between" >
        <
        div className = "col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12" >
        <
        img src = { footer }
        alt = "footer" / >
        <
        h2 > Copyright© 2022 Coder Economy.All rights reserved. < /h2> < /
        div > <
        div className = "col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12" >
        <
        div className = "social" >
        <
        img src = { footer1 }
        alt = "footer1" / >
        <
        /div> <
        div className = "social" >
        <
        img src = { footer2 }
        alt = "footer2" /
        >
        <
        /div> <
        div className = "social" >
        <
        img src = { footer3 }
        alt = "footer3" /
        >
        <
        /div> < /
        div > <
        /div> < /
        div > <
        /footer> < /
        div >

    );
};

export default Home;