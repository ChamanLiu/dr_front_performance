/**
 * @file MainLayout
 * @date 2020-12-01
 * @author Chaman
 * @lastModify  2020-12-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Performance from '../../Components/Performance';
import './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const MainLayout = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [activeKey, setActiveKey] = useState('1');
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Layout>
            <Header className="header">
                <h1 style={{ color: '#ffffff' }}>DataReachable</h1>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        activeKey={activeKey}
                        defaultOpenKeys={['sub1']}
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="绩效">
                            <Menu.Item key="1" onClick={() => setActiveKey('1')}>
                                绩效导出
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined />} title="设置">
                            <Menu.Item key="2" onClick={() => setActiveKey('2')}>
                                设置
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {activeKey === '1' && <Performance />}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default MainLayout;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
