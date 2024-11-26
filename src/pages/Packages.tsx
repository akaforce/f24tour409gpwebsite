import React from 'react';
import VodafoneParkStadium from '../images/VodafoneParkStadium5.webp';
import Breakfast from '../images/DALL-E_image_breakfast.webp';
import IstanbulPubCrawlParty from '../images/Istanbul_pub_crawl.jpg';
import FestTechDay from '../images/Festival_and_Tech_Day.jpg';
import VIPSeating from '../images/VIP_Seating.webp';
import rooftop_hotel from '../images/rooftop_hotel.jpeg';
import grand_bazaar from '../images/grand_bazaar.webp';
import balik_ekmek from '../images/balik_ekmek.jpg';

import packages_background from '../images/packages_background.webp';







export default function Packages() {

    return (



        <div className='bg-gradient-to-r from-red-950 via-slate-950 to-red-950 h-fit flex flex-col'>


            <style>{`
            p {
            font-size: 25px;`
            }
            </style>



            <div className='mx-0 mt-10 mb-5  bg-red-700 bg-opacity-35'>
                <div className='bg-red-700 relative'>
                    <img
                        src={packages_background}
                        alt='Contact Us Banner'
                        className='w-full h-[700px] object-cover brightness-50'
                    />
                    <h1 className='absolute top-[155px] text-center text-9xl text-white font-bold'>Packages</h1>
                    <p className='absolute top-[280px] text-left text-5xl text-yellow-400 p-2'>
                    FIFA games typically span a month, and this itinerary showcases a sample weekend for tourists.<br></br>
                    Considering our target audience and Istanbul's offerings, we've crafted a top-tier experience. <br></br>
                    Tourists are assumed to stay at Wyndham Istanbul Old City Hotel or Artisan Istanbul MGallery, with games at Beşiktaş Stadium.<br></br>
                    Days are divided into morning, afternoon, and evening activities, with meals provided by the hotels unless otherwise chosen.<br></br>
                    This is a sample itinerary, and we can customize packages to suit <u>your needs</u>.

                    </p>

                </div>

            </div>


            <div className="mx-5 mt-10 mb-5 p-5 bg-black bg-opacity-100 flex">
                <div className="flex-1 ">
                    <h1 className="items-center text-left text-7xl">Day 1</h1><br></br>
                    <div className="text-left">
                        <div className="flex">
                            <div className="flex-1 bg-red-900 p-1">
                                <p><b>Arrival at Istanbul Airport</b></p>
                                <p>Guests will arrive at Istanbul Airport &#9992; for a memorable morning at Beşiktaş Stadium. The day begins with breakfast followed by a PR event featuring meet-and-greets with star players, coaches, and key FIFA World Cup figures.</p>
                                <p>Activities include photo sessions, autograph signings, and interviews. Local shops and merchandisers will BE offering food, snacks, and merchandise that capture the spirit of Istanbul and FIFA.</p>
                            </div>
                            <div className="flex-shrink-0 ml-5">
                                <img
                                    src={Breakfast}
                                    alt="Beşiktaş Stadium"
                                    className="w-96 object-cover"
                                /> <p className="text-2xl text-white text-center">Turkish Breakfast</p>
                            </div>
                        </div>
                    </div>

                    <br></br><br></br>

                    <div className="flex">
                        <div className="flex-shrink-0 mr-5">
                            <img
                                src={VodafoneParkStadium}
                                alt=""
                                className="w-96 object-cover"
                            /> <p className="text-2xl text-white text-center">Beşiktaş Stadium</p>
                        </div>
                        <div className="flex-1 bg-red-900 p-1 text-right">
                            <p className="text-right"><b>Welcome to Beşiktaş Stadium</b></p>
                            <p>During the afternoon, join us for a guided tour of Beşiktaş Stadium, offering a blend of exploration and education &#127967;</p>
                            <p>Highlights include visits to the team's facilities (locker room, training room), the stadium itself (field, seating, media room), and insights into its history, cultural significance, economic impact, and major events it has hosted.</p>
                        </div>
                    </div>

                    <br></br><br></br>

                    <div className="text-left">
                        <div className="flex">
                            <div className="flex-1 bg-red-900 p-1">
                                <br></br>
                                <p><b>Party Time!</b></p>
                                <p>Friday evening will begin with dinner, followed by one hour of personal time to relax.</p>
                                <p>At night, we'll embark on a pub crawl—a pre-game party exploring all the hot spots in Istanbul.</p>
                                <p>Long night? You'll be staying at Wyndham Istanbul Old City Hotel - 5-star hotel with: included are a pool, bar, spa, gym, and breakfast &#128559;  </p>
                            </div>
                            <div className="flex-shrink-0 ml-5">
                                <img
                                    src={IstanbulPubCrawlParty}
                                    alt="istanbulpartypubcrawl @instagram"
                                    className="w-96 object-cover"
                                /> <p className="text-2xl text-white text-center">Istanbul Party Pub Crawl @instagram</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

            <div className='mx-5 mt-10 mb-5 p-5 bg-black bg-opacity-100'>
                <h1 className='items-center text-right text-7xl'>Day 2</h1> <br></br>
                <div className="text-left">
                    <div className="flex">
                        <div className="flex-1 bg-red-900 p-1">
                            <p><b>Festival & Tech Morning</b></p>
                            <p>The morning will consist of breakfast and a Festival that includes:</p>
                            <p>Guest appearances from retired players. </p>
                            <p>Get face painted, buy jerseys, banners, and flags: Encourage your favorite team and Turkiye! &#128079;</p>
                            <p>VR simulations of matches: meet and play with your favorite players digitally!</p>
                        </div>
                        <div className="flex-shrink-0 ml-5">
                            <img
                                src={FestTechDay}
                                alt="Taken from Hamdi Firat Buyuk @Balkan Insight"
                                className="w-96 object-cover"
                            /> <p className="text-2xl text-white text-center">Taken from Hamdi Firat Buyuk<br></br> @Balkan Insight</p>
                        </div>
                    </div>
                </div>

                <br></br><br></br>

                <div className="flex">
                    <div className="flex-shrink-0 mr-5">
                        <img
                            src={VIPSeating}
                            alt="From 'Nomadic Niko'"
                            className="w-96 object-cover"
                        /> <p className="text-2xl text-white text-center">From 'Nomadic Niko'</p>
                    </div>
                    <div className="flex-1 bg-red-900 p-1 text-right">
                        <p className="text-right"><b>Matches Start!</b></p>
                        <p>The afternoon includes lunch and the Football &#9917; matches, the day’s main event, held between 4 PM and 9 PM.</p>
                        <p>Guests will have free time to relax before the games.</p>
                        <p>The package includes VIP seating with a private viewing area, cocktails, and snacks for a premium experience.</p>
                    </div>
                </div>

                <br></br><br></br>

                <div className="text-left">
                    <div className="flex">
                        <div className="flex-1 bg-red-900 p-1">
                            <br></br>
                            <p><b>Chill Party Night &#128524; &#128526;</b></p>
                            <p>The night will feature a rooftop party at the Wyndham Istanbul Old City Hotel, offering convenience for those staying there.</p>
                            <p>Guests can easily head to bed when tired, making it a perfect balance of fun and relaxation.</p>
                            <p>This event provides a flexible atmosphere, serving as either a lively turn-up or a calm wind-down, depending on each guest's energy level.</p>

                        </div>
                        <div className="flex-shrink-0 ml-5">
                            <img
                                src={rooftop_hotel}
                                alt="from clickistanbulhotels.com"
                                className="w-96 object-cover"
                            /> <p className="text-2xl text-white text-center">Reserve on clickistanbulhotels</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mx-5 mt-10 mb-5 p-5 bg-black bg-opacity-100'>
                <h1 className='items-center text-left text-7xl'>Day 3</h1><br></br>

                <div className="text-left">
                    <div className="flex">
                        <div className="flex-1 bg-red-900 p-1">
                            <p><b>Cultural Immersion</b></p>
                            <p>Private tour of the Grand Bazaar, the world's oldest shopping mall.</p>
                            <p>The morning theme is “Dining with the Locals,” offering a range of unique culinary experiences</p>
                            <p>Guests can choose from options like dining amidst nature (or in the city) with top tier meals &#127860;.</p>
                            <p>Relaxation Option: Visitors can opt for a guided Bosphorus cruise.</p>
                        </div>
                        <div className="flex-shrink-0 ml-5">
                            <img
                                src={grand_bazaar}
                                alt="From Turkey Travel Planner"
                                className="w-96 object-cover"
                            />
                        </div>
                    </div>
                </div>

                <br></br><br></br>

                <div className="flex">
                    <div className="flex-shrink-0 mr-5">
                        <img
                            src={balik_ekmek}
                            alt="From Great British Chefs"
                            className="w-96 object-cover"
                        /> <p className="text-2xl text-white text-center">Tasty Balik Ekmek!</p>
                    </div>
                    <div className="flex-1 bg-red-900 p-1 text-right">
                        <p className="text-right"><b>Afternoon (Landmark Exploration)</b></p>
                        <p>Hagia Sophia Grand Mosque, Topkapi Palace, and the Blue Mosque.</p>
                        <p><u>Another option:</u> Topkapi Palace Museum - Administrative Center of the Ottoman Empire.</p>
                        <p>Guided tours offering insights into Istanbul's rich history. &#128218;</p>
                        <p>Lunch: Savor street food favorites like Simit, Baklava, and Balık ekmek.</p>
                    </div>
                </div>

                <br></br><br></br>

                <div className="text-left">
                    <div className="flex">
                        <div className="flex-1 bg-red-900 p-1">
                            <br></br>
                            <p><b>Evening (Street Market Adventures)</b></p>
                            <p>Explore vibrant markets featuring local crafts and delicacies</p>
                            <p>Capture the essence of Istanbul’s nightlife &#127747; in open-air bazaars.</p>
                            <p>Istanbul has a variety of street markets and food to choose from so there will be no shortages of activities for tourists!</p>
                        </div>
                        <div className="flex-shrink-0 ml-5">
                            <img
                                src={IstanbulPubCrawlParty}
                                alt="istanbulpartypubcrawl @instagram"
                                className="w-96 object-cover"
                            /> <p className="text-2xl text-white text-center">Party Nightlife!</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mx-5 mt-10 mb-5 p-5 bg-vlack bg-opacity-100'>
                <h1 className='items-center text-left text-7xl'>Day 4...</h1><br></br>
                <p className='bg-red-900 p-8'>Looking to spend an extra day or more? <td></td>
                    <button className='text-2xl' > Contact us!</button>
                </p>

            </div>
        </div>
    )
}





// Ill do packages, media team, media team, sustainability, contact
