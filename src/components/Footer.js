function Footer() {
    return (
        <footer className="footer">
            <div className="footer__adress">
                <h3 className="footer__adress-title">plantku</h3>
                <div className="footer__adress-name">Plantku House</div>
                <p className="footer__adress-text">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</p>
            </div>
            <div className="footer__menu">
                <h6 className="footer__menu-title">Perusahaan</h6>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="" className="footer__list-item--link">Tentang Kami</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="" className="footer__list-item--link">Hubungi Kami</a>
                    </li>
                </ul>
            </div>
            <div className="footer__menu">
                <h6 className="footer__menu-title">Produk</h6>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item--link">Tanaman</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item--link">Tanaman Lain</a>
                    </li>
                </ul>
            </div>
            <div className="footer__input">
                <h3 className="footer__input-title">Berlangganan Email Kami</h3>
                <input className="footer__input-input" type="text" placeholder='Masukan Alamat Email' />
                <button className="footer__input-btn">Submit</button>
            </div>
        </footer>
    )
}

export default Footer;