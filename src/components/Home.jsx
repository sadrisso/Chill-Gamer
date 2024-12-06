

const Home = () => {
    return (
        <div className="text-center">
            {/* BANNER SLIDER STARTS FROM HERE */}
            <div className="carousel rounded-box text-center mt-12">
                    <div className="carousel-item">
                        <img className="w-[300px]" src="https://i.ibb.co.com/bQdfbSk/games-1.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-[300px]"
                            src="https://i.ibb.co.com/vXWZ8zt/games-4.webp"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-[300px]"
                            src="https://i.ibb.co.com/mJNzkk5/games-3.jpg"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-[300px]"
                            src="https://i.ibb.co.com/VWBCZ9c/ashphalt-9.webp"
                            alt="Drink" />
                    </div>
                </div>
                {/* BANNER SLIDER ENDS HERE */}
        </div>
    );
};

export default Home;