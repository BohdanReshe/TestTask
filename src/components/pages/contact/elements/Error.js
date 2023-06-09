
export const Error = () => {
    return (
        <div className='errorCard'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className="msgSentTxt">Something went wrong</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="msgWeWillTxt">
                                Please try again later
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}