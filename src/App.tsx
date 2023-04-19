import React from 'react';
import type {FC} from 'react';
import {Button} from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import {ConfigProvider} from 'antd';

const App: FC = () => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#00b96b',
            },
        }}
    >
        <div className="App">
            <Button type="primary">欢迎</Button>
        </div>
    </ConfigProvider>
);

export default App;
