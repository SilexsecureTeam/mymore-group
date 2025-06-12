import storyImg from '../assets/storyMan.svg';
import patner1 from '../assets/patner1.png';
import patner2 from '../assets/patner2.png';
import patner3 from '../assets/patner3.png';
import patner4 from '../assets/patner4.png';
import patner5 from '../assets/patner5.png';
import girl from '../assets/aboutbottom.svg';
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import offer4 from '../assets/offer4.png'
import offer5 from '../assets/offer5.png'
import offer6 from '../assets/offer6.png'
import offer7 from '../assets/offer7.png'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

const services = [
    { id: 1, title: 'Flight Bookings', icon: offer1, bg: 'bg-[#780000]', colSpan: 'col-span-1 sm:col-span-1', rowSpan: 'row-span-1' },
    { id: 2, title: 'Hotel Deals', icon: offer2, bg: 'bg-[#D9D9D9]', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 3, title: 'Tour Packages', icon: offer3, bg: 'bg-[#780000]', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 4, title: 'Travel Insurance', icon: offer4, bg: 'bg-[#D9D9D9]', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 5, title: 'Assisted Passport Processing & Renewal', icon: offer5, bg: 'bg-[#780000]', colSpan: 'col-span-2 sm:col-span-2', rowSpan: 'row-span-2' },
    { id: 6, title: 'Visa Processing', icon: offer6, bg: 'bg-[#D9D9D9]', colSpan: 'col-span-2', rowSpan: 'row-span-1', flex: true },
    { id: 7, title: 'Private Jet Booking', icon: offer7, bg: 'bg-[#780000]', colSpan: 'col-span-2', rowSpan: 'row-span-1', flex: true },

];

const team = [
    { id: 1, name: 'Adam Malik', role: 'Visa Specialist', img: team1 },
    { id: 2, name: 'Sarah Johnson', role: 'Customer Care', img: team2 },
    { id: 3, name: 'Michael Lee', role: 'Tech Expert', img: team3 },
];


export default function AboutBody() {
    return (
        <div>
            <section className='px-24 py-10 pb-20 bg-[#F0EFE7]'>
                <h1 className='text-[#780000] text-xl text-center !mb-6 font-bold'>Our Story</h1>
                <div className='flex justify-center gap-30'>
                    <div className="relative w-[30%]">
                        {/* Top-right gradient “L” */}
                        <div className="absolute -top-5.5 -right-5.5 w-30 h-30 pointer-events-none">
                            {/* gradient top edge */}
                            <div
                                className="absolute top-0 right-0 h-[22px] w-full bg-[#780000]"

                            />
                            {/* gradient right edge */}
                            <div
                                className="absolute top-0 right-0 w-[22px] h-full bg-[#780000]"

                            />
                        </div>

                        {/* Bottom-left gradient “L” */}
                        <div className="absolute -bottom-4 -left-6 w-30 h-30 pointer-events-none">
                            {/* gradient bottom edge (horizontal) */}
                            <div
                                className="absolute bottom-0 left-0 h-[22px] w-full bg-[#780000]"
                            />
                            {/* gradient left edge (vertical) */}
                            <div
                                className="absolute bottom-0 left-0 w-[22px] h-full bg-[#780000]"
                            />
                        </div>

                        {/* Your actual content: */}
                        <div className=''>
                            <img src={storyImg} alt="" className='!md:w-[413px]' />
                        </div>
                    </div>
                    <p className='md:max-w-[50%] text-[#0A0A0A]'>Mymore Travels Services ltd is a registered company which was founded to bridge the gap and eliminate the barriers and inefficiencies facing the global travel industry. 
                        <br /><br />Mymore Travels Services Ltd is a leading, full-service travel company focusing on adoption of digital platform solutions on air travels amongst other related logistics for easier and stress-free travels solutions. 
                        <br /><br />Every solution we provide is instrumental in our core values, centered on cost reductions with each travel product, excellent deliveries, customer’s satisfaction with rewarding relationships as improved overtime from baseline studies and development of appropriate programs to address the needs of each client. 
                        <br /><br />Needful to say, our strength is also in the quality of our team of employees, consultants, and facilitators who are experienced professionals with track records of successes concentrating on both corporate travel management and individual travel arrangement. 
                        <br /><br />By using the AMADEUS cutting edge IT online booking system, we ensure that our business traveler receives travel related information from an innovative network of resources, keeping him informed whilst on the move. 
                        <br /><br />Furthermore, we embrace consolidations, affiliations and partnerships of high standing within the country and globally, wholly focused on satisfying every traveler’s need with a one-stop booking portal for affordable flights, hotels, visa assistance, Holiday packages and tours, airport transfers, an international travel SIM, a prepaid travel card, a loyalty program, and much more.</p>
                        </div>
            </section>
                        <section className='py-10'>
                            <p className='text-[#D9D9D9] text-[18px] font-semibold md:pl-24 !mb-5'>We trusted by Global Partners</p>
                            <div className='flex w-full'>
                                <div className='flex w-full justify-between items-center px-3'>
                                    <div className='max-w-[150px] h-auto'>
                                        <img src={patner1} alt="" />
                                    </div>
                                    <div className='max-w-[150px] h-auto'>
                                        <img src={patner2} alt="" />
                                    </div>
                                    <div className='max-w-[150px] h-auto'>
                                        <img src={patner3} alt="" />
                                    </div>
                                    <div className='max-w-[150px] h-auto'>
                                        <img src={patner4} alt="" />
                                    </div>
                                    <div className='max-w-[150px] h-auto'>
                                        <img src={patner5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='w-full'>
                            <img src={girl} alt="" className='w-full' />
                        </div>
                        <section className="w-full mx-auto py-12 space-y-16">
                            {/* What We Offer */}
                            <div className='px-24'>
                                <h2 className="text-2xl font-semibold text-white !mb-6">What We Offer</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                    {services.map(service => (
                                        <div
                                            key={service.id}
                                            className={`${service.bg} ${service.colSpan} ${service.rowSpan} ${service.colSpan === 'col-span-2'? 'px-12' : 'px-6'} py-6 flex ${service.flex === true? "flex-row-reverse items-end" : "flex-col items-center"} justify-between`}
                                        >
                                            <div className={`${service.icon === offer5 ? 'w-40' : 'w-20'}`}>
                                                <img src={service.icon} alt={service.title} className="mb-4 w-full" />
                                            </div>
                                            <span className={`text-[15.5px] font-medium ${service.bg === 'bg-[#D9D9D9]' ? 'text-[#780000]' : 'text-white'}`}>
                                                {service.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Meet the Team */}
                            <div className='bg-[#F0EFE7] px-24 py-20'>
                                <h2 className="text-2xl font-semibold text-[#780000] !mb-2">Meet the Team</h2>
                                <p className="text-[#383737] !mb-8 max-w-[60%]">
                                    A passionate team of travel enthusiasts, tech experts, and customer care professionals dedicated to making your travel dreams come true.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {team.map(member => (
                                        <div key={member.id} className="flex flex-col items-start text-center">
                                            <div className="mb-4 w-full">
                                                <img
                                                    src={member.img}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover shadow-lg"
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold text-[#000000]">{member.name}</h3>
                                            <p className="text-sm text-[#000000]">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        </div>
    )
}