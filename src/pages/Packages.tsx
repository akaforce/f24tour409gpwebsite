import React from 'react';
import NavBar from '../components/NavBar';
import VodafoneParkStadium from '../images/VodafoneParkStadium5.webp';
import Breakfast from '../images/DALL-E_image_breakfast.webp';
import IstanbulPubCrawlParty from '../images/Istanbul_pub_crawl.jpg';

import '../App.css';

export default function Packages() {

    return (
        <div className='bg-gradient-to-r from-red-950 via-slate-950 to-red-950 h-fit flex flex-col'>
            <div className='mx-5 mt-10 mb-5 p-10 bg-white bg-opacity-35'>
                <h1 className='items-center text-center text-7xl'>Packages</h1>
                <br></br>
                <p>
                    FIFA games typically span a month, and this itinerary showcases a sample weekend for tourists.
                </p>
                <br></br>
                <p>
                    Considering our target audience and Istanbul's offerings, we've crafted a top-tier experience.
                </p>
                <br></br>
                <p>
                    Tourists are assumed to stay at Wyndham Istanbul Old City Hotel or Artisan Istanbul MGallery, with games at Beşiktaş Stadium.
                </p>
                <br></br>
                <p>
                    Days are divided into morning, afternoon, and evening activities, with meals provided by the hotels unless otherwise chosen.
                </p>
            </div>


            <div className="mx-5 mt-10 mb-5 p-5 bg-white bg-opacity-35 flex">
                <div className="flex-1">
                    <h1 className="items-center text-left text-5xl">Day 1</h1>
                    <div className="text-left">
                        <div className="flex">
                            <div className="flex-1">
                                <p><b>Arrival at Istanbul Airport</b></p>
                                <p>Guests will arrive at Istanbul Airport for a memorable morning at Beşiktaş Stadium. The day begins with breakfast followed by a PR event featuring meet-and-greets with star players, coaches, and key FIFA World Cup figures.</p>
                                <p>Activities include photo sessions, autograph signings, and interviews, ensuring an unforgettable experience. Local shops and merchandisers will enhance the event by offering food, snacks, and merchandise that capture the spirit of Istanbul and the excitement of FIFA.</p>
                            </div>
                            <div className="flex-shrink-0 ml-5">
                                <img
                                    src={VodafoneParkStadium}
                                    alt=""
                                    className="w-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <br></br><br></br>


                    <div className="flex">
                        <div className="flex-shrink-0 mr-5">
                            <img
                                src={Breakfast}
                                alt=""
                                className="w-80 object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-right"><b>More Beşiktaş Stadium</b></p>
                            <p>During the afternoon, join us for a guided tour of Beşiktaş Stadium, offering a blend of exploration and education.</p>
                            <p>Highlights include visits to the team's facilities (locker room, training room), the stadium itself (field, seating, media room), and insights into its history, cultural significance, economic impact, and major events it has hosted.</p>
                        </div>
                    </div>


                    <br></br><br></br>

                    <div className="text-left">
                        <div className="flex">
                            <div className="flex-1">
                                <br></br>
                                <p><b>Party Time!</b></p>
                                <p>Friday evening will begin with dinner, followed by one hour of personal time to relax or do as you wish.</p>
                                <p>At night, we'll embark on a pub crawl—a pre-game party exploring all the hot spots in Istanbul for an unforgettable evening.</p>
                                <p>Experience Istanbul's legendary nightlife without the worry of exploring an unknown city by night in Istanbul Pub Crawl.</p>
                                <p>Long night? You'll be staying at Wyndham Istanbul Old City Hotel - 5-star hotel - $116 per night - 10-minute drive to stadium - includes a pool, bar, spa, gym and breakfast. Does tours as well. </p>
                            </div>
                            <div className="flex-shrink-0 ml-5">
                                <img
                                    src={IstanbulPubCrawlParty}
                                    alt="istanbulpartypubcrawl @instagram"
                                    className="w-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <br></br><br></br>


                </div>
            </div>

            <div className='mx-5 mt-10 mb-5 p-5 bg-white bg-opacity-35'>
                <h1 className='items-center text-right text-5xl'>Day 2</h1>

            </div>
            <div className='mx-5 mt-10 mb-5 p-5 bg-white bg-opacity-35'>
                <h1 className='items-center text-left text-5xl'>Day 3</h1>
            </div>
            <div className='mx-5 mt-10 mb-5 p-5 bg-white bg-opacity-35'>
                <h1 className='items-center text-left text-5xl'>Day 4...</h1>
                <p>Looking to spend an extra day or more? </p>
                <button>Contact us!</button>
            </div>
        </div>
    )
}





// Ill do packages, media team, media team, sustainability, contact
