
export const Success = () => {
    return (
        <div className='successCard'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <br />
                            <div className="circle">
                                <h1 className="checkMark">
                                    &#10004;
                                </h1>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="msgSentTxt">Your message has been sent</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="msgWeWillTxt">
                                We will be in contact with you within 24 hours.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}