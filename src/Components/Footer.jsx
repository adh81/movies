
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-5">
            <div className="container py-4">
                <div className="row">
                    {/* ستون اول - درباره ما */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-warning mb-3">سینمااپ</h5>
                        <p className="text-light opacity-75">
                            پلتفرم تخصصی جستجو و مدیریت فیلم‌های سینمایی. 
                            فیلم‌های مورد علاقه خود را ذخیره و مدیریت کنید.
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="text-light me-3">
                                <i className="fab fa-telegram fa-lg"></i>
                            </a>
                            <a href="#" className="text-light me-3">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-light me-3">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* ستون دوم - لینک‌های سریع */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">لینک‌های سریع</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" className="text-light opacity-75 text-decoration-none">
                                    صفحه اصلی
                                </a>
                            </li>
                            <li className="mb-2">
                                <Link className="text-light opacity-75 text-decoration-none" to={"/favorites"}>
                               علاقه‌مندی‌ها </Link>
                                
                            </li>
                            <li className="mb-2">
                                <Link className="text-light opacity-75 text-decoration-none" to={"/movies"}>همه فیلم‌ها</Link>
                                
                            </li>
                        </ul>
                    </div>

                    {/* ستون سوم - اطلاعات تماس */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">تماس با ما</h6>
                        <ul className="list-unstyled text-light opacity-75">
                            <li className="mb-2">
                                <i className="fas fa-envelope me-2"></i>
                                info@cinemaapp.com
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-phone me-2"></i>
                                ۰۲۱-۱۲۳۴۵۶۷۸
                            </li>
                        </ul>
                    </div>

                    {/* ستون چهارم - خبرنامه */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="text-warning mb-3">خبرنامه</h6>
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="ایمیل خود را وارد کنید"
                            />
                            <button className="btn btn-warning" type="button">
                                عضویت
                            </button>
                        </div>
                    </div>
                </div>

                {/* خط جداکننده */}
                <hr className="border-light opacity-50 my-4" />

                {/* کپی رایت */}
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-light opacity-75 mb-0">
                            © {new Date().getFullYear()} سینمااپ. تمام حقوق محفوظ است.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-links">
                            <a href="/privacy" className="text-light opacity-75 text-decoration-none me-3">
                                حریم خصوصی
                            </a>
                            <a href="/terms" className="text-light opacity-75 text-decoration-none">
                                شرایط استفاده
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;