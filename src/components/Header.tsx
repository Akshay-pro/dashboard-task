import Logo from "../assets/logo.png";
import { Select, Space } from 'antd';

const Header = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <div className="dashboard-header">
                <div className="header-logo">
                    <img src={Logo} alt="logo" />
                    <span>View Name</span>
                </div>
                <Space wrap>
                    <Select
                        defaultValue="North India Region"
                        className="header-select-box"
                        onChange={handleChange}
                        options={[
                            {
                                value: "North-India-Region",
                                label: "North India Region",
                            },
                        ]}
                    />
                </Space>
            </div>
        </>
    );
};

export default Header;
