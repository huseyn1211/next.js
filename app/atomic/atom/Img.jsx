

const Img = ({
  src,
  alt = '',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  loading = 'lazy',
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={loading}
      {...rest}
    />
  );
};

export default Img;
