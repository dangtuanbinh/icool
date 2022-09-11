import { Space, Spin } from "antd";

const LoadingIndicator = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default LoadingIndicator;
