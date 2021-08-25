import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {

    const [hamburgerClickked, setHamburgerClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setHamburgerClicked(!hamburgerClickked)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link href="/">
                    <a>
                        <h1 className='brand-title'>Tutto Tasse</h1>
                        <p className='brand-slogan'>Guide interattive per calcolo tasse, spese e molto altro!</p>
                    </a>
                </Link>
            </div>
            <a onClick={handleClick} href='' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className={hamburgerClickked ? 'navbar-links active' : 'navbar-links'}>
                <ul>
                    <li>
                        <Link href="/articoli"><a>Articoli</a></Link>
                    </li>
                    <li>
                        <Link href="/calcolatori"><a>Calcolatori</a></Link>
                    </li>
                    <li>
                        <Link href="/intertives"><a>Guide Interattive</a></Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;