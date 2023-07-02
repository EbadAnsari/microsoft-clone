function Facebook() {
    return (
        <a href="#">
            <img src="/assets/icons/facebook.avif" />
        </a>
    );
}

function Twitter() {
    return (
        <a href="#">
            <img src="/assets/icons/twitter.webp" />
        </a>
    );
}

function YouTube() {
    return (
        <a href="#">
            <img src="/assets/icons/youtube.webp" />
        </a>
    );
}

export default function SocialMediaLinks() {
    return (
        <div className="social-media-icons flex w-fit items-center gap-3">
            <p className="text-lg">Follow Microsoft</p>
            <div className="icons flex flex-wrap gap-3 [&>a]:w-10">
                <Facebook />
                <Twitter />
                <YouTube />
            </div>
        </div>
    );
}
