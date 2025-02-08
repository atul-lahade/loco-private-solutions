import { NavLink } from "react-router";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col space-y-10 justify-center border-t border-slate-900/5 py-10 bg-gradient-to-br from-[#FFFEFF] to-gray-300">

                <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                    <a className="hover:text-gray-900" href="/">Home</a>
                    <a className="hover:text-gray-900" href="/about-us">About Us</a>
                    <a className="hover:text-gray-900" href="/services">Services</a>
                    <a className="hover:text-gray-900" href="/products">Products</a>
                    <a className="hover:text-gray-900" href="/contact-us">Contact Us</a>
                </nav>

                <div className="flex justify-center space-x-5">
                    <a href="https://facebook.com/478340502036431" id="facebook" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                    </a>
                    <a href="https://instagram.com/locoprivatesolutions/" id="instagram" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                    </a>
                    <a href="https://wa.me/919890533525" id="whatsapp" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/whatsapp--v2.png" />
                    </a>
                    <a href="mailto:locoprivatesolutions@gmail.com?subject=Inquiry%20About%20Export%20Products&body=Dear%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20We%20are%20interested%20in%20exploring%20your%20range%20of%20export%20products%2C%20specifically%20%5Bmention%20the%20product%20categories%20you're%20interested%20in%2C%20e.g.%2C%20plastic%20flowers%2C%20mustard%2C%20etc.%5D.%20Could%20you%20please%20provide%20more%20details%20on%20pricing%2C%20availability%2C%20and%20shipping%20terms%3F%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%20Name%5D%0A%5BYour%20Contact%20Information%5D" id="mail" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/gmail.png" />
                    </a>
                </div>
                <p className="text-center text-gray-700 font-medium">Copyright © 2025 Loco Private Solutions - All Rights Reserved.</p>
            </footer>
        </>
    );
}