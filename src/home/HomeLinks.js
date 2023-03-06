export default function HomeLinks() {
    return (
        <nav>
            <ul className="external">
                <li>
                    <a href="https://soundcloud.com/goodluckwhiterabbit" target="_blank" rel="noreferrer">
                        AUDIO
                    </a>
                </li>

                <li>
                    <a href="">VISUAL</a>

                    <div className="subnav">
                        <ul className="subnav-links">
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