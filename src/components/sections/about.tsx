import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>HumanusX combines <span>data-driven strategies</span> with <span>artificial intelligence</span> to unlock your hotel's full potential.
                                We don't just optimize revenue; we transform the entire guest experience.</h3>
                            <div className="founder-name-part">
                                {/* <Image width={80} height={80} src="/images/about/founder.png" alt="founder" title="founder" /> */}
                                <h2>Your Partner in Growth</h2>
                                <p>Revenue & Digital Growth Solutions</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About