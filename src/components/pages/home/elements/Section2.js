import { Link } from 'react-router-dom';

export const Section2 = () => {
    return (
        <div>
            <img className="homeImgResp" src="shutterstock_696636415.jpg" />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <ul className="homeSection2Txt">
                                <li>
                                    <h2>
                                        Justo penentium te vix, scripta regione urbanitas
                                    </h2>
                                </li>
                                <li>
                                    <p>
                                        Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix. Ad vix legere impetus, nam consequat reformidans ut. No sit consul integre voluptatibus, omnium lucilius ne mel. Et ancillae recteque deterruisset sed, ea nec odio option, ferri assum eum et.
                                    </p>
                                </li>
                                <li>
                                    <ul className="homeUl">
                                        <li>
                                            Te pri efficiendi assueverit, if molestie suavitate per
                                        </li>
                                        <li>
                                            Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur
                                        </li>
                                        <li>
                                            Ut qui dicant copiosae interpretaris
                                        </li>
                                        <li>
                                            Ut indoctum patrioque voluptaria duo, ut vis semper anhorreant
                                        </li>
                                    </ul>
                                </li>
                                <br />
                                <li>
                                    <Link to='about-us'><button className="learnMoreBtn">Learn more</button></Link>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <img className="homeImg" src="shutterstock_696636415.jpg" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};