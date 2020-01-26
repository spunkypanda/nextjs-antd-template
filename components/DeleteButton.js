import { Icon, Popconfirm } from 'antd';

const DeleteButton = ({
  title = 'Are you sure? ',
  onConfirm = () => {},
  okText = "Yes",
  cancelText = "No",
}) => {
  return (
    <Popconfirm
      title={title}
      onConfirm={onConfirm}
      okText={okText}
      cancelText={cancelText}
      icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
    >
      <a href="#" >Delete</a>
    </Popconfirm>
  );
};

export default DeleteButton;
