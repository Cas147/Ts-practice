type Props = {
  image: string;
};

export const RandomImage = ({ image }: Props): JSX.Element => {
  return (
    <img
      src={image}
      alt="Fox image"
      width={320}
      height="auto"
      className="rounded"
    />
  );
};
