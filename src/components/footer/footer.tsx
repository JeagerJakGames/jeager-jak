import './footer.scss';
//create footer component
export default function Footer() {
    const isDarkMode = false;
    const color = isDarkMode  ?"white": "black";
    return (
        <>
            <footer className='footer'>
                
                <div>
                    <div>
                        <h3>Footer</h3>
                    </div>
                    <div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/root">Root</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </div>

            </footer>
        </>
    )
}
