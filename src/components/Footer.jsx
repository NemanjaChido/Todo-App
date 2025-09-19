const Footer = ()=> {
    return (
        <nav className="text-[hsl(235,16%,43%)] w-[50%] text-[clamp(0.5rem,1vw,0.8rem)] p-2 absolute left-[25%] bottom-0 z-10 flex justify-center">
            <p>A <a className="cursor-pointer text-blue-500 hover:scale-75" target="_blank" href="https://www.frontendmentor.io">frontend
                </a> solution built by <a className="cursor-pointer text-blue-500 hover:scale-75" target="_blank" href="https://www.frontendmentor.io/profile/NemanjaChido">dz_Wata</a></p>
        </nav>
    );
};

export default Footer;