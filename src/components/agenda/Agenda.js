import Table from 'react-bootstrap/Table';
import styles from './Agenda.module.css';

const Agenda = () => {
    return ( 
        <section className={`container ${styles.Agenda}`} id='agenda'>
            <h2> Programme of Event</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Time</th>
                    <th>Activities</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                    <td>9:00AM - 10:00AM</td>
                    <td>Registration</td>
                    </tr>

                    <tr>
                    <td>10:00AM</td>
                    <td>Welcome Address by Imelda Usoro Olaoye (Founder Business Women Hub/Managing Partner , Thinkmint Nigeria)</td>
                    </tr>

                    <tr>
                    <td>10:10AM</td>
                    <td>Opening Speech by Special Guest of Honour</td>
                    </tr>

                    <tr>
                    <td>10:10AM - 10:30AM</td>
                    <td>
                        <div>Review of Business Women Hub Activities 2023 - Mrs Iniobong Obinna- Onunkwo</div>
                    </td>
                    </tr>

                    <tr>
                    <td>10:30AM - 10:45AM</td>
                    <td>
                        <div >Keynote Speaker 1: </div>
                        <div>YESIDE AMINAT OLASIMBO, Special Assistant On Women Affairs To The Speaker House Of Representatives Federal Republic of Nigeria</div>
                    </td>
                    </tr>

                    <tr>
                    <td>10:45 AM - 11:00AM</td>
                    <td>
                        <div>Keynote Speaker 2: </div>
                        <div>Vice President Sustainability Professionals Institute of Nigeria </div>
                    </td>
                    </tr>

                    <tr>
                    <td>11:15 AM - 12:00PM</td>
                    <td>
                        <div> PANEL SESSION 1: </div>
                        <div>Topic: Inspire Inclusion: Boardroom Yardsticks for The Female Entrepreneur</div>
                        <div>Moderator - Gusi Tobby Lordwilliams - Social Impact Strategist, Communications Expert, specialized in PR and Media relations</div>
                        <div className=''>
                        <div>Panelists</div>
                        <ul>
                            <li>Abiola Adelana - Head, Tourism Business, Sterling Bank</li>
                            <li>Olubunmi Ebhomenye - Director, Talent Academy, Flour Mills Nigeria</li>
                            <li>Dr Ella Chioma Ezeadilieje PhD </li>
                            <li>Mosunmola Nicole Akinwamide - Chief Experience Officer, IPC Events</li>
                        </ul>
                        </div>
                    
                        
                        <div className={styles.SessionText}>
                        <div>Session Objective</div>
                        <p>Women own a third of the world’s businesses, according to the World Bank. But if you think about the largest and most successful companies on the planet, most of those were founded by men. The truth is that while women often start their own businesses, they can struggle to scale them and transform them into the corporate behemoths that end up becoming household names.</p>
                        <p>Being a female entrepreneur can even be a disadvantage in the talent marketplace since prospective employees may use gender as a reason to question the competence and leadership qualities of a female founder.</p>
                        <ul>
                            <li>All around, then, female entrepreneurs tend to face more barriers than their male counterparts.</li>
                            <li>How can they overcome bias and discrimination to build successful businesses?</li>
                            <li>How can women build credibility for their businesses ? </li>
                            <li>How can female entrepreneurs navigate  firm-level challenges (financial capital, business competition, socio-economic environment and staff), individual-level challenges (social capital, socio-economic bias, separation of business and owner, and work-life balance) and gender-based challenges?</li>
                            <li>Discuss the motivation of female entrepreneurs</li>
                            <li>Discuss the attributes of successful entrepreneurs and business ventures in line with the modern perspective of a successful organization - female entrepreneurs in view.</li>
                            <li>Requirements for scaling the business from a side hustle,  business enterprise to a company/structured organization?</li>
                            <li>How to include a collaborative leadership style even as an entrepreneur- ways to manage people &  human resources ?</li>
                        </ul>
                        </div>
                    </td>
                    </tr>

                    <tr>
                    <td>12:00PM - 12:20PM</td>
                    <td>
                        <div>BWH ESUSU ENLIGHTENMENT</div>
                    </td>
                    </tr>

                    <tr>
                    <td>12:20PM - 1:00PM</td>
                    <td>
                        <div>Exhibition Tour</div>
                    </td>
                    </tr>

                    <tr>
                    <td>1:00 PM - 1:45PM</td>
                    <td>
                        <div> PANEL SESSION 2: </div>
                        <div> Topic: Finance births Inclusion: True or False? </div>
                        <div> Moderator - Linda Ochugbua Head , Digital Media , BusinessDay Media/SME Business Expert </div>
                        <div className=''>
                        <div>Panelists</div>
                        <ul>
                            <li>Ubong Ita - founder/CEO koboaccountant</li>
                            <li>Ayo Bankole - Strategy & Transformation Professional ,Caladium Consulting</li>
                            <li>Sarah Samuel Amana - Personal Finance Expert </li>
                            <li>Hussaina Yaqub - Motivational Speaker/Founder, Hussy Foods</li>
                        </ul>
                        </div>
                    
                        
                        <div className={styles.SessionText}>
                        <div>Session Objective</div>
                        <p>Better and more meaningful financial access and understanding may prove to be the key to unlocking the potential for women-owned enterprises to grow, reducing their exposure to income shocks, enhancing growth, and promoting more sustainable and equitable development  thereby driving inclusion for female owned businesses. This session therefore examines the determinants of financial planning & access and its effect on the performance of women entrepreneurs.</p>

                        <ul>
                            <li>Which financial tools are easily accessible to female-owned businesses ?</li>
                            <li>What is the role of financial institutions in fostering credit and funding towards female owned businesses ? </li>
                            <li>Do we have any of these working solutions in Nigeria?</li>
                            <li>Smart moves for owner & business separation in finance management </li>
                            <li>Proper accounting processes to aid Business funding & proper structure</li>
                            <li>The myth of loans , investor funding and the scaling/scalable businesses</li>
                            <li>A two way vote on the panel discussion </li>
                        </ul>
                        </div>
                    </td>
                    </tr>

                    <tr>
                    <td>1:45PM -  2:10PM</td>
                    <td>
                        <div>Presentations</div>
                    </td>
                    </tr>

                    <tr>
                    <td>2:10PM - 2:40PM</td>
                    <td>
                        <div> Awards</div>
                    </td>
                    </tr>

                    <tr>
                    <td>2:40PM - 4:00PM</td>
                    <td>
                        <div>Lunch, Networking & Exhibition</div>
                    </td>
                    </tr>

                    <tr>
                    <td>4:00PM</td>
                    <td>
                        <div>Closing Remark </div>
                    </td>
                    </tr>

                </tbody>
            </Table>
        </section>
    );
}
 
export default Agenda;