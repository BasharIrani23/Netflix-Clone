import { Stack } from "react-bootstrap";

const Comment = ({ comment }) => {
  return (
    <Stack>
      <small>{comment}</small>
      <hr />
    </Stack>
  );
};

export default Comment;
