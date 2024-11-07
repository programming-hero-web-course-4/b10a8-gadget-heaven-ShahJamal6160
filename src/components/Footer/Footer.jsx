import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-row gap-4">
                <h1 className='text-4xl'>Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </nav>
            <nav>
                <div className='border border-2'></div>
            </nav>

            <nav>
                
            </nav>

            <aside>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div>
                        <h1>Services</h1>
                        <ul>
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>

                    <div>
                        <h1>Company</h1>
                        <ul>

                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>

                    </div>

                    <div>
                        <h1>Legal</h1>
                        <ul>

                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </aside>

        </footer>
    );
};

export default Footer;