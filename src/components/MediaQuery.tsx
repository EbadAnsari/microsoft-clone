export default function MediaQuery() {
    return (
        <div className="test z-50">
            <div
                data-sm="sm"
                data-md="md"
                data-lg="lg"
                data-xl="xl"
                data-2xl="2xl"
                className="fixed left-0 top-0 text-2xl font-bold text-black sm:before:content-[attr(data-sm)] md:before:content-[attr(data-md)] lg:before:content-[attr(data-lg)] xl:before:content-[attr(data-xl)] 2xl:before:content-[attr(data-2xl)]"
            ></div>
        </div>
    );
}
