/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import style from './style.scss';

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */

const HomePage = React.lazy(() => import(/* webpackChunkName: 'homepage' */ '../Pages/HomePage'));

/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = (): JSX.Element => {
    return (
        <Suspense
            fallback={
                /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
                <div>
                    <div>
                        <Row className={style.loadingWrapper} type="flex" align="middle">
                            <Col className={style.loadingFormCol}>
                                <div className={style.loadingPageWrapper}>
                                    <div className={style.loadingPageTitle}>DataReachable</div>
                                    <div className={style.loadingAnimation}>
                                        <div className={style.cubeGrid}>
                                            <div className={style.loadingCube1} />
                                            <div className={style.loadingCube2} />
                                            <div className={style.loadingCube3} />
                                            <div className={style.loadingCube4} />
                                            <div className={style.loadingCube5} />
                                            <div className={style.loadingCube6} />
                                            <div className={style.loadingCube7} />
                                            <div className={style.loadingCube8} />
                                            <div className={style.loadingCube9} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                /* <------------------------------------ **** Loading Animation END **** ------------------------------------ */
            }
        >
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default RootRouter;
