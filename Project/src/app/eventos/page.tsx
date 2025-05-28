import React from 'react';
import styles from './css/cards.module.css'; // Import the CSS module

// card - 2 linha - 28
// card - 9 linha - 132
// card - 11 linha - 158
// card - 12 linha - 180

export default function Page() {
    return (
        <>  
            {/* <!-- Content--> */}
            <div className={styles.container}>
                {/* <!-- Card columns--> */}
                <div className={styles['card-columns']}>

                    {/* <!-- Card 1 --> */}
                    <div className={`${styles.card} ${styles['text-white']} ${styles['border-0']}`}>
                        <div className={`${styles['card-img-overlay']} ${styles['--card-img-overlay-purple']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-between']} ${styles['align-items-start']} ${styles['p-5']}`}>
                            <div className={`${styles.h2} ${styles['mb-2']}`}>
                                <a className={`${styles['text-white']} ${styles['text-decoration-none']}`} href="#">Web Design Trends</a>
                            </div>
                            <span className={`${styles['badge-warning2']} ${styles['text-uppercase']}`}>January 2023</span>
                        </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className={`${styles.card} ${styles['border-0']}`}>
                        <div className={`${styles['position-relative']} ${styles['text-white']}`}>
                            <div className={`${styles['card-img-overlay']} ${styles.three}`}>
                                <span className={`${styles.badge} ${styles['badge-light']} ${styles['text-uppercase']}`}>Famous</span>
                            </div>
                            <div className={styles['card-smooth-caption']}>
                                <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                    <div className={styles['mr-auto']}>
                                        <h5 className={`${styles['card-title']} ${styles['text-white']}`}>Smooth caption</h5>
                                        <h6 className={`${styles['card-subtitle']} ${styles['text-white']}`}>Alternative caption</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['card-body']}>
                            <p className={styles['card-text']}>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.</p>
                        </div>
                        <div className={styles['card-footer']}>
                            <div className={`${styles.media} ${styles['align-items-center']}`}>
                                <div className={styles['media-body']}>
                                    <a className={`${styles['card-link']} ${styles['text-primary']} ${styles['read-more']}`} href="#">Read More</a>
                                </div>
                                <div className={styles.footerright}>
                                    <div className={styles.tnlink3}><i className="fas fa-heart" aria-hidden="true"></i></div>
                                    <div className={styles.tnlink3}><i className="fas fa-share-nodes" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className={`${styles.card} ${styles['text-white']} ${styles['border-0']}`}>
                        <div className={`${styles['card-img-overlay']} ${styles['--card-img-overlay-purple']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-between']} ${styles['align-items-start']} ${styles['p-5']} ${styles.four}`}></div>
                        <div className={`${styles['card-img-overlay']} ${styles['card-overlay-black']} ${styles['hover-light']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-between']} ${styles['align-items-start']}`}>
                            <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['w-100']} ${styles['mb-3']}`}>
                                <div><span className={`${styles['badge-warning3']} ${styles['mr-2']}`}>TRENDS</span><span className={styles['badge-info']}>DESIGN</span></div>
                                <a href="#">
                                    <div className={styles.myicoo}></div>
                                </a>
                            </div>
                            <div className={styles['mb-4']}>
                                <div className={styles.h3}><a className={`${styles['text-white']} ${styles['text-decoration-none']}`} href="#">Web Design templates<br />Selection</a></div>
                            </div>
                            <div className={styles['text-light']}>January 14 2023</div>
                        </div>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div className={`${styles.card} ${styles['text-center']} ${styles['border-0']}`}>
                        <div className={styles['card-body']}>
                            <div className={`${styles['card-card-avatar']} ${styles['mb-4']}`}>
                                <div className={`${styles['card-avatar']} ${styles['avatar-border']} ${styles.two}`}></div>
                            </div>
                            <div className={styles['mb-5']}>
                                <h5 className={`${styles['card-title']} ${styles['mb-1']}`}>Hannah Luebbering</h5>
                                <div className={styles['text-muted']}>Applied Mathematics</div>
                            </div>
                            <div className={`${styles['d-flex']} ${styles['justify-content-around']} ${styles['align-items-center']}`}>
                                <a className={`${styles['card-link']} ${styles['text-uppercase']}`} href="#">Accept</a>
                                <a className={`${styles['card-link']} ${styles['text-uppercase']} ${styles['text-dark']}`} href="#">Denied</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div className={`${styles.card} ${styles['bg-primary']} ${styles['text-white']} ${styles['text-center']} ${styles['p-4']} ${styles['border-0']} ${styles.two}`}>
                        <blockquote className={`${styles.blockquote} ${styles['mb-0']}`}>
                            <p className={styles['mb-0']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer className={`${styles['blockquote-footer']} ${styles['text-white']}`}><small>Someone famous in <cite title="Source Title">Source Title</cite></small></footer>
                        </blockquote>
                    </div>

                    {/* <!-- Card 6 --> */}
                    <div className={`${styles.card} ${styles['text-center']} ${styles['border-0']} ${styles['mb-4']}`}>
                        <div className={`${styles['card-cup']} ${styles['bg-primary']}`}></div>
                        <div className={`${styles['card-body']} ${styles.proavatar}`}>
                            <div className={`${styles['card-avatar']} ${styles['avatar-border']} ${styles['mt-n5']}`}>
                                <rect width="100%" height="100%" fill="#495057"></rect>
                            </div>
                            <h5 className={`${styles['card-title']} ${styles['text-primary']} ${styles['mb-1']}`}>Hannah Luebbering</h5>
                            <div className={styles['text-muted']}>Data Science</div>
                        </div>
                        <div className={`${styles['card-footer']} ${styles['card-footer']} ${styles.two}`}>
                            <a className={`${styles['card-link']} ${styles['text-primary']} ${styles['read-more']} ${styles.two}`} href="#">Follow</a>
                        </div>
                    </div>

                    {/* <!-- Card 7 --> */}
                    <div className={`${styles.card} ${styles['bg-primary']} ${styles['text-white']} ${styles['text-center']} ${styles['p-4']} ${styles['border-0']}`}>
                        <blockquote className={`${styles.blockquote} ${styles['mb-0']}`}>
                            <p className={styles['mb-0']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer className={`${styles['blockquote-footer']} ${styles['text-white']}`}><small>Someone famous in <cite title="Source Title">Source Title</cite></small></footer>
                        </blockquote>
                    </div>

                    {/* <!-- Card 8 --> */}
                    <div className={`${styles.card} ${styles['bg-secondary']} ${styles.two} ${styles['text-white']} ${styles['p-4']} ${styles['border-0']}`}>
                        <hr className={styles['hr-tag']}/>
                        <div className={`${styles.container} ${styles.incard}`}>
                            <h2 className={styles.indent}>Inset Heading</h2>
                            <p className={styles.indent}>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna.</p>
                        </div>
                    </div>

                    {/* <!-- Card 9 --> */}
                    <div className={`${styles.card} ${styles['border-0']} ${styles.three}`}>
                        <div className={styles['position-relative']}>
                            <div className={`${styles['card-img-overlay']} ${styles.two}`}><span className={`${styles.badge} ${styles['badge-light']} ${styles['text-uppercase']}`}>FASHION</span></div>
                        </div>
                        <div className={`${styles['card-body']} ${styles.two}`}>
                            <h5 className={styles['card-title']}>Fashion today</h5>
                            <h6 className={`${styles['card-subtitle']} ${styles['mb-2']} ${styles['text-muted']}`}>January 16 2023</h6>
                            <hr className={styles['hr-tag']}/>
                            <p className={`${styles['card-text']} ${styles['mt-4']}`}>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.</p>
                        </div>
                        <div className={styles['card-footer']}>
                            <div className={`${styles.media} ${styles['align-items-center']}`}>
                                <div className={styles['media-body']}><a className={`${styles['card-link']} ${styles['text-primary']} ${styles['read-more']}`} href="#">Read More</a></div>
                                <div className={styles.footerright}>
                                    <div className={styles.tnlink3}><i className="fas fa-heart"></i></div>
                                    <div className={styles.tnlink3}><i className="fas fa-share-nodes"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 10 --> */}
                    <div className={`${styles.card} ${styles['bg-secondary']} ${styles.two} ${styles['text-white']} ${styles['p-4']} ${styles['border-0']}`}>
                        <hr className={styles['hr-tag']}/>
                        <div className={`${styles.container} ${styles.incard}`}>
                            <h2 className={`${styles.indent} ${styles.red}`}>Inset Heading</h2>
                            <p className={styles.indent}>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna.</p>
                        </div>
                    </div>

                    {/* <!-- Card 11 --> */}
                    <div className={`${styles.card} ${styles['text-white']} ${styles['border-0']}`}>
                        <div className={`${styles['card-img-overlay']} ${styles['--card-img-overlay-purple']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-between']} ${styles['align-items-start']} ${styles['p-5']} ${styles.three}`}></div>
                        <div className={`${styles['card-img-overlay']} ${styles['card-overlay-black']} ${styles['hover-light']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-between']} ${styles['align-items-start']}`}>
                            <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['w-100']} ${styles['mb-3']}`}>
                                <div><span className={`${styles['badge-lightblue']} ${styles['mr-2']}`}>TRENDS</span><span className={styles['badge-warning']}>DESIGN</span></div>
                                <a href="#">
                                    <div className={styles.myicoo}></div>
                                </a>
                            </div>
                            <div className={styles['mb-4']}>
                                <div className={styles.h3}><a className={`${styles['text-white']} ${styles['text-decoration-none']}`} href="#">Web Design templates<br />Selection</a></div>
                            </div>
                            <div className={styles['text-light']}>January 16 2023</div>
                        </div>
                    </div>

                    {/* <!-- Card 12 --> */}
                    <div className={`${styles.card} ${styles['border-0']} ${styles.wtab}`}>
                        <div className={`${styles['card-body']} ${styles.three}`}>
                            <small className={styles['text-muted']}>This is my tag</small>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisi</h5>
                            <div className={styles.footer}>
                                <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['w-100']}`}>
                                    <div>
                                        <a className={styles.dateit}><i className="fa fa-calendar pr-1"></i> Jan 2023</a>
                                        <a className={styles.locit}><i className="fa fa-twitter pr-1"></i> Australia</a>
                                    </div>
                                    <a>
                                        <i className="fa fa-twitter pr-1"> </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 13 --> */}
                    <div className={`${styles.card} ${styles['border-0']}`}>
                        <div className={styles['position-relative']}></div>
                        <div className={styles['card-body']}>
                            <div className={styles['mb-3']}><a className={`${styles['card-link']} ${styles['text-primary']} ${styles['read-more']}`} href="#">Read More</a></div>
                            <h5 className={styles['card-title']}>Card title</h5>
                            <hr className={styles['hr-tag']}/>
                            <p className={styles['card-text']}>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proiden.</p>
                        </div>
                        <div className={styles['card-footer']}>
                            <div className={`${styles.media} ${styles['align-items-center']}`}>
                                <div className={styles['media-body']}><a className={`${styles['card-link']} ${styles['text-uppercase']}`} href="#">Read More</a></div>
                                <div className={styles.footerright}>
                                    <div className={styles.tnlink3}><i className="fas fa-heart" aria-hidden="true"></i></div>
                                    <div className={styles.tnlink3}><i className="fas fa-share-nodes" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 14 --> */}
                    <div className={`${styles.card} ${styles['bg-primary']} ${styles['text-white']} ${styles['text-center']} ${styles['p-4']} ${styles['border-0']} ${styles.four}`}></div>
                </div>
            </div>
        </>
    );
}