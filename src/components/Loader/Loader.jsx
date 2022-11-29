import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './LoaderStyles';

export default function Loader() {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgba(60, 80, 180, 0.4)"
        ariaLabel="three-dots-loading"
      />
    </StyledLoader>
  );
}