import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";
import location from '../../assets/location.png';
import { FaLocationDot, FaPenRuler } from 'react-icons/fa6';
import { MdOutlineHomeWork } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';
import { FaBath, FaBed } from 'react-icons/fa';
const Location = () => {

    const customIcon = new icon({
        iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
        iconSize: [38, 38]
    })

    return (
        <div className='bg-[#EBF8FE]'>
            <h2 className='text-4xl font-jura font-bold text-center py-10'>Our Location</h2>
            <div className='md:flex w-10/12 mx-auto pb-20 '>
                {/* Map */}
                <div className="md:w-1/2">
                    <MapContainer style={{ width: '100%', height: '500px' }} center={[23.782738108212616, 90.41799042210799]} zoom={17} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.782738108212616, 90.41799042210799]} icon={customIcon}  >
                            <Popup>
                                BEVERLY RESIDENCE
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${location})`
                    }}
                    className='h-[500px] md:w-1/2 bg-cover bg-center'>
                    <div className='bg-gray-600/65 h-full w-full flex flex-col justify-center items-center font-jura text-white text-xl md:text-2xl font-semibold space-y-2'>
                        <h2 className='uppercase font-bold text-4xl '>find us on </h2>
                        <h3 className='flex justify-center items-center gap-2'><FaLocationDot /> Plot # 17/A, Road # 126, Gulshan, Dhaka - 1212</h3>
                        <p className='flex justify-center items-center gap-2'> <FaPenRuler /> Land Aria : 6.43 Katha</p>
                        <p className='flex justify-center items-center gap-2'> <MdOutlineHomeWork /> No. of Floors	G + 9</p>
                        <p className='flex justify-center items-center gap-2'> <GiResize /> Apartment Size	3000+ sft</p>
                        <p className='flex justify-center items-center gap-2'> <FaBed /> Bedroom	3</p>
                        <p className='flex justify-center items-center gap-2'> <FaBath /> Bathroom	3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;