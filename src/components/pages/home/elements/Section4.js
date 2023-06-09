import { Link } from 'react-router-dom';

export const Section4 = () => {
    return (
        <div>
            <span className="textCenter">
                <h2>
                    Sed libero justo, lobortis sit amet suscipit non
                </h2>
                <h3 className="boldText">
                    taria duo ut vis semper abhorreant
                </h3>
            </span>
            <div className="threeCol">
                <div>
                    <span className="boldText">
                        Pallentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla. Nam auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque. Curabitur eget turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex. Nullam quis orci ante. Nunc felis massa, posuere non gravida in, commodo in arcu. In feugiat magna non volutpat faucibus. Nam aliquam justo nec aliquam iaculis. Integer laoreet pulvinar elit pulvinar fermentum. Morbi vehicula sodales nunc ac varius. Proin porttitor porttitor libero vel pharetra.
                    </span>
                </div><br />
                <div>
                    Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec magnis dis parturient montes, nascetur ridiculus mus. Donce finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam. Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum suscipit. Proin et elementum arcu, sit amet porttitor diam. Curabitur euismod, erat vitae tristique volutpat, augue lectus dignissim justo, at faucibus orci est a elit.
                </div><br />

                <div>
                    Sed sed sapien pretium, maximus felis vel, mollis elit. Sed libero justo, lobortis sit amet suscipit non, auctor non libero. Maecenas
                    quis nisi eget enim porta blandit a nec sapien. Mauris porttitor lorem ut egestas euismod. Donec molestie tempor nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut tortor scelerisque, at iaculis nunc ornare. Pellentesque non nunc nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor magna augue, non auctor quam placerat nec. Nulla sem urna, dictum sed nisi in, viverra rutrum neque. Aliquam ipsum nunc, porta a augue nec, fringilla mollis arcu. In a vehicula odio. Praesent vulputate turpis eleifend egestas ultrieces. Proin nec sagittis nibh. Curabitur fringilla felis a porttitor maximus. Vestibulum aliquet ante nec leo malesuada porttitor sit amet et magna.
                </div>
            </div>
            <div>
                <Link to='contact-us'><button className="contactUsHomePageBottomBtn">Contact us</button></Link>
            </div>
        </div>
    )
};