import './Home.css'
import BgImage from '../../assets/pexels-pixabay-372326.jpg'
// import aboutImage from '../../assets/pexels-armefaq2-1819825.jpg'
import church from '../../assets/church.jpg'
// import BgBible from '../../assets/bible.jpg'
import BgBible2 from '../../assets/bible2.jpg'
import Inspire from '../../assets/inspire.jpg'
import Motivate from '../../assets/motivate.jpg'
import { FaCheckCircle, FaPrayingHands, FaChurch, FaPeopleCarry, FaPlay, FaYoutube, FaRegCalendarAlt, } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { GiBigDiamondRing } from "react-icons/gi";

function Home() {
  return (
    <main>
        <div className='background'>
            <div className='overlay'></div>
            <img src={BgImage} alt="background" className='bgImage' />
            <img src={BgImage} alt="background" className='bgImage' />
            <div className='content'>
                <p className='text'>
                    <span className='whiteLine'></span>
                    <span className='textPrimary'>St.Peter&apos;s ACK Church</span>
                    <span className='whiteLine'></span>
                </p>
                <h1>FOLLOWING <b style={{color:'#ffd615'}}>JESUS</b>, WHEREVER WE ARE</h1>
                <p className='bannerText'>Far far away,creative behind the word mountains, far from the countries Vokalia and Consonantia, there live the success blind texts. Separated they live in Bookmarksgrove.</p>
                <button>Be part of us</button>
            </div>
        </div>
        <div className='midSection'>
            <div className='overlay2'></div>
                <img src={BgBible2} alt="Bible image" className='bgBible' />
                <div className='bibleContent'>
                    <p>❝ 16 For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. ❞</p>
                    <span>— John 3:16 KJV</span>
                </div>
        </div>
        <div className='aboutSection'>
            <div>
                <img src={church} alt="about image" className='aboutImage'/>
            </div>
            <div className='aboutContent'>
                <h3>Welcome to <b style={{color:'#ffd615'}}>St.Peter&apos;s ACK</b> Church</h3>
                <p>Far far away, creative behind the word mountains, far from the countries Vokalia and Consonantia, there live the success blind texts. Separated they live in Bookmarksgrove.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <ul className='aboutList'>
                    <li> <FaCheckCircle className='checkCircle'/> Even the all-powerful Pointing</li>
                    <li> <FaCheckCircle className='checkCircle'/> Behind the word mountains</li>
                    <li> <FaCheckCircle className='checkCircle'/> Separated they live in Bookmarksgrove</li>
                </ul>
            </div>
        </div>
        <div className='servicesSection'>
            <div className='servicesTop'>
                <p className='text'>
                    <span className='greyLine'></span>
                    <span className='textPrimary' style={{color:'grey'}}>Services</span>
                    <span className='greyLine'></span>
                </p>
                <h1 style={{fontSize:'40px'}}>Church Services</h1>
                <p style={{color:'grey'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='servicesBottom'>
                <div>
                    <FaPrayingHands  className='icon'/>
                    <p>Daily Prayers</p>
                    <span>A small river named Duden flows by their place and supplies it with the necessary regelialia</span>
                </div>
                {/* <div>
                    <FaBible   className='icon'/>
                    <p>Continuous Teachings</p>
                    <span>A small river named Duden flows by their place and supplies it with the necessary regelialia</span>
                </div> */}
                <div>
                    <FaChurch  className='icon'/>
                    <p>Sermons</p>
                    <span>A small river named Duden flows by their place and supplies it with the necessary regelialia</span>
                </div>
                <div>
                    <GiBigDiamondRing className='icon'/>
                    <p>Wedding</p>
                    <span>A small river named Duden flows by their place and supplies it with the necessary regelialia</span>
                </div>
                <div>
                    <FaPeopleCarry  className='icon'/>
                    <p>Community Evangelism</p>
                    <span>A small river named Duden flows by their place and supplies it with the necessary regelialia</span>
                </div>
            </div>
        </div>
        <div className='sermonsSection'>
        <div className='servicesTop'>
                <p className='text'>
                    <span className='greyLine'></span>
                    <span className='textPrimary' style={{color:'grey'}}>Sermons</span>
                    <span className='greyLine'></span>
                </p>
                <h1 style={{fontSize:'40px'}} >Church Sermons</h1>
                <p style={{color:'grey'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div> 
            <div className='sermonImagesWrapper'>
                <div>
                    <div className='sermonBgImage image1'>
                        <div className='sermonContent'>
                            <span>BY PASTOR:</span>
                            <small>Peter Omollo</small>
                            <button> <FaPlay/>  Watch</button>
                        </div>
                    </div>
                    <div className='sermonImgBottom'>
                        <span>Let the sunset inspire you</span>
                        <small>MAY 12, 2024</small>
                    </div>
                </div>
                <div>
                    <div className='sermonBgImage image2'>
                        <div className='sermonContent'>
                            <span>BY PASTOR:</span>
                            <small>David Mboya</small>
                            <button> <FaPlay/>  Watch</button>
                        </div>
                    </div>
                    <div className='sermonImgBottom'>
                        <span>Developing Spiritual Mentality</span>
                        <small>MAY 5, 2024</small>
                    </div>
                </div>
                <div>
                    <div className='sermonBgImage image3'>
                        <div className='sermonContent'>
                            <span>BY PASTOR:</span>
                            <small>Ezekiel Mwangi</small>
                            <button> <FaPlay/>  Watch</button>
                        </div>
                    </div>
                    <div className='sermonImgBottom'>
                        <span>Let the Bible Motivate You</span>
                        <small>APRIL 28, 2024</small>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
            <button className='sermonsBtn'> <FaYoutube/> Watch More</button>
            </div>
        </div>
        <div className='events'>
            <div className='servicesTop'>
                <p className='text'>
                    <span className='greyLine'></span>
                    <span className='textPrimary'>Events</span>
                    <span className='greyLine'></span>
                </p>
                <h1>Upcoming Events</h1>
            </div>
            <div className='eventsWrapper'>
                <div>
                    <img src={Inspire} alt="picture" className='eventPic'/>
                    <div className='eventContent'>
                        <h2>Know Jesus Christ Better Through Bible Study</h2>
                        <span> <FaRegCalendarAlt /> Fridat, 8:00 Pm - Saturday 8:00 Am </span>
                        <span> <MdLocationCity/> St.Peter&apos;s ACK Church </span>
                        <span> <FaLocationCrosshairs/> Embakasi, Nairobi </span>
                    </div>
                </div>
                <div>
                    <img src={Motivate} alt="picture" className='eventPic'/>
                    <div className='eventContent'>
                        <h2>Join Us For Community Evangelism</h2>
                        <span> <FaRegCalendarAlt /> Sunday, 2:00 Pm - 8:00 Pm </span>
                        <span> <MdLocationCity/> Embakasi </span>
                        <span> <FaLocationCrosshairs/> Embakasi, Nairobi </span>
                    </div>
                </div>
            </div> 
        </div>
        <div className='contact'>
        <h1>Do you need Counselling, Prayer...</h1>
        <p>Reach out to us now for assistance on your journey to emotional and spiritual well-being.</p>
        <p style={{display:'flex', justifyContent:'center', gap:'50px'}}>
            <span>Call or message us at: <small style={{color:'blue', fontSize:'16px'}}>0700001111</small> </span>
            <span>Facebook us at: <small style={{color:'blue', fontSize:'16px', cursor:'pointer'}}>stpetersackchurch.facebook.com</small> </span>
        </p>
        </div>
    </main>
  )
}

export default Home