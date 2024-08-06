import React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

// Define the styles
const styles = createStyles({
  svgIcon: {
    width: '100px', // Adjust the size as needed
    height: '100px', // Adjust the size as needed
    filter: (props: SvgImageProps) => `url(#${props.color})`,
  },
});

interface SvgImageProps {
  src: string;
  color: string;
}

const SvgImage: React.FC<SvgImageProps & WithStyles<typeof styles>> = ({ src, color, classes }) => {
  return (
    <div>
      <img src={src} className={classes.svgIcon} alt="SVG Icon" />
      <svg width="0" height="0">
        <filter id={color}>
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${parseInt(color.slice(1, 3), 16) / 255}
                    0 0 0 0 ${parseInt(color.slice(3, 5), 16) / 255}
                    0 0 0 0 ${parseInt(color.slice(5, 7), 16) / 255}
                    0 0 0 1 0`}
          />
        </filter>
      </svg>
    </div>
  );
};

export default withStyles(styles)(SvgImage);
