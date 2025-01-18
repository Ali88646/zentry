import Button from "./Button";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const ImageClipBox = ({ src, clipClass, refrence }) => {
  return (
    <div className={clipClass} ref={refrence}>
      <img src={src} alt="vector" />
    </div>
  );
};

const Contact = () => {
  const topElementRef = useRef(null);
  const bottomElementRef = useRef(null);
  const swordManRef_1 = useRef(null);
  const swordManRef_2 = useRef(null);
  const contactContainerRef = useRef(null);

  useGSAP(() => {
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainerRef.current,
        start: "top center",
        end: "bottom 80%",
        toggleActions: "restart none none none",
        markers: true,
        // scrub: true,
      },
    });

    contactTl
      .from(
        topElementRef.current,
        {
          y: -200,
          duration: 0.3,
        },
        "a"
      )
      .from(
        bottomElementRef.current,
        {
          y: 200,
          duration: 0.3,
        },
        "a"
      )
      .from(
        swordManRef_1.current,
        {
          x: 600,
          opcaity: 0,
          duration: 0.3,
        },
        "b"
      )
      .from(
        swordManRef_2.current,
        {
          x: 600,
          opcaity: 0,
          duration: 0.3,
        },
        "b"
      );
  }, []);

  return (
    <div
      id="contact"
      className="my-20 min-h-96 w-screen px-10"
      ref={contactContainerRef}
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
            refrence={topElementRef}
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            refrence={bottomElementRef}
          />
        </div>
        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
            refrence={swordManRef_1}
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
            refrence={swordManRef_2}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p>
          {/* <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether
          </p> */}
          <AnimatedTitle
            title=" Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether"
            containerClass={"mt-4"}
          />
          <Button
            title="contact us"
            containerClass={"mt-10"}
            className="bg-blue-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
