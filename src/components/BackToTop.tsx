export default function BackToTop() {
    return (
        <a
            href="#nav-bar-top"
            className="fixed bottom-3 right-3 z-50 hidden cursor-pointer hover:shadow-md sm:block hover:[&>p:last-child]:opacity-0"
        >
            <p className="flex px-4 py-2 font-semibold text-black">
                <span className="pr-2">&#8593;</span>Back to top
            </p>
            <p className="absolute left-0 top-0 flex bg-black px-4 py-2 font-semibold opacity-10">
                <span className="pr-2">&#8593;</span>Back to top
            </p>
        </a>
    );
}
