const Footer = {
  props: ['iconRoutes'],
  template:
    `
  <footer>
        <section class="advantages">
            <h2 class="visually-hidden">Advantages</h2>
            <div class="container">
                <div class="advantages__wrap">
                    <ul class="advantages__list">
                        <li class="advantages__item">
                            <img class="advantages__item-icon" :src="iconRoutes.bus" alt="bus" height="40">
                            <h3 class="advantages__item-title">Free Delivery</h3>
                            <p class="advantages__item-text">Worldwide delivery on all. Authorit tively morph
                                next&#8209;generation innov tion with extensive
                                models.</p>
                        </li>
                        <li class="advantages__item">
                            <img class="advantages__item-icon" :src="iconRoutes.percent" alt="percent-icon"
                                 width="40" height="40">
                            <h3 class="advantages__item-title">Sales & discounts</h3>
                            <p class="advantages__item-text">Worldwide delivery on all. Authorit tively morph
                                next&#8209;generation innov tion with extensive
                                models.</p>
                        </li>
                        <li class="advantages__item">
                            <img class="advantages__item-icon" :src="iconRoutes.crown" alt="crown" height="40">
                            <h3 class="advantages__item-title">Quality assurance</h3>
                            <p class="advantages__item-text">Worldwide delivery on all. Authorit tively morph
                                next&#8209;generation innov tion with extensive
                                models.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="subscription">
            <h2 class="visually-hidden">Subscription field</h2>
            <div class="container">
                <div class="subscription__wrap">
                    <article class="subscription__review">
                        <h2 class="subscription__review-title">Subscription review</h2>
                        <img class="subscription__review-img" :src="iconRoutes.author" alt="author">
                        <p class="subscription__review-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                            pulvinar
                            purus
                            condimentum“</p>
                    </article>
                    <form class="subscription__form">
                        <h3 class="subscription__title">subscribe</h3>
                        <h4 class="subscription__sub-title">for our newletter and promotion</h4>
                        <label class="visually-hidden" for="email">Email</label>
                        <input class="subscription__input" id="email" type="email"
                               placeholder="Enter Your Email">
                        <button class="subscription__button"
                                type="submit" @click.prevent>Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <section class="social">
            <h2 class="visually-hidden">Social links</h2>
            <div class="container">
                <div class="social__wrap">
                    <p class="social__copyright">&#169; 2022 Brand All Rights Reserved.</p>
                    <ul class="social__list">
                        <li class="social__item">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path class="social__bg" d="M31.4506 0H0V32H31.4506V0Z"/>
                                    <path class="social__icon"
                                          d="M19.0884 16.28L19.5069 13.616H16.8902V11.8873C16.8902 11.1585 17.2557 10.4481 18.4277 10.4481H19.6172V8.17997C19.6172 8.17997 18.5377 8 17.5056 8C15.3507 8 13.9422 9.27593 13.9422 11.5857V13.616H11.5469V16.28H13.9422V22.72H16.8902V16.28H19.0884Z"/>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a href="#">
                                <svg width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                    <path class="social__bg" d="M32.1889 0H0.738281V32H32.1889V0Z"/>
                                    <g clip-path="url(#clip0_128_232)">
                                        <path class="social__icon"
                                              d="M16.139 12.6816C14.0238 12.6816 12.3177 14.3849 12.3177 16.4966C12.3177 18.6083 14.0238 20.3117 16.139 20.3117C18.2541 20.3117 19.9602 18.6083 19.9602 16.4966C19.9602 14.3849 18.2541 12.6816 16.139 12.6816ZM16.139 18.9769C14.7721 18.9769 13.6547 17.8646 13.6547 16.4966C13.6547 15.1287 14.7688 14.0164 16.139 14.0164C17.5092 14.0164 18.6233 15.1287 18.6233 16.4966C18.6233 17.8646 17.5058 18.9769 16.139 18.9769V18.9769ZM21.0078 12.5255C21.0078 13.0203 20.6087 13.4154 20.1165 13.4154C19.621 13.4154 19.2252 13.0169 19.2252 12.5255C19.2252 12.0341 19.6243 11.6357 20.1165 11.6357C20.6087 11.6357 21.0078 12.0341 21.0078 12.5255ZM23.5386 13.4287C23.4821 12.2367 23.2094 11.1808 22.3347 10.3109C21.4634 9.44097 20.4058 9.1687 19.2119 9.10894C17.9814 9.03921 14.2932 9.03921 13.0627 9.10894C11.8721 9.16538 10.8145 9.43765 9.93987 10.3076C9.06522 11.1775 8.79584 12.2333 8.73597 13.4253C8.66613 14.6539 8.66613 18.3361 8.73597 19.5646C8.79251 20.7566 9.06522 21.8124 9.93987 22.6824C10.8145 23.5523 11.8688 23.8246 13.0627 23.8843C14.2932 23.9541 17.9814 23.9541 19.2119 23.8843C20.4058 23.8279 21.4634 23.5556 22.3347 22.6824C23.2061 21.8124 23.4788 20.7566 23.5386 19.5646C23.6085 18.3361 23.6085 14.6572 23.5386 13.4287V13.4287ZM21.949 20.8828C21.6895 21.5335 21.1874 22.0349 20.5322 22.2972C19.5511 22.6857 17.2231 22.596 16.139 22.596C15.0548 22.596 12.7235 22.6824 11.7457 22.2972C11.0939 22.0382 10.5917 21.5369 10.329 20.8828C9.93987 19.9033 10.0297 17.5791 10.0297 16.4966C10.0297 15.4142 9.9432 13.0867 10.329 12.1105C10.5884 11.4597 11.0906 10.9583 11.7457 10.696C12.7268 10.3076 15.0548 10.3972 16.139 10.3972C17.2231 10.3972 19.5545 10.3109 20.5322 10.696C21.184 10.955 21.6862 11.4564 21.949 12.1105C22.3381 13.09 22.2483 15.4142 22.2483 16.4966C22.2483 17.5791 22.3381 19.9066 21.949 20.8828Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_128_232">
                                            <rect width="14.8991" height="17" transform="translate(8.68555 8)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path class="social__bg" d="M31.9252 0H0.474609V32H31.9252V0Z"/>
                                    <g clip-path="url(#clip0_128_240)">
                                        <path class="social__icon"
                                              d="M16.7403 8.20312C13.5556 8.20312 10.4082 10.3406 10.4082 13.8C10.4082 16 11.6374 17.25 12.3823 17.25C12.6896 17.25 12.8666 16.3875 12.8666 16.1438C12.8666 15.8531 12.1309 15.2344 12.1309 14.025C12.1309 11.5125 14.0305 9.73125 16.4889 9.73125C18.6027 9.73125 20.1671 10.9406 20.1671 13.1625C20.1671 14.8219 19.506 17.9344 17.3642 17.9344C16.5913 17.9344 15.9302 17.3719 15.9302 16.5656C15.9302 15.3844 16.7496 14.2406 16.7496 13.0219C16.7496 10.9531 13.835 11.3281 13.835 13.8281C13.835 14.3531 13.9002 14.9344 14.133 15.4125C13.7046 17.2688 12.8293 20.0344 12.8293 21.9469C12.8293 22.5375 12.9131 23.1188 12.969 23.7094C13.0745 23.8281 13.0218 23.8156 13.1832 23.7563C14.7476 21.6 14.6917 21.1781 15.3994 18.3562C15.7812 19.0875 16.7683 19.4812 17.5505 19.4812C20.8469 19.4812 22.3275 16.2469 22.3275 13.3313C22.3275 10.2281 19.6643 8.20312 16.7403 8.20312Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_128_240">
                                            <rect width="11.9193" height="16" transform="translate(10.4082 8)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path class="social__bg" d="M31.6635 0H0.212891V32H31.6635V0Z"/>
                                    <g clip-path="url(#clip0_128_236)">
                                        <path class="social__icon"
                                              d="M22.417 12.7405C22.427 12.8826 22.427 13.0248 22.427 13.1669C22.427 17.5019 19.1498 22.4969 13.1599 22.4969C11.3145 22.4969 9.60022 21.9588 8.1582 21.0248C8.4204 21.0552 8.67247 21.0654 8.94475 21.0654C10.4674 21.0654 11.8691 20.5476 12.9884 19.6644C11.5565 19.6339 10.3565 18.6898 9.94305 17.3903C10.1447 17.4207 10.3464 17.441 10.5582 17.441C10.8506 17.441 11.1431 17.4004 11.4153 17.3294C9.92291 17.0248 8.80355 15.705 8.80355 14.1111V14.0705C9.23715 14.3141 9.74139 14.4664 10.2758 14.4867C9.39849 13.8979 8.82373 12.8928 8.82373 11.7557C8.82373 11.1466 8.98504 10.5882 9.26741 10.1009C10.8708 12.0908 13.2809 13.3902 15.9833 13.5324C15.9329 13.2887 15.9027 13.035 15.9027 12.7811C15.9027 10.974 17.3548 9.50195 19.1598 9.50195C20.0976 9.50195 20.9446 9.89789 21.5396 10.5375C22.2757 10.3954 22.9816 10.1212 23.6068 9.74561C23.3648 10.507 22.8505 11.1466 22.1749 11.5527C22.8304 11.4817 23.4657 11.2989 24.0505 11.0451C23.6069 11.6948 23.0522 12.2735 22.417 12.7405Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_128_236">
                                            <rect width="15.8924" height="16" transform="translate(8.1582 8)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
  `
}

export {
  Footer
};