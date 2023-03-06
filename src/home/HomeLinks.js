import audio from "../assets/media/AUDIO.gif";
import visual from "../assets/media/VISUAL.gif";

export default function HomeLinks() {
    return (
        <nav>
            <ul className="external">
                <li>
                    <a href="https://soundcloud.com/goodluckwhiterabbit" target="_blank" rel="noreferrer">
                        <img className="shimmer" src={audio} alt="The word audio shimmering"/>
                    </a>
                </li>

                <li>
                    <a href="">
                        <img className="shimmer" src={visual} alt="The word visual shimmering"/>
                    </a>

                    <div className="subnav">
                        <ul className="subnav-links">
                            <li>
                                |
                            </li>

                            <li>
                                <a href="">ART</a>
                            </li>

                            <li>
                                <a href="">FILM</a>
                            </li>

                            <li>
                                <a href="">PHOTO</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    )
}